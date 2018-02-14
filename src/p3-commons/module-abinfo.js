
  import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'



  import {render} from '../../node_modules/lit-html/lib/lit-extended.js';

  export class ModuleABinfo extends LitElement {
       
        static get properties() {
            return {
                model: {
                    type: Object,
                    reflectToAttribute: true,
                    notify: true,
                    value: function() {
                        return {
                            ainfovalues: {
                                ainfo1_value: "",
                                ainfo2_value: "",
                                ainfo3_value: "",
                                ainfo4_value: "",
                                ainfo5_value: "",
                                ainfo6_value: "",
                                ainfo7_value: "",
                            },

                            binfovalues: {
                                binfo1_value: '',
                                binfo2_value: "",
                                binfo3_value: "",
                                binfo4_value: "",
                                binfo5_value: "",
                                binfo6_value: "",
                                binfo7_value: "",
                            }
                        }
                    }
                },
                model1: {
                    type: Object,
                    reflectToAttribute: true,
                    notify: true,
                    value: function() {
                        return {
                            ainfovalues: {
                                ainfo1_value: "",
                                ainfo2_value: "",
                                ainfo3_value: "",
                                ainfo4_value: "",
                                ainfo5_value: "",
                                ainfo6_value: "",
                                ainfo7_value: "",
                            },

                            binfovalues: {
                                binfo1_value: '',
                                binfo2_value: "",
                                binfo3_value: "",
                                binfo4_value: "",
                                binfo5_value: "",
                                binfo6_value: "",
                                binfo7_value: "",
                            }
                        }
                    }
                },
                showainfo: {
                    type: Boolean,
                    notify: true,
                    value: true,
                    isToggle: true
                },
                showbinfo: {
                    type: Boolean,
                    notify: true,
                    value: true,
                    isToggle: true
                },
            }
        }

        constructor() {
            super();
            // Utils.apply(this);
        }

       
        open(modulebillshipto, disabledinput, displaysearch, searchid, ainfo, binfo){

         this.model = modulebillshipto
         this.disabledinput = disabledinput
         this.displaysearch = displaysearch
         this.searchid = searchid
         this.ainfo = ainfo
         this.binfo = binfo

           const page = () => { return html` <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <section class="nomargin nopadding margin-right">
                    <div class="my-content">
                        <div class="title title-margin">
                            <span on-tap="showDropdown" data-id="showainfo">${this.ainfo.title}<paper-icon-button class="my-iron-icon hidden-md hidden-lg bottom-left only-mobile" on-tap="showDropdown" icon="expand-more" data-id="showsoinfo"></paper-icon-button>
                            </span>
                        </div>
                    </div>
                        <div style="display: ${this.ainfo.info1_display}" class="my-content">
                            <div class="col-xs-3">${this.ainfo.info1}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="ainfo1" value="${this.model.ainfovalues.ainfo1_value}" disabled="${this.disabledinput.ainfo1}">
                            </div>
                            <div id="${this.searchid.ainfo1}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.ainfo1}">
                                <iron-icon id="${this.searchid.ainfo1}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.ainfo.info2_display}" class="my-content">
                            <div class="col-xs-3">${this.ainfo.info2}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="ainfo2" value="${this.model.ainfovalues.ainfo2_value}" disabled="${this.disabledinput.ainfo2}">
                            </div>
                            <div id="${this.searchid.ainfo2}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.ainfo2}">
                                <iron-icon id="${this.searchid.ainfo2}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.ainfo.info3_display}" class="my-content">
                            <div class="col-xs-3">${this.ainfo.info3}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="ainfo3" value="${this.model.ainfovalues.ainfo3_value}" disabled="${this.disabledinput.ainfo3}">
                            </div>
                            <div id="${this.searchid.ainfo3}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.ainfo3}">
                                <iron-icon id="${this.searchid.ainfo3}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.ainfo.info4_display}" class="my-content">
                            <div class="col-xs-3">${this.ainfo.info4}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="ainfo4" value="${this.model.ainfovalues.ainfo4_value}" disabled="${this.disabledinput.ainfo4}">
                            </div>
                            <div id="${this.searchid.ainfo4}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.ainfo4}">
                                <iron-icon id="${this.searchid.ainfo4}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.ainfo.info5_display}" class="my-content">
                            <div class="col-xs-3">${this.ainfo.info5}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="ainfo5" value="${this.model.ainfovalues.ainfo5_value}" disabled="${this.disabledinput.ainfo5}">
                            </div>
                            <div id="${this.searchid.ainfo5}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.ainfo5}">
                                <iron-icon id="${this.searchid.ainfo5}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.ainfo.info6_display}" class="my-content">
                            <div class="col-xs-3">${this.ainfo.info6}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="ainfo6" value="${this.model.ainfovalues.ainfo6_value}" disabled="${this.disabledinput.ainfo6}">
                            </div>
                            <div id="${this.searchid.ainfo6}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.ainfo6}">
                                <iron-icon id="${this.searchid.ainfo6}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.ainfo.info7_display}" class="my-content">
                            <div class="col-xs-3">${this.ainfo.info7}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="ainfo7" value="${this.model.ainfovalues.ainfo7_value}" disabled="${this.disabledinput.ainfo7}">
                            </div>
                            <div id="${this.searchid.ainfo7}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.ainfo7}">
                                <iron-icon id="${this.searchid.ainfo7}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                </section>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <section class="nopadding nomargin margin-left">
                    <div class="my-content">
                        <div class="title title-margin">
                            <span on-tap="showDropdown" data-id="showbinfo">${this.binfo.title}<paper-icon-button class="my-iron-icon hidden-md hidden-lg bottom-left  only-mobile" on-tap="showDropdown" icon="expand-more" data-id="showshippinginfo"></paper-icon-button>
                            </span>
                        </div>
                    </div>
                        <div style="display: ${this.binfo.info1_display}" class="my-content">
                            <div class="col-xs-3">${this.binfo.info1}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="binfo1" value="${this.model.binfovalues.binfo1_value}" disabled="${this.disabledinput.binfo1}">
                            </div>
                            <div id="${this.searchid.binfo1}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.binfo1}">
                                <iron-icon id="${this.searchid.binfo1}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.binfo.info1_display}" class="my-content" on-tap="openDatePicker">
                            <div class="col-xs-3">${this.binfo.info2}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="binfo2" value="${this.model.binfovalues.binfo2_value}" disabled="${this.disabledinput.binfo2}">
                            </div>
                            <div id="${this.searchid.binfo2}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.binfo2}">
                                <iron-icon id="${this.searchid.binfo2}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.binfo.info3_display}" class="my-content">
                            <div class="col-xs-3">${this.binfo.info3}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="binfo3" value="${this.model.binfovalues.binfo3_value}" disabled="${this.disabledinput.binfo3}">
                            </div>
                            <div id="${this.searchid.binfo3}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.binfo3}">
                                <iron-icon id="${this.searchid.binfo3}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.binfo.info4_display}" class="my-content">
                            <div class="col-xs-3">${this.binfo.info4}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="binfo4" value="${this.model.binfovalues.binfo4_value}" disabled="${this.disabledinput.binfo4}">
                            </div>
                            <div id="${this.searchid.binfo4}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.binfo4}">
                                <iron-icon id="${this.searchid.binfo4}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.binfo.info5_display}" class="my-content">
                            <div class="col-xs-3">${this.binfo.info5}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="binfo5" value="${this.model.binfovalues.binfo5_value}" disabled="${this.disabledinput.binfo5}">
                            </div>
                            <div id="${this.searchid.binfo5}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.binfo5}">
                                <iron-icon id="${this.searchid.binfo5}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.binfo.info6_display}" class="my-content">
                            <div class="col-xs-3">${this.binfo.info6}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="binfo6" value="${this.model.binfovalues.binfo6_value}" disabled="${this.disabledinput.binfo6}">
                            </div>
                            <div id="${this.searchid.binfo6}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.binfo6}">
                                <iron-icon id="${this.searchid.binfo6}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                        <div style="display: ${this.binfo.info7_display}" class="my-content">
                            <div class="col-xs-3">${this.binfo.info7}</div>
                            <div class="text-right">
                                    <input class="input col-xs-9" id="binfo7" value="${this.model.binfovalues.binfo7_value}" disabled="${this.disabledinput.binfo7}">
                            </div>
                            <div id="${this.searchid.binfo7}" class="right-icon1 iron-bottom-padding" style="display: ${this.displaysearch.binfo7}">
                                <iron-icon id="${this.searchid.binfo7}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                            </div>
                        </div>
                </section>
            </div>`}

            render(page(), this.shadowRoot.getElementById('page'))
        }
        resetAB() {


            this.set('model', JSON.parse(JSON.stringify(this.model1)))
        }

        returnModel(){

            this.model.ainfovalues.ainfo1_value = this.shadowRoot.getElementById('ainfo1').value
            this.model.ainfovalues.ainfo2_value = this.shadowRoot.getElementById('ainfo2').value
            this.model.ainfovalues.ainfo3_value = this.shadowRoot.getElementById('ainfo3').value
            this.model.ainfovalues.ainfo4_value = this.shadowRoot.getElementById('ainfo4').value
            this.model.ainfovalues.ainfo5_value = this.shadowRoot.getElementById('ainfo5').value
            this.model.ainfovalues.ainfo6_value = this.shadowRoot.getElementById('ainfo6').value
            this.model.ainfovalues.ainfo7_value = this.shadowRoot.getElementById('ainfo7').value


            this.model.binfovalues.binfo1_value  = this.shadowRoot.getElementById('binfo1').value
            this.model.binfovalues.binfo2_value = this.shadowRoot.getElementById('binfo2').value
            this.model.binfovalues.binfo3_value = this.shadowRoot.getElementById('binfo3').value
            this.model.binfovalues.binfo4_value = this.shadowRoot.getElementById('binfo4').value
            this.model.binfovalues.binfo5_value = this.shadowRoot.getElementById('binfo5').value
            this.model.binfovalues.binfo6_value = this.shadowRoot.getElementById('binfo6').value
            this.model.binfovalues.binfo7_value = this.shadowRoot.getElementById('binfo7').value

            return this.model
        }

        changepanel(e) {
            var from = e.path[0].id;
            switch (from) {
                case "addbill":
                    this.dispatchEvent(new CustomEvent('sendaddbill', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "billlist":
                    this.dispatchEvent(new CustomEvent('sendbilllist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "addship":
                    this.dispatchEvent(new CustomEvent('sendaddship', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "shiplist":
                    this.dispatchEvent(new CustomEvent('sendshiplist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "vendorlist":
                    this.dispatchEvent(new CustomEvent('sendvendorlist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "customerlist":
                    this.dispatchEvent(new CustomEvent('sendcustomerlist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "shippinginfo":
                    this.dispatchEvent(new CustomEvent('sendshippinginfo', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "statuslist":
                    this.dispatchEvent(new CustomEvent('sendstatuslist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "termlist":
                    this.dispatchEvent(new CustomEvent('sendtermlist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "requestlist":
                    this.dispatchEvent(new CustomEvent('sendrequestlist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "categorylist":
                    this.dispatchEvent(new CustomEvent('sendcategorylist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "issueslist":
                    this.dispatchEvent(new CustomEvent('sendissueslist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "serviceslist":
                    this.dispatchEvent(new CustomEvent('sendserviceslist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "prioritylist":
                    this.dispatchEvent(new CustomEvent('sendprioritylist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "showParts":
                    this.dispatchEvent(new CustomEvent('sendpartlist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "showqachecklist":
                    this.dispatchEvent(new CustomEvent('showqachecklist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                 case "showprocedurelist":
                    this.dispatchEvent(new CustomEvent('showprocedurelist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                 case "showbarcodelist":
                    this.dispatchEvent(new CustomEvent('showbarcodelist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                 case "showshippinglabellist":
                    this.dispatchEvent(new CustomEvent('showshippinglabellist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;



                case "ainfo1":
                    this.dispatchEvent(new CustomEvent('ainfo1', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "ainfo2":
                    this.dispatchEvent(new CustomEvent('ainfo2', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "ainfo3":
                    this.dispatchEvent(new CustomEvent('ainfo3', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "ainfo4":
                    this.dispatchEvent(new CustomEvent('ainfo4', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "ainfo5":
                    this.dispatchEvent(new CustomEvent('ainfo5', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "ainfo6":
                    this.dispatchEvent(new CustomEvent('ainfo6', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "ainfo7":
                    this.dispatchEvent(new CustomEvent('ainfo7', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;

                    case "binfo1":
                    this.dispatchEvent(new CustomEvent('binfo1', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "binfo2":
                    this.dispatchEvent(new CustomEvent('binfo2', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "binfo3":
                    this.dispatchEvent(new CustomEvent('binfo3', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "binfo4":
                    this.dispatchEvent(new CustomEvent('binfo4', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "binfo5":
                    this.dispatchEvent(new CustomEvent('binfo5', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "binfo6":
                    this.dispatchEvent(new CustomEvent('binfo6', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                    case "binfo7":
                    this.dispatchEvent(new CustomEvent('binfo7', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                  
            }
        }
        
        

        ready() {
            super.ready()
        }

        render() {
        return html`<style include="shared-styles iron-flex iron-flex-alignment">

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

        paper-drawer-panel {
            --paper-drawer-panel-right-drawer-container: {
                position: fixed;
            }
            ;
            --paper-drawer-panel-scrim: {
                position: fixed;
            }
            ;
        }
        
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
            --title-background-normal: black;
            --title-normal: white;
        }
        
        app-header {
            top: 0;
            left: 0;
            width: 100%;
            height: 73px;
            color: var(--title-normal);
            --app-header-background-front-layer: {
                background-color: var(--title-background-normal);
            }
            ;
            --app-header-background-rear-layer: {
                background-color: white;
            }
            ;
        }
        
        paper-drawer-panel {
            --paper-drawer-panel-left-drawer-container: {
                z-index: 3;
            }
            ;
        }
        
        section {
            display: block;
        }
        
        .only-mobile {
            display: none;
        }
        
        .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }
        
        .input-textarea-edit {
            text-align: left!important;
            width: 100%;
            border: hidden;
            border-color: white;
            background-color: white;
            border-bottom: 1px dotted #000;
        }
        
        .input-textarea-list {
            text-align: left;
            border: none;
            border-color: white;
            background-color: white;
        }
        
        .text-right {
            text-align: right;
        }
        
        .col-xs-12 {
            position: relative;
            min-height: 1px;
            float: left;
            width: 100%;
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
            width: 80%;
        }
        
        .col-md-6 {
            position: relative;
            min-height: 1px;
            float: left;
            width: 50%;
        }
        
        .col-xs-6 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 50%;
        }
        
        .col-xs-12a {
            position: relative;
            min-height: 1px;
            float: left;
            width: 100%;
        }
        
        iron-collapse.expanded {
            max-height: 100%;
        }
        
        .line-under {
            border-bottom: 1px dotted black;
            position: absolute;
        }
        
        .text-right {
            text-align: right;
        }
        
                .lightgrey-padding {
            padding-top: 0;
/*            padding-left: 48px;
            padding-right: 48px;*/
            background-color: white;
        }
        
        .lightgrey-padding-inner {
            padding-top: 15px;
            background-color: #fff;
            min-height: 1700px;
        }
        
        .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
        }
        
        .title {
            color: black;
            font-size: 21px;
            font-weight: 400;
            border-bottom: 1px solid #f50057;
        }
        
        .subtitle {
            font-size: 15px;
            font-weight: 400;
            color: #000;
            margin-left: 36px;
        }
        
        .title-margin {
            margin: 17px 0;
        }
        
        .section {
            margin-bottom: 24px;
        }
        
        .bottom {
            min-height: 48px;
            position: relative;
            bottom: 0px;
        }
        
        .nopadding {
            padding: 0px;
        }
        
        .no-bottom-padding {
            bottom: 0;
        }
        
        .nomargin {
            margin-bottom: 0px;
        }
        
        .div {
            bottom: -5px;
        }
        
        .my-iron-icon {
            margin-left: 0px;
        }
        
        .title-row {
            line-height: normal;
        }
        
        .right-subicon {
            position: absolute;
            right: 0px;
            bottom: 0px;
            z-index: 0;
        }
        
        .right-icon {
            position: absolute;
            right: 0;
            bottom: 4px;
            z-index: 0;
        }
        
        .right-icon1 {
            position: absolute;
            right: 0;
            bottom: 0px;
            z-index: 0;
        }
        
        .iron-bottom-positon {}
        
        .bankiron-bottom-positon {
            bottom: 4px;
        }
        
        .iron-bottom-padding {}
        
        .days {
            display: inline-block;
            width: 35px;
        }
        
        .button-row {
            padding-top: 15px;
        }
        
        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }
        
        .paper-button {
            margin-right: 8px;
            margin-top: 20px;
        }
        
        .lightgrey-padding-inner1 {
            background-color: #fff;
        }
        
        .email {
            height: 24px;
            text-align: right;
            padding-right: 16px;
        }
        
        .table-row {
            line-height: 15px;
            border-bottom: 1px solid #dbdbdb;
            background-color: white;
            width: 100%;
            font-size: 13px;
            font-weight: 500;
        }
        
        .last-column {}
        
        .fourfontsize {
            font-size: 21px;
        }
        
        .button-row {
            margin-right: 8px;
            margin-bottom: 32px;
        }
        
        .bottom {
            min-height: 48px;
            position: relative;
            bottom: 0px;
        }
        
        .listfont {
            font-size: 13px;
        }
        
        .listfontdesc {
            font-size: 13px;
            height: 18px;
            overflow: hidden;
        }
        
        .table-right-padding {}
        
        .table-width {
            min-width: 205px;
        }
        
        .withinboundary {
            width: 100%;
        }
        
        #Handling {
            --paper-input-container-label: {
                font-size: 13px!important;
            }
            ;
        }
        
        :host {
            --paper-input-container-label: 13px;
        }
        
        .specialpadding {
            padding-right: 9px;
        }
        
        .partlist {
            padding-top: 16px;
            padding-left: 0%;
            font-size: 16px;
            font-weight: 500;
        }
        
        .logout {
            float: right;
            font-size: 14px;
            line-height: 2;
        }
        
        .removeborder {
            border: none;
            background-color: white;
        }
        
        #list {
            width: 100%;
            flex: 1 1 auto;
        }
        
        .ilholder {
            display: flex;
            flex-direction: column;
        }
        
        .bod {
            height: 100%;
            background-color: white;
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
        
        .mobile-opts {
            display: none;
        }
        
        .show {
            display: block!important;
            visibility: visible!important;
        }
        
        .appendages {
            background-color: #eee;
            width: 100%;
        }
        
        .container {
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            width: 100%;
        }
        
        .data {
            background-color: #eee;
            overflow: hidden;
            height: 33px;
            width: 100%;
        }
        
        .input1 {
            text-align: right;
            border: none;
            background-color: #eee;
            width: 100%;
            color: black;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 14px;
        }
        
        .serialtitle {
            height: 24px;
            line-height: 2.0;
            padding-left: 10px;
            width: 133px;
            box-sizing: border-box;
        }
        
        .desktop-only {
            display: block;
        }
        
        .mobile-only {
            display: none;
        }
        
        @media(max-width: 1854px) {
            .desktop-only {
                display: none!important;
            }
            .mobile-only {
                display: block!important;
            }
            .input1 {
                text-align: left
            }
        }
        
        @media (min-width: 1680px) {
            .margin-right {
                margin-right: 52px;
            }
            .margin-left {
                margin-left: 52px;
            }
        }
        
        @media (min-width: 768px) and (max-width: 1679px) {
            .margin-right {
                margin-right: 15px;
            }
            .margin-left {
                margin-left: 15px;
            }
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 24px;
                padding-right: 24px;
                background-color: white;
            }
            .col-xs-3 {
                position: relative;
                text-align: right;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 0px;
                width: 25%;
                min-width: 84px;
                float: left;
            }
            .col-xs-9 {
                position: relative;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 0px;
                width: 70%;
            }
            #grid1 {
                overflow: auto
            }
        }
        
        @media (max-width: 767px) {
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 16px;
                padding-right: 16px;
                background-color: rgba(238, 238, 238, 1.0);
            }
            .only-mobile {
                display: inline-block;
            }
            .only-desktop {
                display: none;
            }
            .lightgrey-padding-inner {
                background-color: #fff;
                min-height: 1300px;
            }
            .col-xs-12 {
                position: relative;
                min-height: 1px;
                float: left;
                padding: 0;
                width: 100%;
            }
            .col-md-6 {
                position: relative;
                min-height: 1px;
                float: left;
                width: 100%;
                padding: 0;
            }
            .col-xs-3 {
                position: relative;
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
                width: 65%;
            }
            .button-row {
                padding-right: 8px;
            }
            .right-icon {
                position: absolute;
                right: 0;
                bottom: 8px;
                z-index: 0;
            }
            .logout {
                float: right;
                font-size: 14px;
                line-height: 2;
                margin-top: 15%;
            }
            #grid1 {
                overflow: auto
            }
        }
        
        @media (max-width: 479px) {
            .options {
                display: none!important;
            }
            .desk-title,
            .desk-title2 {
                display: none!important;
            }
            .mobile-title {
                display: block!important;
            }
            .data {
                width: 100%;
            }
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
            .only-mobile {
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
                background-color: #fff;
                min-height: 2700px;
            }
        }
        
        @media (min-width: 415px) {
            .mobile-only {
                display: none;
            }
            .desktop-only {
                display: inline-block;
            }
        }
        </style>
        <div id="page" class="row">
            
        </div>`
       }
    }

   customElements.define('module-abinfo', ModuleABinfo);

