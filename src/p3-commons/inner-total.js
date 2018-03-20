import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'

import { render } from '../../node_modules/lit-html/lib/lit-extended.js'

export class InnerTotal extends LitElement {
    static get properties() {
        return {
            profilesection: {
                type: Boolean,
                value: true,
            },
            totalsection: {
                type: Boolean,
                value: true,
            },
            viewpage: {
                type: Boolean,
                value: false,
            },
            tax: {
                type: String,
                notify: true
            },
            totals: {
                type: Object,
                notify: true,
                value: function() {
                    return {
                        "profit": Number(0).usd(2),
                        "profitmargin": Number(0).pct(2),
                        "nontax": Number(0).usd(2),
                        "subtotal": Number(0).usd(2),
                        "handling": Number(0).usd(2),
                        "shippingtax": Number(0).usd(2),
                        "shippingnotax": Number(0).usd(2),
                        "taxamt": Number(0).usd(2),
                        "total": Number(0).usd(2),
                        "approval": ""
                    };
                }
            },
        }
    }

    doCalculate() {
        this.dispatchEvent(new CustomEvent("docalculateHS", {
            bubbles: true,
            composed: true,
            detail: {
                handling: this.shadowRoot.querySelector('#handling').value,
                shippingnotax: this.shadowRoot.querySelector('#shippingnotax').value,
            }
        }))
    }

    constructor() {
        super();
    }

    response(request) {
        var result = request.detail.response;
        var dqs = document.querySrelector('#toast');
        result.error ? (dqs.text = result.error && dqs.show()) : this.model = result.results
    }

    renderItems(totals, tax) {
        this.totals = totals
        this.tax = tax

        const searchtypes = (data, tax, profilesection, totalsection, viewpage) => {

            return html `
                    <div class="subtable col-xs-12 col-sm-12 col-md-6 col-lg-6 only-desktop" hidden="${ !profilesection }">
                        <section class="nomargin nopadding margin-right">
                            <div class="my-content">
                                <div class="col-xs-3-totals">Profit</div>
                                <div class="text-right col-xs-9-totals" style="float:right">
                                    <div>
                                        <input class="subtable-input" disabled value="${ data.profit }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content">
                                <div class="col-xs-3-totals">Profit Margin</div>
                                <div class="text-right col-xs-9-totals" style="float:right">
                                    <div>
                                        <input class="subtable-input" disabled value="${ data.profitmargin }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content">
                                <div class="col-xs-3-totals">Non-Tax Amt</div>
                                <div class="text-right col-xs-9-totals" style="float:right">
                                    <div>
                                        <input class="subtable-input" disabled value="${ data.nontax }">
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="subtable col-xs-12 col-sm-12 col-md-6 col-lg-6" hidden="${ !totalsection }">
                        <section class="nomargin nopadding margin-left">
                            <div class="my-content">
                                <div class="col-xs-3-totals">Sub Total</div>
                                <div class="text-right col-xs-9-totals" style="float:right">
                                    <div>
                                        <input class="subtable-input" disabled value="${ data.subtotal }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content">
                                <div class="col-xs-3-totals">Tax (${ tax })</div>
                                <div class="text-right col-xs-9-totals" style="float:right">
                                    <div>
                                        <input class="subtable-input" disabled value="${ data.taxamt }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content">
                                <div class="col-xs-3-totals">Handling</div>
                                <div class="text-right col-xs-9-totals" style="float:right">
                                    <div>
                                        <input class="subtable-input" id="handling" hidden="${ viewpage }" value="${ data.handling }" on-focusout="${() => this.doCalculate()}">
                                        <input class="subtable-input" id="handling" hidden="${ !viewpage }" disabled value="${ data.handling }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content">
                                <div class="col-xs-3-totals">Shipping</div>
                                <div class="text-right col-xs-9-totals" style="float:right">
                                    <div>
                                        <input class="subtable-input" id="shippingnotax" hidden="${ viewpage }" value="${ data.shippingnotax }" on-focusout="${() => this.doCalculate()}">
                                        <input class="subtable-input" id="shippingnotax" hidden="${ !viewpage }"  disabled value="${ data.shippingnotax }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content">
                                <div class="col-xs-3-totals">Total</div>
                                <div class="text-right col-xs-9-totals" style="float:right">
                                    <div>
                                        <input class="subtable-input" disabled value="${ data.total }">
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="subtable col-xs-12 col-sm-12 col-md-6 col-lg-6" hidden="${ !profilesection }">
                        <section class="nomargin nopadding margin-right mobile-only">
                            <iron-collapse>
                                <div class="my-content">
                                    <div class="col-xs-3-totals">Profit</div>
                                    <div class="text-right col-xs-9-totals" style="float:right">
                                        <div>
                                            <input class="subtable-input" disabled value="${ data.profit }">
                                        </div>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3-totals">Profit Margin</div>
                                    <div class="text-right col-xs-9-totals" style="float:right">
                                        <div>
                                            <input class="subtable-input" disabled value="${ data.profitmargin }">
                                        </div>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3-totals">Non-Tax Amt</div>
                                    <div class="text-right col-xs-9-totals" style="float:right">
                                        <div>
                                            <input class="subtable-input" disabled value="${ data.nontax }">
                                        </div>
                                    </div>
                                </div>
                            </iron-collapse>
                        </section>
                    </div>
      `;
        }

        render(searchtypes(this.totals, this.tax, this.profilesection, this.totalsection, this.viewpage), this.shadowRoot.querySelector('#total'))
    }
    ready() {
        super.ready();
    }

    render({}) {
        return html `

        <style include="shared-styles iron-flex iron-flex-alignment">

        .card {
        margin: 24px;
        padding: 16px;
        /*color: #757575;*/
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
        
        .bd2-2 .input1,
        .bd8-2 .input1,
        .bd7-2 .input1 {
            outline: #545659 auto 5px;
            outline-offset: -2px;
        }
        
        .mobileheader {
            display: none;
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
        
        .sideicons {
            text-align: right;
        }
        
        .sideicons .my-iron-icon {
            margin-left: 24px;
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
        
        .unit:nth-child(2) {
            background-color: var(--title-background-normal);
            color: white;
            font-size: 17px;
            line-height: 2.5;
            border-bottom: none;
        }
        
        .unit:nth-child(2) .data {
            background-color: var(--title-background-normal);
            color: white;
            height: 38px;
            font-size: 17px;
            min-height: 38px;
            line-height: 2.5;
            box-shadow: none;
            margin-top: 0px;
            height: 40px;
        }
        
        .unit:nth-child(2) .options {
            background-color: var(--title-background-normal);
            color: white;
            height: 35px;
            font-size: 17px;
            min-height: 35px;
            line-height: 2.5;
            margin-top: 0px;
        }
        
        .unit:nth-child(2) .actions-header {
            display: block;
            background-color: var(--title-background-normal);
            color: white;
            height: 35px;
            font-size: 17px;
            min-height: 35px;
            line-height: 2.3;
            box-shadow: none;
            margin-top: 0px;
            margin: auto;
        }
        
        .unit:nth-child(2) .data-container,
        .unit:nth-child(2) .container {
            height: 40px;
            margin-top: 0px;
        }
        
        .unit:nth-child(2) .opt1,
        .unit:nth-child(2) .icon1,
        .unit:nth-child(2) .icon2 {
            display: none;
        }
        
        .unit:nth-child(2) .group10,
        .unit:nth-child(2) .group11,
        .unit:nth-child(2) .group12,
        .unit:nth-child(2) .appendages {
            display: none!important;
        }
        
        .unit:nth-child(2) .options {
            visibility: hidden;
        }
        
        .unit:nth-child(2) .tax {
            display: none
        }
        
        .unit:nth-child(2) .bd6-1head {
            display: inline-block;
        }
        
        .bd6-1head {
            display: none;
        }
        
        .unit:nth-child(2) .input1 {
            background-color: var(--title-background-normal);
            color: white;
            height: 38px;
            font-size: 18px;
            min-height: 38px;
            line-height: 2.5;
            pointer-events: none;
            outline: none;
        }
        
        .actions-header {
            display: none;
        }
        
        [class$="-1head"] {
            display: none;
        }
        
        .only-mobile {
            display: none;
        }
        
        .checkbox {
            float: right;
            width: 20px;
            height: 20px;
        }
        
        .subtable {
            margin-top: 10px;
        }
        
        .subtable-input {
            width: 100%;
            text-align: right;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            box-sizing: border-box;
            padding-right: 5px
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
        
        .col-xs-3-totals {
            position: relative;
            text-align: right;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 65%;
            float: left;
        }
        
        .col-xs-9-totals {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            width: 30%;
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
            border-bottom: 1px dotted black;
            position: absolute;
        }
        
        .text-right {
            text-align: right;
        }
        
        .lightgrey-padding {
            padding-top: 0;
/*            padding-left: 48px;
            padding-right: 48px;*/
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
        
        .tax {
            --paper-checkbox-size: 15px;
            padding-left: 11px;
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
        
        .core {
            height: 33px;
            width: 100%;
        }
        
        .icon1,
        .icon2 {
            margin-top: -5px;
        }
        
        .i-input {
            width: 100%;
            box-sizing: border-box;
            padding-right: 3px;
            padding-left: 3px;
        }
        
        .bd9-2 .input1 {
            padding-right: 2px;
            box-sizing: border-box;
        }
        
        #showSN {
            display: block
        }
        
        div[class^="group"] {
            padding-left: 9px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            height: 29px;
            flex-shrink: 0;
            overflow: hidden;
        }
        
        div[class^="box"] {
            height: 29px;
            flex-shrink: 0;
            width: 100%
        }
        
        div[class^="bd"] {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 2;
            height: 29px;
            flex-shrink: 0;
            box-sizing: border-box;
        }
        
        div[class^="bd1-m"] {
            width: 0px;
            height: 0px;
            min-width: 0px;
        }
        
        .noshrink {
            flex-shrink: 0
        }
        
        .sn-container {
            display: none!important;
        }
        
        #showSN {
            display: block!important;
        }
        
        .show {
            display: block!important;
            visibility: visible!important;
        }
        
        .serials {
            visibility: hidden;
        }
        
        .serials2 {
            display: none;
        }
        
        .appendages {
            background-color: #eee;
            width: 100%;
        }
        
        .unit {
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
            overflow: hidden;
        }
        
        .opt1 {
            height: 30px;
            box-sizing: border-box;
            line-height: 2;
            padding-left: 10px;
        }
        
        .options {
            min-width: 133px;
            width: 9%;
            flex-shrink: none;
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            flex-shrink: 0;
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
        
        .group1 {
            min-width: 127px;
            width: 7.7%;
            flex-grow: 1;
        }
        
        .group2 {
            min-width: 102px;
            width: 5.8%;
            flex-grow: 1;
        }
        
        .group3 {
            width: 7%;
            flex-grow: 1;
            min-width: 102px;
        }
        
        .group4 {
            min-width: 100px;
            width: 28.5%;
            flex-grow: 1;
        }
        
        .group5 {
            width: 6%;
            flex-grow: 1;
            min-width: 90px;
        }
        
        .group6 {
            width: 1%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }
        
        .group7 {
            width: 4%;
            flex-grow: 1;
            min-width: 63px;
        }
        
        .group8 {
            width: 7%;
            flex-grow: 1;
            min-width: 120px;
        }
        
        .group9 {
            width: 7%;
            flex-grow: 1;
            min-width: 120px;
        }
        
        .group10,
        .bd10-1,
        .group11,
        .bd11-1 {
            height: 24px!important;
        }
        
        .group12 {
            height: auto!important;
            display: none;
        }
        
        .group12 [class^="bd"] {
            height: 24px!important
        }
        
        .group12 [class="bd12-1head"] {
            display: block;
        }
        
        .bd1-1 {
            min-width: 100px;
            width: 100%;
        }
        
        .bd1-2 {
            min-width: 110px;
            width: 100%;
            padding-left: 6px;
        }
        
        .bd2-1 {
            min-width: 71px;
            width: 100%;
        }
        
        .bd2-2 {
            min-width: 104px;
            width: 100%;
        }
        
        .bd2-mob {
            min-width: 0px;
            width: 100%;
        }
        
        .bd3-1 {
            min-width: 71px;
            width: 100%;
        }
        
        .bd3-2 {
            min-width: 104px;
            width: 100%;
        }
        
        .bd4-1 {
            min-width: 80px;
            width: 100%;
            padding-left: 23px;
            box-sizing: border-box;
        }
        
        .bd4-2 {
            min-width: 140px;
            width: 100%;
        }
        
        .bd4-head {
            min-width: 46px;
            width: 100%;
        }
        
        .bd5-1 {
            min-width: 71px;
            width: 100%;
        }
        
        .bd5-1 .input1 {
            text-align: left!important;
        }
        
        .bd5-2 {
            min-width: 82px;
            width: 100%;
        }
        
        .bd6-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }
        
        .bd7-2 {
            min-width: 70px;
            width: 100%;
        }
        
        .bd8-2,
        .bd9-2 {
            min-width: 120px;
            width: 100%;
        }
        
        .bd8-2 {
            box-sizing: border-box;
            padding-right: 5px;
        }
        
        .bd4-1 .input1 {
            text-align: left!important;
        }
        
        .bd6-2 .input1 {
            text-align: left!important;
        }
        
        .group12 [class$="head"] {
            width: 120px!important;
            display: inline-block;
        }
        
        .group10 [class^="bd"],
        .group11 [class^="bd"],
        .group12 [class^="bd"],
        .serialtitle {
            line-height: 1.5!important
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
        
        .dot {
            overflow: auto;
            height: 40px;
        }
        
        .desktop-only {
            display: block;
        }
        
        .mobile-only {
            display: none;
        }
        
        @media(max-width: 1854px) {
            .unit:nth-child(2) {
                display: none!important;
            }
            .mobileheader {
                background-color: var(--title-background-normal);
                color: white;
                height: 24px;
                font-size: 19px;
                line-height: 1.3;
                pointer-events: none;
                display: block;
                text-align: center;
            }
            [class$="-1head"],
            [class$="-3head"] {
                display: inline-block;
                width: 120px;
            }
            .input1 {
                text-align: left
            }
            [class^="group"] {
                width: 230px;
                max-width: 230px;
                min-width: 230px;
                box-sizing: border-box;
            }
            .core,
            .data,
            .data-container,
            .options {
                height: auto;
            }
            .bd4-1 {
                padding-left: 0px;
            }
            .bd1-1 .i-input {
                margin-left: -1px!important;
            }
            .opt1,
            .iconholder {
                margin: auto;
            }
            .bd5-1 .input1 {
                width: 100%!important;
            }
            .bd6-1head {
                display: inline-block!important;
            }
            .bd6-2 {
                padding-left: 0px;
            }
            .bd6-2 .i-input {
                padding-left: 4px!important;
            }
            .bd6-2 .input1 {
                font-size: 14px;
            }
            .bd8-2 {
                padding-right: 0px;
            }
            .group1 .i-input,
            .group2 .i-input,
            .group3 .i-input,
            .group4 .i-input,
            .group5 .i-input,
            .group6 .i-input,
            .group7 .i-input,
            .group8 .i-input,
            .group9 .i-input {
                margin-left: -4px;
            }
            .tax {
                padding-left: 0px;
            }
            .i-input {
                width: 44%!important;
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
            .mobile-only {
                display: block;
            }
            .desktop-only {
                display: none;
            }
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
            .col-xs-3-totals {
                position: relative;
                text-align: right;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 0px;
                width: 30%;
                float: left;
            }
            .col-xs-9-totals {
                position: relative;
                min-height: 1px;
                padding-left: 0px;
                width: 65%;
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
            .bd4-1 .i-input {
                width: 40%!important;
            }
            [class^="group"] {
                width: 92vw;
                max-width: 92vw;
                min-width: 92vw;
                box-sizing: border-box;
            }
            .i-input {
                width: 65%;
            }
            .bd4-1 {
                padding-left: 0px;
            }
            .bd5-1 .i-input {
                width: 44%;
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
            .dot {
                height: 30px;
            }
        }
        
        @media (min-width: 415px) {
        }
        </style>
        <div id="total"></div>
        `
    }
}
customElements.define('inner-total', InnerTotal)