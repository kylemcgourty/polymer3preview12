
  import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'


  import {repeat} from '../../node_modules/lit-html/lib/repeat.js'

  import {render} from '../../node_modules/lit-html/lib/lit-extended.js';
  
  export  class DefieInnerList extends LitElement {
       


       

        static get properties() {
            return {
                checkBoxChecker: {
                    type: Boolean,
                    notify: true,
                    reflectToAttribute: true,
                    value: false,
                },
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
                    display: false

                },

            }
        }

        static get observers() {
            return [

            ]
        }
        constructor() {
            super()





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
                



                const datatable = items => {


                    return html`

                    <div>
                        ${repeat (
                            items,
                            item =>item.id,
                            item =>html`

                    <div></div>
                    <div class="unit">
                        <div class="layout vertical">
                            <div class="data-container layout horizontal">
                                <div class="options layout vertical">
                                    <div class="layout horizontal">
                                        <div class="opt1"> ${item.id} </div>
                                        <div class="iconholder">
                                            <paper-icon-button icon="${item.icons.first}" style="display: ${item.icons.firstdisplay}" on-tap="${()=> this.event1(item)}" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder">
                                            <paper-icon-button icon="${item.icons.second}" style="display: ${item.icons.seconddisplay}" on-tap="${()=> this.event2(item)}" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder">
                                            <paper-icon-button icon="${item.icons.third}" style="display: ${item.icons.thirddisplay}" on-tap="${()=> this.event3(item)}" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder">
                                            <paper-icon-button icon="${item.icons.fourth}" style="display: ${item.icons.fourthdisplay}" on-tap="${()=> this.event4(item)}" class="icon1"></paper-icon-button>
                                        </div>
                                    </div>
                                </div>
                                <div class="container layout vertical">
                                    <div class="data layout horizontal wrap">
                                        <div class="core layout horizontal wrap">
                                            <!-- MOBILE -->
                                            <div class="mobile-options layout horizontal">
                                                <div class="group5 layout horizontal wrap">
                                                    <div class="box5-data layout horizontal">
                                                        <div class="bd5-2">
                                                            <span class="bd5-1head"> ${this.col0}</span>
                                                            <iron-input class="i-input" bind-value="${item.col0.value}">
                                                                <input disabled class="input1">
                                                            </iron-input>
                                                        </div>
                                                        <div class="mobile-icons layout horizontal">
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="${item.icons.first}" style="display: ${item.icons.firstdisplay}" on-tap="${()=> this.event1(item)}" class="icon1"></paper-icon-button>
                                                            </div>
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="${item.icons.second}" style="display: ${item.icons.seconddisplay}" on-tap="${()=> this.event2(item)}" class="icon1"></paper-icon-button>
                                                            </div>
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="${item.icons.third}" style="display: ${item.icons.thirddisplay}" on-tap="${()=> this.event3(item)}" class="icon1"></paper-icon-button>
                                                            </div>
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="${item.icons.fourth}" style="display: ${item.icons.fourthdisplay}" on-tap="${()=> this.event4(item)}" class="icon1"></paper-icon-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- END MOBILE -->
                                            <div style="display: ${item.col0.display}" data-size$="${item.col0.size}" class="group2 layout horizontal wrap mobile-part">
                                                <div class="box2-data layout horizontal">
                                                    <div class="bd2-1head">
                                                        <iron-input class="i-input" bind->
                                                            <input disabled class="input1" value="${this.col0}" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd2-2">
                                                            <input style="display:${this.editableCheck(item.col0.editable)};" id$="item00-${item.id}"  on-focusout="${()=> this.event00(item)}" value="${item.col0.value}" data-align$="${item.col0.textalign}" class="input1 col0input inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col0.editable)}; color:${item.col0.color}" value="${item.col0.value}" disabled data-align$="${item.col0.textalign}" class="input1 col0input inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                             <div style="display: ${item.col1.display}" data-size$="${item.col1.size}" class="group1 layout horizontal wrap">
                                                <div class="box1-data layout horizontal">
                                                    <div class="bd2-1head">
                                                            <input disabled class="input1"  value="${this.col1}" disabled>
                                                    </div>
                                                    <div class="bd1-1 datapoint">
                                                        <input style="display:${this.editableCheck(item.col1.editable)};" id$="item11-${item.id}" on-focusout="${()=> this.event11(item)}" value="${item.col1.value}" data-align$="${item.col1.textalign}" class="input1 col1input inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col1.editable)}; color:${item.col1.color}" value="${item.col1.value}" disabled data-align$="${item.col1.textalign}" class="input1 col1input inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col2.display}" data-size$="${item.col2.size}" class="group4 layout horizontal wrap">
                                                <div class="box4-data layout horizontal">
                                                    <div class="bd4-1head">
                                                        <input disabled class="input1"  value="${this.col2}" disabled>
                                                    </div>
                                                    <div class="bd4-1 datapoint">
                                                        <input style="display:${this.editableCheck(item.col2.editable)};" id$="item22-${item.id}" on-focusout="${()=> this.event22(item)}" value="${item.col2.value}" data-align$="${item.col2.textalign}" class="input1 col2input inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col2.editable)}; color:${item.col2.color}" value="${item.col2.value}" disabled data-align$="${item.col2.textalign}" class="input1 col2input inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col3.display}" data-size$="${item.col3.size}" class="group5 layout horizontal wrap ">
                                                <div class="box5-data layout horizontal">
                                                    <div class="bd5-1head">
                                                        <input disabled class="input1"  value="${this.col3}" disabled>
                                                    </div>
                                                    <div class="bd5-2 datapoint">
                                                        <input style="display:${this.editableCheck(item.col3.editable)};" id$="item33-${item.id}" on-focusout="${()=> this.event33(item)}" value="${item.col3.value}" data-align$="${item.col3.textalign}" class="input1 col3input inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col3.editable)}; color:${item.col3.color}" value="${item.col3.value}" disabled data-align$="${item.col3.textalign}" class="input1 col3input inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col4.display}" data-size$="${item.col4.size}" class="group6 layout horizontal wrap">
                                                <div class="box6-data layout horizontal">
                                                    <div class="bd6-1head">
                                                        <input disabled class="input1"  value="${this.col4}" disabled>
                                                    </div>
                                                    <div class="bd6-2 datapoint">
                                                        <input style="display:${this.editableCheck(item.col4.editable)};" id$="item44-${item.id}" on-focusout="${()=> this.event44(item)}" value="${item.col4.value}" data-align$="${item.col4.textalign}" class="input1 col4input inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col4.editable)}; color:${item.col4.color}" value="${item.col4.value}" disabled data-align$="${item.col4.textalign}" class="input1 col4input inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col5.display}" data-size$="${item.col5.size}" class="group3 layout horizontal wrap">
                                                <div class="box3-data layout horizontal">
                                                    <div class="bd3-1head">
                                                        <input disabled class="input1"  value="${this.col5}" disabled>
                                                    </div>
                                                    <div class="bd3-2  datapoint">
                                                        <div style="width: 100%; display: ${item.col5.input};" on-tap="${()=> this.tapevent55(item)}">
                                                            <input style="display:${this.editableCheck(item.col5.editable)};" id$="item55-${item.id}" on-focusout="${()=> this.event55(item)}" value="${item.col5.value}" data-align$="${item.col5.textalign}" class="input1 col5input inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col5.editable)}; color:${item.col5.color}" value="${item.col5.value}" disabled data-align$="${item.col5.textalign}" class="input1 col5input inputnum">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col6.display}" data-size$="${item.col6.size}" class="group7 layout horizontal wrap">
                                                <div class="box7-data layout horizontal">
                                                    <div class="bd7-1head">
                                                        <input disabled class="input1"  value="${this.col6}" disabled>
                                                    </div>
                                                    <div class="bd7-2 datapoint">
                                                        <input style="display:${this.editableCheck(item.col6.editable)};" id$="item66-${item.id}" on-focusout="${()=> this.event66(item)}" value="${item.col6.value}" data-align$="${item.col6.textalign}" class="input1 col6input inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col6.editable)}; color:${item.col6.color}" value="${item.col6.value}" disabled data-align$="${item.col6.textalign}" class="input1 col6input inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                             <div style="display: ${item.col7.display}" data-size$="${item.col7.size}" class="group8 layout horizontal wrap">
                                                <div class="box8-data layout horizontal">
                                                    <div class="bd8-1head">
                                                        <input disabled class="input1"  value="${this.col7}" disabled>
                                                    </div>
                                                    <div class="bd8-2 datapoint">
                                                        <input style="display:${this.editableCheck(item.col7.editable)};" id$="item77-${item.id}" on-focusout="${()=> this.event77(item)}" value="${item.col7.value}" data-align$="${item.col7.textalign}" class="input1 col7input inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col7.editable)}; color:${item.col7.color}" value="${item.col7.value}" disabled data-align$="${item.col7.textalign}" class="input1 col7input inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col8.display}" data-size$="${item.col8.size}" class="group9 layout horizontal wrap">
                                                <div class="box9-data layout horizontal">
                                                    <div class="bd9-1head">
                                                        <input disabled class="input1"  value="${this.col8}" disabled>
                                                    </div>
                                                    <div class="bd9-2 datapoint">
                                                        <input style="display:${this.editableCheck(item.col8.editable)};" id$="item88-${item.id}" on-focusout="${()=> this.event88(item)}" value="${item.col8.value}" data-align$="${item.col8.textalign}" class="input1 col8input inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col8.editable)}; color:${item.col8.color}" value="${item.col8.value}" disabled data-align$="${item.col8.textalign}" class="input1 col8input inputnum">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: ${item.col9.display}" data-size$="${item.col9.size}" class="group10 layout horizontal wrap">
                                                <div class="box10-data layout horizontal">
                                                    <div class="bd10-2">
                                                        <div class="bd10-1head"> 
                                                        <input disabled class="input1"  value="${this.col9}" disabled>

                                                        </div>
                                                        <input style="display:${this.editableCheck(item.col9.editable)};" id$="item99-${item.id}" on-focusout="${()=> this.event99(item)}" value="${item.col9.value}" data-align$="${item.col9.textalign}" class="input1 col9input inputnum outline">
                                                            <input style="display:${this.editableCheck1(item.col9.editable)}; color:${item.col9.color}" value="${item.col9.value}" disabled data-align$="${item.col9.textalign}" class="input1 col9input inputnum">
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <div class="notebook-options layout horizontal">
                                    <div class="group5 layout horizontal wrap">
                                        <div class="box5-data layout horizontal">
                                            <div class="mobile-icons layout horizontal">
                                                <div class="iconholder">
                                                    <paper-icon-button icon="${item.icons.first}" style="display: ${item.icons.firstdisplay}" on-tap="${()=>this.event1(item)}" class="icon1"></paper-icon-button>
                                                </div>
                                                <div class="iconholder">
                                                    <paper-icon-button icon="${item.icons.second}" style="display: ${item.icons.seconddisplay}" on-tap="${()=>this.event2(item)}" class="icon1"></paper-icon-button>
                                                </div>
                                                <div class="iconholder">
                                                    <paper-icon-button icon="${item.icons.third}" style="display: ${item.icons.thirddisplay}" on-tap="${()=>this.event3(item)}" class="icon1"></paper-icon-button>
                                                </div>
                                                <div class="iconholder">
                                                    <paper-icon-button icon="${item.icons.fourth}" style="display: ${item.icons.fourthdisplay}" on-tap="${()=>this.event4(item)}" class="icon1"></paper-icon-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="display: ${this.showTitle(item.serials)}" class="layout horizontal appendages">
                                <div>
                                    <div style="display: ${this.showTitle(item.serials)}" class="serialtitle show" on-tap="ILSerials"> Serial Numbers: </div>
                                </div>
                                <div id$="serials-${item.id}" class="serials desktop show">
                                    <div style="display: ${this.showTitle(item.serials)}" class="group10">
                                        <div class="bd10-1 dot">
                                            ${item.serials ? item.serials.serials : ""}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div style="display: ${this.showTitle2(item.shipping)}" class="layout horizontal appendages">
                                <div class="serialtitle" on-tap="ILShipping"> Shipping </div>
                                <div id$="shipping-${item.id}" class="group12 show">
                                    <div>
                                        <div class="bd12-1">
                                            <span class="bd12-1head">Tracking Number</span>${item.shipping ? item.shipping.tracking: ""}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="bd12-2">
                                            <span class="bd12-2head">US ECCN</span>${item.shipping ? item.shipping.useccn: ""}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="bd12-3">
                                            <span class="bd12-3head">HS Tariff</span>${item.shipping ? item.shipping.hstariff: ""}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="bd12-4">
                                            <span class="bd12-4head">Dim (HxWxD)</span>${item.shipping ? item.shipping.dimension: ""}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="bd12-5">
                                            <span class="bd12-5head">Weight</span>${item.shipping ? item.shipping.netweight: ""}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="bd12-6">
                                            <span class="bd12-6head">Incoterms</span>${item.shipping ? item.shipping.incoterms: ""}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="bd12-7">
                                            <span class="bd12-7head">Orig. Country</span>${item.shipping ? item.shipping.countryoforigin: ""}
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

                render(datatable(this.data), this.shadowRoot.getElementById('table')) 



                  let elem = this.shadowRoot.querySelector('.unit')
                  let elem1 = this.shadowRoot.querySelector('.mobileheader')


                  elem.style.setProperty('--title-background-normal', this.data[0].color.value)
                  elem1.style.setProperty('--title-background-normal', this.data[0].color.value)
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

        togglecheckbox() {
            this.checkBoxChecker ? this.checkBoxChecker = false : this.checkBoxChecker = true

        }

        updateIL(liIndex) {

   

            if (typeof liIndex == "number") {
                let ind = liIndex + 1
                let nodes = this.shadowRoot.querySelector('#serials-' + ind).classList
                let classlist = [...nodes]
                if (classlist.indexOf('show') == -1) {
                    this.shadowRoot.querySelector('#serials-' + ind).classList.add('show')
                    this.shadowRoot.querySelector('#serials2-' + ind).classList.add('show')
                    this.shadowRoot.querySelector('#HWRlabel-' + ind).classList.add('show')
                }

            }


        }

        updateIL2(liIndex, lineitem) {


            let ind = liIndex + 1
            let nodes = this.shadowRoot.querySelector('#shipping-' + ind).classList
            let classlist = [...nodes]


            if (!lineitem.display) {
                if (classlist.indexOf('show')) {
                    this.shadowRoot.querySelector('#shipping-' + ind).classList.remove('show')
                }
                return
            }


            if (classlist.indexOf('show') == -1) {
                this.shadowRoot.querySelector('#shipping-' + ind).classList.toggle('show')
            }


        }

        ILSerials(e) {
            let ind = e.model.index
            this.shadowRoot.querySelector('#serials-' + ind).classList.toggle('show')
            this.shadowRoot.querySelector('#serials2-' + ind).classList.toggle('show')
            this.shadowRoot.querySelector('#HWRlabel-' + ind).classList.toggle('show')
            this.shadowRoot.querySelector('iron-list').dispatchEvent(new CustomEvent('iron-resize', {
                bubbles: true,
                composed: true
            }));

        }


        ILShipping(e) {
            let ind = e.model.index
            this.shadowRoot.querySelector('#shipping-' + ind).classList.toggle('show')
            this.shadowRoot.querySelector('iron-list').dispatchEvent(new CustomEvent('iron-resize', {
                bubbles: true,
                composed: true
            }));
        }

        toggleLeft() {
            this.dispatchEvent(new CustomEvent('CloseMenuEvent', {
                composed: true,
                bubbles: true
            }));
        }

   

        showSN(item, selected) {
            if (window.innerWidth > 479) {
                return selected ? "showSN" : "nil"

            }
        }

        showTitle(collection) {

            if (collection){

            collection.serials || collection.serials == "" ? collection = collection.serials : collection


            if (collection == undefined || collection.length == 0) {
                return "none"
            }

            if (collection) {
                collection = collection.split(",")


                let i = 0
                let bool = true
                while (bool) {
                    if (collection[i] == undefined) {
                        return "none"
                    }

                    if (collection[i] != "") {
                        return ""
                    }
                    i = i + 1
                }

                return "none"
            }
        }

        }

        showTitle2(display) {

            if (!display){
                return "none"
            }


            if (display.display) {

         
            return ""

        } else {
            return "none"
        }

    }






        showSerials(serial) {
            if (serial) {
                for (var i = 0; i < serial.length; i++) {
                    if (serial[i].sn !== "") {
                        return false;
                    }
                }
            }
            return true;

        }
        showHWRs(hwrs) {
            if (hwrs) {
                for (var i = 0; i < hwrs.length; i++) {
                    if (hwrs[i].sn !== "") {
                        return false;
                    }
                }
            }
            return true;

        }

        enableSN(val) {

            if (val === "Closed") {
                return true;

            } else {
                return false;
            }
        }

   
        showDetails(item, selected) {
            return selected ? "expanded" : "nil"
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

        .unit:nth-child(2) .group10,
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
            /*font-size: 1vw;*/
            font-size: .85vw;

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

        .bd9-2 .input1 {
            box-sizing: border-box;
        }

        #showSN {
            display: block
        }

        div[class^="group"] {
            margin-left: 9px;

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
            min-width: 127px;
            width: 7%;
            ;
            flex-grow: 1;
        }

        .group2 {
            min-width: 102px;
            width: 7%;
            flex-grow: 1;
        }

        .group3 {
            width: 7%;
            flex-grow: 1;
            min-width: 102px;
        }

        .group4 {
            width: 7%;
            flex-grow: 1;
            min-width: 90px;
        }

        .group5 {
            min-width: 100px;
            width: 7%;
            flex-grow: 1;
        }

        .group6 {
            width: 7%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group7 {
            width: 7%;
            flex-grow: 1;
            min-width: 63px;
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

        .group10 {
            width: 100%;
            flex-grow: 1;
            min-width: 120px;
            box-sizing: border-box;
        }

        [data-size="large"] {
            min-width: 100px!important;
            width: 15%!important;
            flex-grow: 1!important;
        }

        [data-size="small"] {
            min-width: 75px!important;
            width: 3.5%!important;
            flex-grow: 1!important;
        }

        .group10,
        .bd10-1,
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
            min-width: 100px;
            width: 100%;
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
            min-width: 71px;
            width: 100%;
        }

        .bd4-1 .input1 {}

        .bd4-2 {
            min-width: 82px;
            width: 100%;
        }

        .bd5-1 {
            min-width: 80px;
            width: 100%;
            padding-left: 23px;
            box-sizing: border-box;
        }

        .bd5-2 .input1 {}

        .bd5-2 {
            min-width: 140px;
            width: 100%;
        }

        .bd5-head {
            min-width: 46px;
            width: 100%;
        }

        .bd6-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd7-2 {
            min-width: 70px;
            width: 100%;
        }

        .bd8-2,
        .bd9-2 {
            min-width: 120px;
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

        .group10 [class^="bd"],
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
            padding-right: 5px;
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
            width: 95%;
        }

        .notebook-options {
            display: none!important
        }

        @media(max-width: 1750px) {
            .desktop-only {
                display: none!important;
            }
            .mobile-only {
                display: block!important;
            }
            .unit:nth-child(2) {
                display: none!important;
            }

            .notebook-options {
                display: block!important;
                /*width: 120px;*/
                /*min-width: 120px;*/
                background-color: #eee;
                margin-top: 8px;
                width: 161px;
            }

            .notebook-options .group5 {
                width: 100%!important;
                min-width: 20px!important;
                margin-left: 0px;
            }

            .notebook-options .mobile-icons {

                -webkit-justify-content: flex-end;
                justify-content: flex-end;
                width: 100%
            }
            .container {
                /*width: 86%;*/
            }

            .options {
                display: none!important;
            }


            .core {

                -webkit-justify-content: space-between;
                justify-content: space-between;
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
                height: 36px;
                font-size: 22px;
                pointer-events: none;
                display: block;
                text-align: center;
            }
            [data-size="large"],
            [data-size="small"] {
                width: 210px!important;
                max-width: 210px!important;
                min-width: 210px!important;
                box-sizing: border-box!important;
            }

            [class$="-1head"],
            [class$="-3head"] {
                display: inline-block;
                width: 80px;
                min-width: 80px;
            }
            [class^="bd"] {
                text-overflow: unset!important;
            }
            [class^="bd"] .input1 {
                text-align: left;
                width: 100%;
                height: 16px;
                font-size: 13px;
            }
            .datapoint {
                width: 130px;
                min-width: 130px;
            }
            [class^="group"] {
                width: 210px;
                max-width: 210px;
                min-width: 210px;
                box-sizing: border-box;
            }
            .input1 {
                /*width: 107px;*/
                text-align: left!important;
                padding-left: 2px;
            }
            .i-input {
                width: 100%!important;
                height: 28px;
                line-height: 2;
                padding-left: 5px;
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
                /*margin: auto;*/
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
            .group9 .i-input {
                margin-left: -4px;
            }
            .tax {
                padding-left: 0px;
                /*margin-left: -3px;*/
            }

            .appendages span, .appendages div {
                font-size: 13px!important
            }

            .outline {
                width: 92%!important;
            }
        }

        @media (max-width: 479px) {
            .notebook-options {
                display: none!important
            }

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

                .container {
                width: 105%;
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
        </div>
            `
        }

    }
    customElements.define('defie-innerlist', DefieInnerList);
    