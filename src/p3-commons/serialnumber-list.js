import {LitElement} from '../../node_modules/@polymer/lit-element/lit-element.js'

import {repeat} from '../../node_modules/lit-html/lib/repeat.js'
import {render, html} from '../../node_modules/lit-html/lib/lit-extended.js';

export class SerialNumberList extends LitElement {
    static get properties() {
        return {
            serials: {
                type: Array,
                value: function() {
                    return []
                }
            },
            piece: {
                type: Object, 
                reflectToAttribute: true,
                value: function () {
                    return {

                    }
                }
            }
        }
    }

    static get observers() {
        return [
            
        ]
    }

  

    constructor() {
        super()

        

    }

    computeIndex(val) {
        return val + 1
    }

    setQty(item, qty, launch, starter) {

        this.piece = item
        this.qty = qty
        this.launch = launch
        this.starter = starter

        this.gotstarter()




        let holder = this.piece.serials.split(',')



        this.serials = []
        holder.forEach(function(item, index) {

            this.serials.push({ sn: item, id: index })
        }.bind(this))

        if (this.piece.qtyorder) {
            this.piece.qty = this.piece.qtyorder;
        }

        if (this.piece.qtyreturn) {
            this.piece.qty = -this.piece.qtyreturn;
        }

      



    }

    removeSN(item) {
        var index = item.id;
        this.serials[index].sn= ""
        render(this.serialshtml(this.serials), this.shadowRoot.querySelector('#table'))
    }

    save() {
        this.piece.serials = "";
        var temp = [];
        for (var i = 0; i < this.serials.length; i++) {

            if (i == (this.serials.length - 1)) {

                this.piece.serials = this.piece.serials + this.shadowRoot.querySelector('#input' + i).value
                break;
            }

            if (this.shadowRoot.querySelector('#input' + i).value) {

                this.piece.serials = this.piece.serials + this.shadowRoot.querySelector('#input' + i).value + ","
            } else {
                this.piece.serials = this.piece.serials + "" + ","
            }

        }


        return

    }

    gotstarter(item) {

        if (!this.attached){
            var fromMA = document.querySelector('defie-menu');
            fromMA.addEventListener(this.starter, () => {
                this.save()
                this.dispatchEvent(new CustomEvent(this.launch, { bubbles: true, composed: true }))
            });
            this.attached = true;
        }
    }

    ready() {
        super.ready()




    }

    addSN() {
           this.serialshtml = data => {

            return html`
            <div>
            ${repeat (
                 data,
                 item => item.id,
                 item => html`
                    <div id$="holder${item.id}" class="my-content"><span class="col-xs-3">${this.computeIndex(item.id)}</span><span class="col-xs-9 text-right">
                    <input class="input1" id$="input${item.id}" value="${item.sn}" >
                   </span><span class="icon-holder"><iron-icon icon="icons:close" class="icon-padding" on-tap=${()=> this.removeSN(item)}></iron-icon></span></div>
                          `
                 )}
            </div>`;
        }



                render(this.serialshtml(this.serials), this.shadowRoot.querySelector('#table'))

    }

   

    render() {


        return html `
          <style include="shared-styles">
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        .border-padding {
            margin-top: 16px;
            padding-left: 16px;
            padding-right: 6px;
        }
        
        .item-height {
            min-height: 40px
        }
        
        .title-font {
            font-size: 16px;
            min-height: 29px;
        }
        
        .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
            font-size: 13px;
            height: 21px;
        }
        
        .input {
            text-align: initial;
            border: none;
            background-color: #eee;
            font-size: 13.3px;
            width: 94%;
            height: 17px;
        }
         .input1 {
            text-align: initial;
            border: none;
            background-color: #eee;
            font-size: 13.3px;
            width: 100%;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            padding-left: 3px;

        }
        
        .col-xs-3 {
            display: inline-block;
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 25%;
            float: left;
        }
        
        .col-xs-9 {
            display: inline-block;
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 65%;
        }
        
        .text-right {
            text-align: right;
        }
        
        .icon-padding {
            padding-left: 3px;
        }
        
        .sn-topmargin {
            margin-top: 6px;
        }
        
        .piece-results {
            display: inline-block;
            ;
            margin-left: 25px;
            /*margin-bottom: -.8%*/
        }
        
        .piece-results1 {
            display: inline-block;
            ;
            margin-left: 58px;
        }
        
        .icon-holder {
            display: inline-block;
            width: 10%;
        }
        </style>
        <div class="border-padding">
            <div class="title-font"> Serial Numbers </div>
            <div class="my-content"> <span> Product No. </span><span class="piece-results">${this.piece.mfgpn}</span></div>
            <div class="my-content"> <span> Qty </span><span class="piece-results1">${this.qty}</span></div>
            <div class="sn-topmargin">
                <div id="table">
                </div>
            </div>
        </div> `

        
        
    }
}
customElements.define('serialnumber-list', SerialNumberList);