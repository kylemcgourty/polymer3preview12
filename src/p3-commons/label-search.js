import { LitElement } from '../../node_modules/@polymer/lit-element/lit-element.js'

import { repeat } from '../../node_modules/lit-html/lib/repeat.js'

import { render, html } from '../../node_modules/lit-html/lib/lit-extended.js';

import '../../src/p3-commons/search-inner.js'

export class LabelSearch extends LitElement {
    static get properties() {
        return {
            status: {
                type: Boolean,
                value: true
            },
            searchoption: {
                type: String,
                value: "idver"
            },
            profileid: {
                type: String,
                reflectToAttribute: true,
            }
        }
    }

    constructor() {
        super()
    }

    selectCustomer(item) {
        
        this.dispatchEvent(new CustomEvent('LabelEvent', {
            composed: true,
            bubbles: true,
            detail: {
                
                routeData: item
            }
        }));
    }

    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    open(profileid) {
        this.searchfields = {}
        this.searchfields.searchfield1 = "Label id"
        this.searchfields.searchfield2 = "Label name"


        this.searchkeyindexes = {}
        this.searchkeyindexes.searchkeyindex1 = "idver"
        this.searchkeyindexes.searchkeyindex2 = "name"


        this.searchdisplay = {}
        this.searchdisplay.display = "block"

        this.profileid = profileid;

        this.generateSearch(false, false, true)


    }
    ready() {
        super.ready();
        this.shadowRoot.addEventListener('selectedInnerSearchOption', e => {
            this.generateSearch(e);
        });
        this.shadowRoot.addEventListener('selectedSearchOption', e => {
            this.setSearchOption(e);
        });
    }
    generateSearch(e, pass, retrieveAll) {
        // let query
        // if (e.detail) {
        //     if (e.detail.inputValue === "") {
        //         retrieveAll = true;
        //     } else if (e.keyCode !== 13 && e.type == "keyup") {
        //         return
        //     } else {
        //         retrieveAll = false
        //     }
        //     query = e.detail.inputValue;
        // }

        // if (retrieveAll) {
        //     query = ""
        //     this.searchoption = 'idver'
        // }

        // let querypackage = {
        //     query: query.toString().toLowerCase(),
        //     option: this.searchoption
        // }
        let ct = sessionStorage.getItem("CUSTOMTOKEN")
        this.shadowRoot.querySelector('#ajaxSearch').headers['CustomToken'] = ct;
        this.shadowRoot.querySelector('#ajaxSearch').url = "/shippinglabel"
        // this.shadowRoot.querySelector('#ajaxSearch').body = JSON.stringify(querypackage)
        this.shadowRoot.querySelector('#ajaxSearch').generateRequest()
    }

    receiveQueryResults(response) {
        this.dataarray = [];
        this.searched = response.detail.response
        this.responselist(response.detail.response, true)
    }


    setSearchOption(e) {
        e.detail.id === "all" ? this.generateSearch(e, undefined, 'idver') : this.searchoption = e.detail.id

        if (e.detail) {
            this.generateSearch(e)
        }
    }

    statusChange() {
        var data = this.searched || this.model
        this.responselist(data, true)
    }

    responselist(data, fromquery) {
        if (fromquery) {
            this.data = data

            if (this.data == null && !this.shadowRoot.getElementById('noMatchesError')) {
                var error = document.createElement("div")
                error.textContent = "No matching results"
                error.style = "Color: red";
                error.id = "noMatchesError"
                if (this.shadowRoot.querySelector('#container') != null) {
                    this.shadowRoot.querySelector('#container').insertBefore(error, this.shadowRoot.querySelector('#ilcontainer'))
                }
                this.data = ""
            }

            if (this.data.length > 0 && this.shadowRoot.getElementById('noMatchesError')) {
                this.shadowRoot.getElementById('noMatchesError').remove()
            }


            const datatable = (items, searchdisplay, searchkeyindexes, searchfields) => {
                return html ` 
                <div class="title-rightpaneldraw">
                    Search Shipping Labels
                </div>
                <div style="background-color: #e6e6e6;">
                    <div class="close-interface">
                        <span on-tap="${() => this.close()}">Close</span>
                        <iron-icon icon="close" on-tap="${() => this.close()}"></iron-icon>
                    </div>
                </div>
                <div id="container" class="table-padding">
                     <search-inner searchdisplay="${ searchdisplay }" searchkeyindexes="${ searchkeyindexes }" searchfields="${ searchfields }"></search-inner>
                     <div id="ilcontainer" class="row">
                     <div class="layout horizontal">
                     <div class="listtitle"> Label id </div>
                     <div class="listtitle"> Label name </div>
                     </div>
                     </div>
                     ${repeat (
                        items,
                        item => item.id,
                        item => html`
                        <div style="margin-bottom:10px">
                            <div class="row layout horizontal">
                                <div class="my-content"></div>
                                <div on-tap="${() => this.selectCustomer(item)}" class="layout horizontal" style="width: 100%;">
                                    <div class="my-content">
                                        <div class="text-right col-xs-9" >
                                            <div>
                                                <input disabled class="input" value="${ item.idver }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="text-right col-xs-9" >
                                            <div>
                                                <input disabled class="input" value="${ item.labelname }">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `)}
            </div>
                   `;
            }

            render(datatable(this.data, this.searchdisplay, this.searchkeyindexes, this.searchfields), this.shadowRoot.querySelector('#customerpanel'))

        }
    }


    render() {
        return html `
        <style include="iron-flex iron-flex-alignment">

      /*  //////////////FLEX BOX/////////  */
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }

      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

     
      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }

      /* ////////////////END FLEXBOX /////////////// */

        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
        }

        .listtitle {
            background-color: #406aad;
            height: 24px;
            width: 50%;
            text-align: center;
            color: white;
                line-height: 1.8;
            margin-bottom: 10px;
        }


        .col-xs-3 {
            position: relative;
            text-align: right;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 30%;
            float: left;
        }

          .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 100%;
            min-height: 27px;
        }

         .input {
            width: 100%;
            text-align: center;
            
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);

            font-size: 13.3px;

            text-overflow: ellipsis;
            overflow: hidden;
            height: 27px;
        }

          .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
        }

           .text-right {
            text-align: right;
        }



        
        .close-interface {
            position: relative;
            top: -27px;
            text-align: right;
            left: -14px;
        }
        
        .close-interface span {
            display: inline-block;
            height: 25px;
            width: 50px;
        }
        
        .table-padding {
            padding-left: 16px;
            padding-right: 16px;
            margin-top: 20px;
            height: 100vh
        }
 
        .inputA {
            /*min-height: 24px;*/
            text-align: initial;
            border: none;
            background-color: #eee;
            /*border-color: #eee;*/
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 100%;
        }
        
        .inputB {
            /*min-height: 24px;*/
            text-align: initial;
            border: none;
            background-color: #eee;
            /*border-color: #eee;*/
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 300%;
        }
        
     
        
        .title-rightpaneldraw {
            font-size: 16px;
            background-color: #e6e6e6;
            padding-left: 5%;
            padding-bottom: 0%;
            padding-top: 3%;
            text-align: left;
        }
        
        .title-rightpaneldraw-list {
            font-size: 16px;
            margin-top: 20px;
        }
        
        .icon {
            margin-left: 14px;
            margin-right: 14px;
            margin: auto;
        }
        
        .rm-icon-mid {
            padding-left: 14px;
            padding-right: 0px;
            margin: auto;
        }
        
        .input1 {
            min-height: 24px;
            width: 100%;
            text-align: initial;
            border: none;
            background-color: white;
            border-bottom: 1px dotted #000;
            font-size: 16px;
        }
        
        #page {
            /*overflow-y: auto;*/
            overflow-y: auto;
            height: 100vh;
        }
        
        .search-container {
            position: relative;
            width: 70%;
            margin-left: 6px;
        }
        
        .search-icon {
            position: absolute;
            top: -3px;
            right: 0;
        }
        
        .search {
            width: 100%;
        }
        
        .results-container {
            margin-top: 18px;
            height: 70vh;
            display: flex;
            flex-direction: column;
        }
        
        .status-container {
            width: 83px;
            margin-left: 5%;
        }
        
        .options {
            /*margin: auto;*/
            /*border-top: 1px solid black;*/
            /*border-left: 1px solid black;*/
            flex-shrink: none;
            /*width: 73px;*/
            /*  display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;*/
            background-color: #eee;
            margin-top: 6px;
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
        }
        
        .mobile-opts {
            display: none;
        }
        
        .layout-horizontal {
            /* display: -ms-flexbox;
            display: -webkit-flex;
            display: -webkit-flex;*/
            /*display: flex;*/
            /*border-top: 1px solid black;*/
            /*border-right: 1px solid black;*/
            /*justify-content: center;*/
            /*-webkit-flex-wrap: wrap;*/
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            background-color: #eee;
            margin-top: 4px;
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
        }
        
        div[class^="group"] {
            /* display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;*/
            padding-left: 9px;
            /*align-items: center;*/
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            /*margin: auto;*/
        }
        
        div[class^="box"] {
            /*display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;*/
            /*align-items: center;*/
            height: 29px;
            /*         align-items: flex-start;
            flex-direction: column;*/
        }
        
        div[class^="bd"] {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            height: 35px;
            line-height: 2.5;
            padding-left: 3px;
        }
        
        div[class^="bd"]:first-child {
            width: 25%;
        }
        
        div[class="bd2-1"]:first-child {
            width: 100%!important;
        }
        
        div[class^="bd"]:nth-child(3),
        div[class^="bd"]:nth-child(2) {
            width: 37%;
        }
        
        div[class^="group"],
        div[class^="box"] {
            width: 100%
        }
        
        .mobile-options {
            min-width: 73px;
            width: 5.1%;
        }
        
        .options {
            min-width: 73px;
            width: 5.1%;
        }
        
        .desk-opts {
            /*display: none;*/
            visibility: collapse;
            width: 0px;
            height: 0px;
            min-width: 0px;
        }
        /**/
        
        .mobi-icon {
            height: 0px;
            padding: 0;
            width: 0px;
        }
        
        #list {
            flex: 1 1 auto;
            width: 100%;
        }
        
        .view {
            border: none;
            color: blue;
            background: #eee;
            font-size: 14px;
            width: 90%;
        }
        
        .view:focus {
            outline: none!important;
        }
        
        #searchQuery {
            width: 100%;
            border: none;
            outline: none;
            border-bottom: 1px solid black;
        }
        
        #searchQuery::placeholder {
            font-size: 17px;
        }
        
        #searchQuery::-webkit-input-placeholder {
            font-size: 17px;
        }
        
        #searchQuery:-moz-placeholder {
            font-size: 17px;
        }
        
        #searchQuery::-moz-placeholder {
            font-size: 17px;
        }
        
        #searchQuery:-ms-input-placeholder {
            font-size: 17px;
        }
        
        .dropdown {
            margin-left: 26px;
        }
        
        paper-listbox {
            width: 100px;
            display: block;
            padding: 8px 0;
            color: #212121;
            overflow: hidden;
        }
        
        paper-dropdown-menu {
            display: block;
            margin-top: -8px;
            width: 100px;
        }
        
        paper-item.iron-selected {
            font-weight: bold;
            color: blue;
        }
        
        .searchcontainer {
            margin-top: 9px;
        }
        
        .s-container1 div,
        .s-container2 div {
            margin-top: 8px;
            /* margin-left: 20px; */
            width: 109px;
        }
        
        .ilrow {
            margin-top: 24px;
        }
        @media (max-width: 479px) {
            .search-row {
                margin-left: 0px;
                margin-top: 0px;
                margin-bottom: 0px;
                height: 48px;
                position: relative;
                width: 50%;
            }
            .options {
                height: 30px;
            }
            div[class^="box"] {
                height: 30px;
            }
            div[class^="bd"] {
                height: 30px;
                line-height: 2.5;
            }
            div[class^="group"] {
                height: 30px;
                padding-left: 0px;
                width: 100%;
            }
            .layout-horizontal {
                height: 30px;
            }
            .ilrow:nth-child(1) .layout-horizontal {
                margin-top: 0px;
            }
            #expanded {
                height: 206px;
            }
            div[class^="box2"] {
                height: 60px!important;
            }
            div[class^="bd2"] {
                height: 60px!important;
                line-height: 2.5;
            }
            div[class^="group2"] {
                height: 60px!important;
            }
            .ilrow {
                /*margin-top: 9px;*/
            }
            .group1 {
                width: 78vw!important;
                padding-left: 0px!important;
                min-width: 69vw;
            }
            .bd1-1 {
                width: 42vw;
                max-width: 42vw;
            }
            .bd1-2 {
                width: 34vw;
                max-width: 34vw;
            }
            .bd2-mob {
                width: 14vw;
                height: 60px;
            }
            .bd2-1 {
                width: 77vw;
                white-space: normal!important;
                overflow: visible!important;
                height: 60px;
                padding-left: 1vw;
            }
            .bd3-1,
            .bd4-1,
            .bd5-1 {
                width: 35vw;
                padding-left: 1vw;
            }
            .bd3-2,
            .bd4-2,
            .bd5-2 {
                width: 40vw;
            }
            /* .bd3-1 {
                width: 50%;
                max-width: 50%;
            }
            .bd4-1 {
                width: 50%;
                max-width: 50%;
            }
            .bd4-2 {
                width: 50%;
                max-width: 50%;
            }
            .bd5-1 {
                width: 50%;
                max-width: 50%;
            }
            .bd5-2 {
                width: 50%;
                max-width: 50%;
            }*/
            .big-frame {
                padding: 0px 0px;
                background: rgba(238, 238, 238, 0.5);
            }
            .search-padding {
                padding-left: 0px;
                padding-right: 0px;
            }
            .right-icon {
                max-width: 24px;
                max-height: 24px;
                width: 24px;
                height: 24px;
            }
            only-mobile {
                display: inline-block;
            }
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 4vw;
                padding-right: 4vw;
                padding-bottom: 4vw;
                background-color: rgba(238, 238, 238, 1.0);
            }
            .lightgrey-padding-inner {
                /*padding-top: 15px;*/
                background-color: #fff;
                min-height: 2700px;
            }
            .bottom {
                margin-right: 0px;
            }
            .search {
                width: 100%
            }
            .mobile-opts {
                display: block;
                /*        display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;*/
            }
            .desk-icon {
                height: 0px;
                padding: 0;
                width: 0px;
            }
            .mob-icon {
                height: 48px;
                width: 48px;
                margin-left: -6px;
                padding-top: 0px;
            }
            .rm-icon-mid {
                height: 40px;
                width: 40px;
                padding-left: 3px;
                padding-top: 2px;
                padding-bottom: 12px;
            }
            section {
                display: block;
                padding: 0;
            }
            .button-row {
                padding-right: 8px;
            }
            .visible-xs {
                display: inline-block !important;
            }
        }
        </style>
        <div id="customerpanel"></div>
        <iron-ajax id="ajaxSearch" method="GET" handle-as="json" on-response="${this.receiveQueryResults.bind(this)}" content-type="application/json"></iron-ajax>
            `
    }
}
customElements.define('label-search', LabelSearch);