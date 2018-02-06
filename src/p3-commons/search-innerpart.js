import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'

import { render } from '../../node_modules/lit-html/lib/lit-extended.js'

export class SearchInnerPart extends LitElement {
    static get properties() {
        return {
            checked: {
                type: Boolean,
                value: true,
            },
            passThroughOptions: {
                type: String,
                notify: true
            },
            model: {
                type: String,
                notify: true
            },
            viewoutersearchrow: {
                type: Boolean,
                value: false
            },
        }
    }

    generateSearch(e) {
        console.log(e)
        this.dispatchEvent(new CustomEvent("selectedInnerSearchOption", {
            bubbles: true,
            composed: true,
            detail: {
                id: e.path[0].id,
                keycode: e.keyCode,
                type: e.type,
                inputValue: this.shadowRoot.querySelector("#searchQuery").value.trim(),
            }
        }))
    }

    setSearchOption(e) {
        console.log(e)
        console.log(this.shadowRoot.querySelector('input[name="searchoptions"]:checked').id)
        this.dispatchEvent(new CustomEvent("setSearchOption", {
            bubbles: true,
            composed: true,
            detail: {
                id: this.shadowRoot.querySelector('input[name="searchoptions"]:checked').id,
                keyCode: e.keyCode,
                type: e.type,
                inputValue: this.shadowRoot.querySelector("#searchQuery").value.trim(),
            }
        }))
    }

    constructor() {
        super();
    }

    initialresponse() {
        const searchtypes = (searchdisplay, searchkeyindexes, searchfields)  => {

            return html`
                <div style="display: ${ searchdisplay.display }; padding-bottom:24px">
                    <div class="search-flex layout horizontal">
                        <div class="search-container">
                            <iron-input class="search" slot="input">
                                <input class="paper-input-input" placeholder="Show All" id="searchQuery" on-keypress="${(item) => this.generateSearch(item)}" on-focusout="${(item) => this.generateSearch(item)}">
                            </iron-input>
                            <div on-tap="${(item) => this.generateSearch(item)}" class="search-icon">
                                <paper-icon-button class="search-icon" icon="search"></paper-icon-button>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div class="options-container">
                            <div class="searchoptions layout horizontal">
                                <div class="searchcontainer layout vertical">
                                    <div class="s-container1 layout horizontal">
                                        <div>
                                            <input  checked="checked" on-change="${(item) => this.setSearchOption(item)}" on-keypress="${(item) => this.setSearchOption(item)}" id="${ searchkeyindexes.searchkeyindex1 }" name="searchoptions" class="listoptions" type="radio" checked>${ searchfields.searchfield1 }
                                        </div>
                                        <div>
                                            <input on-change="${(item) => this.setSearchOption(item)}" on-keypress="${(item) => this.setSearchOption(item)}" id="${ searchkeyindexes.searchkeyindex2 }" name="searchoptions" class="listoptions" type="radio">${ searchfields.searchfield2 }
                                        </div>
                                        <div>
                                            <input on-change="${(item) => this.setSearchOption(item)}" on-keypress="${(item) => this.setSearchOption(item)}" id="${ searchkeyindexes.searchkeyindex3 }" name="searchoptions" class="listoptions" type="radio">${ searchfields.searchfield3 }
                                        </div>
                                        <div>
                                            <input on-change="${(item) => this.setSearchOption(item)}" on-keypress="${(item) => this.setSearchOption(item)}" id="${ searchkeyindexes.searchkeyindex4 }" name="searchoptions" class="listoptions" type="radio">${ searchfields.searchfield4 }
                                        </div>
                                    </div>
                                    <div class="s-container2 layout horizontal">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="s-container2 layout horizontal">
                        <div>
                        </div>
                    </div>
                </div>
                <section id="options">
                    <div id="ilcontainer">
                    </div>
                </section>
      `
          ;
        }



        render(searchtypes(this.searchdisplay, this.searchkeyindexes, this.searchfields), this.shadowRoot.querySelector('#searchinnertable'))

    }
    ready() {
        super.ready();
        this.initialresponse()
    }

    render({ searchdisplay, searchkeyindexes, searchfields }) {
        return html `

        <style include="shared-styles iron-flex iron-flex-alignment">
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
            

        /*STANDARDIZED CSS*/
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
            width: 80%;
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
        }


    /*END STANDARDIZED CSS*/



        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }

         :host {
            display: block;
        }

        iron-icon {
            height: 20px;
            width: 20px;
        }

        .ilrow {
            margin-bottom: 7px;
            background-color: #eee;
            width: 100%;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }
        /*        .leftcontent {
                        background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }*/

        .iron-position {
            text-align: left;
            padding-left: 35px;
        }

        .table-padding {
            padding-left: 16px;
            padding-right: 16px;
            /*margin-top: 26px;*/
            margin-top: 4%;
            height: 100vh
        }

        .search-container {
            position: relative;
            width: 70%;
        }

        #listpage {
            overflow-y: auto;
            height: 100vh;
        }

        .results-container {
            margin-top: 12px;
            height: 76vh;
        }
        /*.results-container {
            background-color: #eee;
            width: 100%;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }*/

        iron-list {
            flex: 1 1 auto;
        }

        .status-container {
            width: 83px;
            margin-left: 5%;
        }

        .search-icon {
            position: absolute;
            /*top: -3px;*/
            top: -6px;
            right: 0;
        }

        .search {
            width: 100%;
        }

        .view {
            border: none;
            color: blue;
            background: #eee;
            font-size: 14px;
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
            margin-top: -15px;
            width: 100px;
        }

        paper-item.iron-selected {
            font-weight: bold;
            color: blue;
        }

        .layout-horizontal {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            background-color: #eee;
            margin-top: 9px;
        }

        div[class^="group"] {
            /*padding-left: 9px;*/
            margin-left: 9px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        div[class^="box"] {
            min-height: 29px;
            min-height: 20px;
            margin-top: auto;
            margin-bottom: auto;
            \ width: 100%;
        }

        div[class^="bd"] {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            height: 29px;


            font-size: 13px;
            /*vertical-align: center!important;*/
            line-height: 2.5;
        }

        div[class^="bd"]:first-child {
            width: 15%;
            /*vertical-align: center;*/
        }

        div[class^="bd"]:nth-child(3),
        div[class^="bd"]:nth-child(2) {
            /*width: 100%;*/
            width: 50%;
            /*vertical-align: center;*/
        }

        div[class^="group"],
        div[class^="box"] {
            width: 100%
        }
        /* div[class^="group7"],
        div[class^="box7"] {
            width: 98.5%!important
        }*/

        .searchcontainer {
            margin-top: 9px;
        }

        .s-container1 div,
        .s-container2 div {
            margin-top: 8px;
            /* margin-left: 20px; */
            width: 109px;
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
            visibility: collapse;
            width: 0px;
            height: 0px;
            min-width: 0px;
        }

        .mobi-icon {
            height: 0px;
            padding: 0;
            width: 0px;
        }

        #list {
            flex: 1 1 auto;
        }

       

        .iconinput {
            // padding-right: 122px;
            box-sizing: border-box;
        }

        .input-textarea-edit {
            min-height: 57px;
            padding: 6px 2px;
            text-align: left;
            border: hidden;
            border-color: white;
            background-color: white;
            border-bottom: 1px dotted #000;
        }

        .input-textarea-list {
            min-height: 24px;
            max-width: 350px;
            text-align: initial;
            border: none;
            border-color: white;
            background-color: white;
        }

     
        .col-xs-12 {
            position: relative;
            min-height: 1px;
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

        .cl-listborder {
            border: 1px solid lightgray;
            border-radius: 7px;
            background-color: #FFF;
        }

        .table-row {
            line-height: 48px;
            background-color: white;
            width: 100%;
            font-size: 13px;
            font-weight: 500;
        }

        .last-column {
            padding-right: 10px;
        }

      

        .right-icon {
            position: absolute;
            right: 27px;
            bottom: 21px;
            z-index: 0;
        }

        .right-text {
            text-align: right;
        }

        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }

        .uploadicon {
            margin-top: 24px;
            min-height: 24px;
        }

        .title-top {
            padding-top: 10px;
        }

        .bottom {
            position: relative;
            float: left;
        }

        .bottom-listicon {
            float: top;
        }

        .search-row {
            margin-left: 0;
            margin-top: 0px;
            margin-bottom: 8px;
            padding-left: 15px;
            padding-right: 15px;
            height: 48px;
            position: relative;
        }

        .card-padding {
            padding-left: 15px;
            padding-right: 15px;
        }

        .row-style {
            padding-left: 0px;
            padding-right: 0px;
        }

        .title-style1 {
            padding-bottom: 0px;
            background-color: white;
            margin-top: 0px;
            margin-left: 16px;
            font-size: 16px;
            margin-right: 16px;
            margin-bottom: 20px;
            padding-top: 24px;
        }

        .side-padding {
            padding-left: 16px;
            padding-right: 16px;
            margin-top: 4%;
        }

        .CL-popup {
            padding-right: 0px;
            padding-left: 0px;
        }

        .icon-style {
            color: gray;
            float: right;
            left: 34px;
            bottom: -4px;
            border: 1px solid gray;
            margin-right: 40px;
        }

        .float-right {
            justify-content: flex-end;
        }

        .move-left {
            margin-left: -3.4%;
        }

        .fitting-width {
            width: 98%;
        }

        .float-left {
            float: left;
        }

        .set-height {
            height: 24px;
        }

        .padding-bottom {
            padding-bottom: 7px;
        }

        .title-font {
            font-size: 17px;
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

        #title {
            --paper-input-container-label: {
                font-size: 13px!important;
            }
            ;
            --paper-input-container-input: {
                font-size: 13px!important;
            }
            ;
        }

        .right-icon1 {
            position: absolute;
            right: 0px;
            z-index: 0;
        }
        .right-icon2 {
            position: absolute;
            right: 36px;
            z-index: 0;
        }

        .right-icon3 {
            position: absolute;
            right: 72px;
            z-index: 0;
        }

        .right-icon4 {
            position: absolute;
            right: 79px;
            /*bottom: -7px;*/
            bottom: -9px;
            z-index: 0;
        }

        .smalleranimation, host {
          padding: 0px;
          height: 19px;
          width: 24px;
        }
        </style>
        <div id="searchinnertable"></div>
        `
    }
}
customElements.define('search-innerpart', SearchInnerPart)