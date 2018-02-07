import {LitElement} from '../../node_modules/@polymer/lit-element/lit-element.js'

import {repeat} from '../../node_modules/lit-html/lib/repeat.js'
import {render, html} from '../../node_modules/lit-html/lib/lit-extended.js';


export class SerialNumberInfo extends LitElement {

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
        }
    }

  

    constructor() {
        super()
    }

    checkHWRs(item) {
        setTimeout(function() {
            this.open1();
        }.bind(this), 100)

        if (item.hwrnumbers) {
            return true;
        } else {
            return false;
        }


    }

    addDim(e) {
        var str = this.item.dimension
        if (str.includes("Inch(s)")) {
            return
        } else {
            var d = this.$.dimension.value + " Inch(s)"
            this.set('item.dimension', d)
        }
    }

    addWeight(weight) {
        var str = this.item.netweight
        if (str.includes("Lb(s)")) {
            return
        } else {
            var w = this.$.weight.value + " Lb(s)"
            this.set('item.netweight', w)
        }
    }

    getHWRnumber() {

        this.dispatchEvent(new CustomEvent(this.hwrretrieve, {
            bubbles: true,
            composed: true
        }))
    }

    launchModelToDB() {
        this.shadowRoot.querySelector('#ajaxSave1').body = JSON.stringify(this.largeModel);
        this.shadowRoot.querySelector('#ajaxSave1').generateRequest();
    }



    open(url, item, model) {
        if (typeof url === 'string') this.url = url
        this.item = item;

        this.olditem = item;
        this.largeModel = model

        this.gotmid()



        let module = './serialnumber-list.js'

        import(module).then((mod) =>{
                this.shadowRoot.querySelector('#sn').setQty(this.item, this.qty, this.launch, this.starter)
        }).then(() => {
            this.shadowRoot.querySelector('#sn').addSN()
        })

    }

    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    open1() {
        this.$.sn.setQty();
        if (this.shadowRoot.getElementById('hwr')) {
            this.shadowRoot.getElementById('hwr').setQty();
        }
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

    save() {

        this.dispatchEvent(new CustomEvent(this.starter, {
            bubbles: true,
            composed: true
        }))

    }

    response(response) {
        if (response.detail.response.results.so) {
            document.querySelector('#toast').text = "Serial numbers and HWR numbers updated successfully";
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
    } else {
        return
    }
    }

    isPart(type) {
        if (type == "") {
            type = 'Part'
        }
        return type === 'Part';
    }

    gotmid() {

        if (!this.attached) {
        this.shadowRoot.addEventListener(this.launch, function() {
            this.launchModelToDB()
        }.bind(this));
        this.attached = true;
        }

    }

    ready() {
        super.ready()


    }
    render() {
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
            padding-top: 3%;
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
        #moveleft{
            /*margin-left: 66px;*/
        }
        </style>
        <div id="page">
            <div class="title-rightpaneldraw">Serial Numbers</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <serialnumber-list  id="sn" ></serialnumber-list>
            <div class="side-padding">
                <div class="row top-spacing1" id="moveleft">
                    <div class="col-xs-12">
                        <div class="my-content text-right nomargin" style="right: 56px">
                            <paper-button class="button" on-click="clean" raised>Reset</paper-button>
                            <paper-button class="button main-button" on-click=${this.save.bind(this)}>Update</paper-button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        <iron-ajax id="ajaxSave" method="PUT" handle-as="json" on-response="success" on-error="ajaxerror" content-type="application/json"></iron-ajax>
        <iron-media-query query="(min-width: 767px)" query-matches="${this.queryMatches}"></iron-media-query>
        <iron-ajax id="ajaxList" url="${this.url}" method="GET" on-response="successList"></iron-ajax>
        <iron-ajax id="ajaxSave1" url="${this.url}" method="PUT" on-response=${this.response.bind(this)}></iron-ajax>`
    }
}
customElements.define('serialnumber-info', SerialNumberInfo);