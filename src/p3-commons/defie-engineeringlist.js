
  import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'


  import {repeat} from '../../node_modules/lit-html/lib/repeat.js'

  import {render} from '../../node_modules/lit-html/lib/lit-extended.js';

   export class DefieEngineeringList extends LitElement {

        




        static get properties() {
            return {
                data: {
                    type: Array,
                    value: function() {
                        return []
                    }
                },
                history: {
                    type: Boolean,
                    reflectToAttribute: true,
                    value: true
                },
                col0: {
                    type: String,
                    reflectToAttribute: true,
                },
                col1: {
                    type: String,
                    reflectToAttribute: true,
                },
                col2: {
                    type: String,
                    reflectToAttribute: true,

                },
                col3: {
                    type: String,
                    reflectToAttribute: true,

                },
                col4: {
                    type: String,
                    reflectToAttribute: true,

                },
                col5: {
                    type: String,
                    reflectToAttribute: true,

                },
                col6: {
                    type: String,
                    reflectToAttribute: true,

                },
                col7: {
                    type: String,
                    reflectToAttribute: true,

                },
                col8: {
                    type: String,
                    reflectToAttribute: true,

                },
                col9: {
                    type: String,
                    reflectToAttribute: true,

                },

            }
        }

        static get observers() {
            return [

            ]
        }
        constructor() {
            super()
            // Utils.apply(this);





        }

        open(coldata, lineitems) {

            if (coldata) {
                this.col0 = coldata["col0"].value
                this.col1 = coldata["col1"].value
                this.col2 = coldata["col2"].value
                this.col3 = coldata["col3"].value
                this.col4 = coldata["col4"].value
                this.col5 = coldata["col5"].value
                this.col6 = coldata["col6"].value
                this.col7 = coldata["col7"].value
                this.col8 = coldata["col8"].value
                this.col9 = coldata["col9"].value


                let temp = []
                temp.push(coldata)
                temp = temp.concat(lineitems)
                this.data= temp


                this.datatable = items => {
                    return html`

                    <div>
                      ${repeat(
                         items,
                         item =>item.id,
                         item => html`
                         <div></div>
                          <div class="unit">
                        <div style="display: ${item.display}" class="layout vertical">
                            <div class="data-container layout horizontal">
                                <div class="options layout vertical" style="background-color: ${item.background}">
                                    <div class="layout horizontal" style="visibility: ${item.visibility}">
                                        <div class="opt1"> ${item.id} </div>
                                        <div class="iconholder">
                                            <paper-icon-button icon="${item.icons.first}" style="display: ${item.icons.firstdisplay}" on-tap=${() => this.event1(item)}" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder">
                                            <paper-icon-button icon="${item.icons.second}" style="display: ${item.icons.seconddisplay}" on-tap=${() => this.event2(item)}" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder">
                                            <paper-icon-button icon="${item.icons.third}" style="display: ${item.icons.thirddisplay}" on-tap=${() => this.event3(item)}" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder">
                                            <paper-icon-button icon="${item.icons.fourth}" style="display: ${item.icons.fourthdisplay}" on-tap=${() => this.event4(item)}" class="icon1"></paper-icon-button>
                                        </div>
                                    </div>
                                </div>
                                <div class="container layout vertical" style="background-color: ${item.background}">
                                    <div class="data layout horizontal wrap">
                                        <div class="core layout horizontal wrap" style="background-color: ${item.background}">
                                            <!-- MOBILE -->
                                            <div class="mobile-options layout horizontal">
                                                <div class="group5 layout horizontal wrap" style="visibility: ${item.visibility}">
                                                    <div class="box5-data layout horizontal">
                                                        <div class="bd5-2">
                                                            <span class="bd5-1head"> ${this.col0}</span>
                                                            <iron-input class="i-input" bind-value="${item.col0.value}">
                                                                <input disabled class="input1">
                                                            </iron-input>
                                                        </div>
                                                        <div class="mobile-icons layout horizontal" style="visibility: ${item.visibility}">
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="${item.icons.first}" style="display: ${item.icons.firstdisplay}" on-tap="${() =>this.event1(item)}" class="icon1"></paper-icon-button>
                                                            </div>
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="${item.icons.second}" style="display: ${item.icons.seconddisplay}" on-tap="${() =>this.event2(item)}" class="icon1"></paper-icon-button>
                                                            </div>
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="${item.icons.third}" style="display: ${item.icons.thirddisplay}" on-tap="${() =>this.event3(item)}" class="icon1"></paper-icon-button>
                                                            </div>
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="${item.icons.fourth}" style="display: ${item.icons.fourthdisplay}" on-tap="${() =>this.event4(item)}" class="icon1"></paper-icon-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- END MOBILE -->
                                            <div style="display: ${item.col0.display}" data-size$="${item.col0.size}" class="group2 layout horizontal wrap mobile-part">
                                                <div class="box2-data layout horizontal" style="visibility: ${item.visibility}">
                                                    <div class="bd2-2">
                                                        <span class="bd2-1head">${this.col0}:</span>
                                                            <input on-focusout="${() =>this.event00(item)}" id$="item00-${item.id}" style="display:${this.editableCheck(item.col0.editable)};" data-align$="${item.col0.textalign}" value="${item.col0.value}" class="input1 col0input inputnum outline">
                                                            <input value="${item.col0.value}" disabled data-align$="${item.col0.textalign}" style="display:${this.editableCheck1(item.col0.editable)};" class="input1 col0input inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col1.display}" data-size$="${item.col1.size}" class="group1 layout horizontal wrap">
                                                <div class="box1-data layout horizontal" style="visibility: ${item.visibility}">
                                                    <div class="bd2-1head">${this.col1}: </div>
                                                    <div class="bd1-1">
                                                            <input value="${item.col1.value}" id$="item11-${item.id}" style="display:${this.editableCheck(item.col1.editable)};" on-focusout="${() =>this.event11(item)}" data-align$="${item.col1.textalign}" class="input1 outline inputnum">
                                                            <input value="${item.col1.value}" style="display:${this.editableCheck1(item.col1.editable)};" disabled data-align$="${item.col1.textalign}" class="input1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col2.display}" data-size$="${item.col2.size}" class="group4 layout horizontal wrap">
                                                <div class="box4-data layout horizontal">
                                                    <div class="bd4-1">
                                                        <span class="bd4-1head">${this.col2}: </span>
                                                            <input id$="item22-${item.id}" style="display:${this.editableCheck(item.col2.editable)}; background-color: ${item.background}"  on-focusout="${() =>this.event22(item)}" value="${item.col2.value}" data-align$="${item.col2.textalign}" class="input1 outline"  >
                                                            <input style="display:${this.editableCheck1(item.col2.editable)}; background-color: ${item.background}" value="${item.col2.value}" disabled data-align$="${item.col2.textalign}" class="input1" >
                                                    </div>
                                                </div>
                                            </div>
                                             <div style="display: ${item.col3.display}" data-size$="${item.col3.size}" class="group5 layout horizontal wrap ">
                                                <div class="box5-data layout horizontal">
                                                    <div class="bd5-2">
                                                        <span class="bd5-1head"> ${this.col3}:</span>
                                                            <input id$="item33-${item.id}" style="display:${this.editableCheck(item.col3.editable)}; background-color: ${item.background}" on-focusout="${() =>this.event33(item)}" value="${item.col3.value}" data-align$="${item.col3.textalign}" class="input1 inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col3.editable)}; background-color: ${item.background}" value="${item.col3.value}" disabled data-align$="${item.col3.textalign}" class="input1 inputnum" >
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col4.display}" data-size$="${item.col4.size}" class="group6 layout horizontal wrap">
                                                <div class="box6-data layout horizontal">
                                                    <div class="bd6-2 layout horizontal">
                                                        <span class="bd6-1head">  ${this.col4}:</span>
                                                        <div class="layout horizontal togglecontainer">
                                                            <iron-icon class='icon hover shrinker' style="display: ${item.showtoggle}" on-tap="${() => this.toggleBOM(item)}" icon='icons:expand-more'></iron-icon>
                                                                <input data-align$="${item.col4.textalign}" id$="item44-${item.id}" style="display:${this.editableCheck(item.col4.editable)}; background-color: ${item.background}"  on-focusout="${() =>this.event44(item)}" value="${item.col4.value}" class="input1 inputnum outline" >
                                                                <input disabled value="${item.col4.value}" data-align$="${item.col4.textalign}" class="input1 inputnum iconinput" style="display:${this.editableCheck1(item.col4.editable)}; background-color: ${item.background}">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col5.display}" data-size$="${item.col5.size}" class="group3 layout horizontal wrap">
                                                <div class="box3-data layout horizontal">
                                                    <div class="bd3-2 layout horizontal">
                                                        <span class="bd3-1head"> ${this.col5}:</span>
                                                        <div style="width: 100%; display: ${item.col5.input};" on-tap="tap${() =>this.event55(item)}">
                                                                <input on-focusout="${() =>this.event55(item)}" value="${item.col5.value}" data-align$="${item.col5.textalign}" id$="item55-${item.id}" style="display:${this.editableCheck(item.col5.editable)}; background-color: ${item.background}; color:${item.col5.color}" class="input1 inputnum outline">
                                                                <input value="${item.col5.value}" disabled data-align$="${item.col5.textalign}" style="display:${this.editableCheck1(item.col5.editable)}; background-color: ${item.background}; color:${item.col5.color}" class="input1 inputnum adjustment">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col6.display}" data-size$="${item.col6.size}" class="group7 layout horizontal wrap">
                                                <div class="box7-data layout horizontal">
                                                    <div class="bd7-2">
                                                        <span class="bd7-1head"> ${this.col6}:</span>
                                                            <input data-align$="${item.col6.textalign}" on-focusout="${() =>this.event66(item)}" value="${item.col6.value}" id$="item66-${item.id}" style="display:${this.editableCheck(item.col6.editable)}; color:${item.col6.color}; background-color: ${item.background}" class="input1 inputnum outline">
                                                            <input disabled value="${item.col6.value}" data-align$="${item.col6.textalign}" style="display:${this.editableCheck1(item.col6.editable)}; color:${item.col6.color};  background-color: ${item.background}" class="input1 inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col7.display}" data-size$="${item.col7.size}" class="group8 layout horizontal wrap">
                                                <div class="box8-data layout horizontal" style="visibility: ${item.visibility}">
                                                    <div class="bd8-2">
                                                        <span class="bd8-1head"> ${this.col7}</span>
                                                            <input data-align$="${item.col7.textalign}" on-focusout="${() =>this.event77(item)}" value="${item.col7.value}" id$="item77-${item.id}" style="display:${this.editableCheck(item.col7.editable)}; background-color: ${item.background}" class="input1 inputnum outline">
                                                            <input disabled value="${item.col7.value}" data-align$="${item.col7.textalign}" style="display:${this.editableCheck1(item.col7.editable)}; background-color: ${item.background}" class="input1 inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col8.display}" data-size$="${item.col8.size}" class="group9 layout horizontal wrap">
                                                <div class="box9-data layout horizontal" style="visibility: ${item.visibility}">
                                                    <div class="bd9-2" style="visibility: ${item.visibility}">
                                                        <span class="bd9-1head"> ${this.col8}</span>
                                                            <input id$="item88-${item.id}" style="display:${this.editableCheck(item.col8.editable)};"  on-focusout="${() =>this.event88(item)}" value="${item.col8.value}"  data-align$="${item.col8.textalign}" class="input1 inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col8.editable)};" value="${item.col8.value}" disabled data-align$="${item.col8.textalign}" class="input1 inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col9.display}" data-size$="${item.col9.size}" class="group10 layout horizontal wrap">
                                                <div class="box10-data layout horizontal" style="visibility: ${item.visibility}">
                                                    <div class="bd10-2" style="visibility: ${item.visibility}">
                                                        <span class="bd10-1head"> ${this.col9}</span>
                                                            <input data-align$="${item.col9.textalign}" class="input1 inputnum outline" id$="item99-${item.id}" style="display:${this.editableCheck(item.col9.editable)};"  on-focusout="${() =>this.event99(item)}" value="${item.col9.value}">
                                                            <input style="display:${this.editableCheck1(item.col9.editable)};" value="${item.col9.value}" disabled data-align$="${item.col9.textalign}" class="input1 inputnum">
                                                    </div>
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

                </div>    `
                }


                render(this.datatable(this.data), this.shadowRoot.getElementById('table')) 


                  let elem = this.shadowRoot.querySelector('.unit')
                  let elem1 = this.shadowRoot.querySelector('.mobileheader')


                  elem.style.setProperty('--title-background-normal', this.data[0].color.value)
                  elem1.style.setProperty('--title-background-normal', this.data[0].color.value)

            }
        }

        toggleBOM(item) {

            if (item.type === "BOM") {
                this.count = item.id + 1
                this.change = true
                while (this.change) {

                    if (!this.data[this.count]){
                        this.change = false
                    } else if (this.data[this.count].type == "subitem" && this.data[this.count].display == "") {
                        this.data[this.count].display = "none"
                    } else if (this.data[this.count].type == "subitem" && this.data[this.count].display == "none") {
                        this.data[this.count].display = ""
                    } else {
                        this.change = false
                    }
                    this.count = this.count + 1
                }
                
                render(this.datatable(this.data), this.shadowRoot.getElementById('table')) 

            }
        }



        editableCheck(val) {
            if (val === true) {
                return ""
            } else {
                return "none"
            }
        }

        editableCheck1(val) {
            if (val === true) {
                return "none"
            } else {
                return ""
            }
        }

        event1(item) {
            this.dispatchEvent(new CustomEvent('event1', {
                bubbles: true,
                composed: true,
                detail: {
                    item: item
                }
            }))
        }

        event2(item) {
            this.dispatchEvent(new CustomEvent('event2', {
                bubbles: true,
                composed: true,
                detail: {
                    item: item
                }
            }))
        }
        event3(item) {
            this.dispatchEvent(new CustomEvent('event3', {
                bubbles: true,
                composed: true,
                detail: {
                    item: item
                }
            }))
        }
        event4(item) {
            this.dispatchEvent(new CustomEvent('event4', {
                bubbles: true,
                composed: true,
                detail: {
                    item: item
                }
            }))
        }
       event00(item) {
                    let id = item.id


                   item.col0.value = this.shadowRoot.querySelector('#item00-'+id).value 

                    this.dispatchEvent(new CustomEvent('event00', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            item: item
                        }
                    }))
                }

         event11(item) {
                    let id = item.id

                   item.col1.value = this.shadowRoot.querySelector('#item11-'+id).value 


                    this.dispatchEvent(new CustomEvent('event11', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            item: item
                        }
                    }))
                }

         event22(item) {
                    let id = item.id

                   item.col2.value = this.shadowRoot.querySelector('#item22-'+id).value 

                    this.dispatchEvent(new CustomEvent('event22', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            item: item
                        }
                    }))
                }

         event33(item) {
                    let id = item.id

                   item.col3.value = this.shadowRoot.querySelector('#item33-'+id).value 

                    this.dispatchEvent(new CustomEvent('event33', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            item: item
                        }
                    }))
                }

         event44(item) {
                    let id = item.id

                   item.col4.value = this.shadowRoot.querySelector('#item44-'+id).value 

                    this.dispatchEvent(new CustomEvent('event44', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            item: item
                        }
                    }))
                }

         event55(item) {
                    let id = item.id

                   item.col5.value = this.shadowRoot.querySelector('#item55-'+id).value 

                    this.dispatchEvent(new CustomEvent('event55', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            item: item
                        }
                    }))
                }

         event66(item) {
                    let id = item.id

                   item.col6.value = this.shadowRoot.querySelector('#item66-'+id).value 

                    this.dispatchEvent(new CustomEvent('event66', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            item: item
                        }
                    }))
                }

         event77(item) {
                    let id = item.id

                   item.col7.value = this.shadowRoot.querySelector('#item77-'+id).value 

                    this.dispatchEvent(new CustomEvent('event77', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            item: item
                        }
                    }))
                }

         event88(item) {
                    let id = item.id

                   item.col8.value = this.shadowRoot.querySelector('#item88-'+id).value 

                    this.dispatchEvent(new CustomEvent('event88', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            item: item
                        }
                    }))
                }

         event99(item) {
                    let id = item.id

                   item.col9.value = this.shadowRoot.querySelector('#item99-'+id).value 

                    this.dispatchEvent(new CustomEvent('event99', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            item: item
                        }
                    }))
                }
        tapevent55(e) {
            this.dispatchEvent(new CustomEvent('tapevent55', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }
        checkbox(e) {
            this.dispatchEvent(new CustomEvent('checkbox', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }
       
        ready() {
            super.ready()
            // this.titlecolor();

        }

        render({}){
               
        return html`
         <style include="shared-styles iron-flex iron-flex-alignment">

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

        .unit:nth-child(2) {
            background-color: var(--title-background-normal);
            color: white;
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
            height: 40px;
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

        .unit:nth-child(2) .data-container,
        .unit:nth-child(2) .container {
            height: 40px;
            margin-top: 0px;
        }

        .unit:nth-child(2) .icon1,
        .unit:nth-child(2) .icon2 {
            display: none;
        }

        .unit:nth-child(2) .group11,
        .unit:nth-child(2) .group12,
        .unit:nth-child(2) .appendages {
            display: none!important;
        }

        .unit:nth-child(2) .options {
            visibility: hidden;
        }

        .unit:nth-child(2) .tax {
            display: none
        }

        .bd6-1head {
            display: none;
        }

        .unit:nth-child(2) .input1 {
            background-color: var(--title-background-normal);
            color: white;
            height: 38px;
            font-size: 18px;
            min-height: 38px;
            line-height: 2.5;
            pointer-events: none;
            outline: none;
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

        .mobileheader {
            display: none;
        }

        .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            box-sizing: border-box;
            padding-right: 3px;
        }

        .text-right {
            text-align: right;
        }

        .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
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

        .partlist {
            padding-top: 16px;
            padding-left: 0%;
            font-size: 16px;
            font-weight: 500;
        }

        .tax {
            --paper-checkbox-size: 15px;
            padding-left: 11px;
        }

        #list {
            width: 100%;
            flex: 1 1 auto;
        }

        .ilholder {
            display: flex;
            flex-direction: column;
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
            height: 33px;
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
        }

        div[class^="box"] {
            height: 29px;
            flex-shrink: 0;
            width: 100%
            /*width: 100%;*/
            /*overflow: hidden;*/
        }

        div[class^="bd"] {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 2;
            height: 29px;
            flex-shrink: 0;
            box-sizing: border-box;
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

        .show {
            display: block!important;
            visibility: visible!important;
        }

        .serials {
            width: 100%;
            visibility: hidden;
        }

        .serials2 {
            display: none;
        }

        .appendages {
            background-color: #eee;
            width: 100%;
        }

        .unit {
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
            overflow: hidden;
        }

        .opt1 {
            height: 30px;
            box-sizing: border-box;
            line-height: 2;
            padding-left: 10px;
            width: 27px;
        }

        .options {
            /*min-width: 133px;*/
            /*width: 9%;*/
            flex-shrink: none;
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            /*height: 33px;*/
            flex-shrink: 0;
        }

        .container {
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            width: 100%;
        }

        .data {
            background-color: #eee;
            /*margin-top: 8px;*/
            overflow: hidden;
            height: 33px;
            width: 100%;
        }

        .group1 {
            width: 1%;
            flex-shrink: 1;

            flex-grow: 1;
        }

        .group2 {
            width: 1%;
            flex-shrink: 1;
            flex-grow: 1;
        }

        .group3 {
            width: 1%;
            flex-shrink: 1;
            flex-grow: 1;
        }

        .group4 {
            width: 1%;
            flex-shrink: 1;
            flex-grow: 1;
        }

        .group5 {
            width: 1%;
            flex-shrink: 1;
            flex-grow: 1;
        }

        .group6 {
            width: 1%;
            flex-shrink: 1;
            flex-grow: 1;
            box-sizing: border-box;
        }

        .group7 {
            width: 1%;
            flex-shrink: 1;
            flex-grow: 1;
        }

        .group8 {
            width: 1%;
            flex-shrink: 1;
            flex-grow: 1;
        }

        .group9 {
            width: 1%;
            flex-shrink: 1;
            flex-grow: 1;
        }

        .group10 {
            width: 1%;
            flex-shrink: 1;
            flex-grow: 1;
            box-sizing: border-box;
        }

        [data-size="large"] {
            min-width: 100px!important;
            width: 15%!important;
            flex-grow: 1!important;
        }


        .group11,
        .bd11-1 {
            height: 24px!important;
        }

        .group12 {
            height: auto!important;
            display: none;
        }

        .group12 [class^="bd"] {
            height: 24px!important
        }

        .group12 [class="bd12-1head"] {
            display: block;
        }

        .group14 {
            flex-grow: 1;
            min-width: 200px;
            width: 15%;
            flex-grow: 1;
        }

        .bd1-1 {
            width: 100%;
        }

        .bd1-2 {
            width: 100%;
            padding-left: 6px;
        }

        .bd2-1 {
            width: 100%;
        }

        .bd2-2 {
            width: 100%;
        }

        .bd2-mob {
            width: 100%;
        }

        .bd3-1 {
            width: 100%;
        }

        .bd3-2 {
            width: 100%;
        }

        .bd4-1 {
            width: 100%;
        }

        .bd4-1 .input1 {}

        .bd4-2 {
            width: 100%;
        }

        .bd5-1 {
            width: 100%;
            padding-left: 23px;
            box-sizing: border-box;
        }

        .bd5-2 .input1 {}

        .bd5-2 {
            width: 100%;
        }

        .bd5-head {
            width: 100%;
        }

        .bd6-2 {
            width: 100%;
            box-sizing: border-box;
        }

        .bd7-2 {
            width: 100%;
        }

        .bd8-2,
        .bd9-2,
        .bd10-2 {
            width: 100%;
        }

        .bd8-2 {
            box-sizing: border-box;
            padding-right: 5px;
        }

        .bd14-1 {
            min-width: 100%;
            width: 100%;
            padding-left: 23px;
            box-sizing: border-box;
            text-align: left!important;
        }

        .group12 [class$="head"] {
            width: 120px!important;
            display: inline-block;
        }

        .group11 [class^="bd"],
        .group12 [class^="bd"],
        .serialtitle {
            line-height: 1.5!important
        }

        .input1 {
            border: none;
            background-color: #eee;
            width: 100%;
            /* box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5); */
            color: black;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 14px;
            box-sizing: border-box;
            padding-right: 3px;
        }

        .desktop-only {
            display: block;
        }

        .mobile-only {
            display: none;
        }

        .mobile-options {
            display: none!important;
        }

        .mobile-part {
            display: block!important;
        }

        [data-align="center"] {
            text-align: center;
        }

        [data-align="right"] {
            text-align: right;
        }

        [data-align="left"] {
            text-align: left;
        }

        .checkboxholder {
            width: 100%;
        }

        .serialtitle {
            height: 24px;
            line-height: 2.0;
            padding-left: 10px;
            width: 133px;
            box-sizing: border-box;
        }

        .outline {
            outline: #545659 auto 5px;
            outline-offset: -2px;
        }

        @media(max-width: 1854px) {
            .desktop-only {
                display: none!important;
            }
            .mobile-only {
                display: block!important;
            }
            .unit:nth-child(2) {
                display: none!important;
            }
            .checkboxholder {
                width: 48%;
                text-align: left;
                box-sizing: border-box;
                padding-right: 3px;
                padding-left: 3px;
                margin-left: 4px;
            }
            .mobileheader {
                background-color: var(--title-background-normal);
                color: white;
                height: 24px;
                font-size: 19px;
                line-height: 1.3;
                pointer-events: none;
                display: block;
                text-align: center;
            }

            .togglecontainer {
                width: 54%;
                position: relative;
            }

            .icon {
                position: absolute;
            }
            [data-size="large"] {
                width: 230px!important;
                max-width: 230px!important;
                min-width: 230px!important;
                box-sizing: border-box!important;
            }
            [class$="-1head"],
            [class$="-3head"] {
                display: inline-block;
                min-width: 120px;
            }
            [class^="bd"] {
                text-overflow: unset!important;
            }
            [class^="bd"] .input1 {
                text-align: left;
                width: 100%;
            }
            [class^="group"] {
                width: 230px;
                max-width: 230px;
                min-width: 230px;
                box-sizing: border-box;
            }
            .input1 {
                width: 107px;
                text-align: left!important
            }
            .i-input {
                width: 47%!important;
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
            .bd14-1 {
                padding-left: 0px;
            }
            .bd1-1 .i-input {
                margin-left: -1px!important;
            }
            .opt1,
            .iconholder {
                margin: auto;
            }
            .bd5-1 .input1 {
                width: 100%!important;
            }
            .bd6-1head {
                display: inline-block!important;
            }
            .bd6-2 {
                padding-left: 0px;
            }
            .bd6-2 .i-input {
                padding-left: 4px!important;
            }
            .bd6-2 .input1 {
                font-size: 14px;
            }
            .bd8-2 {
                padding-right: 0px;
            }
            .group1 .i-input,
            .group2 .i-input,
            .group3 .i-input,
            .group4 .i-input,
            .group5 .i-input,
            .group6 .i-input,
            .group7 .i-input,
            .group8 .i-input,
            .group9 .i-input,
            .group10 .i-input {
                margin-left: -4px;
            }
            .tax {
                padding-left: 0px;
                /*margin-left: -3px;*/
            }

            .iconinput {
                padding-left: 3px;
            }
        }

        @media (max-width: 797px) {
            .options {
                display: none!important;
            }
            .mobile-options {
                display: block!important;
            }
            .mobile-part {
                display: none!important;
            }
            .mobile-icons {
                position: absolute;
                right: 0;
            }
            .i-input {
                width: calc(87vw - 120px)!important;
            }
            .iconholder {
                margin: 0;
            }
            .bd4-1 {
                padding-left: 0px;
            }
            .desk-title,
            .desk-title2 {
                display: none!important;
            }
            .mobile-title {
                display: block!important;
            }
            [class^="group"] {
                width: 92vw;
                max-width: 92vw;
                min-width: 92vw;
                box-sizing: border-box;
            }
            .data {
                width: 100%;
            }

            .adjustment {
                padding-left: 4px;
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
        </style>
        <div class="ilholder">
            <div class="mobileheader"> Items </div>
                    <div id="table"></div> 
        </div>
        </div>`
    }


    }
    customElements.define('defie-engineeringlist', DefieEngineeringList);
