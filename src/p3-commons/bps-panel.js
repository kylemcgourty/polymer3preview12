import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'


import { repeat } from '../../node_modules/lit-html/lib/repeat.js'

import { render } from '../../node_modules/lit-html/lib/lit-extended.js';

import '../../src/p3-commons/search-inner.js'




class BPSPanel extends LitElement {



    static get properties() {

        return {
            typemodel: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "",
            },
            savemodel: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "",
            },
            admin: {
                type: String,
                reflectToAttribute: true,
                notify: true,
            }
        }
    }
    constructor() {
        super()
    }


    open(url, title) {

        this.searchkeyindexes={}
        this.searchfields={}
        if (title == "QA Check List"){
            this.eventSelector = "qa"
            this.searchRoute = "/qachecklist/qalist/search/"+ sessionStorage.getItem("PR")

            this.searchkeyindexes.searchkeyindex1 = "qalistidver"
            this.searchkeyindexes.searchkeyindex2 = "partidver_l"
            this.searchkeyindexes.searchkeyindex3 = "qaname_l"
            this.searchkeyindexes.searchkeyindex4 = "mfgpn_l"

            this.searchfields.searchfield1 = "QA CL id"
            this.searchfields.searchfield2 = "Part id"
            this.searchfields.searchfield3 = "Check List"
            this.searchfields.searchfield4 = "Product No."

            this.searchoption = "qalistidver"

        } else if (title == "Barcodes List"){
            this.eventSelector = "bc"
            this.searchRoute = "/barcode/barcodes/search/"+ sessionStorage.getItem("PR")

            this.searchkeyindexes.searchkeyindex1 = "barcodeidver"
            this.searchkeyindexes.searchkeyindex2 = "barcode_l"
            this.searchkeyindexes.searchkeyindex3 = "partidver_l"
            this.searchkeyindexes.searchkeyindex4 = "productno_l"

            this.searchfields.searchfield1 = "Barcode id"
            this.searchfields.searchfield2 = "Barcode"
            this.searchfields.searchfield3 = "Part id"
            this.searchfields.searchfield4 = "Product No."

            this.searchoption = "barcodeidver"
        } else if (title == "Procedures List"){
            this.searchfields.searchfield1 = "Procedure id"
            this.searchfields.searchfield2 = "Procedure"
            this.searchfields.searchfield3 = "Part id"
            this.searchfields.searchfield4 = "Product No."

            this.searchkeyindexes.searchkeyindex1 = "procedureidver"
            this.searchkeyindexes.searchkeyindex2 = "serialnumber"
            this.searchkeyindexes.searchkeyindex3 = "partid"
            this.searchkeyindexes.searchkeyindex4 = "productno"

        } else if (title == "Shipping Labels List"){

            this.eventSelector = "sl"
            this.searchRoute = "/shippinglabel/search"

            
            this.searchfields.searchfield1 = "Ship. label id"
            this.searchfields.searchfield2 = "Shipping label"
            // this.searchfields.searchfield3 = "Part id"
            // this.searchfields.searchfield4 = "Product No."

            this.searchkeyindexes.searchkeyindex1 = "idver"
            this.searchkeyindexes.searchkeyindex2 = "name_l"

            this.searchoption = "idver"
            // this.searchkeyindexes.searchkeyindex3 = "partid"
            // this.searchkeyindexes.searchkeyindex4 = "productno"


        }
        


        this.searchdisplay = {}
        this.searchdisplay.display = "block"

        this.title = title
        let ct = sessionStorage.getItem("CUSTOMTOKEN")

        this.shadowRoot.getElementById('ajaxQA').headers['CustomToken'] = ct;
        this.shadowRoot.getElementById('ajaxQA').url = url
        this.shadowRoot.getElementById('ajaxQA').generateRequest();

    }

    generateSearch(e, pass) {
        let query
        if (e.detail) {
            if (e.keyCode !== 13 && e.type == "keyup") {
                return
            } 
            query = e.detail.inputValue;
        }

       

        let querypackage = {
            query: query.toString().toLowerCase(),
            option: this.searchoption
        }
        let ct = sessionStorage.getItem("CUSTOMTOKEN")
        this.shadowRoot.getElementById('ajaxSearch').headers['CustomToken'] = ct;
        this.shadowRoot.getElementById('ajaxSearch').url = this.searchRoute
        this.shadowRoot.getElementById('ajaxSearch').body = JSON.stringify(querypackage)
        this.shadowRoot.getElementById('ajaxSearch').generateRequest()
    }

    receiveQueryResults(response) {
        this.dataarray = [];
        this.searched = response.detail.response.results
        this.responselist(response.detail.response.results, true)
    }


    setSearchOption(e) {
         this.searchoption = e.detail.id

        if (e.detail) {
            this.generateSearch(e)
        }
    }

    statusChange() {
        var data = this.searched || this.model
        this.responselist(data, true)
    }
    receiveData(response) {

        if (response.detail.response == null){
            this.data = []
        } else if (response.detail.response.results){
            this.data = response.detail.response.results
        } else {
            this.data = response.detail.response
        }


        this.data = this.data.map((item, i) => {
            
            if (item.qalistidver){
                item.procedureidver = item.qalistidver
            }
            if (item.barcodename || item.barcodename == ""){
                item.procedureidver = item.idver
                item.qaname = item.barcodename
                item.mfgpn = item.productno
            }
            if (item.labelname || item.labelname == ""){
                item.procedureidver = item.idver
                item.qaname = item.labelname
                item.model = ""
                item.mfgpn = ""
            }
            item.idno = i + 1
            return item
        })

        const datatable = (data, searchdisplay, searchkeyindexes, searchfields) => {
            return html `<div class="title-rightpaneldraw">${this.title} </div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div id="container" class="table-padding layout vertical">
                     <search-inner searchdisplay="${ searchdisplay }" searchkeyindexes="${ searchkeyindexes }" searchfields="${ searchfields }"></search-inner>
                
                <div class="results-container fit">
                ${repeat (
                        data,
                        item => item.idno,
                        item => html`
                    <div on-tap="${()=>{this.openChoice(item.idno)}}" id="qachecklist">
                        <div class="ilrow layout vertical">
                            <div class="my-content" >
                                <div class="col-xs-3">Id</div>
                                <div class="text-right">
                                    <div class="col-xs-9" >
                                        <input disabled class="input" value="${item.procedureidver}">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" >
                                <div class="col-xs-3">Name</div>
                                <div class="text-right">
                                    <div class="col-xs-9">
                                        <input disabled class="input" value="${item.qaname}">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" >
                                <div class="col-xs-3">Model</div>
                                <div class="text-right">
                                    <div class="col-xs-9" >
                                        <input disabled class="input" value="${item.model}">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" >
                                <div class="col-xs-3">Product No.</div>
                                <div class="text-right">
                                    <div class="col-xs-9"  >
                                        <input disabled class="input" value="${item.mfgpn}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `)}
                </div>
                `
        }
        render(datatable(this.data, this.searchdisplay, this.searchkeyindexes, this.searchfields), this.shadowRoot.getElementById('page'))
    }


    add() {
        this.push('data', {
            qachecklist: ""
        })
    }

    openChoice(idno) {



        if (this.eventSelector == "qa"){

        this.dispatchEvent(new CustomEvent('qachecklist', {
            bubbles: true,
            composed: true,
            detail: {
                item: this.data[idno-1],

            }

        }))

    } else if (this.eventSelector == "bc"){

         this.dispatchEvent(new CustomEvent('barcode', {
            bubbles: true,
            composed: true,
            detail: {
                item: this.data[idno-1],

            }

        }))

    } else if (this.eventSelector == "sl"){
         this.dispatchEvent(new CustomEvent('shippinglabel', {
            bubbles: true,
            composed: true,
            detail: {
                item: this.data[idno-1],

            }

        }))

    }
    }
    toSignIn() {

        this.dispatchEvent(new CustomEvent('toSignIn', {
            bubbles: true,
            composed: true
        }))
    }

    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    remove(e) {

        this.splice('data', e.model.index, 1)

    }

    ready() {
        super.ready()

        this.shadowRoot.addEventListener('selectedInnerSearchOption', e => {
            this.generateSearch(e);
        });
        this.shadowRoot.addEventListener('selectedSearchOption', e => {
            this.setSearchOption(e);
        });
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


        .col-xs-3 {
            position: relative;
            text-align: right;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 15%;
            float: left;
        }

          .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 92%;
        }

         .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);

            font-size: 13.3px;

            text-overflow: ellipsis;
            overflow: hidden;
        }

          .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
        }

           .text-right {
                text-align: right;
                float: right;
                width: 83%;
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
            margin-top: -15px;
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
        <div id="page">
            
        </div>
        <iron-ajax id="ajaxQA" method="GET" handle-as="json" on-response="${this.receiveData.bind(this)}" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxSearch" method="POST" handle-as="json" on-response="${this.receiveData.bind(this)}" content-type="application/json"></iron-ajax>

        </div>`
    }

}
customElements.define('bps-panel', BPSPanel);