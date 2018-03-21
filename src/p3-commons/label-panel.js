
  import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'



  import {render} from '../../node_modules/lit-html/lib/lit-extended.js';

  export class LabelPanel extends LitElement {
       
        static get properties() {
            return {
                model: {
                    type: Object,
                    reflectToAttribute: true,
                    notify: true,
                    value: function() {
                        return {
                            ainfovalues: {
                                ainfo1_value: "",
                                ainfo2_value: "",
                                ainfo3_value: "",
                                ainfo4_value: "",
                                ainfo5_value: "",
                                ainfo6_value: "",
                                ainfo7_value: "",
                            },

                            binfovalues: {
                                binfo1_value: '',
                                binfo2_value: "",
                                binfo3_value: "",
                                binfo4_value: "",
                                binfo5_value: "",
                                binfo6_value: "",
                                binfo7_value: "",
                            }
                        }
                    }
                },
                model1: {
                    type: Object,
                    reflectToAttribute: true,
                    notify: true,
                    value: function() {
                        return {
                            ainfovalues: {
                                ainfo1_value: "",
                                ainfo2_value: "",
                                ainfo3_value: "",
                                ainfo4_value: "",
                                ainfo5_value: "",
                                ainfo6_value: "",
                                ainfo7_value: "",
                            },

                            binfovalues: {
                                binfo1_value: '',
                                binfo2_value: "",
                                binfo3_value: "",
                                binfo4_value: "",
                                binfo5_value: "",
                                binfo6_value: "",
                                binfo7_value: "",
                            }
                        }
                    }
                },
                showainfo: {
                    type: Boolean,
                    notify: true,
                    value: true,
                    isToggle: true
                },
                showbinfo: {
                    type: Boolean,
                    notify: true,
                    value: true,
                    isToggle: true
                },
            }
        }

        constructor() {
            super();
            // Utils.apply(this);
        }

       
        open(modulebillshipto, disabledinput, displaysearch, searchid, ainfo, binfo){


           const page = () => { return html` <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <section>
                    <div class="layout horizontal container">
                        <div class="title"> PN </div>
                        <input id="pn1" class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn1" class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PN </div>
                        <input id="pn2" class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn2" class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PN </div>
                        <input id="pn3" class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn3" class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PN </div>
                        <input id="pn4" class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn4" class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PN </div>
                        <input id="pn5" class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn5" class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PN </div>
                        <input id="pn6" class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn6" class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PO No.</div>
                        <input id="pono" class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> Goods Marking </div>
                        <input id="goodsmarking" class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> Description </div>
                        <input id="pn6" class="input1"></input>
                     </div>
                     

                     <div class="layout horizontal container spacer">
                        <div class="title"> Box Count </div>
                        <input id="box1" class="input1"></input>
                        <div class="of"> &nbsp of </div>
                        <input id="box2" class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> Weight </div>
                        <input id="weight" class="input1"></input>
                     </div>
                </section>
            </div>
           `}

            render(page(), this.shadowRoot.getElementById('page'))
        }
        resetAB() {


            this.set('model', JSON.parse(JSON.stringify(this.model1)))
        }

        returnModel(){

            this.model.ainfovalues.ainfo1_value = this.shadowRoot.getElementById('ainfo1').value
            this.model.ainfovalues.ainfo2_value = this.shadowRoot.getElementById('ainfo2').value
            this.model.ainfovalues.ainfo3_value = this.shadowRoot.getElementById('ainfo3').value
            this.model.ainfovalues.ainfo4_value = this.shadowRoot.getElementById('ainfo4').value
            this.model.ainfovalues.ainfo5_value = this.shadowRoot.getElementById('ainfo5').value
            this.model.ainfovalues.ainfo6_value = this.shadowRoot.getElementById('ainfo6').value
            this.model.ainfovalues.ainfo7_value = this.shadowRoot.getElementById('ainfo7').value


            this.model.binfovalues.binfo1_value  = this.shadowRoot.getElementById('binfo1').value
            this.model.binfovalues.binfo2_value = this.shadowRoot.getElementById('binfo2').value
            this.model.binfovalues.binfo3_value = this.shadowRoot.getElementById('binfo3').value
            this.model.binfovalues.binfo4_value = this.shadowRoot.getElementById('binfo4').value
            this.model.binfovalues.binfo5_value = this.shadowRoot.getElementById('binfo5').value
            this.model.binfovalues.binfo6_value = this.shadowRoot.getElementById('binfo6').value
            this.model.binfovalues.binfo7_value = this.shadowRoot.getElementById('binfo7').value

            return this.model
        }

        

        ready() {
            super.ready()
        }

        render() {
        return html`<style include="shared-styles iron-flex iron-flex-alignment">

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

     
        :host {
            display: block;
            --title-background-normal: black;
            --title-normal: white;
        }
        
       
        
    
        section {
            display: block;
            margin-top: 35px;
        }
        
       
        .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }
        
      
        
        .of {
                white-space: nowrap;
        }
       
        
        .col-md-6 {
            position: relative;
            min-height: 1px;
            /* float: left; */
            /* width: 50%; */
            padding-left: 15px;
            padding-right: 15px;
        }
        
       
        
        .container {
            margin-top: 5px;
        }
        
      
        .title {
                font-size: 13px;
                white-space: nowrap;
        }
        
   
     
        
        .section {
            margin-bottom: 24px;
        }
     
     
        
        .spacer {
            margin-top: 15px!important;
        }
        
        
        .logout {
            float: right;
            font-size: 14px;
            line-height: 2;
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
            font-size: 13px;
            height: 19px;
            margin-left: 10px;
        }
      

        .title-rightpaneldraw {
            font-size: 16px;
            background-color: #e6e6e6;
            padding-left: 5%;
            padding-bottom: 0%;
            padding-top: 3%;
            text-align: left;
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
        
        
        </style>
           <div class="title-rightpaneldraw">
                    Shipping Label
                </div>
                <div style="background-color: #e6e6e6;">
                    <div class="close-interface">
                        <span on-tap="${() => this.close()}">Close</span>
                        <iron-icon icon="close" on-tap="${() => this.close()}"></iron-icon>
                    </div>
                </div>
        <div id="page" class="row">
            
        </div>`
       }
    }

   customElements.define('label-panel', LabelPanel);

