import { LitElement, html } from '../../../node_modules/@polymer/lit-element/lit-element.js'

export class TermSidepanel extends LitElement {
    static get properties() {
        return {
            model: {
                type: Array,
                reflectToAttribute: true,

                value: function() {
                    return [];
                },
            },
            flag: {
                type: String,
                reflectToAttribute: true
            },
            requireadmin: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true,
            },
            item: {
                type: Object
            },
            index: {
                type: Number
            },

            admin: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true
            }
        }
    }
    static get observers() {
        return ['k(model)']
    }
    k(m) {
        this.set('model', m);
    }
    constructor() {
        super();
        this.model = []
        this.admin = false
        this.title = ""
        this.subname = ""
        this.titlecolor();
    
    }
    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    require(requireadmin) {
        if (requireadmin) {
            return "block"
        } else {
            return "none"
        }

    }

    toSignIn() {

        this.dispatchEvent(new CustomEvent('toSignIn', {
            bubbles: true,
            composed: true,
            detail: {
                panel: "showstatuslist",
            }
        }))
    }

    open(data) {
        if (data) {
            this.model = [];
            data = data.split("-")
            data.forEach(function(item, index) {
                this.push('model', {
                    subname: item
                })
            })
        } else {
            this.model = [{
                subname: "COD"
            }, {
                subname: "Net 1"
            }, {
                subname: "Net 30"
            }, {
                subname: "Net 60"
            }]
        }

        this.shadowRoot.querySelector('iron-list').dispatchEvent(new CustomEvent('iron-resize', {
            bubbles: true,
            composed: true
        }));
    }
    selected(e) {
        if (this.requireadmin == true) {
            if (this.admin != "superuser") {
                return;
            }
        }
        var index = e.model.index;
        var name = this.model[index].subname;
        if (this.flag == "Category") {
            this.dispatchEvent(new CustomEvent('CategoryEvent', {
                composed: true,
                bubbles: true,
                detail: {
                    name: name
                }
            }));
        } else if (this.flag == "U/M") {
            this.dispatchEvent(new CustomEvent('UmEvent', {
                composed: true,
                bubbles: true,
                detail: {
                    name: name
                }
            }));
        } else if (this.flag == "Type") {
            this.dispatchEvent(new CustomEvent('TypeEvent', {
                composed: true,
                bubbles: true,
                detail: {
                    name: name
                }
            }));
        } else if (this.flag == "Status") {
            this.dispatchEvent(new CustomEvent('StatusEvent', {
                composed: true,
                bubbles: true,
                detail: {
                    name: name
                }
            }));
        } else {
            this.dispatchEvent(new CustomEvent('TermEvent', {
                composed: true,
                bubbles: true,
                detail: {
                    name: name
                }
            }));
        }
    }

    ready() {
        super.ready()
    }
    render({ model, flag, requireadmin, admin, item, subname, index }) {
        return html`
        <style include="iron-flex iron-flex-alignment">
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
            height: 17px;
        }

        .input {
            width: 94%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 100%;
            height: 17px;
            padding: 0px;
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
            font-size: 13px;
            height: 21px;
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
            color: blue;
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
            display: none!important;
        }

        .admin1 {
            display: none;
        }

        .submit {
            width: 100%;
            text-align: right;
            margin-top: 17px;
            /*margin-right: 18px;*/
        }

        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }

         :host {
            display: block;
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

        .text-right {
            text-align: right;
        }

        .col-xs-12 {
            position: relative;
            min-height: 1px;
            /*        padding-left: 15px;
        padding-right: 15px;*/
        }

        .table-padding {
            padding-left: 16px;
            padding-right: 16px;
            margin-top: 20px;
            display: block;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }

        .button {
            margin-top: 24px;
            /*margin-right: 16px;*/
        }

        .title-rightpaneldraw {
            font-size: 16px;
            background-color: #e6e6e6;
            padding-left: 5%;
            padding-bottom: 0%;
            padding-top: 3%;
        }

        .title-rightpaneldraw-list {
            font-size: 16px;
            margin-top: 20px;
        }

        .nooverflow {
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            height: 100%;
            line-height: 2.7;
        }

        .col-xs-3 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 100%;
            float: left;
        }

    
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 100%;
        }


        .i-input {
            width: 100%;
        }
        /*         #list {
            width: 100%;
            flex: 1 1 auto;
        }*/

        iron-list {
            /*flex: 1 1 auto;*/
        }

        .spacer {
            /*margin-top: 2px;*/
        }

        .manage {
            color: blue;
            width: 100%;
            margin-bottom: 10px;
            text-align: right;
        }
        </style>
        <div class="title-rightpaneldraw">${title}</div>
        <div style="background-color: #e6e6e6;">
            <div class="close-interface">
                <span on-tap="close">Close</span>
                <iron-icon icon="close" on-tap="close"></iron-icon>
            </div>
        </div>
        <div class="table-padding">
            <div class="layout horizontal">
<!--                <paper-icon-button on-tap="add" class="add-icon admin" data-admin$="${admin}" icon="icons:add" style="display: none">
                </paper-icon-button>
                <paper-icon-button on-tap="add" class="add-icon admin" data-adminoff$="${admin} icon="icons:add" style="display: none"></paper-icon-button> -->
            </div>
            <iron-list id="list" items="${Object.entries(model)}" scroll-target="document">
                <template>
                    <div>
                    <div class="my-content layout horizontal">
                           <iron-input class="col-xs-9 i-input" data-adminoff$="${admin}" id="term" on-tap="selected" bind-value="${item.subname}">
                                <input disabled class="input">
                            </iron-input>
                            <iron-input class="col-xs-9 i-input admin1" data-admin$="${admin}" id="term" on-tap="selected" bind-value="${item.subname}">
                                <input disabled class="input">
                            </iron-input>
                        <!-- <span class="col-xs-9 text-right"><iron-input  id="input${index}" class="i-input" bind-value="${item.subname}" on-tap="selected"><input class="input" value="${item.subname}" disabled></iron-input></span> -->
                    </div>
                    </div>
                </template>
            </iron-list>
        </div>`
    }
}

customElements.define('term-sidepanel', TermSidepanel);