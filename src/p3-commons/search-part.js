import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'

import { render } from '../../node_modules/lit-html/lib/lit-extended.js'

import '../../node_modules/@polymer/polymer/lib/elements/dom-bind.js'

export class SearchPart extends LitElement {
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
            // sol: {
            //     type: Array,
            //     reflectToAttribute: true,
            //     notify: true,
            //     value: [],
            // },
            so: {
                type: String,
                value: ""
            }
        }
    }

    selectedSO(e) {
        this.dispatchEvent(new CustomEvent("selectedSearchOption", {
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

    setGS(e) {
        console.log(e)
        console.log(e.keyCode)
        console.log(this.shadowRoot.querySelector('input[name="searchoptions"]:checked').id)
        this.dispatchEvent(new CustomEvent("generateSearch", {
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

    moreVertFunc(e) {
        this.dispatchEvent(new CustomEvent("moreVertCalled", {
            bubbles: true,
            composed: true,
            detail: {
                e: e,
                inputValue: this.shadowRoot.querySelector("#searchQuery").value.trim(),
                outerWidth: window.outerWidth
            }
        }))
    }

    constructor() {
        super();
    }

    response(request) {
        var result = request.detail.response;
        var dqs = document.querySrelector('#toast');
        result.error ? (dqs.text = result.error && dqs.show()) : this.model = result.results
    }

    initialresponse() {
        this.sol = this.searchoptionlist

        const searchtypes = data => {

            return html`
                    <form>
                        <div class="searchoptions layout horizontal wrap">
                            <div  class="singleoption" style="visibility: ${ data[0][0] }">
                                <input checked="checked" on-tap="selectedSO" id="${ data[0][1] }" name="searchoptions" class="searchfield" type="radio"><span class="field"> ${ data[0][0] } </span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[1][0] }">
                                <input on-tap="selectedSO" id="${ data[1][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[1][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[2][0] }">
                                <input on-tap="selectedSO" id="${ data[2][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[2][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[3][0] }">
                                <input on-tap="selectedSO" id="${ data[3][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[3][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[4][0] }">
                                <input on-tap="selectedSO" id="${ data[4][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[4][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[5][0] }">
                                <input on-tap="selectedSO" id="${ data[5][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"><span class="field">  ${ data[5][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[6][0] }">
                                <input on-tap="selectsdSO" id="${ data[6][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[6][0] }</span>
                            </div>
                            <div class="singleoption" style="visibility: ${ data[7][0] }">
                                <input on-tap="selectedSO" id="${ data[7][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[7][0] }</span>
                            </div>
                        </div>
                    </form>
                    <div class="searchoptions layout horizontal">
                        <div class="searchcontainer layout vertical wrap">
                        </div>
                    </div>
                </div>
                <div class="tabletoptions">
                    <form>
                        <div class="layout horizontal wrap">
                            <div class="firstoption" style="visibility: ${ data[0][1] }">
                                <input checked on-tap="selectedSO" id="${ data[0][1] }" value="Active" name="searchoptions"  type="radio""> <span class="field"> ${ data[0][1] }</span>
                            </div>
                            <div class="singleoption" style="visibility: ${ data[0][0] }">
                                <input on-tap="selectedSO" id="${ data[1][1] }" value="Void" name="searchoptions"  type="radio">  <span class="field">${ data[0][0] }</span>
                            </div>
                            <div class="singleoption" style="visibility: ${ data[2][0] }">
                                <input on-tap="selectedSO" id="${ data[2][1] }" value="Void" name="searchoptions"  type="radio">  <span class="field">${ data[2][0] }</span>
                            </div>
                            <div class="singleoption" style="visibility: ${ data[3][0] }">
                                <input on-tap="selectedSO" id="${ data[3][1] }" value="Void" name="searchoptions"  type="radio"> <span class="field"> ${ data[3][0] }</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="mobileoptions">
                    <form>
                        <div class="layout horizontal wrap">
                            <div class="firstoption">
                                <input checked on-tap="selectedSO" id="${ data[0][1] }" value="Active" name="searchoptions" type="radio"> <span class="field">${ data[0][1] }</span>
                            </div>
                            <div class="singleoption">
                                <input on-tap="selectedSO" id="${ data[1][1] }" value="Void" name="searchoptions" type="radio"> <span class="field">${ data[0][0] }</span>
                            </div>
                            <div>
                                <paper-icon-button class="searchfilterbutton icon" icon="more-vert" on-click="moreVertFunc">
                                </paper-icon-button>
                            </div>
                        </div>
                   </form>
                </div>
      `
          ;
        }


        // console.log('the shadowRoot', this.shadowRoot, document.querySelector('#table'), this.shadowRoot)

        render(searchtypes(this.sol), this.shadowRoot.querySelector('#table'))

        // console.log('hit reponseOption', this.data, this.shadowRoot.querySelector('#table') )

    }
    ready() {
        super.ready();
        this.initialresponse()
        this.checked = true
    }

    render({ checked, passThroughOptions, model, viewoutersearchrow, so }) {
        return html `

        <style include="shared-styles iron-flex iron-flex-alignment">


            .singleoption {
                padding-left: 12px;
                margin-top: 4px;
                margin-bottom: : 4px;
                font-size: 13.3px;
            }

            .my-content {
                display: block;
                min-height: 48px;
                position: relative;
                word-wrap: break-word;
            }
            
            .search-padding {
              /*  padding-left: 2.5vw;
                padding-right: 2.5vw;*/
            }
            
            .search-padding1 {
                padding-left: 48px;
                padding-right: 48px;
                padding-top: 25px;
                font-size: 21px;
            }
            
            .bottom {
                min-height: 21px;
                position: relative;
                margin-right: 40px;
                border-bottom: 1px solid black;
                width: 100%;
            }
            
            .search {
                position: absolute;
                bottom: 0;
                width: 100%
            }
            
            .paper-input-input:focus {
                outline: none!important;
            }

            .field {
                position: relative;
                top: -2px;
            }
            
            #searchQuery {
                width: 100%;
                border: none;
                outline: none;
                padding-left: 5px;
                font-size: 13.3px;
                box-sizing: border-box;
            }
            
            #searchQuery::placeholder {
                font-size: 17px;
            }
            
            #searchQuery::-webkit-input-placeholder {
                font-size: 17px;
            }
            
            #searchQuery::-moz-placeholder {
                font-size: 17px;
            }
            
            .right-icon {
                position: absolute;
                right: 0;
                bottom: 0;
                z-index: 0;
            }
            
            .searchoptions {
                position: relative;
            }
            
            
            div[class^="s-container"] div {
                /*width: 102px;*/
                width: 120px;
                /*width: 100%;*/
            }
            
            .option {
                /*min-width: 112px;*/
                width: 100%;
                margin-top: 4px;
                margin-bottom: 4px;
            }
            .listoptions {
                margin-left: 1%;
                width: auto;
                display: inline-block;
            }
            
            .tabletoptions {
                display: none;
                margin-top: 7px;
            }

            .mobileoptions {
                display: none;
                margin-top: 7px;
            }
            
            .searchfilterbutton {
                margin-top: -16px;
                position: absolute;
                right: 2px;
            }
            
            .icon {
                margin-left: 14px;
                margin-right: 14px;
                margin: auto;
                margin-top: -3px;
            }
            

            .firstoption {
                font-size: 13.3px;
                padding-left: 0px;
                margin-top: 4px;
                margin-bottom: : 4px;
            }

            .search-holder {
                    width:369px;
                    /*width: 99%;*/
                    /*width: 92vw;*/
                }

            @media(max-width: 1500px) {

                /*#searchQuery {
                    width: 100%;
                }*/
                .search-holder {
                    width:369px;
                    /*width: 99%;*/
                    /*width: 92vw;*/
                }
                .searchoptions {
                    display: none!important;
                }
                .tabletoptions {
                    display: block!important;
                }
                .mobileoptions {
                    display: none!important;
                }


                .search-padding {
                    padding-left: 9px;
                    padding-right: 0px;
                }
                .bottom {
                    margin-right: 0px;
                    width: 92vw;
                    /*width: 80vw;*/
                    /*width: 100%;*/
                }
                .right-icon {
                    max-width: 24px;
                    max-height: 24px;
                    width: 24px;
                    height: 24px;
                }
                .search-icon {
                    position: absolute;
                    right: 6px;
                }

                .searchfilterbutton {
                    margin-top: -16px;
                    position: absolute;
                    right: -6px;
                    bottom: -7.5px;
                }
                .search-padding1 {
                    padding-left: 48px;
                    padding-right: 6px;
                    padding-top: 36px;
                    font-size: 21px;
                }
                .mobileoptions {
                  display: none;
                  margin-bottom: 12px;
                  margin-top: 7px;
               }
            }


    /*        @media(max-width: 891px) {
                .searchoptions {
                    display: none!important;
                }
                .tabletoptions {
                    display: none!important;
                }
                .mobileoptions {
                    display: block!important;
                }

            }*/
            
            @media(max-width: 767px) {
                /*.right-icon {
                    bottom: 8px;
                }*/
                .searchoptions {
                    display: none!important;
                }
                .tabletoptions {
                    display: none!important;
                }
                .mobileoptions {
                    display: block!important;
                }
                .searchfilterbutton {
                    /*margin-top: -16px;*/
                    position: absolute;
                    right: -6px;
                    bottom: -7.5px;
                }
            }
            
            @media(max-width: 479px) {

                 .searchoptions {
                    display: none!important;
                }
                .tabletoptions {
                    display: none!important;
                }
                .mobileoptions {
                    display: block!important;
                }

                .search-padding {
                    padding-left: 0px;
                    padding-right: 0px;
                }

                 .search-holder {
                    width: 100%;
                    /*width: 99%;*/
                    /*width: 88vw;*/
                }
                .bottom {
                    margin-right: 0px;
                    width: 100%;
                }
                .right-icon {
                    max-width: 24px;
                    max-height: 24px;
                    width: 24px;
                    height: 24px;
                }
                .search-icon {
                    position: absolute;
                    right: 6px;
                }

                .searchfilterbutton {
                    margin-top: -16px;
                    position: absolute;
                    right: -6px;
                    bottom: -7.5px;
                }
                .search-padding1 {
                    padding-left: 48px;
                    padding-right: 6px;
                    padding-top: 36px;
                    font-size: 21px;
                }
                .mobileoptions {
                  display: none;
                  margin-bottom: 12px;
                  margin-top: 7px;
               }
            }
        </style>
        <div class="row">
            <div class="my-content search-padding">
                <div class="start layout horizontal wrap">
                    <div class="search-holder layout horizontal wrap">
                        <div class="bottom fullwidth">
                            <iron-input class="search" slot="input">
                                <input class="paper-input-input" placeholder="Search" id="searchQuery" >
                            </iron-input>
                            <div on-tap="${(e)=>this.setGS(e)}" class="right-icon iron-bottom-padding">
                                <paper-icon-button style="bottom: -7px" class="search-icon" icon="search"></paper-icon-button>
                            </div>
                        </div>
                    </div>
                   <div id="table">
                   </div>
            </div>
        </div>`
    }
}
customElements.define('search-part', SearchPart)