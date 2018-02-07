import {LitElement} from '../../node_modules/@polymer/lit-element/lit-element.js'

import {repeat} from '../../node_modules/lit-html/lib/repeat.js'
import {render, html} from '../../node_modules/lit-html/lib/lit-extended.js';

export class AdminOptionDictionary extends LitElement {

    static get properties() {

        return {
            title: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "",
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
            fireevent: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "",  
            },
            admin: {
                type: String,
                reflectToAttribute: true,
                notify: true,
            }
        }
    }

    constructor() {
        super()
        this.data = [];
    }

    submit() {

        let self=this;

        if (this.data) {
            let str = ""
            this.data.forEach(function(val, index) {
                let newVal = self.shadowRoot.querySelector("#input" + index).value;
                str = str + newVal + ","
            })
            this.savemodel = str;
        }
        this.shadowRoot.querySelector('#ajaxSubmit').url = "/optionsetting/option/"+this.typemodel;
        this.shadowRoot.querySelector('#ajaxSubmit').body = JSON.stringify(this.savemodel);
        this.shadowRoot.querySelector('#ajaxSubmit').generateRequest();
    }
    responseSubmit(request) {

        var auth = request.detail.response.auth
        if (auth){
             document.querySelector('#toast').text = 'Saved successfully.';
                document.querySelector('#toast').show();
            this.close();
        }
    }
    open(props) {

        if (props) {
            if (props.title) {
                this.title = props.title;
            }
            if (props.typemodel) {
                this.typemodel = props.typemodel;
            }
        }

        this.admin = 'superuser';
        
        this.shadowRoot.querySelector('#ajaxOption').url = "/optionsetting/option/"+this.typemodel;
        this.shadowRoot.querySelector('#ajaxOption').body = JSON.stringify(this.model);
        this.shadowRoot.querySelector('#ajaxOption').generateRequest();
    }
    responseOption(request) {

        if (request) {
            var data = request.detail.response.results
            if (data != "") {
                this.data = [];
                data = data.split(",")
                data = data.slice(0, -1)

                data.forEach(function(item, index) {
                    this.data.push({
                        word: item
                    })
                }.bind(this))
            } else {
                this.data = this.defaultData();
            }


            this.renderItems();
        }
    }
    defaultData() {

        let data = [];

        switch (this.typemodel) {
            case "ptypes": data = [{word: "Spare"}, {word: "Component"}, {word: "Product"}, {word: "Others"}]; break;
            case "custcategories":
            case "vendcategories":
            case "categories": data = [{word: "Hardware"}, {word: "Software"}, {word: "Service"}, {word: "Others"}]; break;
            case "vendshipvia":
            case "custshipvia": data = [{word:"Will Call" },{word:"Deliver" },{word:"Trucking" },{word:"Other Freight" },{word:"UPS Ground" },
                                        {word:"UPS 3 day Select" },{word:"UPS 2 day Air" },{word:"UPS 2 Day Air Early AM" },{word:"UPS Next day Saver" },
                                        {word:"UPS Next day Air" },{word:"UPS Next day Air Early AM" },{word:"UPS Worldwide Express Plus" },
                                        {word:"UPS Worldwide Express" },{word:"UPS Worldwide Saver (Express)" },{word:"UPS Worldwide Expedited" },
                                        {word:"FedEx Ground" },{word:"FedEx 3 Day Freight" },{word:"FedEx Express Saver" },{word:"FedEx 2 Day Freight" },
                                        {word:"FedEx 1 Day freight" },{word:"FedEx 2 Day" },{word:"FedEx Standard Overnight" },
                                        {word:"FedEx Priority Overnight" },{word:"FedEx First Overnight" },{word:"FedEx International Priority" },
                                        {word:"FedEx International Freight" },{word:"FedEx International Economy Freight" },{word:"FedEx International Economy" }]; break;
            case "custcreditmethods":
            case "vendcreditmethods": data = [{word: "Refund"}, {word: "Open Credit"}, {word: "Exchange"}, {word: "Repair"}]; break;
            case "custproductconditions":
            case "vendproductconditions": data = [{word: "Unopen"}, {word: "Opened"}, {word: "Miss Parts"}, {word: "Miss Documents"}]; break;
            case "custreturnreasons":
            case "vendreturnreasons": data = [{word: "Over Stock"}, {word: "Dead on Arrival"}, {word: "Wrong Part"}, {word: "Damage"}, {word: "No Longer Need"}]; break;
            case "vendissues":
            case "custissues": data = [{word: "DOA"}, {word: "Defective"}, {word: "Physical Damage"}, {word: "Wrong Product"}]; break;
            case "custpriorities":
            case "vendpriorities": data = [{word: "Urgent"}, {word: "High"}, {word: "Medium"}, {word: "Low"}]; break;
            case "custrequests":
            case "vendrequests": data = [{word: "Credit"},{word: "Refund"},{word: "Adv. Replacement"},{word: "Replacement"},{word: "Repair"}]; break;
            case "custservices":
            case "vendservices": data = [{word: "Platinum"}, {word: "Gold"}, {word: "Silver"}, {word: "Bronze"}]; break;
            case "departments": data = [{word: "Human Resources"}, {word: "Engineering"}, {word: "Sales"}]; break;
            case "groups": data = [{word: "Sales"}, {word: "Engineering"}, {word: "Accounting"}]; break;
            default: data = [];
        }

        return data;
    }

    static get observers() {
        return [
        ]
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
                                <input disabled=${!item.editable} class="col-xs-9 i-input input" id$="input${item.id}" value="${item.word}">
                                <paper-icon-button on-tap="${() => this.remove(item)}" class="remove-icons" icon="icons:close"></paper-icon-button>
                            </div>
                          `
                 )}
            <div>`;
        }

        this.data.forEach(function(item, index){
            item.id = index;
        });
        

        render(types(this.data), this.shadowRoot.querySelector('#table'))
    }

    add() {
        this.data.push({
            id: this.data.length,
            word: "",
            editable: true
        })

        this.renderItems();
    }

    // openChoice(selection) {

    //     this.dispatchEvent(new CustomEvent(this.fireevent, {
    //         bubbles: true,
    //         composed: true,
    //         detail: {
    //             item: selection.word,
    //             types: this.data
    //         }

    //     }))
    // }
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

    remove(e) {
        this.data.splice(e.id, 1);

        this.renderItems();
    }

    render({admin, title}) {

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
            margin-top:0px;
            margin-bottom: 3px;
        }
        
        .text-right {
            text-align: right;
        }
        
        .my-content {
            display: block;
            min-height: 24px;
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
            display: block;
            margin-top: -20px;
            padding: 0px;
            width: 18px!important;
            height: 18px!important;
            float: right;
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
            text-align:right;
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
        <div class="title-rightpaneldraw"> ${this.title} </div>
        <div style="background-color: #e6e6e6;">
            <div class="close-interface">
                <span on-tap=${this.close.bind(this)}>Close</span>
                <iron-icon icon="close" on-tap=${this.close.bind(this)}></iron-icon>
            </div>
        </div>
        <div class="table-padding">
            <div class="layout horizontal end">
                <paper-icon-button style="display: none" on-tap=${this.add.bind(this)} class="add-icon admin" data-admin$="${admin}" icon="icons:add"></paper-icon-button>
            </div>
            <div id="table">
            </div>
            <div>
                <div class="layout horizontal end">
                    <div class="submit button-row col-xs-9 admin" data-admin$="${admin}">
                        <paper-button class="button main-button" on-tap=${this.submit.bind(this)} raised>Submit</paper-button>
                    </div>
                </div>
            </div>
        <iron-ajax id="ajaxOption" method="GET" handle-as="json" on-response=${this.responseOption.bind(this)} content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxSubmit" method="POST" handle-as="json" on-response=${this.responseSubmit.bind(this)} content-type="application/json"></iron-ajax>
        `

    }
}
customElements.define("adminoption-dictionary", AdminOptionDictionary);