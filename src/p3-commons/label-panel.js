
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

       
        open(model){

            this.model = {}
            this.model.shipcompanyname = model.shipto.companyname;
            this.model.shipattention = model.shipto.attention;
            this.model.shipaddress = model.shipto.street + ", " + model.shipto.city + ", " + model.shipto.state + ", " + model.shipto.zipcode + ", " + model.shipto.country
            this.model.shipphone = model.shipto.phone

            this.model.companyname = model.settingscompany;
            this.model.address = model.settings.ma_street + ", " + model.settings.ma_city + ", " + model.settings.ma_state + ", " + model.settings.ma_zip + ", " + model.settings.ma_country
            this.model.phone = model.settings.ma_phone

            this.model.settings = model.settings

            this.model.id = Number(model.id)
            let ct = sessionStorage.getItem("CUSTOMTOKEN")
            this.shadowRoot.getElementById('ajaxLabel').headers['CustomToken'] = ct;
            this.shadowRoot.getElementById('ajaxLabel').url = "/bps/shippinglabels/"+this.model.settings.id + "/" + this.model.id
            this.shadowRoot.getElementById('ajaxLabel').generateRequest()

        }

        initialize(response){


            if (response.detail.response.id != 0){
                this.setModel(response.detail.response)
            } else {
                this.newModel()
            }

           const page = () => { return html` <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <section>
                    <div class="layout horizontal container">
                        <div class="title"> PN </div>
                        <input id="pn1" value=${this.model.pn1} class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn1" value=${this.model.sn1} class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PN </div>
                        <input id="pn2" value=${this.model.pn2} class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn2" value=${this.model.sn2} class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PN </div>
                        <input id="pn3" value=${this.model.pn3} class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn3" value=${this.model.sn3} class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PN </div>
                        <input id="pn4" value=${this.model.pn4} class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn4" value=${this.model.sn4} class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PN </div>
                        <input id="pn5" value=${this.model.pn5} class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn5" value=${this.model.sn5} class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PN </div>
                        <input id="pn6" value=${this.model.pn6} class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> SN </div>
                        <input id="sn6" value=${this.model.sn6} class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> PO No.</div>
                        <input id="pono" value=${this.model.po} class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> Goods Marking </div>
                        <input id="goodsmarking" value=${this.model.goodsmarking} class="input1"></input>
                     </div>

                     <div class="layout horizontal container spacer">
                        <div class="title"> Description </div>
                        <input id="description" value=${this.model.description} class="input1"></input>
                     </div>
                     

                     <div class="layout horizontal container spacer">
                        <div class="title"> Box Count </div>
                        <input id="box1" value=${this.model.bcount1} class="input1"></input>
                        <div class="of"> &nbsp of </div>
                        <input id="box2" value=${this.model.bcount2} class="input1"></input>
                     </div>
                     <div class="layout horizontal container">
                        <div class="title"> Weight </div>
                        <input id="weight" value=${this.model.weight} class="input1"></input>
                     </div>
                     <paper-button onclick="${()=>{this.save()}}" class="button" raised>Save</paper-button>
                </section>
            </div>
           `}

            render(page(), this.shadowRoot.getElementById('page'))
        }
        

        setModel(response) {
            this.model.sn1 = response.sn1
            this.model.sn2 = response.sn2
            this.model.sn3 = response.sn3
            this.model.sn4 = response.sn4
            this.model.sn5 = response.sn5
            this.model.sn6 = response.sn6

            this.model.pn1 = response.pn1
            this.model.pn2 = response.pn2
            this.model.pn3 = response.pn3
            this.model.pn4 = response.pn4
            this.model.pn5 = response.pn5
            this.model.pn6 = response.pn6

            this.model.po = response.po
            this.model.goodsmarking = response.goodsmarking
            this.model.description = response.description
            this.model.bcount1 = response.bcount1
            this.model.bcount2 = response.bcount2

            this.model.weight = response.weight
        }

        newModel(){
            this.model.sn1 = ""
            this.model.sn2 = ""
            this.model.sn3 = ""
            this.model.sn4 = ""
            this.model.sn5 = ""
            this.model.sn6 = ""

            this.model.pn1 = ""
            this.model.pn2 = ""
            this.model.pn3 = ""
            this.model.pn4 = ""
            this.model.pn5 = ""
            this.model.pn6 = ""

            this.model.po = ""
            this.model.goodsmarking = ""
            this.model.description = ""
            this.model.bcount1 = ""
            this.model.bcount2 = ""

            this.model.weight = ""
        }

        returnModel(){

            this.model.sn1 = this.shadowRoot.getElementById('sn1').value
            this.model.sn2 = this.shadowRoot.getElementById('sn2').value
            this.model.sn3 = this.shadowRoot.getElementById('sn3').value
            this.model.sn4 = this.shadowRoot.getElementById('sn4').value
            this.model.sn5 = this.shadowRoot.getElementById('sn5').value
            this.model.sn6 = this.shadowRoot.getElementById('sn6').value

            this.model.pn1 = this.shadowRoot.getElementById('pn1').value
            this.model.pn2 = this.shadowRoot.getElementById('pn2').value
            this.model.pn3 = this.shadowRoot.getElementById('pn3').value
            this.model.pn4 = this.shadowRoot.getElementById('pn4').value
            this.model.pn5 = this.shadowRoot.getElementById('pn5').value
            this.model.pn6 = this.shadowRoot.getElementById('pn6').value

            this.model.po = this.shadowRoot.getElementById('pono').value
            this.model.goodsmarking = this.shadowRoot.getElementById('goodsmarking').value
            this.model.description = this.shadowRoot.getElementById('description').value
            this.model.bcount1 = this.shadowRoot.getElementById('box1').value
            this.model.bcount2 = this.shadowRoot.getElementById('box2').value

            this.model.weight = this.shadowRoot.getElementById('weight').value


        }


        save () {

            this.returnModel()
            let ct = sessionStorage.getItem("CUSTOMTOKEN")
            this.shadowRoot.getElementById('ajaxSave').headers['CustomToken'] = ct;
            this.shadowRoot.getElementById('ajaxSave').body = JSON.stringify(this.model)
            this.shadowRoot.getElementById('ajaxSave').generateRequest()

        }

        response(e) {
            document.querySelector('#toast').text = "Saved successfully";
            document.querySelector('#toast').show();

            this.dispatchEvent(new CustomEvent('closePanel', {
              composed: true,
              bubbles: true
            }))
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

        .button {
            margin-top: 26px;
            margin-left: 41px;
            background-color: #406aad;
            color: white;
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
            
        </div>
            <iron-ajax method="PUT" id="ajaxSave" url="/bps/shippinglabels" content-type="application/json" on-response="${this.response.bind(this)}"></iron-ajax>
            <iron-ajax method="GET" id="ajaxLabel"  content-type="application/json" on-response="${this.initialize.bind(this)}"></iron-ajax>`

       }
    }

   customElements.define('label-panel', LabelPanel);

