
   import {Element as PolymerElement}
   from '../../node_modules/@polymer/polymer/polymer-element.js'

export class ServiceOptions extends PolymerElement {
        

        static get template() {
        return `  <style include="shared-styles iron-flex iron-flex-alignmen">
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
        
        .text-right {
            text-align: right;
        }
        
        .col-xs-12 {
            position: relative;
            min-height: 1px;
            /*        padding-left: 15px;
        padding-right: 15px;*/
        }
        
        .table-padding {
            padding-left: 16px;
            padding-right: 16px;
            margin-top: 20px;
        }
        
        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }
        
        .button {
            margin-top: 24px;
            margin-right: 16px;
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
        
        .col-xs-3 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 30%;
            float: left;
        }
        
        .input {
            width: 150%;
            /*min-height: 24px;*/
            text-align: initial;
            border: none;
            background-color: #eee;
            /*border-color: #eee;*/
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 100%;
        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 65%;
        }
        
        iron-list {
            /*flex: 1 1 auto;*/
        }
        
        .i-input {
            width: 100%;
        }
        
        .my-content {
            margin-top: 10px;
        }
        
        #page {
            overflow-y: auto;
            height: 100vh
        }        
    </style>
        <div id="page">
            <div class="title-rightpaneldraw">Options</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface" on-tap="closed">
                    <span on-tap="closed">Close</span>
                    <iron-icon icon="close" on-tap="closed"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
                <div class="layout vertical">
                    <paper-icon-button icon="print" on-tap="action" id="goprint" class="so-icon"></paper-icon-button>
                    <paper-icon-button icon="mail" on-tap="action" id="showEmail" class="so-icon"></paper-icon-button>
                    <paper-icon-button icon="device:graphic-eq" on-tap="action" class="so-icon"></paper-icon-button>
                    <paper-icon-button icon="icons:assignment" on-tap="action" id="callemail" onclick="FunctionClick()" class="so-icon"></paper-icon-button>
                    <paper-icon-button icon="icons:label-outline" on-tap="action" id="label" class="so-icon"></paper-icon-button>
                    <paper-icon-button class="so-icon" icon="image:filter" on-tap="action" id="historyPanel"></paper-icon-button>
                </div>
            </div>
        </div>`
    }
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
        }

        static get observers() {
            return ['showval(statuslist)']

        }

        action(e) {
            console.log('e in pan', e)

            this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }))


            var id = e.path[2].id;
            console.log("id in action from panel", id);
            this.dispatchEvent(new CustomEvent('fromSOPanel', {

                composed: true,
                bubbles: true,
                detail: {
                    action: id
                }
            }))
        }

        closed() {
            console.log("close function called in salesordersoptions...");
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
            super.ready();
            // this.$.addEventListener('moreVertCallingPanel', e => {
            //     console.log("e is here", e);
            // })
        }


    }
    customElements.define('service-options', ServiceOptions);
   
