
  
   import {Element as PolymerElement}
   from '../../node_modules/@polymer/polymer/polymer-element.js'

  export  class DefieEmailfilter extends PolymerElement {
       

        static get template() {
        return ` <style include="shared-styles iron-flex iron-flex-alignment">
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
            --iron-icon-width: 18px;
            --iron-icon-height: 18px;
        }
        
        tag {
            display: inline-block;
            margin: 0 4px 3px 0;
            padding: 0 3px;
            background-color: #f5f5f5;
            border: 1px solid #d9d9d9;
            border-radius: 3px;
            animation-name: slidein;
            animation-duration: 0.2s;
        }
        
        tag.infinite {
            animation: conflict 0.5s infinite;
            -webkit-animation: conflict 0.5s infinite;
            /* Chrome, Safari, Opera */
        }
        
        .header-input {
            text-align: initial;
            border: none;
            background-color: white;
            border-bottom: 1px dotted #000;
            float: left;
            width: 88%;
        }
        
        .toinput {
            width: 102%;
            text-align: initial;
            border: none;
            background-color: #eee;
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }
        
        .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }
        
        .my-content {
            font-size: 13.333px;
        }
        
        .col-xs-3 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 6px;
            width: 11%;
            float: left;
            text-align: right;
            font-size: 14px;
        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 1%;
            padding-right: 0px;
            /* width: 87%; */
            /*width: 100%;*/
            /* margin-left: 11.5%; */
        }
        
        @keyframes conflict {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        @-webkit-keyframes conflict {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        @keyframes slidein {
            from {
                transform: translateX(50px);
                -webkit-transform: translateX(50px);
                -moz-transform: translateX(50px);
                -o-transform: translateX(50px);
                -ms-transform: translateX(50px);
            }
            to {
                transform: translateX(0);
                -webkit-transform: translateX(0);
                -moz-transform: translateX(0);
                -o-transform: translateX(0);
                -ms-transform: translateX(0);
            }
        }
        
        @-webkit-keyframes slidein {
            from {
                transform: translateX(50px);
                -webkit-transform: translateX(50px);
                -moz-transform: translateX(50px);
                -o-transform: translateX(50px);
                -ms-transform: translateX(50px);
            }
            to {
                transform: translateX(0);
                -webkit-transform: translateX(0);
                -moz-transform: translateX(0);
                -o-transform: translateX(0);
                -ms-transform: translateX(0);
            }
        }
        
        iron-icon:hover {
            cursor: pointer;
        }
        
        paper-input-container {
            position: relative;
        }
        
/*        .overlay {
            display: var(--display-overlay);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: none;
            z-index: 9;
            overflow: auto;
        }*/
        /*        .overlay.open {
            display: block;
        }*/
        
        .result-panel {
            display:  block;
            position: absolute;
            /*opacity: 0;*/
            margin-left: -5%;
            width: 100%;
            background-color: #fff;
            overflow: auto;
            transition: transform 0.1s, opacity 0.1s;
            box-shadow: 0 6px 42px 8px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)!important;
            -moz-box-shadow: 0 6px 42px 8px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)!important;
            /*transform: translateY(100px);*/
            max-height: 300px;
            opacity: 1;
            z-index: 99;
            transform: translateY(0);
        }
        .layout.horizontal, .layout.vertical {
            display: var(--display-result-panel);
        }
        /*.result-panel.display {
            display: block;
        }*/
        
        .result-panel.open {
            opacity: 1;
            z-index: 99;
            transform: translateY(0);
        }
        
        .result-panel .result-item {
            /*padding-left: 25px;*/
        }
        
        .result-panel .result-item > div:nth-child(2) {
            font-size: 14px;
        }
        
        .result-panel .result-item[data-selected] {
            background-color: #eee;
        }
        
        .result-panel .result-item:hover {
            background-color: #eee;
            cursor: pointer;
        }
        
        .title {
            margin-top: 7px;
            color: blue;
            margin-bottom: 7px;
        }
        
        .push-down {
            margin-top: 7px;
            margin-left: 10px;
        }
        
        .close-icon {
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            height: 17px;
            margin-top: -2px;
            position: absolute;
            top: 3px;
            right: 3px;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }
        
        .result-panel {
            margin-left: 11.6%;
            width: 87.4%;
            padding-left: 5px;
        }
        
        #inputField {
            border: none;
        }
        
        #inputField:focus {
            outline: none;
        }
        
        .result-item {}
        
        .email-width {
            /*margin-left: 12%;*/
            /*width: 39.7%;*/
            margin-right: -4px;
            padding-left: 5px;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        
        .input-element {
            border: 0;
            padding: 2px;
            background: #fff;
            font: 12pt sans-serif;
        }
        
        .tmp-element {
            visibility: hidden;
            white-space: pre;
        }
        
        .emails {
            float: left;
            /*margin-left: 5px;*/
            max-height: 19px;
            /*margin-top: 8px;*/
            position: relative;
        }
        
        .readjuster {
            margin-top: -8px;
        }
        
        .inputadjuster {
            margin-top: 8px;
        }
        
        .remainingbox {
            border: 1px solid #d14836;
            border-radius: 3px;
            margin-left: 5px;
            padding: 2px 4px;
            min-width: 61px;
            max-width: 80px;
            height: 20px;
            margin-top: -14px;
            text-align: center;
            background-color: #f5f5f5;
        }
        
        .bounder {
            clear: both;
            position: relative;
        }
        
        iron-list {
            flex: 1 1 auto;
        }
        
        @media (max-width: 767px) {
            .col-xs-3 {
                position: relative;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 6px;
                width: 3%;
                float: left;
                text-align: right;
            }
            .col-xs-9 {
                position: relative;
                width: 97%;
                min-height: 1px;
                padding-left: 1%;
                padding-right: 0px;
                /*width: 99%;*/
            }
            .header-input {
                text-align: initial;
                border: none;
                background-color: white;
                border-bottom: 1px dotted #000;
                float: left;
                width: 96%;
            }
            .toinput {
                width: 391%;
                text-align: initial;
                border: none;
                background-color: #eee;
                /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
                box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            }
            /* .input {
            min-height: 24px;
            text-align: initial;
            border: none;
            background-color: white;
            border-bottom: 1px dotted #000;
        }*/
            .result-panel {
                margin-left: 0%;
                width: 91%;
                /*padding-left: 1%;*/
                /* display: block;
            position: absolute;
            opacity: 0;
            width: 100%;*/
                /*margin-left: -5%;*/
                /* background-color: #fff;
            overflow: auto;
            transition: transform 0.1s, opacity 0.1s;
            box-shadow: 0 6px 42px 8px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)!important;
            -moz-box-shadow: 0 6px 42px 8px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)!important;
            transform: translateY(100px);
            max-height: 300px;*/
            }
            .email-width {
                margin-left: 0%;
                width: 74%;
                /*margin-right: -1.3%;*/
                padding-left: 5px;
                /*margin-top: 5px;*/
            }
            .close {
                margin-top: 5px;
            }
        }
        </style>
        <div class="my-content">
            <div class="my-content">
                <div class="col-xs-3">{{label}}</div>
            </div>
            <div class="text-right">
                <div class="my-content">
                    <div id="emailsCollection" class="header-input">
                        <template is="dom-repeat" items="{{tags}}" as="tag" hidden="{{!display}}">
                            <div id="holder-[[index]]" class="my-content">
                                <div class="emails" id="container-[[index]]">
                                    <iron-input id="email-[[index]]" class="input email-width" bind-value="{{tag}}">
                                        <input>
                                    </iron-input>

                        
                                    <iron-icon icon="close" class="close-icon" emailindex="remove-[[index]]" on-click="removeTag"></iron-icon>
                                </div>
                            </div>
                        </template>
                        <iron-input id="inputField" bind-value="{{searchstring}}" required$="[[required]]" on-focusout="focusout" on-keyup="onKeyUp">
                            <input class="toinput">
                        </iron-input>
                    </div>
                </div>
            </div>
            <div class="bounder" style="position: relative;">
                <div class="result-panel layout vertical">
                    <iron-list items="{{results}}" as="result" class="push-down" filter="searchfilter" observe="updatesearch" style="">
                        <template>
                            <div>
                                <!-- <template is="dom-repeat" items="{{results}}" as="result" class="push-down" filter="searchfilter" observe="updatesearch"> -->
                                <div class="result-item" data-id$="{{result.id}}" data-selected$="{{result.select}}" data-value$="{{result.sub}}" data-target$="{{result.target}}" on-click="select" on-tap="select" on-mousedown="select">
                                    <div>
                                        <span>[[result.email]]</span>
                                    </div>
                                    <div hidden="{{singleValue}}">
                                        <safe-html content="{{result.sub}}"></safe-html>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </iron-list>
                </div>
            </div>
            <canvas hidden id="canvas"></canvas>
            <div hidden>
                <div id="remainingbox" class="remainingbox"> [[remaining]] more </div>
                <br id="break">
            </div>
        </div>
        </div>
        </div>`
    }
        static get properties() {
            return {
                oldlen: {
                    type: Number,
                    value: 0
                },
                tags: {
                    type: Array,
                    notify: true,
                    observer: "setDisplay",
                    value: function() {
                        return [];
                    }
                },
                label: {
                    type: String
                },
                display: {
                    type: Boolean,
                    value: false
                },
                smallRow: {
                    type: Boolean,
                    value: false
                },
                url: {
                    type: String,
                    value: ""
                },
                results: {
                    type: Array,
                    notify: true,
                    value: function() {
                        return [];
                    }
                },
                modelCustomerlist1: {
                    type: Object,
                    value: undefined,
                    reflectToAttribute: true,
                },
                map: {
                    type: Array,
                    value: function() {
                        return [{
                            key: "name",
                            isMain: true
                        }, {
                            key: "email",
                            isTarget: true
                        }];
                    }
                },
                lineWidth: {
                    type: Number,
                    value: 0
                },
                mapString: {
                    type: String,
                    value: ""
                },
                searchstring: {
                    type: String,
                    notify: true,
                    value: ""
                },
                notTaggable: {
                    type: Boolean,
                    value: false
                },
                autoValidate: {
                    type: Boolean,
                    value: false
                },
                required: {
                    type: Boolean,
                    value: false
                },
                singleValue: {
                    type: Boolean,
                    value: false
                },
                displaySelected: {
                    type: Boolean,
                    value: false
                },
                text: {
                    type: String,
                    value: ""
                },
                preString: {
                    type: String,
                    notify: true,
                    value: "",
                    observer: "resetUrl"
                }
            }
        }
        static get observers() {
            return [
                'triggersearch(searchstring)',
                'setTemplateData(modelCustomerlist1)'
            ]
        }
        constructor() {
            super();
            
        }
        setTemplateData(results) { //dropdown menu
            console.log("results is here :", results)
            // var resp = results,
            //     mainKey = [],
            //     main,
            //     subKey = [],
            //     sub,
            //     targetKey, results = [],
            //     self = this,
            //     reg = "",
            //     map;

            this.set("results", results);
            console.log("after results is here :", this.results)


            if ((this.text && results.length > 1) || (!this.text && results.length > 0)) this.hideOverlay();
        }

        triggersearch(newValue) {
            console.log(this.results)
            if (this.searchstring === "" || this.searchstring === undefined || this.searchstring === null) {
                this.hideOverlay();
            } else if (this.results[0] !== undefined) {
                this.set('results.0.updatesearch', newValue);
            }
        }
        searchfilter(e) {
            var thiz = this;
            var element = e;
            if (element.email != null) {
                if (element.email && element.email.match(new RegExp(this.searchstring, 'i')) !== null) {
                    this.filter = true;
                    return true;
                }
                if (element.name && element.name.match(new RegExp(this.searchstring, 'i')) !== null) {
                    this.filter = true;
                    return true;
                }
            } else {
                if (element.companyname != null) {
                    if (element.companyname && element.companyname.match(new RegExp(this.searchstring, 'i')) !== null) {
                        this.filter = true;
                        return true;
                    }
                    if (element.address && element.address.match(new RegExp(this.searchstring, 'i')) !== null) {
                        this.filter = true;
                        return true;
                    }
                } else {
                    if (element.name && element.name.match(new RegExp(this.searchstring, 'i')) !== null) {
                        this.filter = true;
                        return true;
                    } else if (element.mfgname && element.mfgname.match(new RegExp(this.searchstring, 'i')) !== null) {
                        this.filter = true;
                        return true;
                    } else if (element.mfgpn && element.mfgpn.match(new RegExp(this.searchstring, 'i')) !== null) {
                        this.filter = true;
                        return true;
                    }
                }
            }
            this.filter = false;
            return false;
        }
        onKeyUp(e) {
            console.log("onKeyUp this searchstring",this.searchstring)
            if (e.code == "Escape" || this.searchstring == "") {
                this.hideOverlay();
            } else if (e.code === "Enter") {
                this.addTag(e.target.value.trim(), e);
            } else if (this.filter) {
                this.showOverlay();
            } else {
                this.hideOverlay();
            }

        }

        hideOverlay(e) {
            console.log("hidden")
            this.updateStyles({
                '--display-result-panel': 'none',
            });
            // this.toggleClass("open", false, this.shadowRoot.querySelector(".overlay"));
            // this.toggleClass("open", false, this.shadowRoot.querySelector(".result-panel"));

            this.set("selected", 0);
            this.set("firstclick", true);
            // this.set("results", []);
            setTimeout(function() {
                this.updateStyles({
                    '--display-result-panel': 'none',
                });
                // this.toggleClass("display", false, this.shadowRoot.querySelector(".result-panel"));
            }.bind(this), 600);
        }

        showOverlay() {
            this.updateStyles({
                '--display-result-panel': 'block',
            });
            // this.toggleClass("display", true, this.shadowRoot.querySelector(".result-panel"));
            setTimeout(function() {
                this.updateStyles({
                    '--display-result-panel': 'none',
                });
                // this.toggleClass("open", true, this.shadowRoot.querySelector(".result-panel"));
                // this.toggleClass("open", true, this.shadowRoot.querySelector(".overlay"));
            }.bind(this), 100);
        }
        domchange(e) {
            if (this.permit) {
                this.emailWidthSetter()
            }
        }
        emailWidthSetter(e) {

            console.log('this oldlen tags ,permit', this.oldlen, (this.tags.length - 1), this.permit)

            // if (this.oldlen === (this.tags.length - 1) && this.permit) {
            if (this.permit) {

                var index = (this.tags.length - 1).toString()
                console.log('index in ews', index);
                var node = this.$$('#email-' + index);
                var node1 = this.$$('#container-' + index);
                var inputField = this.$.inputField;

                if (node) {
                    function getWidthOfInput() {
                        var canv = this.$.canvas
                        ctx = canv.getContext("2d");
                        ctx.font = "13px Arial";
                        var length = ctx.measureText(node.value).width;
                        console.log('this is length', length);
                        return length
                    }
                    var emailWidth = getWidthOfInput.call(this);
                    var prop = 'emailW-' + index;
                    node.style.width = emailWidth + "px";
                    var containerWidth = emailWidth + 5 + 21;
                    var totWidth = containerWidth
                    node1.style.width = totWidth + "px";
                    // this.lineWidth = this.lineWidth + (totWidth + 5)
                    // console.log('totw, linw', totWidth, this.lineWidth)
                    // this.$.inputField.style.width = "0px";
                    // this.$.remainingbox.style.width = "0px";
                    // this.emailsHeightAfterAdd = this.$.emailsCollection.offsetHeight
                    // console.log('the current height, prevheight', JSON.parse(JSON.stringify(this.emailsHeightAfterAdd)), this.emailsHeight)

                    // if (this.emailsHeightAfterAdd > 28) {
                    //     this.$.emailsCollection.style.height = "58px";
                    //     for (var i = this.tagcount; i < this.tags.length; i++) {
                    //         console.log('inside and running, i , container', i, this.$$('#container-' + i))

                    //         this.$$('#container-' + i).style.display = "none";
                    //     }

                    //     this.remaining = this.tags.length - this.tagcount;
                    //     this.$.inputField.style.width = "0px";
                    //     var remainBoxCLone = this.$.remainingbox.cloneNode(false);
                    //     remainBoxCLone.classList.add('boxclone');
                    //     this.$.emailsCollection.appendChild(remainBoxCLone)
                    //     this.oldlen = this.oldlen + 1;
                    //     this.permit = false;
                    //     return;
                    // }

                    // var tag = totWidth + 5
                    // var diff = this.emailsHeightAfterAdd - this.emailsHeight
                    // if (tag > 125 && this.lineWidth > 400) {
                    //     inputField.style.width = "525px";
                    //     this.lineWidth = 0;
                    //     this.permit = false;
                    //     this.oldlen = this.oldlen + 1;
                    //     var breakEl = this.$.break;
                    //     var clnBreak = breakEl.cloneNode(false);
                    //     clnBreak.classList.add('break')
                    //     node1.parentNode.insertBefore(clnBreak, node1.nextSibling);
                    //     if (!this.tagcount) {
                    //         this.tagcount = this.tags.length
                    //     }
                    //     return
                    // } else if (tag && this.lineWidth > 400) {
                    //     var breakEl = this.$.break;
                    //     var clnBreak = breakEl.cloneNode(false);
                    //     clnBreak.classList.add('break')
                    //     node1.parentNode.insertBefore(clnBreak, node1.nextSibling);
                    //     inputField.style.width = (525 - (totWidth + 5)) + "px";
                    //     if (!this.tagcount) {
                    //         this.tagcount = this.tags.length
                    //     }
                    // } else {
                    //     inputField.style.width = (525 - this.lineWidth) + "px";
                    // }
                    // this.oldlen = this.oldlen + 1;
                    this.permit = false;
                    console.log('tags after add', this.tags)
                }
            }
        }
        removeTag(e) {
            // console.log('e in remove', e);

            // var id = e.model._nodes[3].id

            // console.log('the id', id)


            var ix = e.model.index;

            this.splice('tags', ix, 1)

            // console.log('the index', ix)

            // this.$$('#'+id).remove();

            // for (var i=(ix+1); i<this.tags.length; i++) {
            //     this.$$('#holder-'+i).id = 'holder-'+(i-1);
            //     this.$$('#container-'+i).id = 'container-'+(i-1);
            //     this.$$('#email-'+i).id = 'email-'+(i-1);

            // }


            // var tag = e.model.tag;
            // this.tags = this.tags.filter(function(x) {
            //     return x != tag;
            // });

            // this.tags.splice(ix, 1)

            // console.log('tags after remove', this.tags);
            // var index = e.model.index

            // console.log('the id', id)
            // var width = Number(this.$$('#'+id).style.width.slice(0,-2)) + 5
            // console.log('see width , ifw',  width, Number(this.$.inputField.style.width.slice(0, -2)))
            // var ifWidth = Number(this.$.inputField.style.width.slice(0, -2))
            // this.$.inputField.style.width = ifWidth + width + 'px';

            // this.lineWidth = this.lineWidth - width;


            // console.log('fied width, lineWidth', this.$.inputField.style.width, this.lineWidth)
            // this.setDisplay();
        }

        addTag(value, e) {
            console.log('at called! value', value)
            console.log('at called! e', e)
            var duplicated = [];
            // this.emailsHeight = this.$.emailsCollection.offsetHeight;
            duplicated = this.tags.filter(function(x) {
                return x == value;
            });

            if (!duplicated[0]) {
                // var tm = this.tags;
                // this.tags=[];
                // this.tags = tm;
                this.push('tags', value);
                this.$.inputField.value = '';

                this.permit = true;
            }
            // this.$.emailsCollection.classList.add('readjuster')
            // this.$.inputField.classList.add('inputadjuster')

            // if (!duplicated[0]) {
            // } else {
            //     this.toggleClass('infinite', true, this.$$('#' + this.format(value)));
            //     setTimeout(function() {
            //         this.toggleClass('infinite', false, this.$$('#' + this.format(value)));

            //     }.bind(this), 1000);
            // }
            this.setDisplay();
            this.hideOverlay();
        }
        select(e) {
            console.log('e! t', e, this.tags)
            this.tags = this.tags || [];

            var value = e.model.result.email

            this.addTag(value);

            this.hideOverlay();
        }
        open(to, customerlist) {
            console.log('open in ef called')
            this.label = to;
            this.modelCustomerlist1 = customerlist
            this.searchstring = "";
            this.oldlen = 0;
            this.tags = [];
            this.lineWidth = 0;
            this.$.inputField.style.width = "525px";
            this.emailsHeight = 0;
            this.emailsHeightAfterAdd = 0;
            this.tagcount = 0;
            var paras = document.getElementsByClassName('break');
            while (paras[0]) {
                paras[0].parentNode.removeChild(paras[0])
            }
            var paras1 = document.getElementsByClassName('boxclone');
            while (paras1[0]) {
                paras1[0].parentNode.removeChild(paras1[0])
            }
            this.$.emailsCollection.style.minheight = "28px";
        }

        setDisplay() {
            if (this.get('tags')) {
                if (this.get('tags').length > 0) {
                    this.set('display', true);
                } else {
                    this.set('display', false);
                }
            }
        }

        isValidEmail(value) {
            return value.match(/\S+@\S+\.\S+/ig)
        }
        focusout(e) {
            console.log('here is e', e);
            console.log('here is e.target.value', e.target.value);
            if (e.target.value !== "") {
                this.addTag(e.target.value.trim(), e);
            }
        }

       


    }

    customElements.define('defie-emailfilter', DefieEmailfilter)
