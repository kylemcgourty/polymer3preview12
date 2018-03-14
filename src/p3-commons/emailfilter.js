import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'


import { repeat } from '../../node_modules/lit-html/lib/repeat.js'


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
                type: String,
                reflectToAttribute: true,
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

    open(profileid, customerid, url) {
        this.profileid = profileid
        this.customerid = customerid
        this.url = url

        this.emails = []
        this.shadowRoot.getElementById('searchstring').value = ""
        this.clearContacts()
        this.showAlteredEmails([])
        this.counter = 0
    }



    returnEmails() {
        return this.listofemails = this.emails.map((item, i) => {
            return item.email
        })
    }



    ready() {
        super.ready()
    }

    searchContacts(e) {

        if (e.keyCode == 13) {
            this.insertQuick()
            this.clearContacts()
            return
        }

        let search = this.shadowRoot.getElementById('searchstring').value
        let url = this.url;

        if (!url || !url.includes("search")) {
            url = "/customer/search/contact/" + this.profileid + "/" + this.customerid;
        }
        let ct = sessionStorage.getItem("CUSTOMTOKEN")
        this.shadowRoot.getElementById('ajaxSearch').headers['CustomToken'] = ct;
        this.shadowRoot.getElementById('ajaxSearch').body = JSON.stringify({ "option": "name_l", "query": search })
        this.shadowRoot.getElementById('ajaxSearch').url = url;
        this.shadowRoot.getElementById('ajaxSearch').generateRequest()

    }

    receiveContacts(e) {

        if (e.detail.response.results == null) {
            return
        }

        this.contacts = []

        for (var i = 0; i < e.detail.response.results.length; i++) {
            let item = e.detail.response.results[i]
            if (item.name == " " && item.email == "") {
                continue;
            } else {
                item.id = i
                this.contacts.push(item)
            }
        }

        const contacts = people => {
            return html `
                    <div>
                     ${repeat (
                        people,
                        person => person.id,
                        person => html `
                        <div id$="contact${person.id}" on-tap=${(e)=>{this.addEmail(e);}} class="contactcontainer">
                        <div class="contactname"> ${person.firstname}&nbsp${person.lastname} </div>
                        <div class="contactemail"> ${person.email} </div>
                        </div>`

                        )}

                     </div>`
        }

        render(contacts(this.contacts), this.shadowRoot.getElementById('contacts'))

    }


    clearContacts() {


        this.empty = []
        const contacts = people => {
            return html `
                    <div>
                     ${repeat (
                        people,
                        person => person.id,
                        person => html `
                        <div id$="contact${person.id}" on-tap=${(e)=>{this.addEmail(e)}} class="contactcontainer">
                        <div class="contactname"> ${person.firstname}&nbsp${person.lastname} </div>
                        <div class="contactemail"> ${person.email} </div>
                        </div>`

                        )}

                     </div>`
        }

        render(contacts(this.empty), this.shadowRoot.getElementById('contacts'))
    }

    addEmail(e) {

        this.block = true;

        let contactID = e.path[1].id.split("contact")[1]

        let contact = this.contacts[contactID]

        contact.id = this.counter++

            this.emails.push(contact)

        this.shadowRoot.getElementById('searchstring').value = ""

        this.showAlteredEmails(this.emails)

        this.clearContacts()

    }

    insertEmail(e) {


        if (this.shadowRoot.getElementById('searchstring').value == "") {
            return
        }

        setTimeout(() => {
            if (this.block) {
                this.block = false;
                return;
            }

            this.emails.push({ email: this.shadowRoot.getElementById('searchstring').value, edit: true, id: this.counter++ })

            this.shadowRoot.getElementById('searchstring').value = ""


            this.showAlteredEmails(this.emails)

            this.clearContacts()
        }, 300)




    }

    insertQuick(e) {


        this.emails.push({ email: this.shadowRoot.getElementById('searchstring').value, edit: true, id: this.counter++ })

        this.shadowRoot.getElementById('searchstring').value = ""


        this.showAlteredEmails(this.emails)



    }

    edit(bool) {
        if (bool) {
            return "none"
        } else {
            return "flex"
        }
    }

    edit1(bool) {
        if (bool) {
            return "flex"
        } else {
            return "none"
        }
    }

    editEmail(e) {


        if (!e.path[1].id) {
            return
        }

        let emailID = e.path[1].id.split("email")[1]

        this.emails[emailID].edit = true

        this.showAlteredEmails(this.emails)
        const emails = emails => {
            return html `
                    <div class="emailholder layout horizontal wrap">
                     ${repeat (
                        emails,
                        person => person.id,
                        person => html `
                        <div id$="email${person.id}" on-tap=${(e)=>this.editEmail(e)} class="emailcontainer layout horizontal">
                        <div style="display:${this.edit(person.edit)}" class="emailname"> ${person.firstname}&nbsp${person.lastname}&nbsp${"("+person.email.split("@")[1]+")"}</div>
                        <div style="display:${this.edit1(person.edit)}" class="emailname"> <input id$="edited${person.id}" on-tap=${(e) =>{e.stopPropagation; e.preventDefault}} on-keypress=${(e) =>{e.stopPropagation; e.preventDefault; this.returnEmail(e)}} on-focusout=${(e) =>{e.stopPropagation; e.preventDefault; this.returnEmail1(e)}} class="editfield" value="${person.email}"</div>

                        <div class="clear"> <iron-icon class="clearicon" on-tap="${(e)=>{this.delete(e)}}" id$="identifier${person.id}" icon="icons:clear"></icon>  </div>
                        </div>`

                        )}

                     </div>`
        }


        render(emails(this.emails), this.shadowRoot.getElementById('emaillist'))


    }


    showAlteredEmails(emaillist) {

        const emails = emails => {
            return html `
                    <div class="emailholder layout horizontal wrap">
                     ${repeat (
                        emails,
                        person => person.id,
                        person => html `
                        <div id$="email${person.id}" on-tap=${(e)=>this.editEmail(e)} class="emailcontainer layout horizontal">
                        <div style="display:${this.edit(person.edit)}" class="emailname"> ${person.firstname}&nbsp${person.lastname}&nbsp${"("+person.email.split("@")[1]+")"}</div>
                        <div style="display:${this.edit1(person.edit)}" class="emailname"> ${person.email}</div>
                        <div class="clear"> <iron-icon class="clearicon" on-tap="${(e)=>{this.delete(e)}}" id$="identifier${person.id}" icon="icons:clear"></icon>  </div>
                        </div>`

                        )}

                     </div>`
        }


        render(emails(emaillist), this.shadowRoot.getElementById('emaillist'))

    }


    returnEmail(e) {
        if (e.keyCode == 13) {

            let id = e.path[0].id
            let personid = id.split("edited")[1]
            this.emails[personid].email = this.shadowRoot.getElementById(id).value
            this.showAlteredEmails(this.emails)



        }
    }

    returnEmail1(e) {

        let id = e.path[0].id
        let personid = id.split("edited")[1]
        this.emails[personid].email = this.shadowRoot.getElementById(id).value
        this.showAlteredEmails(this.emails)

    }

    delete(e) {
        let id = e.path[0].id
        let personid = id.split("identifier")[1]

        for (var i = 0; i < this.emails.length; i++) {
            if (personid == this.emails[i].id) {
                this.emails.splice(i, 1)
                break;
            }
        }

        this.showAlteredEmails(this.emails)
    }


    render({ label }) {
        return html ` <style include="shared-styles iron-flex iron-flex-alignment">

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

          .contactemail {


          }

          .contactname {
            font-weight: 600;
          }

          .contactcontainer {
            padding: 5px;
            border-bottom: 1px dashed #dbdcdd;

          }

          .emailcontainer {
            margin-left: 5px;
            border: 1px solid #e0c00b;
                padding-left: 3px;
          }

        .emailcontainer:first-child {
            margin-left: 0px;
          }

          .emailholder {
            width: 100%;
          }

          /*.body {
            margin-top: 44px;
          }*/

          .materialcontainer {
            margin-left: 5px;
          }

          .to {
                position: relative;
                text-align: right;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 0px;
                padding-right: 6px;
                width: 11%;
          }


          .contentbody {
                width: 89%;
          }

          .editfield{
            border: none;
          }

        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
            --iron-icon-width: 18px;
            --iron-icon-height: 18px;
        }
        
       
        
        .header-input {
            text-align: initial;
            border: none;
            background-color: white;
            float: left;
            width: 100%;
        }
        
        .toinput {
            width: 100%;
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
        

        
        .result-panel {
            display:  block;
            position: absolute;
            /*opacity: 0;*/
            margin-left: 12%;
            width: 88%;
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

        .
        
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
        <div class="body">
            <div class="layout horizontal">
                <div class="to">${label}:</div>
                <div class="layout vertical contentbody">
                    <div class="text-right">
                        <div class="my-content">
                            <div id="emaillist" >
                            </div>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="my-content">
                            <div id="emailsCollection" class="header-input"></div>
                            <div class="header-input">
                                    <input class="toinput" id="searchstring" on-focusout="${(e) => this.insertEmail(e)}}" on-keyup="${(e) =>this.searchContacts(e)}">
                            </div>
                        </div>
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