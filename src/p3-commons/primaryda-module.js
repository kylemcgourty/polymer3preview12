import {LitElement} from '../../node_modules/@polymer/lit-element/lit-element.js'

import {repeat} from '../../node_modules/lit-html/lib/repeat.js'
import {render, html} from '../../node_modules/lit-html/lib/lit-extended.js';

export class PrimaryDAModule extends LitElement {

    static get properties() {
        return {

            maxwidth: {
                type: Number,
                value: 320
            },
            maxheight: {
                type: Number,
                value: 320
            },
            edit: {
                type: Object,
                reflectToAttribute: true,
            },
            view: {
                type: String,
                reflectToAttribute: true,
            },
            text: {
                type: Array,
                value: function() {
                    return [{
                        text: ""
                    }]
                },
            },

            panelText: {
                type: String,
                reflectToAttribute: true
            },
            account: {
                type: String,
                reflectToAttribute: true,
                notify: true
            },
            range: {
                type: String,
                reflectToAttribute: true,
                notify: true
            },
            height: {
                type: Number,
                reflectToAttribute: true,
                notify: true
            },

            data: {
                type: Object,
                reflectToAttribute: true,
                notify: true,
            },
            dataleft: {
                type: Object,
                reflectToAttribute: true,
                notify: true,
            },
            dataright: {
                type: Object,
                reflectToAttribute: true,
                notify: true,
            },
            showDisplay: {
                type: String,
                reflectToAttribute: true,
                notify: true,
            },
            isCoA: {
                type: Boolean,
                notify: true,
            },
            leftXDisplay: {
                type: String,
                reflectToAttribute: true,
                notify: true,
            },
            inputAccWidth: {
                type: String,
                reflectToAttribute: true,
                notify: true,
            },
        }
    }

    static get observers() {
        return [
        ]
    }

    CoAChange(isCoA) {
        if (isCoA === true) {
            this.isCoA = true;
        }
    }

    constructor() {
        super()
        // this.dataFields = {"address": "Address", "phone": "Phone", "acctno": "Acct. No.", "routing": "Routing No.", "switch": "Switch No.", "others": "Others"};
    }

    seeStatus(edit) {
        if (edit.enableleft === true && edit.enableright === true) {
            this.showDisplay = 'none';
            this.inputAccWidth = '82%';
            this.leftXDisplay = 'none';
            // this.updateStyles({
            //     '--set-edit-color': 'white',
            //     '--set-edit-border': '2px solid white',
            // })
        }
        else if (edit.enableleft === true && edit.enableright === false) {
            this.showDisplay = 'none';
            this.inputAccWidth = '82%';
            this.leftXDisplay = 'none';
            // this.updateStyles({
            //     '--set-edit-color': 'white',
            //     '--set-edit-border': '2px solid white',
            // })
        }
        else if (edit.enableleft === false) {
            this.showDisplay = 'block';
            this.inputAccWidth = '79%';
            this.leftXDisplay = 'inline-block';
            // this.updateStyles({
            //     '--set-edit-color': 'white',
            //     '--set-edit-border': '2px solid rgb(238, 238, 238)',
            // })
        }

    }

    show1(v) {
        if (v == "view") {
            return "show"
        } else {
            return "view"
        }
    }
    show(v) {
        if (v == "edit") {
            return "show"
        } else {
            return "view"
        }
    }

    remove(e) {
        this.splice('data', e.model.index, 1)
    }

    deleteAccountLine(item) {

        this.dispatchEvent(new CustomEvent('deleteAccountLine', {
            composed: true,
            bubbles: true,
            detail: {
                id: this.data.id,
                lor: this.data.leftorright,
                delete: true,
                index: item.id,
            }
        }))
    }

    keepTrackOfMissingItems(e) {
        if (!this.data.accounts) {
            this.set('data.accounts', [])
        }
        var accList = this.data.accounts
        var findMissing = accList.sort(function(a, b) {
            return parseInt(a.accountno) - parseInt(b.accountno)
        })


        var rangeAllowed = Math.abs(this.data.high - this.data.low) + 1
        var missingList = [];
        var currentList = [];
        var availableList = [];

        var possibleList = [...Array(rangeAllowed).keys()].map(x => x += this.data.low)

        this.data.accounts.map((e) => currentList.push(parseInt(e.accountno)))

        possibleList.some((acc) => {
            var found = currentList.indexOf(acc)
            if (found === -1) {
                return availableList.push(acc)

            }
        })

        if (availableList.length !== 0) {
            this.push('data.accounts', {
                account: "",
                accountno: availableList[0].toString()
            })
        } else {
            console.log("here is a placeholder for maximum length")
        }

    }
    addText(e) {

        var BU = [];
        e.target.baseURI.split('/').map((e) => {
            if (e === 'apchartofaccounts-new') {
                BU[0] = 'apchartofaccounts-new'
            }
        })

        if (BU[0] === 'apchartofaccounts-new') {
            this.isCoA = true;
        } else {
            this.isCoA = false;
        }

        if (this.isCoA === true) {
            // this.keepTrackOfMissingItems(e)
        }
        else {
            // if (this.data.accounts === null) {
            //     console.log("in if null")
            //     this.set("data.accounts", [{
            //         account: "",
            //         accountno: "",
            //         id: 0,
            //         titleid: this.data.id,
            //          bankaccountno: "",
            //         address: "",
            //         phone: "",
            //         routing: "",
            //         switch: "",
            //         others: ""

            //     }])
            // }

            // else {
            //     console.log("inside if not null")
            //     this.push('data.accounts', {
            //         account: "",
            //         accountno: "",
            //         bankaccountno: "",
            //         address: "",
            //         phone: "",
            //         routing: "",
            //         switch: "",
            //         others: ""
            //     })
            // }
            this.dispatchEvent(new CustomEvent('addAccountLine', {
                composed: true,
                bubbles: true,
                detail: {
                    id: this.data.id,
                    lor: this.data.leftorright,
                    delete: false,
                }
            }))
        }
    }

    itemChanged(item) {

        let id = item.id;
        let accountno = this.shadowRoot.querySelector("#inputAccno" + id).value;
        let account = this.shadowRoot.querySelector("#inputAcc" + id).value;
        let bankaccountno = this.shadowRoot.querySelector("#inputBankacc" + id).value;
        let address = this.shadowRoot.querySelector("#inputAddr" + id).value;
        let phone = this.shadowRoot.querySelector("#inputPhone" + id).value;
        let routing = this.shadowRoot.querySelector("#inputRouting" + id).value;
        let swtch = this.shadowRoot.querySelector("#inputSwitch" + id).value;
        let others = this.shadowRoot.querySelector("#inputOthers" + id).value;
        this.dispatchEvent(new CustomEvent('changeAccountLine', {
            composed: true,
            bubbles: true,
            detail: {
                id: this.data.id,
                lor: this.data.leftorright,
                delete: true,
                index: id,
                account: account,
                accountno: accountno,
                bankaccountno: bankaccountno,
                address: address,
                phone: phone,
                routing: routing,
                swtch: swtch,
                others: others
            }
        }));
    }

    ready() {
        super.ready();

        this.shadowRoot.addEventListener('update-text', e => {
            this.shadowRoot.querySelector('iron-list').dispatchEvent(new CustomEvent('iron-resize', {
                composed: true,
                bubbles: true
            }))
        })
    }

    render({view, edit, account, data, showDisplay, inputAccWidth, leftXDisplay, isCoA}) {

        this.seeStatus(edit);
        this.CoAChange(isCoA);

        return html`
        <style include="shared-styles iron-flex iron-flex-alignment">
        paper-drawer-panel {
            --paper-drawer-panel-right-drawer-container: {
                position: fixed;
            }
            ;
            --paper-drawer-panel-scrim: {
                position: fixed;
            }
            ;
        }
        
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
            --title-background-normal: black;
            --title-normal: white;
        }
        
        app-header {
            top: 0;
            left: 0;
            width: 100%;
            height: 73px;
            color: var(--title-normal);
            --app-header-background-front-layer: {
                background-color: var(--title-background-normal);
            }
            ;
            --app-header-background-rear-layer: {
                background-color: white;
            }
            ;
        }
        
        paper-drawer-panel {
            --paper-drawer-panel-left-drawer-container: {
                z-index: 3;
            }
            ;
        }
        
        section {
            display: block;
        }
        
        .only-mobile {
            display: none;
        }
        
        .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }
        
        .input-textarea-edit {
            text-align: left!important;
            width: 100%;
            border: hidden;
            border-color: white;
            background-color: white;
        }
        
        .input-textarea-list {
            text-align: left;
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
            float: left;
            width: 100%;
        }
        
        .col-xs-3 {
            position: relative;
            text-align: right;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 15%;
            float: left;
        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 80%;
        }
        
        .col-md-6 {
            position: relative;
            min-height: 1px;
            float: left;
            width: 50%;
        }
        
        .col-xs-6 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 50%;
        }
        
        .col-xs-12a {
            position: relative;
            min-height: 1px;
            float: left;
            width: 100%;
        }
        
        iron-collapse.expanded {
            max-height: 100%;
        }
        
        .line-under {
            position: absolute;
        }
        
        .text-right {
            text-align: right;
        }
        
        .lightgrey-padding {
            padding-top: 0;
            background-color: white;
        }
        
        .lightgrey-padding-inner {
            padding-top: 15px;
            background-color: #fff;
            min-height: 1700px;
        }
        
        .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
        }
        
        .title {
            color: black;
            font-size: 21px;
            font-weight: 400;
            border-bottom: 1px solid #f50057;
        }
        
        .subtitle {
            font-size: 15px;
            font-weight: 400;
            color: #000;
            margin-left: 36px;
        }
        
        .title-margin {
            margin: 17px 0;
        }
        
        .section {
            margin-bottom: 24px;
        }
        
        .bottom {
            min-height: 48px;
            position: relative;
            bottom: 0px;
        }
        
        .nopadding {
            padding: 0px;
        }
        
        .no-bottom-padding {
            bottom: 0;
        }
        
        .nomargin {
            margin-bottom: 0px;
        }
        
        .div {
            bottom: -5px;
        }
        
        .my-iron-icon {
            margin-left: 0px;
        }
        
        .title-row {
            line-height: normal;
        }
        
        .right-subicon {
            position: absolute;
            right: 0px;
            bottom: 0px;
            z-index: 0;
        }
        
        .right-icon {
            position: absolute;
            right: 0;
            bottom: -4px;
            z-index: 0;
        }
        
        .right-icon1 {
            position: absolute;
            right: 0;
            bottom: -6px;
            z-index: 0;
        }
        
        .iron-bottom-positon {}
        
        .bankiron-bottom-positon {
            bottom: 4px;
        }
        
        .iron-bottom-padding {}
        
        .days {
            display: inline-block;
            width: 35px;
        }
        
        .button-row {
            padding-top: 15px;
        }
        
        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }
        
        .paper-button {
            margin-right: 8px;
            margin-top: 20px;
        }
        
        .lightgrey-padding-inner1 {
            background-color: #fff;
        }
        
        .email {
            height: 24px;
            text-align: right;
            padding-right: 16px;
        }
        
        .table-row {
            background-color: white;
            width: 100%;
            font-size: 13px;
            font-weight: 500;
        }
        
        .last-column {}
        
        .fourfontsize {
            font-size: 21px;
        }
        
        .button-row {
            margin-right: 8px;
            margin-bottom: 32px;
        }
        
        .bottom {
            min-height: 48px;
            position: relative;
            bottom: 0px;
        }
        
        .listfont {
            font-size: 13px;
        }
        
        .listfontdesc {
            font-size: 13px;
            height: 18px;
            overflow: hidden;
        }
        
        .table-right-padding {}
        
        .table-width {
            min-width: 205px;
        }
        
        .withinboundary {
            width: 100%;
        }
        
        #Handling {
            --paper-input-container-label: {
                font-size: 13px!important;
            }
            ;
        }
        
        :host {
            --paper-input-container-label: 13px;
        }
        
        .specialpadding {
            padding-right: 9px;
        }
        
        .partlist {
            padding-top: 16px;
            padding-left: 0%;
            font-size: 16px;
            font-weight: 500;
        }
        
        .logout {
            float: right;
            font-size: 14px;
            line-height: 2;
        }
        
        .removeborder {
            border: none;
            background-color: white;
        }
        
        #list {
            width: 100%;
            flex: 1 1 auto;
        }
        
        .ilholder {
            display: flex;
            flex-direction: column;
        }
        
        .bod {
            height: 100%;
            background-color: white;
        }
        
        .icon {
            margin-left: 14px;
            margin-right: 14px;
            margin: auto;
        }
        
        .rm-icon-mid {
            padding-left: 14px;
            padding-right: 0px;
            margin: auto;
        }
        
        .mobile-opts {
            display: none;
        }
        
        .show {
            display: block!important;
            visibility: visible!important;
        }
        
        .appendages {
            background-color: #eee;
            width: 100%;
        }
        
        .container {
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            width: 100%;
        }
        
        .data {
            background-color: #eee;
            overflow: hidden;
            height: 33px;
            width: 100%;
        }
        
        .input1 {
            text-align: right;
            border: none;
            background-color: #eee;
            width: 100%;
            color: black;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 14px;
        }
        
        .serialtitle {
            line-height: 2.0;
            padding-left: 10px;
            width: 133px;
            box-sizing: border-box;
        }
        
        .desktop-only {
            display: block;
        }
        
        .mobile-only {
            display: none;
        }
        
        .topmargin {
            margin-top: 24px;
        }

        .keeper:nth-child(1) .topmargin {
            margin-top: 0px!important
        }

        @media(max-width: 1854px) {
            .desktop-only {
                display: none!important;
            }
            .mobile-only {
                display: block!important;
            }
            .input1 {
                text-align: left
            }
        }
        
        @media (min-width: 1680px) {
            .margin-right {
                margin-right: 52px;
            }
            .margin-left {
                margin-left: 52px;
            }
        }
        
        @media (min-width: 768px) and (max-width: 1679px) {
            .margin-right {
                margin-right: 15px;
            }
            .margin-left {
                margin-left: 15px;
            }
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 24px;
                padding-right: 24px;
                background-color: white;
            }
            .col-xs-3 {
                position: relative;
                text-align: right;
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
            #grid1 {
                overflow: auto
            }
        }
        
        @media (max-width: 767px) {
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 16px;
                padding-right: 16px;
                background-color: rgba(238, 238, 238, 1.0);
            }
            .only-mobile {
                display: inline-block;
            }
            .only-desktop {
                display: none;
            }
            .lightgrey-padding-inner {
                background-color: #fff;
                min-height: 1300px;
            }
            .col-xs-12 {
                position: relative;
                min-height: 1px;
                float: left;
                padding: 0;
                width: 100%;
            }
            .col-md-6 {
                position: relative;
                min-height: 1px;
                float: left;
                width: 100%;
                padding: 0;
            }
            .col-xs-3 {
                position: relative;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 0px;
                width: 30%;
                float: left;
            }
            .col-xs-9 {
                position: relative;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 0px;
                width: 65%;
            }
            .button-row {
                padding-right: 8px;
            }
            .right-icon {
                position: absolute;
                right: 0;
                bottom: 8px;
                z-index: 0;
            }
            .logout {
                float: right;
                font-size: 14px;
                line-height: 2;
                margin-top: 15%;
            }
            #grid1 {
                overflow: auto
            }
        }
        
        @media (max-width: 479px) {
            .options {
                display: none!important;
            }
            .desk-title,
            .desk-title2 {
                display: none!important;
            }
            .mobile-title {
                display: block!important;
            }
            .data {
                width: 100%;
            }
            .big-frame {
                padding: 0px 0px;
                background: rgba(238, 238, 238, 0.5);
            }
            .search-padding {
                padding-left: 0px;
                padding-right: 0px;
            }
            .right-icon {
                max-width: 24px;
                max-height: 24px;
                width: 24px;
                height: 24px;
            }
            .only-mobile {
                display: inline-block;
            }
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 4vw;
                padding-right: 4vw;
                padding-bottom: 4vw;
                background-color: rgba(238, 238, 238, 1.0);
            }
            .lightgrey-padding-inner {
                background-color: #fff;
                min-height: 2700px;
            }
        }
        
        @media (min-width: 415px) {
            .mobile-only {
                display: none;
            }
            .desktop-only {
                display: inline-block;
            }
        }
        #addbill {
        }
        #addship {
        }
        .right-icon1 {
            position: absolute;
            right: 0;
            bottom: -6px;
            z-index: 0;
        }

        .firstInput {
            width: 15%; 
            padding-right: 1%
        }
        .right-icon2 {
            display: inline-block;
            position: relative;
            color: #5e6268;
            z-index: 1;
        }
        .smalleranimation, host {
          padding: 0px;
          height: 22px;
          width: 22px;
        }
        </style>
        <div class="my-content">
            <div class="title title-margin">
                <span data-render$="${this.show1(view)}"> ${account.prefix} ${account.account} ${account.suffix}
                    <paper-icon-button class="my-iron-icon hidden-md hidden-lg bottom-left only-mobile" icon="expand-more"></paper-icon-button>
                </span>
                <div class="right-icon iron-bottom-positon" data-render$="${view}" id="${data.id}" on-tap="${(e) => this.addText(e)}" style="display:${showDisplay}">
                    <paper-icon-button icon="add-circle"></paper-icon-button>
                </div>
            </div>
        </div>
        <div id="table">
            ${repeat (
                this.data.accounts,
                item => item.id,
                item => html`
                    <div class="keeper">
                        
                        <div class="layout horizontal my-conten topmargin" style="width:100%">
                            <input class="input firstInput" id="inputAccno${item.id}" value="${item.accountno}" on-focusout="${() => this.itemChanged(item)}" style="text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px" disabled="${edit.enableleft}">
                            <input id="inputAcc${item.id}" style="width: ${inputAccWidth}" value="${item.account}" on-focusout="${() => this.itemChanged(item)}" disabled="${edit.enableright}" class="input">
                            <paper-icon-button class="right-icon2 smalleranimation" style="display:${leftXDisplay}; font-size:14px; font-family: 'Roboto', 'Noto', sans-serif;" icon="icons:close" on-tap="${(e) => this.deleteAccountLine(item)}"></paper-icon-button>
                        </div>

                        <div class="layout horizontal my-content" style="width:100%">
                            <input disabled class="input firstInput" id="firstInnerInputB" value="Address" style="text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px">
                            <input id="inputAddr${item.id}" style="width: 82%" value="${item.address}" on-focusout="${() => this.itemChanged(item)}" disabled="${edit.enableright}" class="input">
                        </div>
                        
                        <div class="layout horizontal my-content" style="width:100%">
                            <input disabled class="input firstInput" id="firstInnerInputC" value="Phone" style="text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px">
                            <input id="inputPhone${item.id}" style="width: 82%" value="${item.phone}" on-focusout="${() => this.itemChanged(item)}" disabled="${edit.enableright}" class="input">
                        </div>
                        
                        <div class="layout horizontal my-content" style="width:100%">
                            <input disabled class="input firstInput" id="firstInnerInputD" value="Acct. No." style="text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px">
                            <input id="inputBankacc${item.id}" style="width: 82%" value="${item.bankaccountno}" on-focusout="${() => this.itemChanged(item)}" disabled="${edit.enableright}" class="input">
                        </div>

                        <div class="layout horizontal my-content" style="width:100%">
                            <input disabled class="input firstInput" id="firstInnerInputE" value="Routing No." style="text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px">
                            <input id="inputRouting${item.id}" style="width: 82%" value="${item.routing}" on-focusout="${() => this.itemChanged(item)}" disabled="${edit.enableright}" class="input">
                        </div>
                         
                        <div class="layout horizontal my-content" style="width:100%">
                            <input disabled class="input firstInput" id="firstInnerInputF" value="Switch No." style="text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px">
                            <input id="inputSwitch${item.id}" style="width: 82%" value="${item['switch']}" on-focusout="${() => this.itemChanged(item)}" disabled="${edit.enableright}" class="input">
                        </div>
                        
                        <div class="layout horizontal my-content" style="width:100%">
                            <input disabled class="input firstInput" id="firstInnerInputG" value="Others" style="text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px">
                            <input id="inputOthers${item.id}" style="width: 82%" value="${item.others}" on-focusout="${() => this.itemChanged(item)}" disabled="${edit.enableright}" class="input">
                        </div>
                        
                        <div class="removeholder">
                        </div>

                    </div>
                    `
            )}
        </div>
        `
    }

}

customElements.define("primaryda-module", PrimaryDAModule)

        // <iron-list items="{{data.accounts}}" id="list" scroll-target="document">
        //     <template>
        //         <div class="keeper">
        //             <div class="layout horizontal my-conten topmargin" style="width:100%">
        //                 <iron-input class="firstInput" bind-value="{{item.accountno}}">
        //                     <input  class="input" id="firstInnerInput" style="width:100%; text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px" disabled="[[edit.enableleft]]">
        //                 </iron-input>
        //                 <iron-input  style="width: 84%;" bind-value="{{item.account}}">
        //                     <input style="width:100%"  disabled="[[edit.enableright]]" class="input">
        //                     <paper-icon-button  class="right-icon2 smalleranimation" style="display:{{showDisplay}};  font-size:14px; font-family: 'Roboto', 'Noto', sans-serif;" icon="icons:close" on-tap="deleteAccountLine"></paper-icon-button>

        //                 </iron-input>
        //             </div>
        //             <div class="layout horizontal my-content" style="width:100%">


        //                 <iron-input class="firstInput" bind-value="{{dataFields.address}}">
        //                     <input disabled class="input" id="firstInnerInput" style="width:100%; text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px" disabled="[[edit.enableleft]]">
        //                 </iron-input>
        //                 <iron-input  style="width: 84%;" bind-value="{{item.address}}">
        //                     <input style="width:100%"  disabled="[[edit.enableright]]" class="input">
        //                 </iron-input>
        //              </div>
        //             <div class="layout horizontal my-content" style="width:100%">

        //                 <iron-input class="firstInput" bind-value="{{dataFields.phone}}">
        //                     <input disabled class="input" id="firstInnerInput" style="width:100%; text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px" disabled="[[edit.enableleft]]">
        //                 </iron-input>
        //                 <iron-input  style="width: 84%;" bind-value="{{item.phone}}">
        //                     <input style="width:100%"  disabled="[[edit.enableright]]" class="input">
        //                 </iron-input>
        //             </div>
        //             <div class="layout horizontal my-content" style="width:100%">

        //                 <iron-input class="firstInput" bind-value="{{dataFields.acctno}}">
        //                     <input disabled class="input" id="firstInnerInput" style="width:100%; text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px" disabled="[[edit.enableleft]]">
        //                 </iron-input>
        //                 <iron-input  style="width: 84%;" bind-value="{{item.bankaccountno}}">
        //                     <input style="width:100%"  disabled="[[edit.enableright]]" class="input">
        //                 </iron-input>
        //             </div>
        //             <div class="layout horizontal my-content" style="width:100%">

        //                 <iron-input class="firstInput" bind-value="{{dataFields.routing}}">
        //                     <input disabled class="input" id="firstInnerInput" style="width:100%; text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px" disabled="[[edit.enableleft]]">
        //                 </iron-input>
        //                 <iron-input  style="width: 84%;" bind-value="{{item.routing}}">
        //                     <input style="width:100%"  disabled="[[edit.enableright]]" class="input">
        //                 </iron-input>
        //             </div>
        //             <div class="layout horizontal my-content" style="width:100%">

        //                 <iron-input class="firstInput" bind-value="{{dataFields.switch}}">
        //                     <input disabled class="input" id="firstInnerInput" style="width:100%; text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px" disabled="[[edit.enableleft]]">
        //                 </iron-input>
        //                 <iron-input  style="width: 84%;" bind-value="{{item.switch}}">
        //                     <input style="width:100%"  disabled="[[edit.enableright]]" class="input">
        //                 </iron-input>
        //             </div>
        //             <div class="layout horizontal my-content" style="width:100%">
        //                 <iron-input class="firstInput" bind-value="{{dataFields.others}}">
        //                     <input disabled class="input" id="firstInnerInput" style="width:100%; text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px" disabled="[[edit.enableleft]]">
        //                 </iron-input>
        //                 <iron-input  style="width: 84%;" bind-value="{{item.others}}">
        //                     <input style="width:100%"  disabled="[[edit.enableright]]" class="input">
        //                 </iron-input>
        //             </div>
        //                 <div class="removeholder">
        //                 </div>
        //             </div>
        //         </div>
        //     </template>
        // </iron-list>