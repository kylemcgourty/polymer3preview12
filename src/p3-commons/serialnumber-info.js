
import {Element as PolymerElement}
  from '../../node_modules/@polymer/polymer/polymer-element.js'
        
    import './serialnumber-list.js'
   
  export class SerialNumberInfo extends PolymerElement {
       

        static get template() {
            return `
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
            <serialnumber-list qty="[[qty]]" id="sn" piece="[[item]]" launch="[[launch]]" starter="[[starter]]"></serialnumber-list>
         <!--    <template is="dom-if" if="{{checkHWRs(item)}}">
                <hwrnumber-list qty="[[qty]]" id="hwr" piece="[[item]]" hwrretrieve="[[hwrretrieve]]" mid="[[mid]]"></hwrnumber-list>
            </template> -->
            <div class="side-padding">
                <div class="row top-spacing1" id="moveleft">
                    <div class="col-xs-12">
                        <div class="my-content text-right nomargin" style="right: 56px">
                            <paper-button class="button" on-click="clean" raised>Reset</paper-button>
                            <paper-button class="button main-button" on-click="save">Update</paper-button>
                        </div>
                    </div>
                </div>
                <!--  <div class="top-spacing2 my-content">
                <div class="left float-left" style="font-size: 16px; float: left;">Shipping Info</div>
                <div style="clear: both"></div>
            </div>
            <div>
                <div class="my-content">
                    <div class="col-xs-3">Product</div>
                    <div class="col-xs-9 text-right">
                        <input is="iron-input" class="input" bind-value="{{item.product}}">
                    </div>
                </div>
                <div class="my-content">
                    <div class="col-xs-3">US ECCN</div>
                    <div class="col-xs-9 text-right">
                        <input is="iron-input" class="input" bind-value="{{item.useccn}}">
                    </div>
                </div>
                <div class="my-content">
                    <div class="col-xs-3">HS Tariff</div>
                    <div class="col-xs-9 text-right">
                        <input is="iron-input" class="input" bind-value="{{item.hstariff}}">
                    </div>
                </div>
                <div class="my-content">
                    <div class="col-xs-3">Dim(HxWxD)</div>
                    <div class="col-xs-9 text-right">
                        <input is="iron-input" class="input" id="dimension" label="x" placeholder="Inches" on-focusout="addDim" bind-value="{{item.dimension}}">
                    </div>
                </div>
                <div class="my-content">
                    <div class="col-xs-3">Net Weight</div>
                    <div class="col-xs-9 text-right">
                        <input is="iron-input" class="input" id="weight" placeholder="Lbs" on-focusout="addWeight" bind-value="{{item.netweight}}">
                    </div>
                </div>
                <div class="my-content">
                    <div class="col-xs-3">IncoTerms</div>
                    <div class="col-xs-9 text-right">
                        <input is="iron-input" class="input" bind-value="{{item.incoterms}}">
                    </div>
                </div>
                <div class="my-content">
                    <div class="col-xs-3">Orig. Country</div>
                    <div class="col-xs-9 text-right">
                        <input is="iron-input" class="input" bind-value="{{item.countryoforigin}}">
                    </div>
                </div> -->
            </div>
        </div>
        <iron-ajax id="ajaxSave" method="PUT" handle-as="json" on-response="success" on-error="ajaxerror" content-type="application/json"></iron-ajax>
        <iron-media-query query="(min-width: 767px)" query-matches="{{queryMatches}}"></iron-media-query>
        <iron-ajax id="ajaxList" url="{{url}}" method="GET" on-response="successList"></iron-ajax>
        <iron-ajax id="ajaxSave1" url="{{url}}" method="PUT" on-response="response"></iron-ajax>`
        }

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




        static get observers() {
            return [
                'gotmid(mid, launch)'
            ]
        }


        constructor() {

            super()

        }


        //     displayChanger() {
        //         this.display = this.$.display.checked;


        //     }

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

            // var pass1, pass2
            // for (var i = 0; i < this.item.serialnumbers.length; i++) {
            //     if (this.item.serialnumbers[i].sn) {
            //         pass1 = true
            //     }
            //     if (this.item.hwrnumbers[i].sn) {
            //         pass2 = true
            //     }

            //     if (pass1 && pass2) {
            //         break;
            //     }

            // }

            // if (!pass1 && pass2) {
            //         document.querySelector('#toast').text = "'Serial Numbers should be filled before 'Other Serial Numbers'";
            //         document.querySelector('#toast').show();
            //         return
            // }
            // this.largeModel.year = Number(this.largeModel.year);
            this.$.ajaxSave1.body = JSON.stringify(this.largeModel);
            this.$.ajaxSave1.generateRequest();

        }



        open(url, item, model) {



            if (typeof url === 'string') this.set('url', url);
            this.item = item;
            this.olditem = item;
            this.largeModel = model


            this.$.sn.setQty();

        }

        close() {
            this.dispatchEvent(new CustomEvent('closePanel', {
                bubbles: true,
                composed: true
            }))
        }

        open1() {
            this.$.sn.setQty();

            console.log('the $, shadowRoot', this.$, this.shadowRoot)
            if (this.shadowRoot.getElementById('hwr')) {
                this.shadowRoot.getElementById('hwr').setQty();
            }
        }


        clean() {
            this.set('item.serialnumbers', null)
            this.set('item.hwr', null)
            this.set('item.useccn', null)
            this.set('item.hstariff', null)
            this.set('item.netweight', null)
            this.set('item.dimension', null)
            this.set('item.product', null)
            this.set('item.incoterms', null)
            this.set('item.countryoforigin', null)
            this.set('item.other', null)
        }

        save() {
            this.dispatchEvent(new CustomEvent(this.starter, {
                bubbles: true,
                composed: true
            }))

        }

        response(response) {

            console.log("this.ender", this.ender)

            if (response.detail.response.results.display) {
                document.querySelector('#toast').text = "Serial numbers and HWR numbers updated successfully";
                document.querySelector('#toast').show();
            }
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
        }

        isPart(type) {
            if (type == "") {
                type = 'Part'
            }
            return type === 'Part';
        }

      

        gotmid() {
            // var fromMA = document.querySelector('my-app');
            // fromMA.addEventListener(this.mid, function() {
            //     this._debouncer = Polymer.Debouncer.debounce(this._debouncer, Polymer.Async.timeOut.after(100), () => {
            //         this.launchModelToDB();
            //     });
            // }.bind(this));

            this.shadowRoot.addEventListener(this.launch, function() {
                this.launchModelToDB()
                // if (this.item.hwrnumbers) {
                //     this.getHWRnumber();
                // } else {
                //     this.launchModelToDB();
                // }
            }.bind(this));

        }

        ready() {

            super.ready()
        }

    }
customElements.define('serialnumber-info', SerialNumberInfo);

