


  import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js'


export class ModuleHeader extends LitElement {
       

     
        static get properties() {
            return {
                pageid: String,
                pageidtext: String,
                pagename: String,
                datetext: {
                    type: String,
                    value: "Date: "
                },
                soidtext: {
                    type: String,
                    value: ""
                },
                soid: {
                    type: String
                },
                limb: String,
                date: {
                    type: String,
                    value: ''
                },
                moreoption: {
                    type: Boolean,
                    value: false
                },
                viewpage: {
                    type: Boolean,
                    value: false
                },
                isHidden: {
                    type: Boolean,
                    notify: true,
                    value: true
                },
                hidden: {
                    type: Boolean,
                    notify: true,
                    value: false
                },
                setting: {
                    type: Object,
                    notify: true
                },
                model: {
                    type: String,
                    notify: true
                },
            }
        }
        constructor() {
            super();
        }
        open(setting) {
            this.setting = JSON.parse(JSON.stringify(setting))

            this.set('setting.s_logo', "")
            this.set('setting.s_logo', setting.s_logo)


        }
        hider(soid) {

            if (soid) {
                return false;
            } else {
                return true;
            }
        }


        ready() {
            super.ready()
        }

          render() {
        return html`
           <style>
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }

         :host {
            display: block;
        }

        .col-xs-12 {
            position: relative;
            min-height: 1px;
            float: left;
            width: 100%;
        }

        .col-sm-6 {
            position: relative;
            min-height: 1px;
            float: left;
            width: 50%;
        }

        .nomargin {
            margin-bottom: 0px;
        }

        .my-content {
            font-size: 14px;
            min-height: 24px;
            position: relative;
        }

        .icon-head {
            right: -7px;
        }

        .right-icon {
            position: absolute;
            right: 0;
            bottom: 8px;
            z-index: 0;
        }

        .logo {
            height: 43px;
        }

        @media (max-width: 767px) {
            .col-sm-6 {
                position: relative;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 0px;
                float: left;
                width: 93%;
            }
            .col-xs-12 {
                position: relative;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 0px;
                float: left;
                width: 100%;
            }
        }
        /*kjb exported the following css from quotes*/

        .my-content1 {
            display: block;
            min-height: 48px;
            position: relative;
            word-wrap: break-word;
        }

        .bottom1 {
            min-height: 21px;
            position: relative;
            /*max-width: 600px;*/
            margin-right: 40px;
            border-bottom: 1px solid black;
            min-width: 361px;
        }

        .right-icon1 {
            position: absolute;
            right: 0;
            bottom: 0px;
            z-index: 0;
        }

        .search1 {
            position: absolute;
            bottom: 0;
            width: 100%
        }

        .listoptions1 {
            margin-left: 1%;
        }

        .searchoptions1 {
            position: relative;
        }

        .searchcontainer1 {
            min-height: 48px;
            position: relative;
            max-width: 764px;
        }

        .search-padding1 {
            padding-left: 2.5vw;
            padding-right: 2.5vw;
            padding-top: 2.5vw;
            margin: auto;
        }

        .search-holder1 {
            width: 39%;
            min-width: 563px;
            margin-bottom: 10px;
        }

        #searchQuery {
            width: 100%;
            border: none;
            outline: none;
        }

        #searchQuery::placeholder {
            font-size: 17px;
        }

        #searchQuery::-webkit-input-placeholder {
            font-size: 17px;
        }

        #searchQuery:-moz-placeholder {
            font-size: 17px;
        }

        #searchQuery::-moz-placeholder {
            font-size: 17px;
        }

        #searchQuery:-ms-input-placeholder {
            font-size: 17px;
        }

        .iron-bottom-padding1 {
            bottom: 5px;
        }

        paper-listbox {
            width: 100px;
            display: block;
            padding: 8px 0;
            color: #212121;
            overflow: hidden;
        }

        paper-dropdown-menu {
            display: block;
            margin-top: -13px;
            width: 100px;
        }

        paper-item.iron-selected {
            font-weight: bold;
            color: blue;
        }
        </style>
        <section class="nomargin">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="my-content" hidden$="${!this.isHidden}">
                        <img class="logo" src="${this.setting.s_logo}" alt="No logo uploaded">
                    </div>
                    <div class="my-content" hidden$="${!this.setting.s_address}">
                        <div class="bottom">
                            <div hidden$="${!this.model.Headers.Addr.Enabled}" style="position: initial; margin-top: 5px;">${this.setting.address}</div>
                        </div>
                    </div>
                    <div class="my-content" hidden$="${!this.setting.s_phone}">
                        <div class="bottom">
                            <div hidden$="${!this.model.Headers.Ph.Enabled}">
                                Tel: <span>${this.setting.ma_phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 text-right">
                    <div class="my-content" hidden$="${!this.isHidden}"></div>
                    <div class="my-content">
                        <div class="title bottom">
                            <div class="right-icon">
                                <span data-id='header-pagename' style="font-size:21px">${this.pagename}</span>
                            </div>
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="bottom">
                            <div class="right-icon">
                                <span>${this.pageidtext}</span>&nbsp;<span class="allcaps">${this.pageid}</span>
                            </div>
                        </div>
                    </div>
                    <div class="my-content" hidden$="${this.hider(this.soidtext)}">
                        <div class="bottom">
                            <div class="right-icon">
                                <span>${this.soidtext}</span>&nbsp;<span class="allcaps">${this.soid}</span>
                            </div>
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="bottom">
                            <div class="right-icon">
                                <span>${this.datetext}</span>&nbsp;<span data-id='header-pagedate'>${this.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`
    }
    }

    customElements.define('module-header', ModuleHeader);
