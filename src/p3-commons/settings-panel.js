import {LitElement} from '../../node_modules/@polymer/lit-element/lit-element.js'

import {repeat} from '../../node_modules/lit-html/lib/repeat.js'
import {render, html} from '../../node_modules/lit-html/lib/lit-extended.js';

export class SettingsPanel extends LitElement {

    static get properties() {

        return {
            typemodel: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "",
            },
            branchname: {
                type: String,
                reflectToAttribute: true,
                notify: true,
            },
            panelVersion: {
                type: String,
                reflectToAttribute: true,
                notify: true,
            },
        }
    }

    constructor() {
        super();
        this.data = [];
        this.panelVersion = "";
    }

    static get observers() {
        return [];
    }

    renderItems() {
        const types = data => {

            return html`
            <div>
            ${repeat (
                 data,
                 item => item.id,
                 item => html`
                            <div class="layout horizontal">
                                <input disabled class="col-xs-9 i-input input" value="${item.datapoint}" on-tap="${() =>this.openChoice(item)}">
                            </div>
                          `
                 )}
            <div>`;
        }

        render(types(this.data), this.shadowRoot.querySelector('#table'))
    }

    open(panelVersion, settingoption) {

        this.data = [];   
        this.branchname = "";
            
        settingoption = settingoption.split(",")
        settingoption = settingoption.map((item) => {return item.trim()})

        if (settingoption[0] == "cust") {
            this.branchname = "customer"
             settingoption.splice(0, 1)
        } else if (settingoption[0] == "vend") {
            this.branchname = "vendor"
            settingoption.splice(0, 1)
        } else if (settingoption[0] == "profile") {
            this.branchname = "profile"
            settingoption.splice(0, 1)
        } else{
            this.branchname = "individual"
        }

        settingoption.forEach(function(item, index) {
            this.data.push({datapoint: item});
        }.bind(this))
        
        this.panelVersion = panelVersion;

        this.renderItems();
    }

    openChoice(e) {

        this.dispatchEvent(new CustomEvent('panelOption', {
            bubbles: true,
            composed: true,
            detail: {
                item: e.datapoint,
                datapoint: this.data,
                branchname: this.branchname,
            }
        }))
    }
    toSignIn() {

        this.dispatchEvent(new CustomEvent('toSignIn', {
            bubbles: true,
            composed: true
        }))
    }

    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    render({panelVersion}) {
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
           margin-top: 7px;
       }
       
       .input {
           width: 150%;
           text-align: initial;
           border: none;
           background-color: #eee;
           box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
           width: 100%;
       }
       
       .col-xs-9 {
           position: relative;
           min-height: 1px;
           padding-left: 0px;
           padding-right: 0px;
           width: 100%;
           margin-top: 0px;
           margin-bottom: 3px;
       }
       
       .text-right {
           text-align: right;
       }
       
       .my-content {
           display: block;
           position: relative;
           word-wrap: break-word;
           font-size: 13px;
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
           padding-top: 6%;
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
       }
       
       .title-rightpaneldraw {
           font-size: 16px;
           background-color: #e6e6e6;
           padding-left: 5%;
           padding-bottom: 0%;
           padding-top: 6%;
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
       
       .input {
           text-align: initial;
           border: none;
           color:blue;
           background-color: #eee;
           box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
           width: 100%;
       }
       
       .col-xs-9 {
           position: relative;
           min-height: 1px;
           padding-left: 0px;
           padding-right: 0px;
           width: 100%;
       }
       
       .my-content {
           margin-top: 6px;
       }
       
       .i-input {
           width: 100%;
       }
       
       iron-list {
       }
       
       .spacer {
       }

          .manage {
           color: blue;
           width: 100%;
           margin-bottom: 10px;
           text-align: right;
       }
       </style>
       <div class="title-rightpaneldraw"> ${panelVersion} </div>
       <div style="background-color: #e6e6e6;">
           <div class="close-interface">
               <span on-tap=${this.close.bind(this)}>Close</span>
                <iron-icon icon="close" on-tap=${this.close.bind(this)}></iron-icon>
           </div>
       </div>
       <div class="table-padding">
           <div id="table">
           </div>
       </div>
    `
    }
}
customElements.define('settings-panel', SettingsPanel);