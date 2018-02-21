
  import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'


  import {repeat} from '../../node_modules/lit-html/lib/repeat.js'

  import {render} from '../../node_modules/lit-html/lib/lit-extended.js';
  
   export class AddProcedure extends LitElement {
        
        static get properties() {
            return {
                statuslist: {
                    type: Array,
                    reflectToAttribute: true,
                    notify: true
                },
                admin: {
                    type: String,
                    value: "superuser"
                }
            }
        }
        constructor() {
            super();
        }

        static get observers() {
            return []

        }

        open(data) {

            this.name = ""
            this.location = ""


            if (data) {

                if (data.length > 1) {
                    data = data.slice(1)
                } else {
                    this.data = [{
                        procedures: "",
                        pass: "",
                        issue: "",
                        resolution: "",
                        qa: "",
                        replacement: "",
                        signoff: "",
                        title: "procedure-title",
                        titleid: this.uuidv4(),
                        id: 0
                    }]

                    this.setTitle('Function Title')

                    this.setTable(this.data)

                    return
                }

                let bool = true

                let i = 0

                let titles = []

                this.temp = "";


                while (bool) {

                    if (data[i] === undefined) {
                        if (this.temp) {
                            titles.push(JSON.parse(JSON.stringify(this.temp)))
                        }
                        break;
                    }

                    if (data[i].title == "procedure-title") {
                        if (this.temp) {
                            titles.push(JSON.parse(JSON.stringify(this.temp)))
                        }

                        this.temp = data[i]
                        this.temp.storage = []

                    } else {
                        this.temp.storage.push(data[i])
                    }


                    i = i + 1


                }

                titles.forEach((item, i) => {
                    item.id = i
                })


                this.data= titles

                this.functions = false

                this.setTitle('Function Title')
                this.setTable(this.data)
            }

        }

        openfunction(data) {

            data.forEach((item, i) => {
                 item.id = i
            })

            this.data = data

            console.log('the data after set', data, this.data)

            this.setTable(this.data)

                this.setTitle('Add Functions')

                this.functions = true



        }

            // title1(val){
            //     if (val){
            //         return "none"
            //     } else {
            //         return "block"
            //     }
            // }

            // title2(val){
            //     if (val){
            //         return "block"
            //     } else {
            //         return "none"
            //     }
            // }
        setTable(data){

                 const datatable = items => {


                    return html`

                    <div>
                        ${repeat (
                            items,
                            item =>item.id,
                            item =>html`

                                <div>
                                    <div class="container" data-title$="${item.title}">
                                            <input  id$="procedure-${item.id}" class="input col-xs-9" value="${item.procedures}">
                                        <paper-icon-button on-tap="${() => this.remove(item)}" class="right" class="function-icons" icon="icons:close"></paper-icon-button>
                                        <paper-icon-button class="right" icon="icons:swap-vert" on-tap="${()=>this.swap(item)}" raised>Cancel</paper-icon-button>
                                        <div style="clear:both"></div>
                                    </div>
                                </div>
                                          
                                `

                    )}
            </div>`
                }

                render(datatable(this.data), this.shadowRoot.getElementById('table')) 


            }


        


        setTitle(titledata){


            if (titledata == "Add Functions"){

            const title = (templateheader) => html`<style>
                div[data-title="procedure-title"] .input {
                    background-color: white;
                    color: blue;
                    font-size: 17px;
                    box-shadow: none;
                    text-align: center;
                }

                [data-title="procedure-title"] paper-icon-button{
                    display: none;
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
                }</style><span class="title"> ${templateheader}  </span>`

            render(title(titledata), this.shadowRoot.getElementById('title'))


            } else {

                const title1 = (templateheader) => html`<span class="title"> ${templateheader}  </span>`

            render(title1(titledata), this.shadowRoot.getElementById('title'))

            }


         }



        open1(data) {

               

                this.data = data

                if (this.functions){
                    this.data.unshift(this.header)
                }

                this.data.forEach((item, i) => {
                    item.id = i
                })

                this.setTable(this.data)




        }



        toSignIn() {

            this.dispatchEvent(new CustomEvent('toSignIn', {
                bubbles: true,
                composed: true
            }))
        }

        remove(item) {

            this.data.forEach((item, i) => {
                 this.data[i].procedures = this.shadowRoot.getElementById('procedure-'+item.id).value
            })

            console.log('the item and the data', item, this.data)
            this.data.splice(item.id, 1)

             this.data.forEach((item, i) => {
                    item.id = i
                })

            this.setTable(this.data)



        }

        uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        add(e) {


            console.log('the data and last', this.data, last)

             this.data.forEach((item, i) => {
                 this.data[i].procedures = this.shadowRoot.getElementById('procedure-'+item.id).value

            })

             this.data.forEach((item, i) => {
                    item.id = i
                })

            var last = this.data[this.data.length -1].id + 1 


            if (this.functions){

                this.data.push({
                    procedures: "",
                    pass: "",
                    issue: "",
                    resolution: "",
                    qa: "",
                    replacement: "",
                    signoff: "",
                    title: "function",
                    enable: false,
                    id: last
                
                })

            } else {
                this.data.push({
                procedures: "",
                pass: "",
                issue: "",
                resolution: "",
                qa: "",
                replacement: "",
                signoff: "",
                title: "procedure-title",
                titleid: this.uuidv4(),
                enable: true,
                id: last
            })



            }

           


            

            this.setTable(this.data)



        }

        send() {

             this.data.forEach((item, i) => {
                 this.data[i].procedures = this.shadowRoot.getElementById('procedure-'+item.id).value
            })

            if (this.functions){

                this.dispatchEvent(new CustomEvent('functions', {
                bubbles: true,
                composed: true,
                detail: {
                    data: this.data
                }
            }))

                return
            }

           

            let procedures = []

            function unpacker(data) {


                let unit = data.shift()

                if (unit === undefined) {
                    return
                }

                procedures.push(unit)

                if (unit.storage) {

                    unit.storage.forEach(function(item, index) {
                        procedures.push(item)
                    })

                }

                unpacker(data)

                return
            }

            unpacker(this.data)



            this.dispatchEvent(new CustomEvent('update-table', {
                composed: true,
                bubbles: true,
                detail: {
                    model: procedures
                }
            }))

        }

        swap(item) {

            console.log('item', item)
            this.data.forEach((item, i) => {
                 this.data[i].procedures = this.shadowRoot.getElementById('procedure-'+item.id).value
            })

            let index = item.id


            if (this.functions){
                this.header = this.data[0]
                this.data = this.data.slice(1)
                index = index - 1
            }

            console.log('data and index before send', this.data, index)

            this.dispatchEvent(new CustomEvent('openSort', {
                composed: true,
                bubbles: true,
                detail: {
                    data: this.data,
                    index: index,
                }
            }))
        }

        close() {
            this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }))
        }

        returnCheck(i) {
            if (i === 0) {
                return true;
            } else {
                return false
            }
        }

        ready() {
            super.ready()


        }

        render() {
            return html` <style include="shared-styles iron-flex iron-flex-alignment">
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
            width: 150%;
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
            /*flex: 1 1 auto;*/
        }
        
        .i-input {
            width: 100%;
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
        
        .listoptions {
            margin-bottom: 10px;
        }
        
        .main-button {
            background-color: #890101;
            color: white;
        }
        
        .buttons {
            float: right;
        }
        
        .container {
            height: 33px;
            margin-bottom: 14px;
        }
        
        .name {
            width: 40px;
        }
        
        .manage {
            color: blue;
            width: 100%;
            margin-bottom: 17px;
            text-align: right;
        }
        
        .func {
            margin-top: 20px;
        }
        
        .admin {
            visibility: hidden;
        }
        
        .right {
            float: right;
            margin-top: -11px;
        }
        
        [data-admin="superuser"] {
            visibility: visible;
            display: block!important;
        }
        
        [data-title="function"] {
        }
        
        .il-holder {
            display: flex;
            flex-direction: column;
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
                <div id="title">

                </div>
                <div class="end">
               
                    <div on-tap="${()=>{this.add()}}" class="manage add-icon"  icon="icons:add"> Add </div>
                </div>
                <div>
                    <div id="table" class="il-holder">
                        
                    </div>
                    <div class="layout horizontal buttons">
                        <paper-button class="button main-button" on-tap="${()=>{this.send()}}" raised>Send</paper-button>
                        <paper-button class="button" on-tap="${()=>{this.close()}}" raised>Cancel</paper-button>
                    </div>
                </div>
            </div>`
        }


    }
customElements.define("add-procedure", AddProcedure);

