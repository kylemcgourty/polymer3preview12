
  import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'


  import {repeat} from '../../node_modules/lit-html/lib/repeat.js'

  import {render} from '../../node_modules/lit-html/lib/lit-extended.js';
  
  export  class DefieQAList extends LitElement {
       


       

        static get properties() {
            return {
               

            }
        }

        static get observers() {
            return [

            ]
        }
        constructor() {
            super()





        }

        open(data, color) {


            if (data) {
              
                
                data.forEach((item, i) => {
                    item.id = i
                })

               this.enable = false;
                const datatable = items => {


                    return html`

                    <div>
                        ${repeat (
                            items,
                            item =>item.id,
                            item =>html`

                                                <div></div>
                                                <div class="unit">
                                                    <div class="data-container layout horizontal">
                                                        <div class="data layout horizontal wrap">
                                                            <div class="core layout horizontal wrap">
                                                                <div class="group1 layout horizontal wrap">
                                                                    <div class="box1-data layout horizontal">
                                                                        <div class="bd2-1head">Procedures: </div>
                                                                        <div class="bd1-1" data-procedure$="${item.title}">
                                                                                <input id$="procedures-${item.id}" disabled class="input1" value="${item.procedures}">
                                                                        </div>
                                                                        <paper-icon-button class="procedure-icons" data-procedure$="${item.title}" on-tap="${(e)=>{this.addProcedure(e)}}" icon="icons:add-circle-outline"></paper-icon-button>
                                                                        <paper-icon-button class="function-icons" data-procedure$="${item.title}" on-tap="${()=>{this.addFunction(item)}}" icon="add-circle"></paper-icon-button>
                                                                    </div>
                                                                </div>
                                                                <div class="group4 layout horizontal wrap" data-procedure$="${item.title}">
                                                                    <div class="box4-data layout horizontal">
                                                                        <div class="bd4-1">
                                                                            <span class="bd4-1head">Pass | Fail:</span>
                                                                                <input id$="pass-${item.id}" disabled="${this.determiner(item.title)}" value="${item.pass}" class="input1">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="group8 layout horizontal wrap" data-procedure$="${item.title}">
                                                                    <div class="box8-data layout horizontal">
                                                                        <div class="bd8-2">
                                                                            <span class="bd8-1head"> 
                                                                                    Issue:</span>
                                                                                <input id$="issue-${item.id}" disabled="${this.determiner(item.title)}" value="${item.issue}" class="input1">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="group3 layout horizontal wrap" data-procedure$="${item.title}">
                                                                    <div class="box3-data layout horizontal">
                                                                        <div class="bd3-2">
                                                                            <span class="bd3-1head"> Resolution</span>
                                                                                <input id$="resolution-${item.id}" disabled="${this.determiner(item.title)}" value="${item.resolution}" class="input1">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="group1 layout horizontal wrap" data-procedure$="${item.title}">
                                                                    <div class="box1-data layout horizontal">
                                                                        <div class="bd1-2">
                                                                            <span class="bd1-1head"> Replacement</span>
                                                                                <input id$="replacement-${item.id}" disabled="${this.determiner(item.title)}" value="${item.replacement}" class="input1">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="group7 layout horizontal wrap" data-procedure$="${item.title}">
                                                                    <div class="box7-data layout horizontal">
                                                                        <div class="bd7-2">
                                                                            <span class="bd7-1head"> QA </span>
                                                                                <input id$="qa-${item.id}" disabled="${this.determiner(item.title)}" value="${item.qa}" class="input1">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="group5 layout horizontal wrap" data-procedure$="${item.title}">
                                                                    <div class="box5-data layout horizontal">
                                                                        <div class="bd5-2">
                                                                            <span class="bd5-1head"> Sign Off </span>
                                                                                <input id$="signoff-${item.id}" disabled="${this.determiner(item.title)}" value="${item.signoff}" class="input1">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                              
                                          
                                `

                    )}
            </div>`
                }



            this.data = data
                
            render(datatable(data), this.shadowRoot.getElementById('table')) 



            let elem = this.shadowRoot.querySelector('.unit')


            elem.style.setProperty('--title-background-normal', color)


             this.data1 = data


             this.converter()

            const mobiledatatable = items => {


                    return html`
                              <div class="procedures-mobile">
                                <div class="layout horizontal title-border mobileheader">
                                    <div class="mobiletitle "> Functions </div>
                                    <paper-icon-button class="procedure-icons"  on-tap="${()=>{this.addProcedure()}}" icon="icons:add-circle-outline"></paper-icon-button>

                                </div>

                                <div class="mobile-listholder">
                              <div>
                        ${repeat (
                            items,
                            item =>item.id,
                            item =>html`      <div>
                                                <div class="mobile-container">
                                                    <div class="layout horizontal">
                                                        <div style="display: ${this.computeDisplay(item.title)}" class="layout horizontal functionscontainer">
                                                            <div data-procedure$="${item.title}" class="mobile-functions mobile-proceduretitle layout horizontal">
                                                                    <input disabled value="${item.procedures}" class="input1">
                                                                <paper-icon-button class="function-icons" data-procedure$="${item.title}" on-tap="${() =>{this.addFunctionMobile(item)}}" icon="add-circle"></paper-icon-button>
                                                            </div>
                                                            <div data-procedure$="${item.title}" class="mobile-functions">
                                                                    <input disabled value="${item.columndata}" class="input1">
                                                            </div>
                                                        </div>
                                                        <div style="display: ${this.computeDisplay1(item.title)}" class="layout horizontal functionscontainer">
                                                            <div data-procedure$="${item.title}" class="mobile-functions mobile-proceduretitle">
                                                                    <input id="procedures-${item.id}" disabled class="input1" value="${item.procedures}">
                                                            </div>
                                                            <div data-procedure$="${item.title}" class="mobile-functions">
                                                                    <input id="data-${item.id}" class="input1" value="${item.columndata}">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>` )} 
                                    </div>   
                                  </div>
                                </div>`}



                     this.mobiledata.forEach((item, i) => {
                        item.id = i
                     })
                      render(mobiledatatable(this.mobiledata), this.shadowRoot.getElementById('table2'))


                      let elem1 = this.shadowRoot.querySelector('.mobileheader')


                      elem1.style.setProperty('--title-background-normal', color)




                  }

        }

         computeDisplay(val, item) {


            if (val === "procedure-title") {
                return "flex"
            } else if (this.view) {
                return "flex"
            } else if (val == "function"){
                return "none"
            } else {
                return "none"
            }

        }

        computeDisplay1(val, item) {


            if (val === "procedure-title") {
                return "none"
            } else if (this.view) {
                return "none"
            } else if (val == "function"){
                return "flex"
            } else {
                return "flex"
            }

        }


         converter() {



            if (this.data1.length == 1) {
                this.mobiledata = []
                return
            }

            if (this.data1.length > 0) {

                this.start = undefined

                this.mobiledata= []
                let index = 1
                let bool = true

                while (bool) {

                    if (this.data1[index] == undefined) {


                        this.end = index;

                        this.converterHelper()

                        this.start = undefined

                        bool = false;
                        break;
                    }

                    if (!this.start && this.data1[index].title == "procedure-title") {

                        this.start = index
                        index = index + 1
                        continue;

                    }

                    if (this.start && this.data1[index].title == "procedure-title") {


                        this.end = index

                        this.converterHelper()

                        this.start = undefined

                        continue;
                    }


                    index = index + 1

                }

            }

        }

        converterHelper() {

            let temp = []


            let result = this.data1.slice(this.start, this.end)




            let group = []


            group = temp.concat(JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(result)))



            let length = group.length

            let l1 = 0
            let l2 = length / 6
            let l3 = 2 * length / 6
            let l4 = 3 * length / 6
            let l5 = 4 * length / 6
            let l6 = 5 * length / 6





            group.forEach(function(item, index) {

                if (index < l2) {
                    item.columndata = item.pass
                } else if (l2 <= index < l3) {
                    item.columndata = item.issue
                } else if (l3 <= index < l4) {
                    item.columndata = item.resolution
                } else if (l4 <= index < l5) {
                    item.columndata = item.replacement
                } else if (l5 <= index < l6) {
                    item.columndata = item.qa
                } else if (l6 <= index) {
                    item.columndata = item.signoff
                }


            })

            group[l1].columndata = "Pass | Fail"
            group[l1].title = "procedure-title"

            group[l2].columndata = "Issues"
            group[l2].title = "procedure-title"

            group[l3].columndata = "Resolution"
            group[l3].title = "procedure-title"

            group[l4].columndata = "Replacement"
            group[l4].title = "procedure-title"

            group[l5].columndata = "QA"
            group[l5].title = "procedure-title"

            group[l6].columndata = "Sign Off"
            group[l6].title = "procedure-title"


            this.mobiledata = this.mobiledata.concat(group)



        }




    determiner(item){
            if (this.view){
                return true
            }

            if (item =="function"){
                return false
            } else if (item == "procedure-title"){
                return true
            }
        }

      addProcedure(){

        this.dispatchEvent(new CustomEvent('addProcedure', {compose: true, bubbles: true, detail: {data : this.retrieveData()}}))
      }
      

      addFunction(item){

         this.dispatchEvent(new CustomEvent('addFunction', {compose: true, bubbles: true, detail: { item: item, data : this.retrieveData()}}))
      }

      addFunctionMobile(item){
         this.dispatchEvent(new CustomEvent('addFunctionMobile', {compose: true, bubbles: true, detail: { item: item, data : this.retrieveData()}}))

      }

      retrieveData(){

        if (window.innerWidth > 1842){
            for (var i=1; i < this.data.length; i++){
                this.data[i].procedures = this.shadowRoot.getElementById('procedures-'+i).value
                this.data[i].pass = this.shadowRoot.getElementById('pass-'+i).value
                this.data[i].issue = this.shadowRoot.getElementById('issue-'+i).value
                this.data[i].resolution = this.shadowRoot.getElementById('resolution-'+i).value
                this.data[i].replacement = this.shadowRoot.getElementById('replacement-'+i).value
                this.data[i].qa = this.shadowRoot.getElementById('qa-'+i).value
                this.data[i].signoff = this.shadowRoot.getElementById('signoff-'+i).value

            }

            return  this.data
        } else {
            for (var i=0; i < this.mobiledata.length; i++ ){

                let j = i + 1
                if (this.mobiledata[i].columndata == "Pass | Fail" && this.mobiledata[j] && this.mobiledata[j].title != "procedure-title"){
                    this.seeker(j, "pass")
                } else if (this.mobiledata[i].columndata == "Issues" && this.mobiledata[j] && this.mobiledata[j].title != "procedure-title"){
                    this.seeker(j, "issue")

                } else if (this.mobiledata[i].columndata == "Resolution" && this.mobiledata[j] && this.mobiledata[j].title != "procedure-title"){
                    this.seeker(j, "resolution")

                } else if (this.mobiledata[i].columndata == "Replacement" && this.mobiledata[j] && this.mobiledata[j].title != "procedure-title"){
                    this.seeker(j, "replacement")

                } else if (this.mobiledata[i].columndata == "QA" && this.mobiledata[j] && this.mobiledata[j].title != "procedure-title"){
                    this.seeker(j, "qa")

                } else if (this.mobiledata[i].columndata == "Sign Off" && this.mobiledata[j] && this.mobiledata[j].title != "procedure-title"){
                    this.seeker(j, "signoff")

                } 

            
            }


            this.convertedData = []

            this.dataConverter(this.mobiledata)


             this.convertedData.unshift({
                    procedures: "Functions",
                    pass: "Pass | Fail",
                    issue: "Issue",
                    resolution: "Resolution",
                    replacement: "Replacement",
                    qa: "QA",
                    signoff: "Sign Off"

                })

             return this.convertedData

        }

         // return this.data
      }

      seeker(index, type){

        let bool = true


        while(bool) {

            if (this.mobiledata[index] == undefined || this.mobiledata[index].title == "procedure-title"){
                break;
            }

            this.mobiledata[index][type] = this.shadowRoot.getElementById('data-'+index).value
            let index2 = index + 1
            this.mobiledata[index]["procedures"] = this.shadowRoot.getElementById('procedures-'+index2).value


            ++index
        }


      }

      dataConverter(mobilemodel){


        if (mobilemodel.length == 0){
            return
        }

        let finalIndex

         let bool = true

         let index = 1

         while (bool) {
            if (mobilemodel[index] == undefined) {
                return 
            } 

            if (mobilemodel[index].title == "procedure-title"){
                break;
            }

            ++index
         }

         if (index == 1){
                if (mobilemodel.length > 6){
                delete mobilemodel[0].columndata
                this.convertedData.push(mobilemodel[0])
                this.dataConverter(mobilemodel.slice(6))
                return
            } else{
                delete mobilemodel[0].columndata
                this.convertedData.push(mobilemodel[0])
                return
            }
         } else {

            delete mobilemodel[0].columndata
            this.convertedData.push(mobilemodel[0])


            for (let i=1; i<index; i++){

            this.convertedData.push({title:"function",
                pass: mobilemodel[i].pass,
                procedures: mobilemodel[i].procedures,
                issue: mobilemodel[i + index].issue,
                resolution: mobilemodel[i + 2*index].resolution,
                replacement: mobilemodel[i + 3*index].replacement,
                qa: mobilemodel[i + 4*index].qa,
                signoff: mobilemodel[i + 5*index].signoff,
                })

                finalIndex = i + 5*index

            }
                

         }

         ++finalIndex


         this.dataConverter(mobilemodel.slice(finalIndex))
      }
    
        
        ready() {
            super.ready()
            // this.titlecolor();

        }

         render() {
            return html`
                    <style include="shared-styles iron-flex iron-flex-alignment">
         :host {
            display: block;
            --title-background-normal: black;
            --title-normal: white;
        }

        /*  //////////////FLEX BOX/////////  */

.layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }

      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

     
      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }

      /* ////////////////END FLEXBOX /////////////// */

          .mobileheader {
            display: none;
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

        .unit:nth-child(2) {
            background-color: var(--title-background-normal);
            color: black;
            /*height: 65px;*/
            font-size: 17px;
            /*min-height: 54px;*/
            line-height: 2.5;
            border-bottom: none
        }

        .unit:nth-child(2) .data {
            background-color: var(--title-background-normal);
            color: white;
            height: 38px;
            font-size: 17px;
            min-height: 38px;
            line-height: 2.5;
            box-shadow: none;
            margin-top: 0px;
        }

        .unit:nth-child(2) .options {
            background-color: var(--title-background-normal);
            color: white;
            height: 35px;
            font-size: 17px;
            min-height: 35px;
            line-height: 2.5;
            margin-top: 0px;
        }

        .unit:nth-child(2) .actions-header {
            display: block;
            background-color: var(--title-background-normal);
            color: white;
            height: 35px;
            font-size: 17px;
            min-height: 35px;
            line-height: 2.3;
            box-shadow: none;
            margin-top: 0px;
            margin: auto;
        }

        .unit:nth-child(2) .opt1,
        .unit:nth-child(2) .icon1,
        .unit:nth-child(2) .icon2 {
            display: none;
        }
        /*   .unit:nth-child(2) .opt1 {
            width: 73px;
        }*/

        .unit:nth-child(2) .procedure-icons {
            color: white;
        }

        .unit:nth-child(2) .tax {
            display: none
        }

        .unit:nth-child(2) .bd6-1head {
            display: inline-block;
        }

        .unit:nth-child(2) .input1 {
            outline: none;
        }

        .bd6-1head {
            display: none;
        }

        .unit:nth-child(2) .input1 {
            background-color: var(--title-background-normal);
            height: 38px;
            font-size: 18px;
            min-height: 38px;
            line-height: 2.5;
            pointer-events: none;
            text-align: center;
            color: white
        }

        .unit:nth-child(2) .function-icons {
            display: none;
        }

        .actions-header {
            display: none;
        }

        [class$="-1head"] {
            display: none;
        }

        .only-mobile {
            display: none;
        }

        .checkbox {
            float: right;
            width: 20px;
            height: 20px;
        }

        .functionscontainer {
            width: 98%;
            margin: auto;
            margin-top: 5px;
        }

        .subtable {
            margin-top: 10px;
        }

        .subtable-input {
            width: 100%;
            text-align: right;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            box-sizing: border-box;
            padding-right: 5px
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

        .col-xs-3-totals {
            position: relative;
            text-align: right;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 65%;
            float: left;
        }

        .col-xs-9-totals {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            width: 30%;
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
            bottom: 1px;
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

        .tax {
            --paper-checkbox-size: 15px;
            padding-left: 6px;
        }

        #list {
            width: 100%;
        }

        .data-container {
            /* white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            background-color: #eee;
            margin-top: 6px;*/
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
            overflow: hidden;
            height: 39px;
            /*     height: 67px;
            overflow: hidden;*/
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

        .core {
            height: auto;
            width: 100%;
        }

        .icon1,
        .icon2 {
            margin-top: -5px;
        }

        .i-input {
            /*padding-right: 4px;*/
            width: 100%;
            box-sizing: border-box;
            padding-right: 3px;
            padding-left: 3px;
        }

        .bd9-2 .input1 {
            padding-right: 2px;
            box-sizing: border-box;
        }

        #showSN {
            display: block
        }

        div[class^="group"] {
            padding-left: 9px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            height: 29px;
            flex-shrink: 0;
            overflow: hidden;
            height: 37px;
        }

        div[class^="box"] {
            flex-shrink: 0;
            width: 100%;
            height: 37px;
            /*width: 100%;*/
            /*overflow: hidden;*/
        }
        /*    div[class^="bd"]:nth-child(3) {
            padding-left: 6px;
            height: 29px;
        }
        */

        div[class^="bd"] {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 2;
            height: 29px;
            flex-shrink: 0;
            box-sizing: border-box;
            height: 37px;
            /*overflow: hidden;*/
        }

        div[class^="bd1-m"] {
            width: 0px;
            height: 0px;
            min-width: 0px;
        }

        .noshrink {
            flex-shrink: 0
        }

        .sn-container {
            display: none!important;
        }

        #showSN {
            display: block!important;
        }

        .opt1 {
            height: 30px;
            box-sizing: border-box;
            line-height: 2;
            padding-left: 10px;
        }

        .options {
            min-width: 94px;
            width: 9%;
            flex-shrink: none;
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            height: 33px;
            flex-shrink: 0;
        }

        .data {
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            height: 33px;
            width: 100%;
        }

        .procedure-icons {
            color: black;
        }

        .function-icons {
            color: black;
            margin-top: -6px;
        }

        [data-procedure="procedure-title"].procedure-icons {
            display: none;
        }

        [data-procedure="procedure-title"].function-icons {
            display: block;
        }

        .group1 [data-procedure="procedure-title"] .input1 {
            color: blue;
        }

        [data-procedure="procedure-title"] .input1 {
            border: none!important;
        }

        [data-procedure="function"].procedure-icons {
            display: none;
        }

        [data-procedure="function"].function-icons {
            display: none;
        }

        .group4 .input1,
        .group5 .input1,
        .group1 .input1,
        .group8 .input1,
        .group3 .input1,
        .group7 .input1 {
            border: 1px solid grey;
            border-radius: 1px;
        }

        .unit:nth-child(2) .input1 {
            border: none!important;
        }

        .group1 {
            min-width: 150px;
            width: 7%;
            flex-grow: 1;
            padding-right: 6px!important;
        }

        .group2 {
            min-width: 102px;
            width: 5.8%;
            flex-grow: 1;
        }

        .group3 {
            width: 9%;
            flex-grow: 1;
            min-width: 250px;
        }

        .group4 {
            min-width: 150px;
            width: 7%;
            flex-grow: 1;
        }

        .group5 {
            min-width: 150px;
            width: 7%;
            flex-grow: 1;
            padding-right: 6px;
        }

        .group6 {
            width: 7%;
            flex-grow: 1;
            min-width: 70px;
            box-sizing: border-box;
        }

        .group7 {
            width: 7%;
            flex-grow: 1;
            min-width: 102px;
        }

        .group8 {
            width: 7%;
            flex-grow: 1;
            min-width: 120px;
        }

        .group9 {
            width: 7%;
            flex-grow: 1;
            min-width: 120px;
        }

        .bd1-1 {
            min-width: 132px;
            width: 43%;
        }

        .bd1-2 {
            min-width: 110px;
            width: 100%;
            padding-left: 6px;
        }

        .bd2-1 {
            min-width: 71px;
            width: 100%;
        }

        .bd2-2 {
            min-width: 104px;
            width: 100%;
        }

        .bd2-mob {
            min-width: 0px;
            width: 100%;
        }

        .bd3-1 {
            min-width: 71px;
            width: 100%;
        }

        .bd3-2 {
            min-width: 104px;
            width: 100%;
        }

        .bd4-1 {
            min-width: 100%;
            width: 100%;
            padding-left: 23px;
            box-sizing: border-box;
        }

        .bd4-2 {
            min-width: 140px;
            width: 100%;
        }

        .bd4-head {
            min-width: 46px;
            width: 100%;
        }

        .bd5-1 {
            min-width: 71px;
            width: 100%;
        }

        .bd5-2 {
            min-width: 82px;
            width: 100%;
        }

        .bd6-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
            padding-left: 40%;
        }

        .bd7-2 {
            min-width: 70px;
            width: 100%;
            box-sizing: border-box;
            padding-right: 5px;
        }

        .bd8-2,
        .bd9-2 {
            min-width: 120px;
            width: 100%;
        }

        .bd8-2 {}
        /* .bd6-1 {
            width: 45px;
        }
        
        .bd6-2 {
            width: 90px;
            box-sizing: border-box!important;
            padding-left: 5px;
        }
        
        .bd6-3 {
            width: 144px;
        }
        
        .bd7-1 {
            width: 71px;
        }
        
        .bd7-2 {
            width: 47%;
            min-width: 104px;
        }
        
        .bd7-3 {
            padding-left: 18px!important;
            width: 94px;
        }
        
        .bd7-4 {
            width: 47%;
            min-width: 104px;
        }*/

        .ilrow {}

        .mobi-icon {
            height: 0px;
            padding: 0;
            width: 0px;
        }

        .bd2-2 .input1 {
            outline: #545659 auto 5px;
            outline-offset: -2px;
        }

        .input1 {
            /*text-align: right;*/
            border: none;
            background-color: #eee;
            width: 97%;
            /* box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5); */
            color: black;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }

        .dot {
            /*border-bottom: 1px dotted #000;*/
            overflow: auto;
            height: 40px;
        }

        .statusbutton {
            --paper-radio-button-label-spacing: 5px;
        }

        .desktop-only {
            display: block;
        }

        .mobile-only {
            display: none;
        }

        .procedures-desk {
            display: block;
        }

        .procedures-mobile {
            display: none
        }

        .historyicon {
            float: right;
        }

        @media (max-width: 1843px) {
            .procedures-desk {
                display: none;
            }
            .procedures-mobile {
                display: block
            }
            .desktop-only {
                display: none!important;
            }
            .mobile-only {
                display: block!important;
            }
            .unit:nth-child(2) {
                display: none
            }
            .mobileheader {
                background-color: var(--title-background-normal);
                color: white;
                height: 38px;
                font-size: 19px;
                min-height: 38px;
                line-height: 2;
                display: block;
                text-align: center;
            }
            [class$="-1head"],
            [class$="-3head"] {
                display: inline-block;
                width: 31%;
            }
            .input1 {
                text-align: left
            }
            [class^="group"] {
                width: 230px;
                max-width: 230px;
                min-width: 230px;
                box-sizing: border-box;
            }
            .i-input {
                width: 64%;
            }
            .input1 {
                width: 100%;
            }
            .core,
            .data,
            .data-container,
            .options {
                height: auto;
            }
            .bd4-1 {
                padding-left: 0px;
            }
            .opt1,
            .iconholder {
                margin: auto;
            }
            .bd8-2 {
                padding-right: 0px;
            }
            .bd6-1head {
                display: inline-block!important;
            }
            .bd6-2 {
                padding-left: 0px;
            }
            .bd6-2 .i-input {
                padding-left: 0px!important;
            }
            .bd6-2 .input1 {
                font-size: 14px;
            }
            .bd6-2 {
                padding-left: 0px;
            }
            .bd4-1 .i-input {
                width: 100%!important;
                padding-left: 0px!important;
            }
            .group2 .i-input,
            .group3 .i-input,
            .group5 .i-input,
            .group7 .i-input,
            .group8 .i-input,
            .group9 .i-input {
                margin-left: -4px;
            }
            .tax {
                padding-left: 0px;
            }
            .mobile-list {
                flex: 1 1 auto;
            }
            .procedures-title {
                /*color: #ad5f27;*/
                font-size: 19px;
                width: 92%;
                line-height: 2;
                padding-left: 10px;
                box-sizing: border-box;
            }
            .title-border {
                border: 1px solid black;
                border-radius: 3px;
                background-color: var(--title-background-normal);
            }
            .mobile-functions {
                height: 28px;
                width: 50%;
                line-height: 1.9;
            }
            .mobile-container {
                background-color: #eee;
                margin-top: 8px;
                overflow: hidden;
                width: 100%;
                box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
                height: 39px;
            }
            .mobile-functions .input1 {
                border: 1px solid grey;
                border-radius: 3px;
                height: 24px;
                line-height: 1;
                box-sizing: border-box;
                padding-left: 4px;
            }
            .mobile-functions .i-input {
                width: 100%!important;
                line-height: 2.6;
            }
            [data-procedure="procedure-title"].mobile-functions .input1 {
                border: none!important;
            }
            [data-procedure="procedure-title"].mobile-proceduretitle .input1 {
                color: #dd9e56;
            }
            [data-procedure="procedure-title"] .i-input {
                /*width: 93%;*/
            }
            .procedure-icons {
                color: white;
                margin-left: 22px;
                position: relative;
                bottom: 2px;
            }
            .mobiletitle {
                font-size: 18px;
                color: white;
                margin-left: 7px;
                line-height: 2
            }
            .function-icons {
                float: right;
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

        @media (min-width: 415px) {
            .mobile-only {
                display: none;
            }
            .desktop-only {
                display: inline-block;
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
            .col-xs-3-totals {
                position: relative;
                text-align: right;
                min-height: 1px;
                padding-left: 0px;
                padding-right: 0px;
                width: 30%;
                float: left;
            }
            .col-xs-9-totals {
                position: relative;
                min-height: 1px;
                padding-left: 0px;
                width: 65%;
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
            .procedurestitle {
                width: 75%;
            }
            .mobiletotal {
                width: 68%;
                float: right;
            }
            .search-row {
                margin-left: 0px;
                margin-top: 0px;
                margin-bottom: 0px;
                height: 48px;
                position: relative;
                width: 50%;
            }
            div[class^="box"] {
                height: 30px;
            }
            div[class^="bd"] {
                height: 30px;
                line-height: 2.5;
            }
            div[class^="group"] {
                height: 30px;
                padding-left: 0px;
                width: 74vw;
            }
            .bd1-1 {
                width: 34vw;
            }
            .bd1-mob1 {
                width: 16vw!important;
            }
            .bd1-mob2 {
                text-align: right;
                width: 24vw!important;
            }
            .bd2-1 {
                width: 24vw;
            }
            .bd2-2 {
                width: 50vw;
            }
            .bd3-1 {
                width: 24vw;
            }
            .bd3-2 {
                width: 50vw;
            }
            .bd6-1 {
                width: 17vw;
            }
            .bd6-2 {
                width: 31vw;
            }
            .bd6-3 {
                text-align: right;
                width: 26vw;
            }
            .bd7-1 {
                width: 16vw;
            }
            .bd7-2 {
                width: 16vw;
                text-align: right;
                box-sizing: border-box!important;
                padding-right: 2%;
            }
            .bd7-3 {
                width: 22vw;
                padding-left: 0!important;
            }
            .bd7-4 {
                width: 20vw;
            }
            .i-input {
                width: 100%
            }
            .icon1,
            .icon2 {
                margin-left: 3vw;
            }
            div[class^="bd8-"] {
                width: 74vw;
            }
            .bd2-2,
            .bd3-2,
            .bd4-1,
            .bd6-3,
            .bd7-4,
            .bd8-1,
            .bd8-2,
            .bd1-mob2 {
                padding-right: 1.5vw;
                box-sizing: border-box!important;
            }
            .data {
                height: 100%;
                overflow: hidden;
                width: 100%;
            }
            .ilrow:nth-child(1) .core {
                margin-top: 0px;
            }
            #expanded {
                height: 248px;
            }
            .group5 {
                min-width: 0px!important;
                width: 0px!important;
                height: 0px!important;
            }
            .options {
                line-height: 2.5;
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
            only-mobile {
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
            .opt1 {
                padding-left: 1vw;
            }
            .data-container {
                height: 38px;
                overflow: hidden;
            }
            .options {
                height: 100%;
                overflow: hidden;
            }
            .dot {
                height: 30px;
            }
        }
        </style>
                            <div>
                                <div class="lightgrey-padding-inner1">
                                    <div class="procedures-desk" id="table">
                                    </div>
                                    <div id="table2">
                                    </di>
                                </div>
                            </div>
            `
        }

    }
    customElements.define('defie-qalist', DefieQAList);
    