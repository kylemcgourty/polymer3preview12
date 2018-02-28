

  import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'


  import {repeat} from '../../node_modules/lit-html/lib/repeat.js'

  import {render} from '../../node_modules/lit-html/lib/lit-extended.js';

import '../../src/p3-commons/search-inner.js'



  export class BarCodesList extends LitElement {
        
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

       

        open(data){

            console.log('data in bc list', data)
            this.data= data

            this.data.forEach((item, i) => { item.id = i; item.qty =0})

            const datatable = (data, searchdisplay, searchkeyindexes, searchfields)=> {
                return html`<div>
                ${repeat (
                        data,
                        item => item.id,
                        item => html`       
                                            </div>
                                             <div style="display:${this.configurer(item.description)}" class="title layout horizontal">
                                                    <div class="productno">
                                                        {{item.mfgpn}}
                                                    </div>
                                                    <div class="qty">
                                                        {{item.qty}}
                                                    </div>
                                                    <div class="partid">
                                                        {{item.idver}}
                                                    </div>
                                                    <div class="description">
                                                        {{item.description}}
                                                    </div>
                                                    <div class="serialnumbers">
                                                        {{item.serialnumbers}}
                                                    </div>
                                                </div>
                                                <div  style="display:${this.configurer(item.description)}" class="layout horizontal wrap">
                                                            <div style="display:${this.configurer2(item.description)}" class="barcodecontainer">
                                                                <div class="box">
                                                                    [[compute(index)]]
                                                                </div>
                                                                <iron-input bind-value="{{bc.barcode}}" class=box-input>
                                                                    <input class="input">
                                                                </iron-input>
                                                            </div>
                                                
                                            
                      `
                )}
                </div>`
            }

            render(datatable(this.data), this.shadowRoot.getElementById('table'))


            const dadf =`<section class="list part-number-sub-list">
                            <div class="">
                                <div class="lightgrey-padding-inner1">
                                    <iron-list items="{{barcodes}}" scroll-target="document">
                                        <template>
                                            <div class="container">
                                                
                                        </template>
                                    </iron-list>
                                </div>
                        </section>`

}


configurer(description){
    if (description || description == ""){
        return "block"
    } else {
        return "none"
    }
}

configurer2(description){
    if (description || description == ""){
        return "none"
    } else {
        return "flex"
    }
}



        newFunction() {

            this.data.push({
                procedures: "",
                pass: "",
                issue: "",
                resolution: "",
                qa: "",
                title: "function"
            })


        }

        remove(item) {
            this.data.splice(item.id, 1)
        }

        add(item) {

            item.qty = this.shadowRoot.getElementById('qty-'+item.id).value
            this.dispatchEvent(new CustomEvent('BarCodesList', {
                composed: true,
                bubbles: true,
                detail: {
                    data: item
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


           .card {
        margin: 24px;
        padding: 16px;
        /*color: #757575;*/
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

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

        .container:nth-child(2) {
            background-color: #8c080a;
            color: white;
            height: 40px;
            font-size: 17px;
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
        }

        .container:nth-child(2) .title {
            line-height: 1.8;
            background-color: rgba(0, 0, 0, 0)
        }




        .components {
            color: blue;
            line-height: 1;
            display: inline-block;
            padding-top: 6px;
        }

        .component-icon {
            padding-bottom: 3px;
        }

        .productno {
            width: 12%;
            text-align: center;
        }

        .qty {
            width: 6%;
            text-align: center;
        }

        .partid {
            width: 6%;
            text-align: center;
        }

        .description {
            width: 24%;
            text-align: center;
        }

        .serialnumbers {
            width: 50%;
            text-align: center;
        }



        .only-mobile {
            display: none;
        }

        .checkbox {
            float: right;
            width: 20px;
            height: 20px;
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


        .button-row {
            margin-right: 8px;
            margin-bottom: 32px;
        }




         :host {
            --paper-input-container-label: 13px;
        }

        .specialpadding {
            padding-right: 9px;
        }



        .rm-icon-mid {
            padding-left: 14px;
            padding-right: 0px;
            margin: auto;
        }


        .partlist {
            padding-top: 16px;
            padding-left: 0%;
            font-size: 16px;
            margin-bottom: 8px;
            font-weight: 500;
        }

        .title {
            font-size: 16px;
            margin-top: 6px;
            height: 22px;
            background-color: #c6c9ce;
            line-height: 1.7;
        }

        .container {
            height: auto;
        }

        .barcodecontainer {
            height: auto;
            width: 140px
        }

        .box {
            height: 140px;
            width: 136px;
            margin: auto auto;
            outline: 1px solid #dbdde0;
            text-align: center;
            line-height: 9.5;
        }

        .box-input {
            width: 140px;
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
        }

        @media (max-width: 479px) {

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
    }
        </style>
               <div id="table">
               </div>`
        }

    }
customElements.define("defie-barcodeslist", BarCodesList);
