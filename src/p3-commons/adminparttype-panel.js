  import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'

  import {render} from '../../node_modules/lit-html/lit-html.js'

  import {repeat} from '../../node_modules/lit-html/lib/repeat.js'

    import '../../node_modules/@polymer/polymer/lib/elements/dom-bind.js'





export class AdminPartTypePanel extends LitElement {

 

    static get properties() {

        return {
            // data: {
            //     type: Array,
            //     reflectToAttribute: true,
            //     notify: true,
            //      value: function() {
            //         return []
            //     }
            // },
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
        console.log(this.data)

            if (this.data) {
                let str = ""
                this.data.forEach(function(val, index) {
                    str = str + val.type + ","
                })
                this.set('savemodel', str)
            }
        this.$.ajaxSubmit.url = "/api/optionsetting/option/"+this.typemodel;
        this.$.ajaxSubmit.body = JSON.stringify(this.savemodel);
        console.log(this.savemodel)
        this.$.ajaxSubmit.generateRequest();
    }
    responseSubmit(request) {

        if (request){
        var auth = request.detail.response.auth
        console.log(auth)
        if (auth){
            this.close();
        }
    }
}
    open(type) {

        this.set('type', "ptypes")

        this.typemodel = type;
        this.$.ajaxOption.url = "/api/optionsetting/option/"+type;
        this.$.ajaxOption.body = JSON.stringify(this.model);
        this.$.ajaxOption.generateRequest();
    }
    responseOption(request) {

        if (request){
        var data = request.detail.response.results
        console.log(data)
        if (data != "") {
            this.data = [];
            data = data.split(",")
            data = data.slice(0, -1)
            console.log(data)

            data.forEach(function(item, index) {
                this.push('data', {
                    type: item
                })
            }.bind(this))

        } else {
            this.data = [{
                type: "Spare"
            }, {
                type: "Component"
            }, {
                type: "Product"
            }, {
                type: "Others"
            }]
        }
    }
}
    static get observers() {
        return [
            // 'adminchange(admin)'
        ]
    }

    // adminchange(a) {
    //     console.log('admin ', a)
    //     this.$.innerchange.innerHTML = "";
    //     this.$.innerchange.setAttribute("on-tap", "");
    // }

    add() {
        this.push('data', {
            type: ""
        })
    }

    openChoice(e) {

        console.log('choice e', e, this.data)
        let choice = e.model.item.type

        this.dispatchEvent(new CustomEvent('parttype', {
            bubbles: true,
            composed: true,
            detail: {
                item: choice,
                types: this.data
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

    remove(e) {

        this.splice('data', e.model.index, 1)

    }

    ready() {
        super.ready()

        const types = data => {

            return html`
            <div>
            ${repeat (
                 data,
                 item => item.type,
                 item => html`
                 <dom-bind>
        <template>
        <iron-input class="col-xs-9 i-input admin1" id="term" on-tap="openChoice" bind-value="{{item.type}}">
                               <input class="input">
                            </iron-input>
        </template>
        </dom-bind>`
                 )}
            <div>`;
        }

        render(types(this.data), this.shadowRoot.querySelector('#table'))
    }

       render({admin}) {

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
        }
        
        .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 100%;
            font-size: 13.3px;

        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 100%;
       
        }
        
        .text-right {
            text-align: right;
        }
       
          .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
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
        <div class="title-rightpaneldraw"> Type ABC 123 </div>
        <div style="background-color: #e6e6e6;">
            <div class="close-interface">
                <span on-tap="close">Close</span>
                <iron-icon icon="close" on-tap="close"></iron-icon>
            </div>
        </div>
        <div class="table-padding">
               <div id="table">
               </div>
            <div>
                <div class="layout horizontal end">
                    <div class="submit button-row col-xs-9 admin" data-admin$="${admin}">
                        <paper-button class="button main-button" on-tap="submit" raised>Submit</paper-button>
                    </div>
                </div>
            </div>
        <iron-ajax id="ajaxOption" method="GET" handle-as="json" on-response="responseOption" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxSubmit" method="POST" handle-as="json" on-response="responseSubmit" content-type="application/json"></iron-ajax>
        `

    }


}
customElements.define("adminparttype-panel", AdminPartTypePanel);

// <iron-list items="${data]} scroll-target="document">
//                 <template>
//                     <div>
//                         <div class="my-content layout horizontal">
//                             <iron-input class="col-xs-9 i-input" data-adminoff$="${admin}" id="term" on-tap="openChoice" bind-value="{{item.type}}">
//                                 <input disabled class="input">
//                             </iron-input>
//                             <iron-input class="col-xs-9 i-input admin1" data-admin$="${admin}" id="term" on-tap="openChoice" bind-value="{{item.type}}">
//                                 <input class="input">
//                             </iron-input>
//                             <div class="admin" data-admin$="${admin}">
//                                 <paper-icon-button on-tap="remove" class="remove-icons" icon="icons:close"></paper-icon-button>
//                             </div>
//                         </div>
//                     </div>
//                 </template>
//             </iron-list>