  import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'
  import '../../node_modules/@polymer/polymer/lib/elements/dom-bind.js'

  import { render } from '../../node_modules/lit-html/lib/lit-extended.js';


  export class InventoryInfo extends LitElement {




      static get properties() {
          return {
              inventory: {
                  type: Object,
                  notify: true,
                  value: function() {
                      return {};
                  }
              },
              model: {
                  type: Object,
                  notify: true,
                  value: function() {
                      return {};
                  }
              },
              url: {
                  type: String,
                  notify: true
              }
          }
      }
      static get observers() {
          return ['k(model)']
      }
      k(m) {
          console.log('inventory XX inventory', m)
          this.model = m;
      }
      constructor() {
          super();
          this.model = {};
      }
      close() {
          this.dispatchEvent(new CustomEvent('closePanel', {
              bubbles: true,
              composed: true
          }))
      }
      open(url) {
          if (typeof url === 'string') this.url = url;
          this.shadowRoot.querySelector('#ajaxList').url = this.url
          this.shadowRoot.querySelector('#ajaxList').generateRequest();


      }

      mathAbs(val) {
          return Math.abs(val)
      }

      successList(response) {

          console.log('success list called', response)
          if (response) {
              this.model = response.detail.response.results;
              this.model.id = response.detail.response.results.id;

              this.model.returnso = this.mathAbs(this.model.returnso)
              this.model.allocated = this.mathAbs(this.model.allocated)


              const inventory = data => {

                  return html `
            <div>
            <div class="my-content">
                <div class="col-xs-3" style="font-weight:bold">PN id:</div>
                <div class="text-right">
                        <input class="input col-xs-9" disabled value="${data.id}" style="font-weight:bold">
                    </iron-input>
                </div>
            </div>
            <div class="my-content" style="font-weight:bold">
                <div class="col-xs-3" style="font-weight:bold">PN:</div>
                <div class="text-right">
                        <input class="input col-xs-9" disabled value="${data.mfgpn}" style="font-weight:bold">
                    
                </div>
            </div>
            <div class="my-content" style="font-weight:bold">
                <div class="col-xs-3" style="font-weight:bold">Brand:</div>
                <div class="text-right">
                        <input class="input col-xs-9" disabled value="${data.mfgname}" style="font-weight:bold">
                    </iron-input>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">Available:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.available}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">On Hand:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.onhand}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">Allocated:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.allocated}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">On Order:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.onorder}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">WIP:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.wip}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">FG:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.finishedgoods}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">Received:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.received}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">Shipped:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.shipped}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">Return PO:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.returnpo}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">Return SO:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.returnso}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">CRMA:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.customerrma}" disabled>
                </div>
            </div>
            <div class="my-content">
                <div class="col-xs-3">VRMA:</div>
                <div class="text-right">
                        <input class="input col-xs-9" value="${data.vendorrma}" disabled>
                </div>
            </div>
            
            <div>`;
              }


              render(inventory(this.model), this.shadowRoot.querySelector('#table'))
          }
      }

      render({ model }) {
          return html ` <style include="shared-styles">
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
        
        .input {
            /*min-height: 24px;*/
            width: 100%;
            text-align: initial;
            border: none;
            background-color: white;
            border-bottom: 1px dotted #000;
        }
        
        .input-textarea-edit {
            min-height: 24px;
            text-align: initial;
            border: hidden;
            border-color: white;
            background-color: white;
            border-bottom: 1px dotted #000;
        }
        
        .input-textarea-list {
            min-height: 24px;
            text-align: initial;
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
            /*       padding-left: 15px;
        padding-right: 15px;*/
        }
        
        .col-xs-3 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 25%;
            float: left;
        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 70%;
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
            /*        padding-right: 16px;
        padding-left: 16px;
        padding-bottom: 15px;
        padding-top: 10px;*/
            background-color: #FFF;
        }
        
        .table-row {
            line-height: 48px;
            border-bottom: 1px solid #dbdbdb;
            background-color: white;
            width: 100%;
            font-size: 13px;
            font-weight: 500;
        }
        
        .last-column {
            padding-right: 10px;
        }
        
        .my-content {
            font-size: 13px;
        }
        
        .right-icon {
            position: absolute;
            right: 0;
            bottom: 0px;
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
        /*    .bottom-listicon{
        position: relative;
        float: right;
    }*/
        
        .search-row {
            margin-left: 0;
            margin-top: 0px;
            margin-bottom: 8px;
            padding-left: 15px;
            padding-right: 15px;
            height: 48px;
            position: relative;
        }
        
        .mobilepadding {
            /*  padding-left: 20px;
        padding-right: 20px;*/
        }
        
        .card-padding {
            padding-left: 15px;
            padding-right: 15px;
        }
        /*    .popup {
        height: 2200px;
    }*/
        
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
        </style>
        <div class="title-rightpaneldraw">
            Inventory
        </div>
        <div style="background-color: #e6e6e6;">
            <div class="close-interface">
                <span on-tap="close">Close</span>
                <iron-icon icon="close" on-tap="close"></iron-icon>
            </div>
        </div>
        <div id="table" class="title-style side-padding">
            
        </div>
        <iron-ajax id="ajaxList" method="GET" handle-as="json" content-type="application/json" on-response=${this.successList.bind(this)}></iron-ajax>
     `

      }
  }
  customElements.define('inventory-info', InventoryInfo);