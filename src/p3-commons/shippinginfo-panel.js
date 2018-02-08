import { LitElement, html } from '../../../node_modules/@polymer/lit-element/lit-element.js'

import '../../../node_modules/@polymer/paper-checkbox/paper-checkbox.js'

export class ShippingInfoPanel extends LitElement {
    static get properties() {
        return {
            _inventory: {
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
            olditem: {
                type: Object,
                notify: true,
                value: function() {
                    return {};
                }
            },
            url: {
                type: String,
                notify: true
            },
            queryMatches: {
                type: Boolean,
                observer: 'mySize'
            },
            display: {
                type: Boolean,
                value: false,
                notify: true,
            },
            lineitemIndex: {
                reflectToAttribute: true,
                type: Number
            },
            headercolor: {
                type: String,
                reflectToAttribute: true
            },
            item: {
                type: Object,

            }
        }
    }

    static get observers() {
        return []
    }


    constructor() {
        super()
        this.item = {};
        this.url = "";
    }

    addDim(e) {
        var str = this.item.dimension
        if (str.includes("Inch(s)")) {
            return
        } else {
            var d = this.$.dimension.value + " inch(s)"
            this.item.dimension = d
        }
    }

    addWeight(weight) {
        var str = this.item.netweight
        if (str.includes("Lb(s)")) {
            return
        } else {
            var w = this.$.weight.value + " lb(s)"
            this.item.netweight =w
        }
    }

    save() {

        this.largeModel.lineitems[this.modelIndex].tracking = this.shadowRoot.querySelector("#tracking").value
        this.largeModel.lineitems[this.modelIndex].useccn = this.shadowRoot.querySelector("#useccn").value
        this.largeModel.lineitems[this.modelIndex].hstariff = this.shadowRoot.querySelector("#hstariff").value
        this.largeModel.lineitems[this.modelIndex].dimension = this.shadowRoot.querySelector("#dimension").value

        console.log('the node',  this.shadowRoot.querySelector("#netweight"), this.shadowRoot)
        this.largeModel.lineitems[this.modelIndex].netweight = this.shadowRoot.querySelector("#netweight").value
        this.largeModel.lineitems[this.modelIndex].incoterms = this.shadowRoot.querySelector("#incoterms").value
        this.largeModel.lineitems[this.modelIndex].countryoforigin = this.shadowRoot.querySelector("#countryoforigin").value
        this.largeModel.lineitems[this.modelIndex].display = this.shadowRoot.querySelector("#display").checked


        this.item.updatecheck = true;
        this.shadowRoot.querySelector('#ajaxSave1').body = JSON.stringify(this.largeModel);
        this.shadowRoot.querySelector('#ajaxSave1').generateRequest();
    }

    open(url, item, model, index) {
        if (typeof url === 'string') this.url= url
        this.item =item
        this.item.display= item.display
        this.item.useccn = item.useccn
        this.largeModel = model
        this.modelIndex = index
    }

    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    clean() {
        this.item.serialnumbers = null
        this.item.hwr = null
        this.item.useccn = null
        this.item.hstariff = null
        this.item.netweight = null
        this.item.dimension = null
        this.item.product = null
        this.item.incoterms = null
        this.item.countryoforigin = null
        this.item.other = null
    }

    response(response) {

        if (response.detail.response.results){
        document.querySelector('#toast').text = "Shipping info updated successfully";
        document.querySelector('#toast').show();
        this.dispatchEvent(new CustomEvent(this.ender, {
            bubbles: true,
            composed: true,
            detail: {
                item: this.item,
                model: response.detail.response.results
            }
        }))
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
        this.dispatchEvent(new CustomEvent('getPartsList', {
            bubbles: true,
            composed: true,
        }))

        }   
    }

    ready() {
        super.ready()
    }
    render({}) {
        return html `
         <style include="shared-styles">
        #page {
            height: 100vh;
            overflow-y: auto;
        }
        
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
        
        .col-xs-9 {
            display: inline-block;
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 70%;
        }
        
        .text-right {
            text-align: right;
        }
        
        .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
            font-size: 14px;
        height: 21px;
            }
        
        .right {
            margin-left: auto;
            line-height: 100% !important;
            /*width: 100px;*/
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
            margin-right: 15px;
        }
        
        .input {
            text-align: initial;
            border: none;
            background-color: #eee;
            font-size: 13.3px;
            width: 94%;
            height: 17px;
        }
        
        .input1 {
            text-align: initial;
            border: none;
            background-color: #eee;
                box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            font-size: 13.3px;
            width: 100%;
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
            padding-top: 3%;
        }
        
        .close-interface {
            position: relative;
            top: -27px;
            text-align: right;
            left: -14px;
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
        
        .top-spacing {
            margin-top: 10px;
        }
        
        .top-spacing1 {
            margin-top: 30px;
        }
        
        .top-spacing2 {
            margin-top: 45px;
        }
        
        .side-padding {
            padding-left: 16px
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
        
        .container {
            margin-top: 31px;
        }
        </style>
        <div id="page">
            <div class="title-rightpaneldraw">Shipping Info</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class="side-padding">
                <div class="container">
                    <div class="my-content">
                        <div class="col-xs-3">Tracking</div>
                        <div class="col-xs-9 text-right">
                            
                                <input class="input1" id="tracking" value="${this.item.tracking}">
                           
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">US ECCN</div>
                        <div class="col-xs-9 text-right">
                            
                                <input class="input1" id="useccn" value="${this.item.useccn}">
                           
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">HS Tariff</div>
                        <div class="col-xs-9 text-right">
                            
                                <input class="input1" id="hstariff" value="${this.item.hstariff}">
                           
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Dim(HxWxD)</div>
                        <div class="col-xs-9 text-right">
                                <input class="input1" id="dimension" label="x" placeholder="Inches" on-focusout="addDim" value="${this.item.dimension}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Net Weight</div>
                        <div class="col-xs-9 text-right">
                                <input class="input1" id="netweight" placeholder="Lbs" on-focusout="addWeight" value="${this.item.netweight}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">IncoTerms</div>
                        <div class="col-xs-9 text-right">
                            
                                <input class="input1" id="incoterms" value="${this.item.incoterms}">
                           
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Orig. Country</div>
                        <div class="col-xs-9 text-right">
                            
                                <input class="input1" id="countryoforigin" value="${this.item.countryoforigin}">
                           
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">
                            <paper-checkbox class="tax" id="display" checked="${this.item.display}">Display</paper-checkbox>
                        </div>
                        <div class="col-xs-9 text-right">
                        </div>
                    </div>
                    <div class="row top-spacing1">
                        <div class="col-xs-12">
                            <div class="my-content text-right nomargin">
                                <paper-button class="button" on-click="clean" raised>Reset</paper-button>
                                <paper-button class="button main-button" on-click="${this.save.bind(this)}">Update</paper-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <iron-ajax id="ajaxSave" method="PUT" handle-as="json" on-response="success" on-error="ajaxerror" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxList" url="${this.url}" method="GET" on-response="successList"></iron-ajax>
        <iron-ajax id="ajaxSave1" url="${this.url}" method="PUT" on-response="${this.response.bind(this)}"></iron-ajax>
        `
    }
}
customElements.define('shippinginfo-panel', ShippingInfoPanel);