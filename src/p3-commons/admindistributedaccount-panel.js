import { LitElement } from '../../node_modules/@polymer/lit-element/lit-element.js'

import { repeat } from '../../node_modules/lit-html/lib/repeat.js'
import { render, html } from '../../node_modules/lit-html/lib/lit-extended.js';

export class AdminDistributedAccount extends LitElement {

    static get properties() {

        return {
            data: {
                type: Array,
                reflectToAttribute: true,
                notify: true,
                value: function() {
                    return []
                }
            },
            typemodel: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "",
            },
            savemodel: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "",
            },
            admin: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "superuser"
            },
            headercolor: {
                type: String,
                reflectToAttribute: true,
                notify: true
            }
        }
    }
    static get observers() {
        return [

        ]
    }

    renderItems() {
        const types = data => {

            return html `
            <div>
            ${repeat (
                 data,
                 item => item.id,
                 item => html`
                            <div class="unit">
                                <div class="container layout horizontal">
                                    <input class="input" id="input${item.id}" disabled=${item.disabled} value="${item.account}">
                                    <div style="display: inline-block;">
                                        <paper-icon-button on-tap="${() => this.remove(item)}"  class="right-icon2 smalleranimation" icon="icons:close" style="visibility: ${item.visibility}"></paper-icon-button>
                                    </div>
                                </div>
                            </div>
                          `
                 )}
            <div>`;
        }

        render(types(this.data), this.shadowRoot.querySelector('#table'))
    }

    responseSubmit(request) {
        var auth = request.detail.response.auth
        this.close();
    }

    open(data) {

        if (data.length == 0) {
            data.push({ account: "Bank Account", width: 15, height: 2, id: 1, accounts: [] });
            data.push({ account: "Control Account", width: 15, height: 2, id: 2, accounts: [] });
            data.push({ account: "Credit Cards", width: 15, height: 2, id: 3, accounts: [] });
            this.data = [];
            this.data.push({ account: "Account", range: "Range", disabled: true, visibility: "hidden" });

            this.index = data.length
            if (data) {
                data.forEach((val, i) => {
                    if (i < 3) {
                        val.disabled = true
                        val.visibility = "hidden"
                    }
                })
                this.data = this.data.concat(data)
            }

            this.renderItems()
            this.submit()
        } else {
            this.data = [];
            this.data.push({ account: "Account", range: "Range", disabled: true, visibility: "hidden" });

            this.index = data.length
            if (data) {
                data.forEach((val, i) => {
                    if (i < 3) {
                        val.disabled = true
                        val.visibility = "hidden"
                    }
                })
                this.data = this.data.concat(data)
            }

            this.renderItems()
        }

        // this.updateStyles({
        //     '--title-background-normal': this.headercolor,
        //     '--title-normal': 'white',
        // });

    }

    add() {

        let self = this;
        if (this.data) {
            this.data.forEach(function(val, index) {
                if (val.id) {
                    let newVal = self.shadowRoot.querySelector("#input" + val.id).value;
                    val.account = newVal;
                }
            })
        }

        let largestid = 0;
        this.data.forEach((item, i) => {
            if (item.id > largestid) {
                largestid = item.id
            }
        });

        this.data.push({
            account: "",
            width: 15,
            height: 2,
            id: largestid + 1,
            accounts: []
        });

        this.renderItems();

    }
    submit() {

        let self = this;
        if (this.data) {
            this.data.forEach(function(val, index) {
                if (val.id) {
                    let newVal = self.shadowRoot.querySelector("#input" + val.id).value;
                    val.account = newVal;
                }
            })
        }

        this.dispatchEvent(new CustomEvent('addaccounts', {
            bubbles: true,
            composed: true,
            detail: {
                data: this.data.slice(1)
            }
        }))
        this.close();
    }

    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }
    remove(item) {

        let index = this.data.map(function(x) { return x.id; }).indexOf(item.id);

        this.data.splice(index, 1);

        this.renderItems();

        this.dispatchEvent(new CustomEvent('deleteDistributedAccount', {
            composed: true,
            bubbles: true,
            detail: {
                index: index - 1,
                choice: item
            }
        }))
    }

    render() {


        return html `

                    <style include="shared-styles iron-flex iron-flex-alignment">
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
        }

    

        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 100%;
            margin-top: 0px;
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
            padding-left: 5px;
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

        .iron-list {
            flex: 1 1 auto;
        }

        .container {
        }

        .unit {
        }
        .unit:nth-child(1) {
            background-color: var(--title-background-normal);
        }

        .unit:nth-child(1) .input {
            background-color: var(--title-background-normal);
            font-size: 15px;
            color: white!important;
            box-shadow: none;
            line-height: 1.3;
        }
        .unit:nth-child(1) .container {
           margin-top: 0px;
        }

         .unit:nth-child(1) .remove-icons {
           display: none;
        }
        .right-icon2 {
            position: relative;
            z-index: 0;
        }
        .addIcon {
            position: absolute;
            right: -1px;
            bottom: -8px;
            z-index: 0;
        }
        .smalleranimation, host {
          padding: 0px;
          height: 24px;
          width: 24px;
        }
        </style>
        <div class="title-rightpaneldraw"> Distributed Accounts </div>
        <div style="background-color: #e6e6e6;">
            <div class="close-interface">
                <span on-tap="${() => this.close()}">Close</span>
                <iron-icon icon="close" on-tap="${() => this.close()}"></iron-icon>
            </div>
        </div>
        <div class="table-padding">
            <div class="layout horizontal end">
                <div class="manage col-xs-9" id="innerchange">
                    <div style="padding-right: 40px;">Add</div>
                    <paper-icon-button on-tap="${() => this.add()}" class="addIcon" icon="icons:add"></paper-icon-button>
                </div>
            </div>
            <div id="table">
            </div>
            <div>
                <div class="layout horizontal end">
                    <div class="submit button-row col-xs-9">
                        <paper-button class="button main-button" on-tap="${() => this.submit()}" raised>Submit</paper-button>
                    </div>
                </div>
            </div>
            <iron-ajax id="ajaxOption" method="GET" handle-as="json" on-response="responseOption" content-type="application/json"></iron-ajax>
            <iron-ajax id="ajaxSubmit" method="POST" handle-as="json" on-response="responseSubmit" content-type="application/json"></iron-ajax>
        </div>
        `
    }
}

customElements.define("admindistributedaccount-panel", AdminDistributedAccount);


// <iron-list items="[[data]]" scroll-target="document">
//     <template>
//         <div class="unit">
//             <div class="container layout horizontal">
//                 <iron-input class="col-xs-9 i-input" id="daoption" on-tap="openChoice" bind-value="{{item.account}}" style="padding-right: 8px">
//                     <input class="input" disabled="{{item.disabled}}">
//                 </iron-input>
//                 <div>
//                     <paper-icon-button on-tap="remove"  class="right-icon2 smalleranimation" icon="icons:close" style="visibility: {{item.visibility}}"></paper-icon-button>
//                 </div>
//             </div>
//         </div>
//     </template>
// </iron-list>