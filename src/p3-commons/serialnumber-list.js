
import {Element as PolymerElement}
  from '../../node_modules/@polymer/polymer/polymer-element.js'
   

    export class SerialNumberList extends PolymerElement {
       

        static get template() {
         return `
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
            <div class="my-content"> <span> Product No. </span><span class="piece-results">{{piece.mfgpn}}</span></div>
            <div class="my-content"> <span> Qty </span><span class="piece-results1">{{qty}}</span></div>
            <div class="sn-topmargin">
                <template is="dom-repeat" items="{{serials}}">
                    <div id="holder[[index]]" class="my-content"><span class="col-xs-3">[[computeIndex(index)]]</span><span class="col-xs-9 text-right"><iron-input class="input" id="input[[index]]" bind-value="{{item.sn}}"><input class="input1" ><iron-input></span><span class="icon-holder"><iron-icon icon="icons:close" class="icon-padding" on-tap="remove"></iron-icon></span></div>
                </template>
            </div>
        </div> ` 
    }

        static get properties() {
            return {
                serials:{
                    type: Array,
                    value: function() {
                        return []
                    }
                }
            }
        }

        static get observers() {
            return [
                'gotstarter(starter)'
            ]
        }

        constructor() {
            super()
        }

        computeIndex(val) {
            return val + 1
        }

        setQty() {


            let holder = this.piece.serials.split(',')

    

            this.serials = []
            holder.forEach(function(item, val) {

                this.push('serials', {sn: item})
            }.bind(this))

            if (this.piece.qtyorder) {
                this.piece.qty = this.piece.qtyorder;
            }

            if (this.piece.qtyreturn) {
                // console.log("hit qty reaton serial list")
                this.piece.qty = -this.piece.qtyreturn;
                // var len = this.piece.serials.split(',').length

                // console.log("len", len)

                // console.log("this.piece.qty", this.piece.qty)
                // this.serials.push(",".repeat(this.piece.qty-len))
                // console.log("this.serials", this.serials)
            }
        }

        remove(e) {
            var index = e.model.index;
            this.set('serials.'+index+'.sn', "")
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
                   
                    this.piece.serials = this.piece.serials + this.shadowRoot.querySelector('#input' + i).value + ", "
                } else {
                   this.piece.serials = this.piece.serials + "" + ", " 
                }

            }

            this.dispatchEvent(new CustomEvent(this.launch, {bubbles:true, composed:true}))
        }

        gotstarter(item) {

            var fromMA = document.querySelector('defie-menu');
            fromMA.addEventListener(this.starter, function() {
                this.save();
            }.bind(this));
        }

        ready() {
            super.ready()
        }


    }
customElements.define('serialnumber-list', SerialNumberList);

