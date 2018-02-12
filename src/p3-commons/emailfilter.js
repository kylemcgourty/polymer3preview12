
import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'


  import {repeat} from '../../node_modules/lit-html/lib/repeat.js'


import { render } from '../../node_modules/lit-html/lib/lit-extended.js';


  export class DefieEmailfilter extends LitElement {
       

       
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
              
            ]
        }
        constructor() {
            super();


            
        }

        open(profileid, customerid){
            this.profileid = profileid
            this.customerid = customerid
        }


        ready() {
            super.ready()
        }

        searchContacts(e) {
            console.log('searchContacts called', e)

            let search = this.shadowRoot.getElementById('searchstring').value

            this.shadowRoot.getElementById('ajaxSearch').body = JSON.stringify({"option": "name_l", "query": search})
            this.shadowRoot.getElementById('ajaxSearch').url = "/customer/search/contact/" + this.profileid + "/" + this.customerid 
            this.shadowRoot.getElementById('ajaxSearch').generateRequest()

        }

        receiveContacts(e) {

            console.log('e the response', e.detail.response.results )

            this.contacts = e.detail.response.results.map((item, index) => {
                item.id = index
                return item
            })

            console.log('the contacts', this.contacts)
            const contacts = people => {
                return html`
                    <div>
                     ${repeat (
                        people,
                        person => person.id,
                        person => html `

                        <div> ${person.name} </div>
                        <div> ${person.email} </div>`
                        )}

                     </div>`
            }

            render(contacts(this.contacts), this.shadowRoot.getElementById('contacts'))

        }
       

         render() {
        return html` <style include="shared-styles iron-flex iron-flex-alignment">
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
                <div class="col-xs-3">${this.label}</div>
            </div>
            <div class="text-right">
                <div class="my-content">
                    <div id="emailsCollection" class="header-input">
                        
                                        <input class="input email-width" value="${this.tag}">
                              
                            <input class="toinput" id="searchstring" value="${this.searchstring}" on-focusout="focusout" on-keyup="${(e) =>this.searchContacts(e)}">
                    </div>
                </div>
            </div>
            <div class="bounder" style="position: relative;">
                <div id="contacts" class="result-panel layout vertical">
                    
                </div>
            </div>
            <canvas hidden id="canvas"></canvas>
            <div hidden>
                <div id="remainingbox" class="remainingbox"> [[remaining]] more </div>
                <br id="break">
            </div>
        </div>
        <iron-ajax id="ajaxSearch" method="POST" on-response=${this.receiveContacts.bind(this)} on-error="ajaxerror"></iron-ajax>
       `
    }

       


    }

    customElements.define('defie-emailfilter', DefieEmailfilter)
