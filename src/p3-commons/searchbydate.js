import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'

import { render } from '../../node_modules/lit-html/lib/lit-extended.js'

export class SearchByDate extends LitElement {
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
            so: {
                type: String,
                value: ""
            }
        }
    }

      constructor() {
        super();
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
        
        this.dispatchEvent(new CustomEvent("moreSearchVertCalled", {
            bubbles: true,
            composed: true,
            detail: {
                inputValue: this.shadowRoot.querySelector("#searchQuery").value.trim(),
            }
        }))
    }

    open(searchoptionlist) {
        this.searchoptionlist = searchoptionlist
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
                    <div class="layout horizontal">
                        <div class="datecontainer layout horizontal">
                            <div class="titles layout vertical">
                                <div class="datetitle"> Start date </div>
                                <div class="datetitle"> End date </div>
                            </div>
                            <div clas="layout vertical">
                                <input id="startdate" placeholder="MM/DD/YEAR"  class="input1">
                                <input id="enddate"  placeholder="MM/DD/YEAR" class="input1">
                            </div>
                        </div>
                        <div class="searchoptions layout horizontal wrap">
                            <div  class="singleoption" style="visibility: ${ data[0][0] }">
                                <input checked="checked" on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[0][1] }" name="searchoptions" class="searchfield" type="radio"><span class="field"> ${ data[0][0] } </span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[1][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[1][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[1][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[2][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[2][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[2][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[3][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[3][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[3][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[4][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[4][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[4][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[5][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[5][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"><span class="field">  ${ data[5][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[6][0] }">
                                <input on-tap="selectsdSO" id="${ data[6][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[6][0] }</span>
                            </div>
                            <div class="singleoption" style="visibility: ${ data[7][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[7][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[7][0] }</span>
                            </div>
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
                                <input checked="checked" on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[0][1] }" value="Active" name="searchoptions"  type="radio""> <span class="field"> ${ data[0][1] }</span>
                            </div>
                            <div class="singleoption" style="visibility: ${ data[0][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[1][1] }" value="Void" name="searchoptions"  type="radio">  <span class="field">${ data[0][0] }</span>
                            </div>
                            <div class="singleoption" style="visibility: ${ data[2][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[2][1] }" value="Void" name="searchoptions"  type="radio">  <span class="field">${ data[2][0] }</span>
                            </div>
                            <div class="singleoption" style="visibility: ${ data[3][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[3][1] }" value="Void" name="searchoptions"  type="radio"> <span class="field"> ${ data[3][0] }</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="mobileoptions">
                    <form>
                        <div class="layout horizontal wrap">
                            <div class="firstoption">
                                <input checked="checked" on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[0][1] }" value="Active" name="searchoptions" type="radio"> <span class="field">${ data[0][0] }</span>
                            </div>
                            <div class="singleoption">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[1][1] }" value="Void" name="searchoptions" type="radio"> <span class="field">${ data[1][0] }</span>
                            </div>
                            <div>
                                <paper-icon-button class="searchfilterbutton icon" icon="more-vert" on-click="${(e)=>{this.moreVertFunc(e)}}">
                                </paper-icon-button>
                            </div>
                        </div>
                   </form>
                </div>
      `
          ;
        }

        render(searchtypes(this.sol), this.shadowRoot.querySelector('#table'))

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

            .datecontainer {
                width: 258px;
            }

            .titles {
                width: 115px;
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

        .input1 {
            width: 75%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            margin-left: 11px;
            /* margin-right: 8px; */
            box-sizing: border-box;
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
customElements.define('search-bydate', SearchByDate)