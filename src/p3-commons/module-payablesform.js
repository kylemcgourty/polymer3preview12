import {LitElement} from '../../node_modules/@polymer/lit-element/lit-element.js'

import {repeat} from '../../node_modules/lit-html/lib/repeat.js'
import {render, html} from '../../node_modules/lit-html/lib/lit-extended.js';
  
export class ModulePayablesForm extends LitElement {
   
    static get properties() {
        return {
            bmodel: {
                type: Object,
                reflectToAttribute: true,
                notify: true
            },
            smodel: {
                type:Object,
                reflectToAttribute: true,
                notify: true
            },
            showsoinfo: {
                type: Boolean,
                notify: true,
                value: true,
                isToggle: true
            },
            showshippinginfo: {
                type: Boolean,
                notify: true,
                value: true,
                isToggle: true
            },
            searchid: {
                type: Object,
                notify: true,
            },
            disabledinput: {
                type: Object,
                notify: true,
            },
            displaysearch: {
                type: Object,
                notify: true,
            }
        }
    }

    constructor() {
        super();
        this.searchid = {};
        this.disabledinput = {};
        this.displaysearch = {};
    }

    usd(value) {
        var numberWithCommas = function(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }

        if (typeof value == "number") {
            value = value.usd(2);


            value = numberWithCommas(value);

            return value;

        } else if (value === undefined) {

            return;

        } else if (value.indexOf('$') != -1) {

            return value;

        } else {

            value = numberWithCommas(value);

            return '$' + value;
        } 
    };

    doCalculateDates() {

        let val = this.shadowRoot.querySelector("#duedate").value;
        this.smodel.duedate = val;

        if (this.smodel.invoicedate && this.smodel.duedate) {
            this.dispatchEvent(new CustomEvent('docalculate', {
                composed: true,
                bubbles: true,
                detail: {
                    duedate: this.smodel.duedate,
                    discount: this.smodel.discount,
                    dateaging: this.smodel.dateaging,
                    pastduedays: this.smodel.pastduedays,
                    total: this.smodel.total,
                    poid: this.smodel.poid,
                    balance: this.smodel.balance
                }
            }));
        }
    }

    doCalculateDates1() {

        let val = this.shadowRoot.querySelector("#invoicedate").value;
        this.smodel.invoicedate = val;

        if (val) {
            this.dispatchEvent(new CustomEvent('dateCalculator', {
                composed: true,
                bubbles: true,
                detail: {
                    invoicedate: this.smodel.invoicedate,
                }
            }));
        }
    }

    doCalculate() {

        let discount = this.shadowRoot.querySelector("#discount").value;
        let dateaging = this.shadowRoot.querySelector("#dateaging").value;
        let pastduedays = this.shadowRoot.querySelector("#pastduedays").value;
        let total = this.shadowRoot.querySelector("#total").value;
        let poid = this.shadowRoot.querySelector("#poid").value;

        this.smodel.discount = discount;
        this.smodel.dateaging = dateaging;
        this.smodel.pastduedays = pastduedays;
        this.smodel.total = total;
        this.smodel.poid = poid;
        this.smodel.balance = total;

        this.dispatchEvent(new CustomEvent('docalculate', {
            composed: true,
            bubbles: true,
            detail: {
                duedate: this.smodel.duedate,
                discount: this.smodel.discount,
                dateaging: this.smodel.dateaging,
                pastduedays: this.smodel.pastduedays,
                total: this.smodel.total,
                poid: this.smodel.poid,
                balance: this.smodel.balance
            }
        }))
    }

    checkInvoiceUniqueness(e){

        let val = this.shadowRoot.querySelector("#invoiceno").value;

        this.dispatchEvent(new CustomEvent('checkInvoiceUniquenessEvent', {
            composed: true,
            bubbles: true,
            detail: {
                invoiceno: val
            }
        }))
    }

    changepanel(e) {

        var from = e.path[0].id;
        switch (from) {
            case "vendorlist":
                this.dispatchEvent(new CustomEvent('sendvendorlist', {
                    composed: true,
                    bubbles: true,
                }))
                break;
            // case "termlist":
            //     this.dispatchEvent(new CustomEvent('sendtermlist', {
            //         composed: true,
            //         bubbles: true,
            //     }))
            //     break;
        }
    }

    ready() {
        super.ready()
    }

    render({bmodel, smodel, disabledinput, searchid, displaysearch}) {

        return html`<style include="shared-styles iron-flex iron-flex-alignment">

    .card {
        margin: 24px;
        padding: 16px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }

    .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
    }

    h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
    }
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
        border-bottom: 1px dotted #000;
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

    .col-xs-4 {
        position: relative;
        text-align: right;
        min-height: 1px;
        padding-left: 0px;
        padding-right: 0px;
        width: 20%;
        float: left;
    }

    .col-xs-8 {
        position: relative;
        min-height: 1px;
        padding-left: 0px;
        padding-right: 0px;
        width: 75%;
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
        border-bottom: 1px dotted black;
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
        min-height: 24px;
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
        bottom: 4px;
        z-index: 0;
    }

    .right-icon1 {
        position: absolute;
        right: 0;
        bottom: 0px;
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
        line-height: 15px;
        border-bottom: 1px solid #dbdbdb;
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
        height: 24px;
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

    .right-icon1 {
        position: absolute;
        right: 0;
        bottom: 0px;
        z-index: 0;
    }

    .icon-pos {
        position: relative;
    }

    .datecontainer{
        position: relative;
    }

    #datePicker {
        position: absolute;
        left: -435px;
        z-index: 27;
        top: 168px;
    }

    #datePicker1  {
        position: absolute;
        left: -435px;
        z-index: 27;
        top: 168px;
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
    </style>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <section class="nomargin nopadding margin-right">
                <div class="my-content">
                    <div class="title title-margin">
                        <span>${bmodel.title}</span>
                    </div>
                </div>
                <iron-collapse opened="true">
                    <div class="my-content">
                        <div class="col-xs-3">Name</div>
                        <div class="text-right">
                            <input id="billingiron-name" value="${bmodel.companyname}" class="col-xs-9 input" disabled="${disabledinput.bmodel1}">
                        </div>
                        <div id="${searchid.bmodel1}" class="right-icon1 iron-bottom-padding" style="display: ${displaysearch.bmodel1}">
                            <iron-icon id="${searchid.bmodel1}" on-tap="${(e) => this.changepanel(e)}" icon="search" class="hover"></iron-icon>
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Vendor id</div>
                        <div class="text-right">
                            <input value="${bmodel.vendoridver}" class="col-xs-9 input" disabled="${disabledinput.bmodel2}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Acct. Balance</div>
                        <div class="text-right">
                            <input value="${bmodel.balance}" class="col-xs-9 input" disabled="${disabledinput.bmodel3}" on-focusout="${() => this.doCalculate()}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Past-Due Amt.</div>
                        <div class="text-right">
                            <input value="${bmodel.pastdueamount}" class="col-xs-9 input" disabled="${disabledinput.bmodel4}" on-focusout="${() => this.doCalculate()}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Open Credit</div>
                        <div class="text-right">
                            <input value="${bmodel.opencredit}" class="col-xs-9 input" disabled="${disabledinput.bmodel5}" on-focusout="${() => this.doCalculate()}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Term</div>
                        <div class="text-right">
                            <input value="${bmodel.term}" class="col-xs-9 input" disabled="${disabledinput.bmodel6}" on-focusout="${() => this.doCalculateDates()}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Bank Acct.</div>
                        <div class="text-right">
                            <input value="${bmodel.bankaccount}" class="col-xs-9 input" disabled="${disabledinput.bmodel7}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Control Acct.</div>
                        <div class="text-right">
                            <input value="${bmodel.controlaccount}" class="col-xs-9 input" disabled="${disabledinput.bmodel8}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Chart of Acct.</div>
                        <div class="text-right">
                            <input value="${bmodel.apaccount}" class="col-xs-9 input" disabled="${disabledinput.bmodel9}">
                        </div>
                    </div>
                </iron-collapse>
            </section>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <section class="nomargin nopadding margin-left">
                <div class="my-content">
                    <div class="title title-margin">
                        <span class="title-row bottom-left">${smodel.title}</span>
                    </div>
                </div>
                <iron-collapse opened="true">
                    <div class="my-content">
                        <div class="col-xs-3">Invoice No.</div>
                        <div class="text-right">
                            <input id="invoiceno" value="${smodel.invoiceno}" class="col-xs-9 input" disabled="${disabledinput.smodel1}" on-focusout="${() => this.checkInvoiceUniqueness()}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Invoice Date</div>
                        <div class="icon-pos text-right">
                            <input id="invoicedate" value="${smodel.invoicedate}" class="col-xs-9 input" disabled="${disabledinput.smodel2}" on-focusout="${() => this.doCalculateDates1()}" placeholder="Month / Day / Year">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Due Date</div>
                        <div class="icon-pos text-right">
                            <input id="duedate" value="${smodel.duedate}" class="col-xs-9 input" disabled="${disabledinput.smodel3}" on-focusout="${() => this.doCalculateDates()}" placeholder="Month / Day / Year">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">PO id</div>
                        <div class="text-right">
                            <input id="poid" value="${smodel.poid}" class="col-xs-9 input" disabled="${disabledinput.smodel4}" on-focusout="${() => this.doCalculate()}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Discount</div>
                        <div class="text-right">
                            <input id="discount" value="${smodel.discount}" class="col-xs-9 input" disabled="${disabledinput.smodel5}" on-focusout="${() => this.doCalculate()}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Aging (days)</div>
                        <div class="text-right">
                            <input id="dateaging" value="${smodel.dateaging}" class="col-xs-9 input" disabled="${disabledinput.smodel6}" on-focusout="${() => this.doCalculate()}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Past-Due (days)</div>
                        <div class="text-right">
                            <input id="pastduedays" value="${smodel.pastduedays}" class="col-xs-9 input" disabled="${disabledinput.smodel7}" on-focusout="${() => this.doCalculate()}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Invoice Amount</div>
                        <div class="text-right">
                            <input id="total" value="${smodel.total}" class="col-xs-9 input" disabled="${disabledinput.smodel8}" on-focusout="${() => this.doCalculate()}">
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3">Invoice Balance</div>
                        <div class="text-right">
                            <input value="${smodel.balance}" class="col-xs-9 input" disabled="${disabledinput.smodel9}" on-focusout="${() => this.doCalculate()}">
                        </div>
                    </div>
                </iron-collapse>
            </section>
        </div>
    </div>`
    }
}

customElements.define("module-payablesform", ModulePayablesForm);