import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'

import { repeat } from '../../node_modules/lit-html/lib/repeat.js'

import { render } from '../../node_modules/lit-html/lib/lit-extended.js';

import '../../src/p3-commons/search-inner.js'


export class PartSidepanel extends LitElement {
    static get properties() {
        return {
            inventoryList: {
                type: Object,
                reflectToAttribute: true,
                notify: true,
                value: function() {
                    return {};
                }
            },
            inventory: {
                type: Array,
                value: function() {
                    return [];
                }
            },

            status: {
                type: Boolean,
                value: true
            },

            searchoption: {
                type: String,
                value: "idver"
            },

            filter: {
                type: String,
                reflectToAttribute: true
            },

            negfilter: {
                type: String,
                reflectToAttribute: true,
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

    open() {
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
        let query
        console.log(e)
        if (e.detail) {
            if (e.detail.inputValue === "") {
                retrieveAll = true;
            } else if (e.keyCode !== 13 && e.type == "keyup") {
                return
            } else {
                retrieveAll = false
            }
            query = e.detail.inputValue;
        }

        if (retrieveAll) {
            query = ""
            this.searchoption = 'idver'
        }

        let querypackage = {
            query: query.toString().toLowerCase(),
            option: this.searchoption
        }
        console.log("querypackage querypackage :  ", querypackage)

        this.shadowRoot.querySelector('#ajaxSearch').url = "/inventory/search/" + this.profileid
        this.shadowRoot.querySelector('#ajaxSearch').body = JSON.stringify(querypackage)
        this.shadowRoot.querySelector('#ajaxSearch').generateRequest()
    }

    receiveQueryResults(response) {
        this.dataarray = [];
        this.searched = response.detail.response.results
        this.responselist(response.detail.response.results, true)
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

    responselist(request, fromquery) {
        console.log(request)
        if (fromquery) {
            let tempArray = [];
            let tempArray2 = [];
            let tempArray3 = [];

            if (request != null) {

                if (request.detail) {
                    var result = request.detail.response.results;
                    this.model = result

                    tempArray = result;
                } else if (fromquery) {
                    tempArray = request
                } else {
                    tempArray = this.model;
                }



                if (this.filter) {

                    tempArray = tempArray.filter(function(item, ind) {
                        return item.type == this.filter
                    }.bind(this))
                }

                if (this.negfilter) {

                    tempArray = tempArray.filter(function(item, ind) {
                        return item.type != this.negfilter
                    }.bind(this))
                }

                this.showingModel = tempArray;


                for (var i = 0; i < tempArray.length; i++) {
                    var element = tempArray[i];

                    tempArray2.push(element.mfgname); //0
                    tempArray2.push(element.idver); //1
                    tempArray2.push(element.mfgpn); //2
                    tempArray2.push(element.description); //3
                    tempArray2.push(element.model) // 4
                    tempArray2.push(element.category); //5
                    tempArray2.push(element.type); //type 6
                    tempArray2.push(element.averagecost)
                    tempArray2.push(element.tableiid); //8
                    tempArray2.push(i); // index 9


                    tempArray3.push(tempArray2);
                    tempArray2 = [];
                }


                this.data = tempArray3;
            }

            if (request == null && !this.shadowRoot.getElementById('noMatchesError')) {
                var error = document.createElement("div")
                error.textContent = "No matching results"
                error.style = "Color: red";
                error.id = "noMatchesError"
                this.shadowRoot.querySelector('#container').insertBefore(error, this.shadowRoot.querySelector('#ilcontainer'))
                this.data = ""
            }

            if (this.data.length > 0 && this.shadowRoot.getElementById('noMatchesError')) {
                this.shadowRoot.getElementById('noMatchesError').remove()
            }


            const datatable = (items, searchdisplay, searchkeyindexes, searchfields) => {
                return html ` 
                <div class="title-rightpaneldraw">
                    Search Products
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
                     </div>
                     ${repeat (
                        items,
                        item => item.id,
                        item => html`
                        <div style="padding-bottom:24px">
                            <div class="row layout horizontal">
                                <div class="my-content"></div>
                                <div on-tap="${() => this.inventoryChoice(item)}" class="layout vertical" style="width: 100%;">
                                    <div class="my-content" >
                                        <div class="col-xs-3">Company:</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item[0] }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Company Id:</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item[1] }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Product No.:</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item[2] }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Description:</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item[3] }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Model:</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item[4] }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Category:</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item[5] }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Type:</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item[6] }">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Avg. Cost:</div>
                                        <div class="text-right col-xs-9" style="float:right">
                                            <div>
                                                <input disabled class="input" value="${ item[7] }">
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

            render(datatable(this.data, this.searchdisplay, this.searchkeyindexes, this.searchfields), this.shadowRoot.querySelector('#partpanel'))

        }

    }

    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    inventoryChoice(item) {
        console.log(item)
        let part = this.showingModel[item[9]]
        var mfgname = part.mfgname;
        var year = part.year;
        var mfgpn = part.mfgpn;
        var type = part.type;

        console.log('part before fire', part)

        this.dispatchEvent(new CustomEvent('InventoryPartEvent', {

            bubbles: true,
            composed: true,
            detail: {
                mfgname: mfgname,
                year: year,
                mfgpn: mfgpn,
                type: type,
                routeData: part,
            }
        }));

    }

    render() {
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
        <div id="partpanel"></div>
        <iron-ajax id="ajaxSearch" method="POST" handle-as="json"  on-response="${this.receiveQueryResults.bind(this)}" content-type="application/json"></iron-ajax>`;
    }

}


customElements.define('part-sidepanel', PartSidepanel);