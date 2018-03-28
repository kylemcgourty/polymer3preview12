

 import {Element as PolymerElement}
  from '../../node_modules/@polymer/polymer/polymer-element.js'

    import '../../src/p3-commons/customer-sidepanel.js'

    import '../../src/p3-commons/module-abinfo.js'

    import '../../src/p3-commons/module-header.js'


    import '../../src/p3-commons/logout-header.js'

    import '../../src/p3-commons/defie-shippinglabel.js'


       

  export class ShippingLabelsViewElement extends PolymerElement {
        static get template() {
            return ` <style include="shared-styles iron-flex iron-flex-alignment">

    .card {
        margin: 24px;
        padding: 16px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }

         :host {
            display: block;
            box-sizing: border-box;
        }

        #headerContainer {
            z-index: 2;
        }

        #drawer {
            z-index: 2;
        }

        paper-drawer-panel {
            --paper-drawer-panel-left-drawer-container: {
                z-index: 3;
            }
            ;
        }

        section {
            display: block;
            /*padding: 0 16px;*/
        }

        .checkbox {
            float: right;
            width: 20px;
            height: 20px;
        }

        .input {
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            height: 21px!important;
        }
        /* .input {
        min-height: 24px;
        text-align: initial;
        border: none;
        background-color: white;
        margin-left: 1%;

        border-color: #eee;
        border-bottom: 1px solid rgba(155, 155, 155, 0.5);
    }*/

        .input1 {
            border: none;
            height: 18px;
            width: 100%;
            padding-left: 1%;
            box-sizing: border-box;
            background-color: #eee;
        }

        .input-textarea-edit {
            min-height: 24px;
            text-align: left;
            border: hidden;
            border-color: white;
            background-color: white;
            border-bottom: 1px dotted #000;
        }

        .input-textarea-list {
            min-height: 24px;
            text-align: left;
            border: none;
            border-color: white;
            background-color: white;
        }

        .only-mobile {
            display: none;
        }

        .text-right {
            text-align: right;
        }

        .col-xs-12 {
            position: relative;
            min-height: 1px;
            /*padding-left: 15px;
        padding-right: 15px;*/
            float: left;
            width: 100%;
        }

        .col-xs-12a {
            position: relative;
            min-height: 1px;
            /* padding-left: 15px;
        padding-right: 15px;*/
            float: left;
            width: 100%;
        }

        .col-pns {
            position: relative;
            min-height: 1px;
            float: left;
            width: 49%;
            /*border: black solid 1px;*/
        }

        .col-pns1 {
            position: relative;
            min-height: 1px;
            float: left;
            width: 49%;
            /*border: black solid .1px;*/
            /*border: black solid 1px;*/
        }

        .col-md-halfL {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
            border-right: none;
        }

        .col-md-halfR {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
        }

        .col-md-halfL1 {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
            border-right: none;
        }

        .col-md-halfR1 {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
        }

        .col-md-half:nth-child(1n+2) {
            border-top: none;
        }

        .col-md-bottom {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
        }

        .col-md-bottomL {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
            border-right: none;
        }

        .col-md-bottomL1 {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-right: none;
        }

        .col-md-bottom1 {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
        }

        .col-xs-3 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 15%;
            float: left;
            margin-left: 1%
        }

        .col-xs-9 {
            position: relative;
            min-height: 1px;
            /*padding-left: 0px;*/
            padding-right: 0px;
            width: 100%;
        }

        .col-md-6L {
            position: relative;
            min-height: 1px;
            /* padding-left: 22px;
        padding-right: 22px;*/
            float: left;
            width: 49%;
            border: black solid 1px;
            border-right: none;
        }

        .col-md-6R {
            position: relative;
            min-height: 1px;
            /* padding-left: 22px;
        padding-right: 22px;*/
            float: left;
            width: 49%;
            border: black solid 1px;
        }

        .col-xs-6 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 50%;
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
            /*margin-top: 33px;*/
            background-color: #fff;
            min-height: 3000px;
        }

        .my-content {
                display: block;
                min-height: 24px;
                position: relative;
                word-wrap: break-word;
                padding-left: 1px;
                box-sizing: border-box;
                padding-right: 1px;
        }

        .title {
            color: black;
            font-size: 21px;
            font-weight: 400;
        }

        .subtitle {
            font-size: 18px;
            font-weight: 400;
            color: #000;
            margin-left: 0px;
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

        .adjusted-vert {
            margin-top: 8px;
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
            margin-left: 48px;
        }

        .bottom-left {
            line-height: normal;
            position: absolute;
            bottom: 0;
        }

        .right-subicon {
            position: absolute;
            right: 0px;
            bottom: 0px;
            z-index: 10;
        }

        .title-margin {
            margin: 17px 0;
            margin-left: 1%;
        }

        .right-icon {
            position: absolute;
            right: 0;
            bottom: 12px;
            z-index: 0;
        }

        .icon-bottom-position {
            bottom: -8px;
        }

        .bankiron-bottom-positon {
            bottom: 4px;
        }

        .iron-bottom-padding {
            bottom: 5px;
        }

        .days {
            display: inline-block;
            width: 35px;
        }

        .button-row {
            padding-right: 50px;
        }

        .main-button {
            background-color: #406aad;
            color: white;
        }

        .paper-button {
            margin-right: 8px;
            margin-top: 20px;
        }

        paper-toast {
            z-index: 12;
        }

        .ontop {
            position: absolute;
            z-index: 0;
        }

        .vert-centered {
            vertical-align: middle;
        }

        .visible-xs {
            display: none;
        }

        .only-mobile {
            display: none;
        }

        .table-width {
            min-width: 205px;
        }

        .table-row {
            line-height: 48px;
            border-bottom: 1px solid #dbdbdb;
            background-color: white;
            width: 100%;
            font-size: 13px;
            font-weight: 500;
        }

        .email {
            height: 24px;
            text-align: right;
            padding-right: 16px;
        }

        .listfont {
            font-size: 13px;
        }

        .table-right-padding {
            padding-right: 24px;
        }

        .description {
            display: inline-block;
            width: 111px;
        }

        #grid1 {
            --iron-data-table: {
                width: 100%;
                height: 136px;
                flex: none;
            }
            --default-primary-color: #ccc;
            /* --iron-data-table-row-hover: {
                background-color: #eee !important;
            }*/
            /* --iron-data-table-row-selected: {
                background-color: var(--default-primary-color) !important;
                color: red;
            }*/
            --iron-data-table-header: {
                display: none;
                font-weight: 400;
                z-index: 0;
            }
            --iron-data-table-row-odd: {
                background-color: #fff;
            }
            --iron-data-table-row-even: {
                /* background-color: #eee;*/
            }
            --iron-data-table-row-after: {
                background-color: #fff;
                bottom: 16px;
                content: "";
                height: 2px;
                left: 13px;
                pointer-events: none;
                position: absolute;
                right: 0px;
                transition: all 1s ease-in-out;
                -webkit-transform: scaleX(0.0);
                transform: scaleX(0.0);
                z-index: 1;
            }
        }

        data-table-cell {
            align-items: flex-start;
            width: 5%;
            height: 136px;
            flex: none;
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

        .float-left {
            float: left
        }

        .top-space {
            padding-top: 20px;
        }

        .space-left {
            margin-left: 100px;
        }

        .added-width {
            width: 10%;
            flex: none;
        }

        .lowBOMPN {
            width: 19%;
            flex: none;
        }

        .scancode-sizing {
            height: 131px;
            width: 89.5%;
            overflow: auto;
            flex: none;
            margin-bottom: 5px;
        }

        .sn-table {
            width: 71%;
            flex: none;
        }

        .lowered-icon {
            margin-right: 11px;
        }

        .sn-box {
            width: 100%;
        }

        .sn-title {
            padding-left: 33%;
        }

        .add-sn {
            padding-left: 4%;
        }

        .results-here {
            margin-bottom: 116px;
        }

        .serialnumber-button {
            margin: 0px;
            height: 25px;
            margin-top: 5px;
            width: 104px;
            flex: none;
        }

        .scanned {
            width: 5%;
            flex: none;
        }

        .bom {
            line-height: 48px;
            padding-left: 4%;
            flex: none;
        }

        .mfgpn {
            padding-left: 3.5%;
            flex: none;
        }

        .qty {
            padding-left: 2%;
            flex: none;
        }

        .sc {
            padding-left: 3.5%;
            flex: none;
        }

        .input2 {
            text-align: left;
            border: none;
            background-color: white;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 14px;
            line-height: 1.42857143;
            color: #333333;
        }

        .sn {
            padding-left: 24%;
            flex: none;
        }

        .barcode-table {
            padding-top: 24px;
            flex: none;
        }

        .table-titles {
            background-color: #eee;
            box-shadow: 0 2px 0 #cacdd1;
            font-weight: 400;
            height: 48px;
        }

        .IDT {
            width: 14%;
            flex: none;
        }

        .scanspacing {
            margin-left: 65px;
        }

        .scancode-text {
            width: 100px;
            text-align: center;
        }

        .inputblank {
            border: none;
            background-color: white;
        }

        .scancode {
            float: left;
            width: 30%;
            height: 103px;
        }

        .partnumber {
            float: left;
            width: 66%;
            line-height: 50px;
            font-size: 21px;
            font-weight: 400;
        }

        .serialnumbers {
            float: left;
        }

        .sn-words {
            float: left;
            width: 3%;
            font-size: 13px;
            /* padding-left: .75%; */
            margin-left: 1px;
            height: 19px;
            line-height: 21px;
            display: block;
            font-size: 15px;
            padding-right: .75%;
        }

        .sn-input {
            width: 93.999%;
            /*padding-left: 2%;*/
            margin-left: 0;
        }

        .detail-input {
            padding-left: 1%;
            margin-left: 1px;
            width: 98.8%;
        }

        .detail-input1 {
            padding-left: 1%;
            margin-left: 1px;
            width: 47.4%;
        }

        .detail-header {
            padding-left: 1%;
        }

        .detail-header1 {
            padding-left: .5%;
        }

        .desc-input {
            width: 99.5%;
            border: none;
            background-color: #eee;
            padding-left: .5%;
        }

        .col-desc {
            width: 98%;
            border: black solid 1px;
            border-bottom: none;
        }

        .col-desc-bot {
            width: 98%;
            border: black solid 1px;
        }

        .center {
            text-align: center;
        }

        .spacer {
            margin-top: 78px;
            padding-right: 3%;
        }

        .enteredpn {
            text-align: initial;
            border: none;
            background-color: #eee;
            height: 21px;
            width: 63%;
            line-height: 0;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }

        .container {
            padding-left: 2%;
            min-width: 1100px;
        }

        .version {
            float: left;
            color: blue;
        }

        .version:nth-child(1n+2) {
            margin-left: 1%
        }

        .version-container {
            padding-left: 2%;
            margin-top: 155px;
        }

        .shiptitle {
            padding-left: 1%
        }

        .of {
            float: left;
            font-size: 100%;
        }

        .hwr-words {
            float: left;
            width: 5.5%;
            font-size: 13px;
            margin-left: 1px;
            height: 19px;
            line-height: 21px;
            display: block;
            font-size: 15px;
            padding-right: .75%;
        }

        .hwr-input {
            width: 91.444%;
            padding-left: 2%;
            margin-left: 0;
            height: 19px;
        }

        .infocontainer{
            width: 49%;
        }

        .nametitle {
            width: 159px;
                box-sizing: border-box;
                 padding-left: 9px;
        }

        @media (min-width: 1680px) {
            .margin-right {
                margin-right: 57px;
            }
            .margin-left {
                margin-left: 57px;
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
                width: 100%;
            }
            .scancode {
                width: 30%;
                height: 103px;
            }
            .sn-input {
                width: 92.8%;
                padding-left: 2%;
                margin-left: 0;
                height: 19px;
            }
            .sn-words {
                float: left;
                width: 4%;
                font-size: 13px;
                /* padding-left: .75%; */
                margin-left: 1px;
                height: 19px;
                line-height: 21px;
                display: block;
                font-size: 15px;
                padding-right: .75%;
            }
            .hwr-words {
                float: left;
                width: 7%;
                font-size: 13px;
                margin-left: 1px;
                height: 19px;
                line-height: 21px;
                display: block;
                font-size: 15px;
                padding-right: .75%;
            }
            .hwr-input {
                width: 90%;
                padding-left: 2%;
                margin-left: 0;
                height: 19px;
            }
            .desc-input {
                width: 99.4%;
                border: none;
                background-color: #eee;
                padding-left: .5%;
            }
            .detail-input {
                padding-left: 1%;
                margin-left: 1px;
                width: 98.6%;
            }
            .spacer {
                margin-top: 20px;
                padding-right: 7%;
            }
            .version-container {
                padding-left: 2%;
                /*width: 500px;*/
                overflow: auto;
                height: 21px;
                width: 1100px;
                margin-top: 0px;
            }
            .version:nth-child(1n+2) {
                margin-left: 1%
            }
            .container {
                padding-left: 2%;
                margin-top: 20px;
                width: 1100px;
            }
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 16px;
                padding-right: 16px;
                background-color: rgba(238, 238, 238, 1.0);
            }
            .lightgrey-padding-inner {
                /*padding-top: 15px;*/
                /*margin-top: 33px;*/
                /*  background-color: #fff;
            overflow: scroll;
            min-height: 3000px;
            padding-left: 15px;*/
            }
            .lightgrey-padding-inner {
                padding-top: 15px;
                /*margin-top: 33px;*/
                background-color: #fff;
                min-height: 3000px;
                /*overflow: auto;*/
                /*min-width: 1488px;*/
            }
            .detail-input1 {
                padding-left: 1%;
                margin-left: 1px;
                width: 46.8%;
            }
            .totallabel {
                width: 100%;
                /*min-width: 1488px;*/
                overflow: auto;
            }
            .labelholder {
                padding-top: 15px;
                /*margin-top: 33px;*/
                background-color: #fff;
                overflow: auto;
                padding-left: 15px;
                min-width: 1488px;
            }
        }

        @media (max-width: 767px) {
            .scancode {
                width: 30%;
                height: 103px;
            }
            .sn-input {
                width: 92.8%;
                padding-left: 2%;
                margin-left: 0;
                height: 19px;
            }
            .sn-words {
                float: left;
                width: 4%;
                font-size: 13px;
                /* padding-left: .75%; */
                margin-left: 1px;
                height: 19px;
                line-height: 21px;
                display: block;
                font-size: 15px;
                padding-right: .75%;
            }
            .hwr-words {
                float: left;
                width: 7%;
                font-size: 13px;
                margin-left: 1px;
                height: 19px;
                line-height: 21px;
                display: block;
                font-size: 15px;
                padding-right: .75%;
            }
            .hwr-input {
                width: 90%;
                padding-left: 2%;
                margin-left: 0;
                height: 19px;
            }
            .desc-input {
                width: 99.4%;
                border: none;
                background-color: #eee;
                padding-left: .5%;
            }
            .detail-input {
                padding-left: 1%;
                margin-left: 1px;
                width: 98.6%;
            }
            .spacer {
                margin-top: 20px;
                padding-right: 7%;
            }
            .version-container {
                padding-left: 2%;
                /*width: 500px;*/
                overflow: auto;
                height: 21px;
                width: 1100px;
                margin-top: 0px;
            }
            .version:nth-child(1n+2) {
                margin-left: 1%
            }
            .container {
                padding-left: 2%;
                margin-top: 20px;
                width: 1100px;
            }
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 16px;
                padding-right: 16px;
                background-color: rgba(238, 238, 238, 1.0);
            }
            .lightgrey-padding-inner {
                /*padding-top: 15px;*/
                /*margin-top: 33px;*/
                /*  background-color: #fff;
            overflow: scroll;
            min-height: 3000px;
            padding-left: 15px;*/
            }
            .lightgrey-padding-inner {
                padding-top: 15px;
                /*margin-top: 33px;*/
                background-color: #fff;
                min-height: 3000px;
            }
            .detail-input1 {
                padding-left: 1%;
                margin-left: 1px;
                width: 46.8%;
            }
            .totallabel {
                width: 100%;
                /*min-width: 1488px;*/
                overflow: auto;
            }
            .labelholder {
                padding-top: 15px;
                /*margin-top: 33px;*/
                background-color: #fff;
                overflow: auto;
                padding-left: 15px;
                min-width: 1488px;
            }
        }
        </style>
        <paper-drawer-panel id="drawer" drawer-Width="[[drawerwidth]]" force-narrow="true" right-drawer disable-edge-swipe style="overflow-y: scroll;">
            <paper-header-panel slot="main">
                <app-header condenses reveals fixed effects="waterfall blend-background">
                    <app-toolbar class="middle middle-container">
                        <paper-icon-button id="paperToggle" icon="menu" drawer-toggle on-tap="toggleLeft"></paper-icon-button>
                        <div class="app-name" title> View Shipping Labels</div>
                        <logout-header></logout-header>
                    </app-toolbar>
                </app-header>
                <app-location route="{{route}}"></app-location>
                <app-route route="{{route}}"></app-route>
                <section class="new lightgrey-padding card">
                    <div class="lightgrey-padding-inner">
                        <div class="row">
                            <div class="col-xs-12">
                                <module-header id="moduleheader"></module-header>
                            </div>
                        </div>
                        <div class="totallabel">
                            <div class="labelholder">
                                <div class="layout horizontal version-container">
                                   <div class="layout horizontal infocontainer"> <span class="nametitle"> Label name </span><input disabled class="input1"  value="{{labelname}}" id="labelname"> </div>
                                   <div class="layout horizontal infocontainer"> <span class="nametitle"> SO id </span> <input class="input1" disabled  value="{{model.soid}}"> </div> 
                                </div>
                                <defie-shippinglabel id="shippinglabel"></defie-shippinglabel>
                            </div>
                        </div>
                        <div class="row spacer">
                            <div class="col-xs-12 col-md-11"></div>
                            <div class="col-xs-12 col-md-11">
                                <div class="my-content text-right">
                                    <paper-button class="button main-button" on-click="cancel" raised>Cancel</paper-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </paper-header-panel>
        </paper-drawer-panel>
        <iron-ajax id="ajax" method="POST" handle-as="json" on-error="response" on-response="response" content-type="application/json"></iron-ajax>`
        }
        static get properties() {
            return {
                pn1: {
                    type: Array,
                    notify: true,
                    value: function() {
                        return [{
                            labelsn: ''
                        }];
                    }
                },
                reset1: {
                    type: Array,
                    notify: true,
                    value: function() {
                        return []
                    }
                },
                storedIndex: {
                    type: Number,
                    reflectToAttribute: true
                },
                model: {
                    type: Object,
                    reflectToAttribute: true,
                    notify: true,
                    value: function() {
                        return {}
                    }
                },
                hashIndicator: {
                    type: String,
                    value: 'none',
                    reflectToAttribute: true
                },
                saveVersion: {
                    type: Boolean,
                    value: false
                },

                startview: {
                    type: Boolean,
                    reflectToAttribute: true,
                    notify: true,
                },
               
            }
        }

        static get observers() {
            return [

            ]
        }

        constructor() {
            super()

         
        }

        start(returnURL, view){
           
            this.returnURL = returnURL

                this.$.moduleheader.open(this.model.settings, {pagename: "Shipping Label", pageidtext: "Shipping Label id:", pageid: this.model.idver, date: this.convertDate3(this.model.created)})
                this.$.shippinglabel.initializer(this.model, undefined, view)
                this.shadowRoot.getElementById('labelname').value = this.model.labelname

                this.startview = undefined

        }

        cancel() {
            this.set('route.path', this.returnURL)
        }

      



        formatAddress(address, country) {

            return address + ', ' + country
        }

        computeLabels(labels) {
            if (labels && labels.length > 0) {
                return true;
            } else {
                return false;
            }
        }


         convertDate3(input) {
            if (input === undefined) {
                input = new Date().toString();
                return input.slice(4, 16)
            };
            var sliced = input.slice(0, 10);
            var pattern = /(.*?)\-(.*?)\-(.*?)$/;
            var result = sliced.replace(pattern, function(match, p1, p2, p3) {
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                return months[(p2 - 1)] + " " + p3 + " " + p1;
            });
            return result;
        }


       




        edit() {
            this.set('route.path', '/shippinglabels/edit/'+this.model.labelname + "/"+this.model.idver)
        }

       

        titlecolor() {
         
            this.headercolor = "#406aad";

            this.updateStyles({
                '--title-background-normal': this.headercolor,
                '--title-normal': 'white',
            });
        }
        ready() {
            super.ready();

               this.shadowRoot.addEventListener('closePanel', e => {
                this.close();
            });

            this.titlecolor();
        }



    }
customElements.define('shippinglabels-view', ShippingLabelsViewElement);
 