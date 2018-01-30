  import {Element as PolymerElement}
   from '../../node_modules/@polymer/polymer/polymer-element.js'

 

 export class ModuleBillshipto extends PolymerElement {
      

        static get template() {
            return `
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
            bottom: -10px;
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
            /*padding-right: 16px;*/
        }
        #addship {
            /*padding-right: 16px;*/
        }
      
        </style>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <section class="nomargin nopadding margin-right">
                    <div class="my-content">
                        <div class="title title-margin">
                            <span on-tap="showDropdown" data-id="showbilling">[[bmodel.title]]<paper-icon-button class="my-iron-icon hidden-md hidden-lg bottom-left  only-mobile" on-tap="showDropdown" icon="expand-more" data-id="showbilling"></paper-icon-button>
                                            </span>
                            <div class="right-icon iron-bottom-positon" style="display: [[displaysearch.bmodelicon]]">
<!--                                 <iron-icon id="addbill" icon="add-circle" data-dialog="popup-billto" class="hover" on-tap="changepanel"></iron-icon>
                                <iron-icon id="billlist" icon="editor:format-list-bulleted" class="hover" on-tap="changepanel"></iron-icon> -->

                                <paper-icon-button id="addbill" icon="add-circle" data-dialog="popup-billto" class="hover" on-tap="changepanel"></paper-icon-button>
                                <paper-icon-button id="billlist" icon="editor:format-list-bulleted" class="hover" on-tap="changepanel"></paper-icon-button>


                            </div>
                        </div>
                    </div>
                    <iron-collapse opened="{{showbilling}}">
                        <div class="my-content">
                            <div class="col-xs-3">Company</div>
                            <div class="text-right">
                                <iron-input id="billingiron-name" class="col-xs-9" bind-value="{{model.bmodel.companyname}}">
                                    <input class="input" disabled="[[disabledinput.bmodel1]]">
                                </iron-input>
                            </div>
                            <div id="[[searchid.bmodel1]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.bmodel1]]">

                                <paper-icon-button id="[[searchid.bmodel1]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">Attention</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.bmodel.attention}}">
                                    <input class="input" disabled="[[disabledinput.bmodel2]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">Street</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.bmodel.street}}">
                                    <input class="input" disabled="[[disabledinput.bmodel3]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">City</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.bmodel.city}}">
                                    <input class="input" disabled="[[disabledinput.bmodel4]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">State</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.bmodel.state}}">
                                    <input class="input" disabled="[[disabledinput.bmodel5]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">Zip Code</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.bmodel.zipcode}}">
                                    <input class="input" disabled="[[disabledinput.bmodel6]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">Country</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.bmodel.country}}">
                                    <input class="input" disabled="[[disabledinput.bmodel7]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">Phone</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.bmodel.phone}}">
                                    <input class="input" disabled="[[disabledinput.bmodel8]]">
                                </iron-input>
                            </div>
                        </div>
                    </iron-collapse>
                </section>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <section class="nomargin nopadding margin-left">
                    <div class="my-content">
                        <div class="title title-margin">
                            <span on-tap="showDropdown" data-id="showshipping" class="title-row bottom-left">[[smodel.title]]<paper-icon-button class="my-iron-icon hidden-md hidden-lg bottom-left  only-mobile" on-tap="showDropdown" icon="expand-more" data-id="showshipping"></paper-icon-button>
                                            </span>
                            <div class="right-icon iron-bottom-positon" style="display: [[displaysearch.smodelicon]]">
 <!--                                <iron-icon icon="add-circle" data-dialog="popup-shipto" class="hover" id="addship" on-tap="changepanel"></iron-icon>
                                <iron-icon icon="editor:format-list-bulleted" class="hover" id="shiplist" on-tap="changepanel"></iron-icon>
 -->
                                <paper-icon-button icon="add-circle" data-dialog="popup-shipto" class="hover" id="addship" on-tap="changepanel"></paper-icon-button>
                                <paper-icon-button icon="editor:format-list-bulleted" class="hover" id="shiplist" on-tap="changepanel"></paper-icon-button>


                            </div>
                        </div>
                    </div>
                    <iron-collapse opened="{{showshipping}}">
                        <div class="my-content">
                            <div class="col-xs-3">Company</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.smodel.companyname}}">
                                    <input class="input" disabled="[[disabledinput.smodel1]]">
                                </iron-input>
                                <div id="[[searchid.smodel1]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.smodel1]]">
                                    <!-- <iron-icon id="[[searchid.smodel1]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                    <paper-icon-button id="[[searchid.smodel1]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>
                                </div>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">Attention</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.smodel.attention}}">
                                    <input class="input" disabled="[[disabledinput.smodel2]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">Street</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.smodel.street}}">
                                    <input class="input" disabled="[[disabledinput.smodel3]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">City</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.smodel.city}}">
                                    <input class="input" disabled="[[disabledinput.smodel4]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">State</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.smodel.state}}">
                                    <input class="input" disabled="[[disabledinput.smodel5]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">Zip Code</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.smodel.zipcode}}">
                                    <input class="input" disabled="[[disabledinput.smodel6]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">Country</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.smodel.country}}">
                                    <input class="input" disabled="[[disabledinput.smodel7]]">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">Phone</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.smodel.phone}}">
                                    <input class="input" disabled="[[disabledinput.smodel8]]">
                                </iron-input>
                            </div>
                        </div>
                    </iron-collapse>
                </section>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <section class="nomargin nopadding margin-right">
                    <div class="my-content">
                        <div class="title title-margin">
                            <span on-tap="showDropdown" data-id="showsoinfo">[[ainfo.title]]<paper-icon-button class="my-iron-icon hidden-md hidden-lg bottom-left only-mobile" on-tap="showDropdown" icon="expand-more" data-id="showsoinfo"></paper-icon-button>
                            </span>
                        </div>
                    </div>
                    <iron-collapse opened="{{showsoinfo}}">
                        <div class="my-content">
                            <div class="col-xs-3">[[ainfo.info1]]</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.ainfovalues.ainfo1_value}}">
                                    <input class="input" disabled="[[disabledinput.ainfo1]]">
                                </iron-input>
                            </div>
                            <div id="[[searchid.ainfo1]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.ainfo1]]">
                                <!-- <iron-icon id="[[searchid.ainfo1]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                <paper-icon-button id="[[searchid.ainfo1]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">[[ainfo.info2]]</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.ainfovalues.ainfo2_value}}">
                                    <input class="input" disabled="[[disabledinput.ainfo2]]">
                                </iron-input>
                            </div>
                            <div id="[[searchid.ainfo2]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.ainfo2]]">
                                <!-- <iron-icon id="[[searchid.ainfo2]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                <paper-icon-button id="[[searchid.ainfo2]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>

                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">[[ainfo.info3]]</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.ainfovalues.ainfo3_value}}" on-focusout="doCalculateTax">
                                    <input class="input" disabled="[[disabledinput.ainfo3]]">
                                </iron-input>
                            </div>
                            <div id="[[searchid.ainfo3]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.ainfo3]]">
                                <!-- <iron-icon id="[[searchid.ainfo3]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                <paper-icon-button id="[[searchid.ainfo3]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>

                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">[[ainfo.info4]]</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.ainfovalues.ainfo4_value}}">
                                    <input class="input" disabled="[[disabledinput.ainfo4]]">
                                </iron-input>
                            </div>
                            <div id="[[searchid.ainfo4]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.ainfo4]]">
                                <!-- <iron-icon id="[[searchid.ainfo4]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                <paper-icon-button id="[[searchid.ainfo4]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>

                            </div>
                        </div>
                        <div class="my-content" style="display: [[displaysearch.truncatelist]]">
                            <div class="col-xs-3">[[ainfo.info5]]</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.ainfovalues.ainfo5_value}}">
                                    <input class="input" disabled="[[disabledinput.ainfo5]]">
                                </iron-input>
                            </div>
                            <div id="[[searchid.ainfo5]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.ainfo5]]">
                                <!-- <iron-icon id="[[searchid.ainfo5]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                <paper-icon-button id="[[searchid.ainfo5]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>

                            </div>
                        </div>
                    </iron-collapse>
                </section>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <section class="nopadding nomargin margin-left">
                    <div class="my-content">
                        <div class="title title-margin">
                            <span on-tap="showDropdown" data-id="showshippinginfo">[[binfo.title]]<paper-icon-button class="my-iron-icon hidden-md hidden-lg bottom-left  only-mobile" on-tap="showDropdown" icon="expand-more" data-id="showshippinginfo"></paper-icon-button>
                                            </span>
                        </div>
                    </div>
                    <iron-collapse opened="{{showshippinginfo}}">
                        <div class="my-content">
                            <div class="col-xs-3">[[binfo.info1]]</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.binfovalues.binfo1_value}}">
                                    <input class="input" disabled="[[disabledinput.binfo1]]">
                                </iron-input>
                            </div>
                            <div id="[[searchid.binfo1]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.binfo1]]">
                                <!-- <iron-icon id="[[searchid.binfo1]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                <paper-icon-button id="[[searchid.binfo1]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>
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
                                <!-- <iron-icon id="[[searchid.binfo2]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                <paper-icon-button id="[[searchid.binfo2]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>

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
                                <!-- <iron-icon id="[[searchid.binfo3]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                <paper-icon-button id="[[searchid.binfo3]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>

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
                                <!-- <iron-icon id="[[searchid.binfo4]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                <paper-icon-button id="[[searchid.binfo4]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>

                            </div>
                        </div>
                        <div class="my-content" style="display: [[displaysearch.truncatelist]]">
                            <div class="col-xs-3">[[binfo.info5]]</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="{{model.binfovalues.binfo5_value}}">
                                    <input class="input" disabled="[[disabledinput.binfo5]]">
                                </iron-input>
                            </div>
                            <div id="[[searchid.binfo5]]" class="right-icon1 iron-bottom-padding" style="display: [[displaysearch.binfo5]]">
                                <!-- <iron-icon id="[[searchid.binfo5]]" on-tap="changepanel" icon="search" class="hover"></iron-icon> -->
                                <paper-icon-button id="[[searchid.binfo5]]" on-tap="changepanel" icon="search" class="hover"></paper-icon-button>

                            </div>
                        </div>
                    </iron-collapse>
                </section>
            </div>
        </div>`
        }
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
            }
        }

        constructor() {
            super();
        }

        doCalculateTax() {
            this.dispatchEvent(new CustomEvent('docalculatetax', {
                composed: true,
                bubbles: true,
            }))
        }

        changepanel(e) {
            console.log("e in changepanel modulebst", e)
            // var from = e.path[0].id;
            var from = e.path[2].id;

            console.log("in the changepath function now", e.path[2].id)


            console.log(from)
            switch (from) {
                case "addbill":
                    this.dispatchEvent(new CustomEvent('sendaddbill', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "billlist":
                    this.dispatchEvent(new CustomEvent('sendbilllist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "addship":
                    this.dispatchEvent(new CustomEvent('sendaddship', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "shiplist":
                    this.dispatchEvent(new CustomEvent('sendshiplist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "vendorlist":
                    this.dispatchEvent(new CustomEvent('sendvendorlist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "customerlist":
                    this.dispatchEvent(new CustomEvent('sendcustomerlist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "shippinginfo":
                    this.dispatchEvent(new CustomEvent('sendshippinginfo', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "statuslist":
                    this.dispatchEvent(new CustomEvent('sendstatuslist', {
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
                case "returnreason":
                    this.dispatchEvent(new CustomEvent('sendreturnreason', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "productcondition":
                    this.dispatchEvent(new CustomEvent('sendproductcondition', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "creditmethod":
                    this.dispatchEvent(new CustomEvent('sendcreditmethod', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "requestlist":
                    this.dispatchEvent(new CustomEvent('sendrequestlist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "categorylist":
                    this.dispatchEvent(new CustomEvent('sendcategorylist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "issueslist":
                    this.dispatchEvent(new CustomEvent('sendissueslist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "serviceslist":
                    this.dispatchEvent(new CustomEvent('sendserviceslist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
                case "prioritylist":
                    this.dispatchEvent(new CustomEvent('sendprioritylist', {
                        composed: true,
                        bubbles: true,
                    }))
                    break;
            }
        }
        connectedCallback() {

            if (this.hidden === true) {
                this.set('isHidden', false);
            }
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
            super.ready()
        }
    }

    customElements.define('module-billshipto', ModuleBillshipto);
