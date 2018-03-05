import {LitElement} from '../../node_modules/@polymer/lit-element/lit-element.js'

import {repeat} from '../../node_modules/lit-html/lib/repeat.js'
import {render, html} from '../../node_modules/lit-html/lib/lit-extended.js';

export class EnterPaymentPanel extends LitElement {
    
    static get properties() {
        return {
            model: {
                type: Object,
                reflectToAttribute: true,
                notify: true,
                value: function() {
                    return {}
                }
            },
            bmodel: {
                type: Object,
                reflectToAttribute: true,
                notify: true
            },
            smodel: {
                type: Object,
                reflectToAttribute: true,
                notify: true
            },
            showbilling: {
                type: Boolean,
                notify: true,
                value: true,
                // isToggle: true
            },
            showshipping: {
                type: Boolean,
                notify: true,
                value: true,
                isToggle: true
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
            showpaymentinfo1: {
                type: String,
                notify: true,
                value: "none",
                isToggle: true
            },
            showpaymentinfo2: {
                type: String,
                notify: true,
                value: "none",
                isToggle: true
            },
            showpaymentinfo3: {
                type: String,
                notify: true,
                value: "none",
                isToggle: true
            },
            showpaymentinfo4: {
                type: String,
                notify: true,
                value: "none",
                isToggle: true
            },
            showpaymentinfo5: {
                type: String,
                notify: true,
                value: "none",
                isToggle: true
            },
            toggleIcon1: {
                type: String,
                notify: true,
                value: "expand-more",
                isToggle: true
            },
            toggleIcon2: {
                type: String,
                notify: true,
                value: "expand-more",
                isToggle: true
            },
            toggleIcon3: {
                type: String,
                notify: true,
                value: "expand-more",
                isToggle: true
            },
            toggleIcon4: {
                type: String,
                notify: true,
                value: "expand-more",
                isToggle: true
            },
            toggleIcon5: {
                type: String,
                notify: true,
                value: "expand-more",
                isToggle: true
            },
            previouspaymentinfo: {
                type: Array,
                value: function() {
                    return []
                }
            }
        }
    }

    constructor() {
        super();
    }

    open(showpaymentinfo) {

        this.set(showpaymentinfo, "block")

        if (this.previouspaymentinfo.length >= 1) {
            var previous = this.previouspaymentinfo.pop();
            if (previous != showpaymentinfo) {
                this.set(previous, "none")
            }
        }

        this.push('previouspaymentinfo', showpaymentinfo)

    }

    doCalculate() {
        this.dispatchEvent(new CustomEvent('docalculate', {
            composed: true,
            bubbles: true,
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
            case "termlist":
                this.dispatchEvent(new CustomEvent('sendtermlist', {
                    composed: true,
                    bubbles: true,
                }))
                break;
        }
    }


    togglePaymentInfo1(e) {
        if (this.showpaymentinfo1 === "block") {
            this.set('showpaymentinfo1', "none")
            this.set('toggleIcon1', 'expand-more')
        } else {
            this.set('showpaymentinfo1', "block")
            this.set('toggleIcon1', 'expand-less')
        }
    }

    togglePaymentInfo2(e) {
        if (this.showpaymentinfo2 === "block") {
            this.set('showpaymentinfo2', "none")
            this.set('toggleIcon2', 'expand-more')
        } else {
            this.set('showpaymentinfo2', "block")
            this.set('toggleIcon2', 'expand-less')
        }
    }

    togglePaymentInfo3(e) {
        if (this.showpaymentinfo3 === "block") {
            this.set('showpaymentinfo3', "none")
            this.set('toggleIcon3', 'expand-more')
        } else {
            this.set('showpaymentinfo3', "block")
            this.set('toggleIcon3', 'expand-less')
        }
    }

    togglePaymentInfo4(e) {
        if (this.showpaymentinfo4 === "block") {
            this.set('showpaymentinfo4', "none")
            this.set('toggleIcon4', 'expand-more')
        } else {
            this.set('showpaymentinfo4', "block")
            this.set('toggleIcon4', 'expand-less')
        }
    }

    togglePaymentInfo5(e) {
        if (this.showpaymentinfo5 === "block") {
            this.set('showpaymentinfo5', "none")
            this.set('toggleIcon5', 'expand-more')
        } else {
            this.set('showpaymentinfo5', "block")
            this.set('toggleIcon5', 'expand-less')
        }
    }

    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    save(e) {
        this.dispatchEvent(new CustomEvent('savePayableAsPayment', {
            composed: true,
            bubbles: true,
            detail: {
                currentmodel: this.model,
                paymenttype: e.path[0].id.split('-')[0]
            }

        }))
    }

    response(request) {
        var result = request.detail.response;
        if (result.error) {
            document.querySelector('#toast').text = result.error;
            document.querySelector('#toast').show();
        } else {
            this.model = result.results;
        }
    }

    ready() {
        super.ready();
    }

    render() {
        return html`<style include="shared-styles iron-flex iron-flex-alignment">

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

        .payment-right {
            margin-right: 52px;
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
            background-color: #5b0727;
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
            /*margin-bottom: 32px;*/
            margin-bottom:0px;
        }

        .bottom {
            min-height: 48px;
            position: relative;
            bottom: 0px;
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

         .title-rightpaneldraw {
            font-size: 16px;
            background-color: #e6e6e6;
            padding-left: 5%;
            padding-bottom: 0%;
            padding-top: 3%;
        }

        .table-padding {
            padding-left: 5%;
            padding-right: 5%;
            margin-top: 20px;
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
         
        }

        @media (min-width: 768px) and (max-width: 1679px) {
          
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
        <div class="title-rightpaneldraw"> Enter Payment </div>
        <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
        <div class="table-padding">
        <div class="row">
           
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        
                        <section style="display: {{showpaymentinfo2}}" class="nopadding nomargin margin-left payment-right">
                            <div class="my-content">
                                <div class="title title-margin">
                                    <span on-tap="showDropdown" data-id="showshippinginfo">[[binfo.title]]
                                                    </span>

                                </div>
                            </div>
                            <div >
                                <div class="my-content">
                                    <div class="col-xs-3">[[binfo.info1]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.binfovalues.binfo1_value}}">
                                            <input class="input" disabled="[[disabledinput.binfo1]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.binfo1]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.binfo1]]">
                                        <iron-icon id="[[searchid.binfo1]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content" on-tap="openDatePicker">
                                    <div class="col-xs-3">[[binfo.info2]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.binfovalues.binfo2_value}}">
                                            <input class="input" disabled="[[disabledinput.binfo2]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.binfo2]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.binfo2]]">
                                        <iron-icon id="[[searchid.binfo2]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[binfo.info3]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.binfovalues.binfo3_value}}">
                                            <input class="input" disabled="[[disabledinput.binfo3]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.binfo3]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.binfo3]]">
                                        <iron-icon id="[[searchid.binfo3]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[binfo.info4]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.binfovalues.binfo4_value}}">
                                            <input class="input" disabled="[[disabledinput.binfo4]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.binfo4]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.binfo4]]">
                                        <iron-icon id="[[searchid.binfo4]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[binfo.info5]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.binfovalues.binfo5_value}}">
                                            <input class="input" disabled="[[disabledinput.binfo5]]" on-focusout="doCalculate">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.binfo5]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.binfo5]]">
                                        <iron-icon id="[[searchid.binfo5]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                
                            </div>
                        </section>
                        <section style="display: {{showpaymentinfo3}}" class="nomargin nopadding margin-right payment-right">
                            <div class="my-content">
                                <div class="title title-margin">
                                    <span on-tap="showDropdown" data-id="showsoinfo">[[cinfo.title]]
                                    </span>

                                </div>
                            </div>
                            <div >
                                <div class="my-content">
                                    <div class="col-xs-3">[[cinfo.info1]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.cinfovalues.cinfo1_value}}">
                                            <input class="input" disabled="[[disabledinput.cinfo1]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.cinfo1]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.cinfo1]]">
                                        <iron-icon id="[[searchid.cinfo1]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[cinfo.info2]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.cinfovalues.cinfo2_value}}">
                                            <input class="input" disabled="[[disabledinput.cinfo2]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.cinfo2]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.cinfo2]]">
                                        <iron-icon id="[[searchid.cinfo2]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[cinfo.info3]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.cinfovalues.cinfo3_value}}">
                                            <input class="input" disabled="[[disabledinput.cinfo3]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.cinfo3]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.cinfo3]]">
                                        <iron-icon id="[[searchid.cinfo3]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[cinfo.info4]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.cinfovalues.cinfo4_value}}">
                                            <input class="input" disabled="[[disabledinput.cinfo4]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.cinfo4]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.cinfo4]]">
                                        <iron-icon id="[[searchid.cinfo4]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[cinfo.info5]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.cinfovalues.cinfo5_value}}">
                                            <input class="input" disabled="[[disabledinput.cinfo5]]" on-focusout="doCalculate">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.cinfo5]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.cinfo5]]">
                                        <iron-icon id="[[searchid.cinfo5]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                
                            </div>
                        </section>
                        <section style="display: {{showpaymentinfo4}}" class="nopadding nomargin margin-left payment-right">
                            <div class="my-content">
                                <div class="title title-margin">
                                    <span on-tap="showDropdown" data-id="showshippinginfo">[[dinfo.title]]
                                                    </span>

                                </div>
                            </div>
                            <div >
                                <div class="my-content">
                                    <div class="col-xs-3">[[dinfo.info1]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.dinfovalues.dinfo1_value}}">
                                            <input class="input" disabled="[[disabledinput.dinfo1]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.dinfo1]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.dinfo1]]">
                                        <iron-icon id="[[searchid.dinfo1]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content" on-tap="openDatePicker">
                                    <div class="col-xs-3">[[dinfo.info2]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.dinfovalues.dinfo2_value}}">
                                            <input class="input" disabled="[[disabledinput.dinfo2]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.dinfo2]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.dinfo2]]">
                                        <iron-icon id="[[searchid.dinfo2]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[dinfo.info3]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.dinfovalues.dinfo3_value}}">
                                            <input class="input" disabled="[[disabledinput.dinfo3]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.dinfo3]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.dinfo3]]">
                                        <iron-icon id="[[searchid.dinfo3]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[dinfo.info4]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.dinfovalues.dinfo4_value}}">
                                            <input class="input" disabled="[[disabledinput.dinfo4]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.dinfo4]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.dinfo4]]">
                                        <iron-icon id="[[searchid.dinfo4]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[dinfo.info5]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.dinfovalues.dinfo5_value}}">
                                            <input class="input" disabled="[[disabledinput.dinfo5]]" on-focusout="doCalculate">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.dinfo5]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.dinfo5]]">
                                        <iron-icon id="[[searchid.dinfo5]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                
                            </div>
                        </section>
                        <section style="display: {{showpaymentinfo5}}" class="nomargin nopadding margin-right payment-right">
                            <div class="my-content">
                                <div class="title title-margin">
                                    <span on-tap="showDropdown" data-id="showsoinfo">[[einfo.title]]
                                    </span>

                                </div>
                            </div>
                            <div >
                                <div class="my-content">
                                    <div class="col-xs-3">[[einfo.info1]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.einfovalues.einfo1_value}}">
                                            <input class="input" disabled="[[disabledinput.einfo1]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.einfo1]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.einfo1]]">
                                        <iron-icon id="[[searchid.einfo1]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[einfo.info2]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.einfovalues.einfo2_value}}">
                                            <input class="input" disabled="[[disabledinput.einfo2]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.einfo2]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.einfo2]]">
                                        <iron-icon id="[[searchid.einfo2]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[einfo.info3]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.einfovalues.einfo3_value}}">
                                            <input class="input" disabled="[[disabledinput.einfo3]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.einfo3]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.einfo3]]">
                                        <iron-icon id="[[searchid.einfo3]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[einfo.info4]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.einfovalues.einfo4_value}}">
                                            <input class="input" disabled="[[disabledinput.einfo4]]">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.einfo4]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.einfo4]]">
                                        <iron-icon id="[[searchid.einfo4]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                <div class="my-content">
                                    <div class="col-xs-3">[[einfo.info5]]</div>
                                    <div class="text-right">
                                        <iron-input class="col-xs-9" bind-value="{{model.einfovalues.einfo5_value}}">
                                            <input class="input" disabled="[[disabledinput.einfo5]]" on-focusout="doCalculate">
                                        </iron-input>
                                    </div>
                                    <div id="[[searchid.einfo5]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.einfo5]]">
                                        <iron-icon id="[[searchid.einfo5]]" on-tap="changepanel" icon="search" class="hover"></iron-icon>
                                    </div>
                                </div>
                                
                            </div>
                        </section>
                    </div>
            </div>
        </div>`
    }
}

customElements.define("enterpayment-panel", EnterPaymentPanel);