
  import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'


  import {repeat} from '../../node_modules/lit-html/lib/repeat.js'

  import {render} from '../../node_modules/lit-html/lib/lit-extended.js';

   export class AddFunction extends LitElement {
       
        static get properties() {
            return {
                statuslist: {
                    type: Array,
                    reflectToAttribute: true,
                    notify: true
                },
            }
        }
        constructor() {
            super();
        }

        static get observers() {
            return []

        }


        open(data) {

            console.log('data received', data)
            this.data = data

            this.setTable(this.data)

        }

        setTable(data){

                 const datatable = items => {


                    return html`

                    <div>
                        ${repeat (
                            items,
                            item =>item.id,
                            item =>html`

                                <div>
                                <div class="functionholder layout horizontal" data-title$="${item.title}">
                                        <input class="i-input input" id$="procedure-${item.id}" value="${item.procedures}">
                                    <paper-icon-button class="icons proc-icons" data-title$="${item.title}" on-tap="${()=>{this.add()}}" icon="icons:add"></paper-icon-button>
                                    <paper-icon-button class="icons func-icons" data-title$="${item.title}" on-tap="${()=>{this.swap(item)}}" icon="icons:swap-vert"></paper-icon-button>
                                    <paper-icon-button class="icons func-icons" data-title$="${item.title}" on-tap="${()=>{this.remove(item)}}" icon="icons:close"></paper-icon-button>
                                </div>
                            </div>
                                          
                                `

                    )}
            </div>`
                }

                render(datatable(this.data), this.shadowRoot.getElementById('table')) 


            }

        open1(data) {

            let title = this.data.slice(0, 1)


            this.set('data', [])


            setTimeout(function() {

                let temp = title.concat(data)

                this.set('data', temp)


                this.dispatchEvent(new CustomEvent('iron-resize', {
                    composed: true,
                    bubbles: true,

                }))



            }.bind(this), 700)

        }

        swap(e) {


            console.log('e in swap', e, this.data)
            let index = e.model.index - 1

            let data = this.data.slice(1)
            console.log('data after slice', data)
            this.dispatchEvent(new CustomEvent('openSort', {
                composed: true,
                bubbles: true,
                detail: {
                    data: data,
                    index: index,
                    service: "addfunction"
                }
            }))



        }

        send() {

            this.dispatchEvent(new CustomEvent('functions', {
                bubbles: true,
                composed: true,
                detail: {
                    data: this.data
                }
            }))


        }

        add() {
            this.push('data', {
                procedures: "",
                pass: "",
                issue: "",
                resolution: "",
                qa: "",
                replacement: "",
                signoff: "",
                title: "function",
                enable: false
                
            })
        }

        close() {
            this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }))
        }

        remove(e) {
            let index = e.model.index;

            this.splice('data', index, 1)


        }


        ready() {
            super.ready()


        }

        render() {
            return html`  <style include="shared-styles iron-flex iron-flex-alignment">
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
            padding-left: 5%;
            padding-right: 5%;
            margin-top: 20px;
        }
        
        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }
        
        .button {
            margin-top: 24px;
            margin-right: 16px;
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
            width: 20%;
            float: left;
        }
        
        .input {
            width: 100%;
            /*min-height: 24px;*/
            text-align: initial;
            border: none;
            background-color: #eee;
            /*border-color: #eee;*/
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 100%;
        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 80%;
        }
        
        iron-list {
            flex: 1 1 auto;
            width: 100%;
            flex: 1 1 auto;
        }
        
        .ilholder {
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .i-input {
            width: 80%;
        }
        
        .my-content {
            margin-top: 10px;
        }
        
        #page {
            overflow-y: auto;
            height: 100vh
        }
        
        .title {
            font-size: 17px;
            margin-top: 12px;
            margin-bottom: 5px;
            color: #8c1409;
        }
        
        .main-button {
            background-color: #890101;
            color: white;
        }
        
        .button {
            background-color: ;
        }
        
        .container {
            height: 33px;
            margin-bottom: 14px;
        }
        
        .name {
            width: 40px;
        }
        
        .functionholder {
            height: 33px;
            margin-bottom: 14px;
        }
        
        .icons {
            margin-top: -10px;
        }
        
        div[data-title="procedure-title"] .input {
            background-color: white;
            color: blue;
            font-size: 17px;
            box-shadow: none;
            text-align: center;
        }
        
        .proc-icons[data-title="procedure-title"] {
            display: inline-block;
            color: black;
        }
        
        .func-icons[data-title="procedure-title"] {
            display: none;
        }
        
        .proc-icons[data-title="function"] {
            display: none;
        }
        
        .func-icons[data-title="function"] {
            display: inline-block;
        }
        
        .button-holder {
            margin-top: 20px;
            text-align: right;
        }
        </style>
        <div id="page">
            <div class="title-rightpaneldraw">Procedures</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
                <div><span class="title">  Add Functions </span>
                </div>
                <div id=table class="ilholder">
                    
                </div>
                <div class="button-holder">
                    <paper-button class="main-button" on-tap="send">Send</paper-button>
                    <paper-button class="button" raised on-tap="close">Cancel</paper-button>
                </div>
            </div>`
        }




    }
 customElements.define('add-function', AddFunction);
 
