   import { Element as PolymerElement }
   from '../../node_modules/@polymer/polymer/polymer-element.js'
   export class AdminStatusPanel extends PolymerElement {

       static get template() {
           return `
        <style include="shared-styles iron-flex iron-flex-alignmen">
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
         :host {
            display: block;
        }
        
        .col-xs-3 {
            display: inline-block;
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 28%;
            float: left;
        }
        
        .i-input {
            width: 100%;
            margin-top: 7px;
        }
        
        .input {
            width: 150%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 100%;
        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 100%;
            margin-top: 0px;
            margin-bottom: 3px;
        }
        
        .text-right {
            text-align: right;
        }
        
        .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
            font-size: 13px;
        }
        
        .right {
            margin-left: auto;
            line-height: 100% !important;
        }
        
        .text-center {
            line-height: 100% !important;
        }
        
        .font-size {
            font-size: 13px;
        }
        
        .left {
            line-height: 100% !important;
        }
        
        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }
        
        .button {
            font-size: 13px;
            margin: 0px;
        }
        
        .input {
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            font-size: 14px;
            width: 94%;
        }
        
        paper-dialog.deskStyles {
            top: 0px;
            left: 0px;
            margin-left: 0px;
            width: 275px !important;
            max-height: 600px;
        }
        
        paper-dialog.mobileStyles {
            min-width: 275px;
            top: 0px;
            margin-left: 0px;
            overflow: auto !important;
        }
        
        .title-rightpaneldraw {
            font-size: 16px;
            background-color: #e6e6e6;
            padding-left: 5%;
            padding-bottom: 0%;
            padding-top: 6%;
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
        
        .float-left {
            float: left;
        }
        
        .icon-alignment {
            margin-right: -2px;
        }
        
        .large-width {
            width: 67%;
            font-size: 14px;
        }
        
        .checkbox {
            float: right;
            width: 15px;
            height: 15px;
        }
        
        .table-padding {
            padding-left: 5%;
            padding-right: 5%;
            margin-top: 17px;
        }
        
        .remove-icons {
            margin-left: -17px;
            margin-top: -10px;
            padding: 0px;
            width: 18px!important;
            height: 18px!important;
        }
        
        .header {
            position: relative;
        }
        
        .add-icon {
            position: relative;
            padding-bottom: 0px;
        }
        
        .add-icon {
            padding: 0px;
            width: 18px!important;
            height: 18px!important;
            margin-bottom: 11px;
        }
        
        .manage {
            color: blue;
            width: 100%;
            margin-bottom: 10px;
            text-align: right;
        }
        
        .add-icon-container {
            position: relative;
            width: 127px;
        }
        
        .admin {
            visibility: hidden;
        }
        
        [data-admin="superuser"] {
            visibility: visible;
            display: block!important;
        }
        
        [data-adminoff="superuser"] {
            display: none;
        }
        
        .admin1 {
            display: none;
        }
        
        .submit {
            width: 100%;
            text-align: right;
            margin-top: 17px;
            margin-right: 18px;
        }
        
        #page {
            overflow-y: auto;
            height: 100vh
        }
        </style>
        <div id="page">
            <div class="title-rightpaneldraw">Status</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
            <div class="layout horizontal end">
             
            </div>
                <iron-list items="{{statuslist}}" scroll-target="document">
                    <template>
                        <div id="holder[[index]]">
                                <iron-input class="col-xs-9 i-input" bind-value="{{item.status}}">
                                <input disabled class="input">
                            </iron-input>
                        </div>
                    </template>
                </iron-list>
            </div>
        </div>
           `
       }
       static get properties() {
           return {
               statuslist: {
                   type: Array,
                   reflectToAttribute: true,
                  
               },

               microservices: {
                type: Object,
                value: function () {
                  return {
                        "/partnumber-new": [{status: "Active"}, {status: "Inactive"}],
                        "/partnumbers": [{status: "Active"}, {status: "Inactive"}],

                        "/customer-new": [{status: "Active"}, {status: "Inactive"}],
                        "/customers": [{status: "Active"}, {status: "Inactive"}],
                        "/vendor-new": [{status: "Active"}, {status: "Inactive"}],
                        "/vendors": [{status: "Active"}, {status: "Inactive"}],

                        "/quote-new": [{status: "Active"}, {status: "Inactive"}],
                        "/quotes": [{status: "Active"}, {status: "Inactive"}],
                        "/salesorder-new": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/salesorders": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/invoice-new": [],
                        "/invoices": [],
                        "/returnso-new": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/returnsos": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/creditmemo-new":  [],
                        "/creditmemos":  [],
                        "/customerreceiverma-new":  [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/customerreceivermas":  [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/customershiprma-new": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/customershiprmas": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/customerrma-new": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/customerrmas": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],

                        "/purchaseorder-new": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/purchaseorders": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/receivepo-new": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/receivepos": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/returnpo-new": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/returnpos": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/shipreturnpo-new": [],
                        "/shipreturnpos": [],
                        "/vendorreceiverma-new": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/vendorreceivermas": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/vendorshiprma-new": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/vendorshiprmas": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/vendorrma-new": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],
                        "/vendorrmas": [{status: "Open"}, {status: "Partial"}, {status: "Closed"}, {status: "Void"}],




                        "/user-new": [{status: "Active"}, {status: "Inactive"}],
                        "/users": [{status: "Active"}, {status: "Inactive"}],
                        "/profile-new": [],
                        "/profiles": [],
                  }
                }
               }
           }
       }
       constructor() {
           super();
       }

       static get observers() {
           return ['showval(statuslist)']

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
       }

       showval(s) {
           // this.statuslist = s
       }

       close() {

        this.dispatchEvent(new CustomEvent('closePanel', {
          composed: true,
          bubbles: true,
        }))

       }
       open(link) {

        this.statuslist = this.microservices[link]
        
           this.shadowRoot.querySelector('iron-list').dispatchEvent(new CustomEvent('iron-resize', {
               bubbles: true,
               composed: true
           }));
       }
   }
   customElements.define('adminstatus-panel', AdminStatusPanel);