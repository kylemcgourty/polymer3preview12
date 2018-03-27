import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'


import { repeat } from '../../node_modules/lit-html/lib/repeat.js'

import { render } from '../../node_modules/lit-html/lib/lit-extended.js';

import '../../src/p3-commons/search-inner.js'



export class BarcodeParts extends LitElement {

    static get properties() {
        return {
            statuslist: {
                type: Array,
                reflectToAttribute: true,
                notify: true
            },

        }
    }
    constructor() {
        super();

        this.searchfields = {}
        this.searchfields.searchfield1 = "Part id"
        this.searchfields.searchfield2 = "Product No."
        this.searchfields.searchfield3 = "Brand"
        this.searchfields.searchfield4 = "Description"

        this.searchkeyindexes = {}
        this.searchkeyindexes.searchkeyindex1 = "idver"
        this.searchkeyindexes.searchkeyindex2 = "mfgpn_l"
        this.searchkeyindexes.searchkeyindex3 = "mfgname_l"
        this.searchkeyindexes.searchkeyindex4 = "description_l"

        this.searchdisplay = {}
        this.searchdisplay.display = "block"
    }

    static get observers() {
        return []

    }

    open(profileid, rbomid, rbomidver) {



            let ct = sessionStorage.getItem("CUSTOMTOKEN")
            this.shadowRoot.getElementById('ajaxRBOM').headers['CustomToken'] = ct;
            this.shadowRoot.getElementById('ajaxRBOM').url = "/releasedbom/getSingle/" + profileid + "/" + rbomid + "/" + rbomidver
            this.shadowRoot.getElementById('ajaxRBOM').generateRequest();




    }

    receiveQueryResults(response) {
        this.data = response.detail.response.results.productgrouping[0].items

       

        this.data.forEach((item, i) => {
            item.id = i;
        })

        const datatable = (data) => {
            return html `<div>
                ${repeat (
                        data,
                        item => item.id,
                        item => html` 
                        <div style="padding-bottom:24px">
                            <div class="row layout horizontal">
                                <div class="my-content"></div>
                                <div on-tap="${()=>{this.add(item)}}" class="layout vertical" style="width: 100%;">
                                    <div class="my-content" >
                                        <div class="col-xs-3"> Product No. </div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item.mfgpn }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3"> Part id</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item.idver}">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3"> Qty</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" id="qty-${item.id}" value="${ item.qty }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3"> Description</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item.description}">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      `
                )}
                </div>
                <div style="clear: both"></div>
                `
        }

        render(datatable(this.data), this.shadowRoot.getElementById('table'))




        if (this.data.length > 0 && this.shadowRoot.getElementById('noMatchesError')) {
            this.shadowRoot.getElementById('noMatchesError').remove()
        }

    }

   
    remove(item) {
        this.data.splice(item.id, 1)
    }

    add(item) {

        item.qty = this.shadowRoot.getElementById('qty-' + item.id).value
        this.dispatchEvent(new CustomEvent('BarcodeParts', {
            composed: true,
            bubbles: true,
            detail: {
                data: item
            }
        }))
    }

    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            composed: true,
            bubbles: true
        }))
    }
    returnCheck(i) {
        if (i === 0) {
            return true;
        } else {
            return false
        }
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
        return html `<style include="shared-styles iron-flex iron-flex-alignment">
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

        .spacer {
            margin-top: 24px;
        }

          .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
        }

           .text-right {
            text-align: right;
        }


        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
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
            min-height: 2000px;
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
        
        .nooverflow {
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            height: 100%;
            line-height: 2.7;
        }
        
        .search {
            width: 100%;
        }
        
        .input1 {
            min-height: 24px;
            width: 100%;
            text-align: initial;
            border: none;
            background-color: white;
            border-bottom: 1px solid #000;
            font-size: 16px;
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
        
        .s-container1 div,
        .s-container2 div {
            margin-top: 8px;
            /* margin-left: 20px; */
            width: 109px;
        }
        
        .dropdown {
            margin-left: 26px;
        }
        
        .options-container {}
        
        .status-container {
            width: 83px;
            margin-left: 5%;
        }
        
        .results-container {
            margin-top: 24px;
            height: 70vh;
        }
        
        div[class^="bd"] {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 75%;
            padding-left: 3px;
            /*height: 35px;*/
            /*line-height: 2.9;*/
        }
        
        div[class^="bd"]:first-child {
            width: 25%;
        }
        
        .part-container {
            width: 100%;
            /*margin-top: 6px*/
            padding-bottom: 24px;
        }
        
        .bd4-1 {
            width: 100%!important;
        }
        
        #list {
            flex: 1 1 auto;
            height: 100%;
        }
        
        .searchcontainer {
            margin-top: 5px;
        }
        
        .page {
            overflow-y: auto;
            height: 100vh
        }
        </style>
        <div id="page">
            <div class="title-rightpaneldraw">Barcodes Parts</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="${()=>{this.close.bind(this)}}"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
                <div>
                </div>
               <div id="table">
               </div>
            </div>
            <div class="layout horizontal buttons">
                <!-- <paper-button class="button main-button" on-tap="add" raised>Add</paper-button> -->
                <paper-button class="button" on-tap="close" raised>Cancel</paper-button>
            </div>
        </div>
        <iron-ajax id="ajaxRBOM" method="GET" handle-as="json" url="/inventory/search" on-response="${this.receiveQueryResults.bind(this)}" content-type="application/json"></iron-ajax>`
    }

}
customElements.define("barcode-parts", BarcodeParts);