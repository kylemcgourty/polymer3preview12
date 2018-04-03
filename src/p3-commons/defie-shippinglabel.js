
  import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'



  import {render} from '../../node_modules/lit-html/lib/lit-extended.js';


       

  export class DefieShippingLabel extends LitElement {

       

      
        constructor() {
            super()

         
        }



        formatAddress(address, country) {

            return address + ', ' + country
        }

        computeLabels(labels) {
            if (labels && labels.length > 0) {
                return true;
            } else {
                return false;
            }
        }


        retrieveData(){

            if (this.editable){
                this.model.key1 = this.shadowRoot.getElementById('key1').value
                this.model.key2 = this.shadowRoot.getElementById('key2').value
                this.model.key3 = this.shadowRoot.getElementById('key3').value
                this.model.key4 = this.shadowRoot.getElementById('key4').value
                this.model.key5 = this.shadowRoot.getElementById('key5').value
                this.model.key6 = this.shadowRoot.getElementById('key6').value

                this.model.key7 = this.shadowRoot.getElementById('key7').value
                this.model.key8 = this.shadowRoot.getElementById('key8').value
                this.model.key9 = this.shadowRoot.getElementById('key9').value
                this.model.key10 = this.shadowRoot.getElementById('key10').value
                this.model.key11 = this.shadowRoot.getElementById('key11').value
                this.model.key12 = this.shadowRoot.getElementById('key12').value


                this.model.snkey1 = this.shadowRoot.getElementById('snkey1').value
                this.model.snkey2 = this.shadowRoot.getElementById('snkey2').value
                this.model.snkey3 = this.shadowRoot.getElementById('snkey3').value
                this.model.snkey4 = this.shadowRoot.getElementById('snkey4').value
                this.model.snkey5 = this.shadowRoot.getElementById('snkey5').value
                this.model.snkey6 = this.shadowRoot.getElementById('snkey6').value




            
           } else {
            
                        this.model.companyname = this.shadowRoot.getElementById('company').value
                        this.model.address = this.shadowRoot.getElementById('address').value
                        this.model.phone = this.shadowRoot.getElementById('phone').value
            
                        this.model.shipcompanyname = this.shadowRoot.getElementById('shipcompany').value
                        this.model.shipattention = this.shadowRoot.getElementById('shipattention').value
                        this.model.shipaddress = this.shadowRoot.getElementById('shipaddress').value
                        this.model.shipphone = this.shadowRoot.getElementById('shipphone').value
            
            
                        this.model.company = this.shadowRoot.getElementById('company').value
                        this.model.company = this.shadowRoot.getElementById('company').value
                        this.model.company = this.shadowRoot.getElementById('company').value
            
            
                        this.model.pn1 = this.shadowRoot.getElementById('partnumber1').value;
                        this.model.pn2 = this.shadowRoot.getElementById('partnumber2').value;
                        this.model.pn3 = this.shadowRoot.getElementById('partnumber3').value;
                        this.model.pn4 = this.shadowRoot.getElementById('partnumber4').value;
                        this.model.pn5 = this.shadowRoot.getElementById('partnumber5').value;
                        this.model.pn6 = this.shadowRoot.getElementById('partnumber6').value;
            
                        this.model.sn1 = this.shadowRoot.getElementById('labelsn1').value
                        this.model.sn2 = this.shadowRoot.getElementById('labelsn2').value
                        this.model.sn3 = this.shadowRoot.getElementById('labelsn3').value
                        this.model.sn4 = this.shadowRoot.getElementById('labelsn4').value
                        this.model.sn5 = this.shadowRoot.getElementById('labelsn5').value
                        this.model.sn6 = this.shadowRoot.getElementById('labelsn6').value
            
            
            
                        this.model.po = this.shadowRoot.getElementById('po').value
                        this.model.description = this.shadowRoot.getElementById('description').value
                        this.model.bcount1 = this.shadowRoot.getElementById('bcount1').value.toString()
                        this.model.bcount2 = this.shadowRoot.getElementById('bcount2').value.toString()
                        this.model.weight = this.shadowRoot.getElementById('weight').value
                    }

            return this.model



        }

       

        initializer(model, first, disabled, keysonly) {
            // this.fire('closePanel', {})

            this.model= model;
            this.editable = first
            this.hidekeys = keysonly


            if (first){
                this.model.key1 = ""
                this.model.key2 = ""
                this.model.key3 = ""
                this.model.key4 = ""
                this.model.key5 = ""
                this.model.key6 = ""

                this.model.key7 = ""
                this.model.key8 = ""
                this.model.key9 = ""
                this.model.key10 = ""
                this.model.key11 = ""
                this.model.key12 = ""


                this.model.snkey1 = ""
                this.model.snkey2 = ""
                this.model.snkey3 = ""
                this.model.snkey4 = ""
                this.model.snkey5 = ""
                this.model.snkey6 = ""

                this.keydisable = false;
                this.valuedisable = true;

            
            }

            if (disabled){
                this.keydisable = true;
                this.valuedisable= true;

            }

            if (!disabled && !first){
                this.keydisable = true;
                this.valuedisable = false

             
            }

            

            const shippinglabel = (model)=> {
                return html`<div >
                                <div class="row container">
                                    <div class="col-pns1">
                                        <div class="col-md-halfL">
                                            <div class="my-content">
                                                <div class="shiptitle">
                                                    From
                                                </div>
                                            </div>
                                            <div class="my-content">
                                                <div>
                                                        <input data-keysonly$="${this.hidekeys}" disabled id="company" value="${model.companyname}" class="input1 col-xs-9">
                                                </div>
                                            </div>
                                            <div class="my-content">
                                                <div>
                                                        <input data-keysonly$="${this.hidekeys}" disabled id="address" value="${model.address}" class="input1 col-xs-9">
                                                </div>
                                            </div>
                                            <div class="my-content">
                                                <div>
                                                        <input data-keysonly$="${this.hidekeys}" disabled id="phone" value="${model.phone}" class="input1 col-xs-9">
                                                </div>
                                            </div>
                                            <div class="my-content">
                                                <div>
                                                        <input data-keysonly$="${this.hidekeys}" disabled class="input1 col-xs-9">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div class="col-pns1">
                                            <div class="col-md-halfR">
                                                <div class="my-content">
                                                    <div class="shiptitle">
                                                        To
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="">
                                                            <input data-keysonly$="${this.hidekeys}" disabled id="shipcompany" value="${model.shipcompanyname}" class="input1 col-xs-9">
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="">
                                                            <input data-keysonly$="${this.hidekeys}" disabled id="shipattention" value="${model.shipattention}" class="input1 col-xs-9">
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="">
                                                            <input data-keysonly$="${this.hidekeys}" disabled id="shipaddress" value="${model.shipaddress}" class="input1 col-xs-9">
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="">
                                                            <input data-keysonly$="${this.hidekeys}" disabled id="shipphone" value="${model.shipphone}" class="input1 col-xs-9">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <div class="col-pns">
                                        <div class="col-md-halfL">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.sn1}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"><span class="description"><input disabled="${this.keydisable}"  id="key1" value="${model.key1}" placeholder="PN:" class="input2 enteredpn placeholder">

                                            <input disabled="${this.keydisable}"  id="key1" value="${model.key1}"  class="input2 noplaceholder enteredpn">
                                            </span>
                                                    <input disabled="${this.valuedisable}"  data-keysonly$="${this.hidekeys}" id="partnumber1" value="${model.pn1}" class="input1 enteredpn">
                                            </div>
                                            
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="hwr-words"><input disabled="${this.keydisable}" placeholder="SN:" id="snkey1" value="${model.snkey1}" class="input2 placeholder"> 

                                                <input disabled="${this.keydisable}"  id="snkey1" value="${model.snkey1}" class="input2 noplaceholder">
                                            </span>
                                                    <input disabled="${this.valuedisable}" value="${model.sn1}" data-keysonly$="${this.hidekeys}" id="labelsn1" class="hwr-input input1">
                                            </div>
                                        </div>
                                        <div class="col-md-halfL">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.sn2}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"><span class="description"> <input disabled="${this.keydisable}"  id="key2" value="${model.key2}" placeholder="PN:" class="input2 enteredpn placeholder">

                                            <input disabled="${this.keydisable}"  id="key2" value="${model.key2}"  class="input2 noplaceholder enteredpn">
                                            </span>
                                                    <input disabled="${this.valuedisable}" data-keysonly$="${this.hidekeys}" id="partnumber2" value="${model.pn2}" class="input1 enteredpn">
                                            </div>
                                            
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="hwr-words"><input disabled="${this.keydisable}" placeholder="SN:" id="snkey2" value="${model.snkey2}" class="input2 placeholder"> 

                                                <input disabled="${this.keydisable}" id="snkey2" value="${model.snkey2}" class="input2 noplaceholder">
                                            </span>
                                                    <input disabled="${this.valuedisable}" data-keysonly$="${this.hidekeys}" id="labelsn2" value="${model.sn2}" class="hwr-input input1">
                                            </div>
                                        </div>
                                        <div class="col-md-halfL1">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.sn3}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description"><input disabled="${this.keydisable}"  id="key3" value="${model.key3}" placeholder="PN:" class="input2 enteredpn placeholder">

                                            <input disabled="${this.keydisable}"  id="key3" value="${model.key3}"  class="input2 noplaceholder enteredpn">
                                            </span>
                                                    <input disabled="${this.valuedisable}" data-keysonly$="${this.hidekeys}" id="partnumber3" value="${model.pn3}" class=" enteredpn input1">
                                            </div>
                                            
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="hwr-words"><input disabled="${this.keydisable}" placeholder="SN:" id="snkey3" value="${model.snkey3}" class="input2 placeholder"> 

                                                <input disabled="${this.keydisable}" id="snkey3" value="${model.snkey3}" class="input2 noplaceholder">
                                            </span>
                                                    <input disabled="${this.valuedisable}" data-keysonly$="${this.hidekeys}" id="labelsn3" value="${model.sn3}" class="hwr-input input1">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-pns">
                                        <div class="col-md-halfR">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.sn4}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description"><input disabled="${this.keydisable}"  id="key4" value="${model.key4}" placeholder="PN:" class="input2 enteredpn placeholder">

                                            <input disabled="${this.keydisable}"  id="key4" value="${model.key4}"  class="input2 noplaceholder enteredpn">
                                            </span>
                                                    <input disabled="${this.valuedisable}" data-keysonly$="${this.hidekeys}" id="partnumber4" value="${model.pn4}" class="input1 enteredpn">
                                            </div>
                                            
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="hwr-words"><input disabled="${this.keydisable}" placeholder="SN:" id="snkey4" value="${model.snkey4}" class="input2 placeholder"> 

                                                <input disabled="${this.keydisable}" id="snkey4" value="${model.snkey4}" class="input2 noplaceholder">
                                            </span>
                                                    <input disabled="${this.valuedisable}" data-keysonly$="${this.hidekeys}" id="labelsn4" value="${model.sn4}" class="input1 hwr-input">
                                            </div>
                                        </div>
                                        <div class="col-md-halfR">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.sn5}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description"><input disabled="${this.keydisable}"  id="key5" value="${model.key5}" placeholder="PN:" class="input2 enteredpn placeholder">

                                            <input disabled="${this.keydisable}"  id="key5" value="${model.key5}"  class="input2 noplaceholder enteredpn">
                                            </span>
                                                    <input disabled="${this.valuedisable}" data-keysonly$="${this.hidekeys}" id="partnumber5" value="${model.pn5}" class="input1 enteredpn">
                                            </div>
                                            
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="hwr-words"><input disabled="${this.keydisable}" placeholder="SN:" id="snkey5" value="${model.snkey5}" class="input2 placeholder"> 

                                                <input disabled="${this.keydisable}" id="snkey5" value="${model.snkey5}" class="input2 noplaceholder">
                                            </span>
                                                    <input disabled="${this.valuedisable}" data-keysonly$="${this.hidekeys}" id="labelsn5" value="${model.sn5}" class="input1 hwr-input">
                                            </div>
                                        </div>
                                        <div class="col-md-halfR1">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.sn6}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description"><input disabled="${this.keydisable}"  id="key6" value="${model.key6}" placeholder="PN:" class="input2 enteredpn placeholder">

                                            <input disabled="${this.keydisable}"  id="key6" value="${model.key6}"  class="input2 noplaceholder enteredpn">
                                            </span>
                                                    <input disabled="${this.valuedisable}" data-keysonly$="${this.hidekeys}" id="partnumber6" value="${model.pn6}" class="input1 enteredpn">
                                            </div>
                                            
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="hwr-words"><input disabled="${this.keydisable}" placeholder="SN:" id="snkey6" value="${model.snkey6}" class="input2 placeholder"> 

                                                <input disabled="${this.keydisable}" id="snkey6" value="${model.snkey6}" class="input2 noplaceholder">
                                            </span>
                                                    <input disabled="${this.valuedisable}" data-keysonly$="${this.hidekeys}" id="labelsn6" value="${model.sn6}" class="input1 hwr-input">
                                            </div>
                                        </div>
                                    </div>
                                    <div style="clear: both;"></div>
                                    <div class="col-pns">
                                        <div class="col-md-bottomL1">
                                            <div class="detail-header"> <input disabled="${this.keydisable}" placeholder="Product No:"  id="key7" value="${model.key7}" class="placeholder input2 detail-input">
                                            <div class="detail-header"> <input disabled="${this.keydisable}"   id="key7" value="${model.key7}" class="noplaceholder input2 detail-input"> </div>

                                             </div>
                                                <input data-keysonly$="${this.hidekeys}" disabled="${this.valuedisable}" id="po" value="${model.po}" class="input1  detail-input">
                                        </div>
                                    </div>
                                    <div class="col-pns">
                                        <div class="col-md-bottom1">
                                            <div class="detail-header"> <input disabled="${this.keydisable}" placeholder="Goodsmarking:"  id="key8" value="${model.key8}" class="placeholder input2 detail-input"> 
                                            <input disabled="${this.keydisable}"   id="key8" value="${model.key8}" class="noplaceholder input2 detail-input"> 
                                            </div>
                                                <input data-keysonly$="${this.hidekeys}" disabled="${this.valuedisable}" id="goodsmarking" value="${model.goodsmarking}" class="input1  detail-input">
                                        </div>
                                    </div>
                                    <div class="col-desc">
                                        <div class="detail-header1"> <input disabled="${this.keydisable}" placeholder="Description:"  id="key9" value="${model.key9}" class="placeholder input2 detail-input"> 
                                        <input disabled="${this.keydisable}"  id="key9" value="${model.key9}" class="input2 detail-input">
                                        </div>
                                            <input data-keysonly$="${this.hidekeys}" disabled="${this.valuedisable}" id="description" value="${model.description}" class="noplaceholder desc-input input1">
                                    </div>
                                    <div class="col-pns">
                                        <div class="col-md-bottomL1">
                                            <div class="detail-header"> <input disabled="${this.keydisable}" placeholder="Box:"  id="key10" value="${model.key10}" class="placeholder input2 detail-input">
                                            <input disabled="${this.keydisable}"   id="key10" value="${model.key10}" class="noplaceholder input2 detail-input">
                                             </div>
                                                <input data-keysonly$="${this.hidekeys}" disabled="${this.valuedisable}" id="bcount1" style="float: left;"  value="${model.bcount1}" class="input1 detail-input1">
                                            <div class="of"> of </div>
                                                <input data-keysonly$="${this.hidekeys}" disabled="${this.valuedisable}" id="bcount2" style="float: left;"  value="${model.bcount2}" class="input1 detail-input1">
                                            <div style="clear: both"></div>
                                        </div>
                                    </div>
                                    <div class="col-pns">
                                        <div class="col-md-bottom1">
                                            <div class="detail-header"> <input disabled="${this.keydisable}" placeholder="Weight:"  id="key11" value="${model.key11}" class="placeholder input2 detail-input">
                                            <input disabled="${this.keydisable}"  id="key11" value="${model.key11}" class="noplaceholder input2 detail-input"> </div>
                                                <input data-keysonly$="${this.hidekeys}" disabled="${this.valuedisable}" id="weight" value="${model.weight}" class="input1  detail-input">
                                        </div>
                                    </div>
                                    <div class="col-desc-bot">
                                        <div class="detail-header1 center"><input disabled="${this.keydisable}" placeholder="Manufactured in the USA"  id="key12" value="${model.key12}" class=" placeholder input2 detail-input">
                                        <input disabled="${this.keydisable}"  id="key12" value="${model.key12}" class="noplaceholder input2 detail-input"></div>
                                    </div>
                </div>`
            }

            render(shippinglabel(this.model), this.shadowRoot.getElementById('table'))


            console.log('the keys and val', this.keydisable, this.valuedisable)
            if (this.keydisable ){
                    let nodes = this.shadowRoot.querySelectorAll('input.noplaceholder')

                    console.log('running', nodes)
                nodes.forEach((item)=> {
                    console.log('setting item', item)
                    item.setAttribute("style", "display: block;")
                })

                let nodes1 = this.shadowRoot.querySelectorAll('input.placeholder')
                nodes1.forEach((item)=> {
                    item.setAttribute("style", "display: none;")
                })
            } else {
                let nodes = this.shadowRoot.querySelectorAll('input.noplaceholder')
                console.log('nls', nodes)
                nodes.forEach((item)=> {
                    console.log('nodes', item)
                    item.setAttribute("style", "display: none;")
                })

                let nodes1 = this.shadowRoot.querySelectorAll('input.placeholder')
                nodes1.forEach((item)=> {
                    console.log('nodes1', item)
                    item.setAttribute("style", "display: block;")
                })
            }

        }




     

      

       

        close() {
            this.$.drawer.closeDrawer();
        }

       
        ready() {
            super.ready();

        }


        render() {
            return html`<style include="shared-styles">

    .card {
        margin: 24px;
        padding: 16px;
        /*color: #757575;*/
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }

         :host {
            display: block;
            box-sizing: border-box;
        }

        #headerContainer {
            z-index: 2;
        }

        #drawer {
            z-index: 2;
        }

        paper-drawer-panel {
            --paper-drawer-panel-left-drawer-container: {
                z-index: 3;
            }
            ;
        }

        section {
            display: block;
            /*padding: 0 16px;*/
        }

        .checkbox {
            float: right;
            width: 20px;
            height: 20px;
        }

        .input {
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            height: 21px!important;
        }
        /* .input {
        min-height: 24px;
        text-align: initial;
        border: none;
        background-color: white;
        margin-left: 1%;

        border-color: #eee;
        border-bottom: 1px solid rgba(155, 155, 155, 0.5);
    }*/

        .input1 {
            border: none;
            height: 18px;
            width: 100%;
            padding-left: 1%;
            box-sizing: border-box;
            background-color: #eee;
        }



        .input2 {
            border: none;
            height: 18px;
            width: 100%;
            padding-left: 3px;
            box-sizing: border-box;

        }


        .input-textarea-edit {
            min-height: 24px;
            text-align: left;
            border: hidden;
            border-color: white;
            background-color: white;
            border-bottom: 1px dotted #000;
        }

        .input-textarea-list {
            min-height: 24px;
            text-align: left;
            border: none;
            border-color: white;
            background-color: white;
        }

        .only-mobile {
            display: none;
        }

        .text-right {
            text-align: right;
        }

        .col-xs-12 {
            position: relative;
            min-height: 1px;
            /*padding-left: 15px;
        padding-right: 15px;*/
            float: left;
            width: 100%;
        }

        .col-xs-12a {
            position: relative;
            min-height: 1px;
            /* padding-left: 15px;
        padding-right: 15px;*/
            float: left;
            width: 100%;
        }

        .col-pns {
            position: relative;
            min-height: 1px;
            float: left;
            width: 49%;
            /*border: black solid 1px;*/
        }

        .col-pns1 {
            position: relative;
            min-height: 1px;
            float: left;
            width: 49%;
            /*border: black solid .1px;*/
            /*border: black solid 1px;*/
        }

        .col-md-halfL {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
            border-right: none;
        }

        .col-md-halfR {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
        }

        .col-md-halfL1 {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
            border-right: none;
        }

        .col-md-halfR1 {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
        }

        .col-md-half:nth-child(1n+2) {
            border-top: none;
        }

        .col-md-bottom {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
        }

        .col-md-bottomL {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-bottom: none;
            border-right: none;
        }

        .col-md-bottomL1 {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-right: none;
        }

        .col-md-bottom1 {
            position: relative;
            min-height: 1px;
            width: 100%;
            border: black solid .1px;
            border-right: none;
        }

        .col-xs-3 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 15%;
            float: left;
            margin-left: 1%
        }

        .col-xs-9 {
            position: relative;
            min-height: 1px;
            /*padding-left: 0px;*/
            padding-right: 0px;
            width: 100%;
        }

        .col-md-6L {
            position: relative;
            min-height: 1px;
            /* padding-left: 22px;
        padding-right: 22px;*/
            float: left;
            width: 49%;
            border: black solid 1px;
            border-right: none;
        }

        .col-md-6R {
            position: relative;
            min-height: 1px;
            /* padding-left: 22px;
        padding-right: 22px;*/
            float: left;
            width: 49%;
            border: black solid 1px;
        }

        .col-xs-6 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 50%;
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
            /*margin-top: 33px;*/
            background-color: #fff;
            min-height: 3000px;
        }

        .my-content {
                display: block;
                min-height: 24px;
                position: relative;
                word-wrap: break-word;
                padding-left: 1px;
                box-sizing: border-box;
                padding-right: 1px;
        }

        .title {
            color: black;
            font-size: 21px;
            font-weight: 400;
        }

        .subtitle {
            font-size: 18px;
            font-weight: 400;
            color: #000;
            margin-left: 0px;
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

        .adjusted-vert {
            margin-top: 8px;
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
            margin-left: 48px;
        }

        .bottom-left {
            line-height: normal;
            position: absolute;
            bottom: 0;
        }

        .right-subicon {
            position: absolute;
            right: 0px;
            bottom: 0px;
            z-index: 10;
        }

        .title-margin {
            margin: 17px 0;
            margin-left: 1%;
        }

        .right-icon {
            position: absolute;
            right: 0;
            bottom: 12px;
            z-index: 0;
        }

        .icon-bottom-position {
            bottom: -8px;
        }

        .bankiron-bottom-positon {
            bottom: 4px;
        }

        .iron-bottom-padding {
            bottom: 5px;
        }

        .days {
            display: inline-block;
            width: 35px;
        }

        .button-row {
            padding-right: 50px;
        }

        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }

        .paper-button {
            margin-right: 8px;
            margin-top: 20px;
        }

        paper-toast {
            z-index: 12;
        }

        .ontop {
            position: absolute;
            z-index: 0;
        }

        .vert-centered {
            vertical-align: middle;
        }

        .visible-xs {
            display: none;
        }

        .only-mobile {
            display: none;
        }

        .table-width {
            min-width: 205px;
        }

        .table-row {
            line-height: 48px;
            border-bottom: 1px solid #dbdbdb;
            background-color: white;
            width: 100%;
            font-size: 13px;
            font-weight: 500;
        }

        .email {
            height: 24px;
            text-align: right;
            padding-right: 16px;
        }

        .listfont {
            font-size: 13px;
        }

        .table-right-padding {
            padding-right: 24px;
        }

        .description {
            display: inline-block;
            width: 111px;
        }

        #grid1 {
            --iron-data-table: {
                width: 100%;
                height: 136px;
                flex: none;
            }
            --default-primary-color: #ccc;
            /* --iron-data-table-row-hover: {
                background-color: #eee !important;
            }*/
            /* --iron-data-table-row-selected: {
                background-color: var(--default-primary-color) !important;
                color: red;
            }*/
            --iron-data-table-header: {
                display: none;
                font-weight: 400;
                z-index: 0;
            }
            --iron-data-table-row-odd: {
                background-color: #fff;
            }
            --iron-data-table-row-even: {
                /* background-color: #eee;*/
            }
            --iron-data-table-row-after: {
                background-color: #fff;
                bottom: 16px;
                content: "";
                height: 2px;
                left: 13px;
                pointer-events: none;
                position: absolute;
                right: 0px;
                transition: all 1s ease-in-out;
                -webkit-transform: scaleX(0.0);
                transform: scaleX(0.0);
                z-index: 1;
            }
        }

        data-table-cell {
            align-items: flex-start;
            width: 5%;
            height: 136px;
            flex: none;
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

        .float-left {
            float: left
        }

        .top-space {
            padding-top: 20px;
        }

        .space-left {
            margin-left: 100px;
        }

        .added-width {
            width: 10%;
            flex: none;
        }

        .lowBOMPN {
            width: 19%;
            flex: none;
        }

        .scancode-sizing {
            height: 131px;
            width: 89.5%;
            overflow: auto;
            flex: none;
            margin-bottom: 5px;
        }

        .sn-table {
            width: 71%;
            flex: none;
        }

        .lowered-icon {
            margin-right: 11px;
        }

        .sn-box {
            width: 100%;
        }

        .sn-title {
            padding-left: 33%;
        }

        .add-sn {
            padding-left: 4%;
        }

        .results-here {
            margin-bottom: 116px;
        }

        .serialnumber-button {
            margin: 0px;
            height: 25px;
            margin-top: 5px;
            width: 104px;
            flex: none;
        }

        .scanned {
            width: 5%;
            flex: none;
        }

        .bom {
            line-height: 48px;
            padding-left: 4%;
            flex: none;
        }

        .mfgpn {
            padding-left: 3.5%;
            flex: none;
        }

        .qty {
            padding-left: 2%;
            flex: none;
        }

        .sc {
            padding-left: 3.5%;
            flex: none;
        }

        .input2 {
            text-align: left;
            border: none;
            background-color: white;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 14px;
            line-height: 1.42857143;
            color: #333333;
        }

        .sn {
            padding-left: 24%;
            flex: none;
        }

        .barcode-table {
            padding-top: 24px;
            flex: none;
        }

        .table-titles {
            background-color: #eee;
            box-shadow: 0 2px 0 #cacdd1;
            font-weight: 400;
            height: 48px;
        }

        .IDT {
            width: 14%;
            flex: none;
        }

        .scanspacing {
            margin-left: 65px;
        }

        .scancode-text {
            width: 100px;
            text-align: center;
        }

        .inputblank {
            border: none;
            background-color: white;
        }

        .scancode {
            float: left;
            width: 30%;
            height: 95px;
        }

        .partnumber {
            float: left;
            width: 66%;
            line-height: 85px;
            font-size: 21px;
            font-weight: 400;
        }

        .serialnumbers {
            float: left;
        }

        .sn-words {
            float: left;
            width: 3%;
            font-size: 13px;
            /* padding-left: .75%; */
            margin-left: 1px;
            height: 19px;
            line-height: 21px;
            display: block;
            font-size: 15px;
            padding-right: .75%;
        }

        .sn-input {
            width: 93.999%;
            /*padding-left: 2%;*/
            margin-left: 0;
        }

        .detail-input {
            margin-left: 1px;
            width: 99.8%;
            box-sizing: border-box;
        }

        .detail-input1 {
            padding-left: 1%;
            margin-left: 1px;
            width: 47.4%;
        }

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #013ea3;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #013ea3;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #013ea3;
        }


    
        .desc-input {
            width: 99.5%;
            border: none;
            background-color: #eee;
            padding-left: .5%;
        }

        .col-desc {
            width: 97.9%;
            border: black solid 1px;
        }

        .col-desc-bot {
            width: 97.9%;
            border: black solid 1px;
        }

        .center {
            text-align: center;
        }

        .spacer {
            margin-top: 78px;
            padding-right: 3%;
        }

        .enteredpn {
         
            height: 21px;
            width: 63%;
            line-height: 0;
          
        }

        .container {
            padding-left: 2%;
            min-width: 1100px;
        }

        .version {
            float: left;
            color: blue;
        }

        .version:nth-child(1n+2) {
            margin-left: 1%
        }

        .version-container {
            padding-left: 2%;
            margin-top: 155px;
        }

        .shiptitle {
            padding-left: 3px;
        }

        .of {
            float: left;
            font-size: 100%;
        }

        .hwr-words {
            float: left;
            width: 5.5%;
            font-size: 13px;
            margin-left: 1px;
            height: 19px;
            line-height: 21px;
            display: block;
            font-size: 15px;
            padding-right: .75%;
        }

        .hwr-input {
            width: 91.444%;
            padding-left: 2%;
            margin-left: 0;
            height: 19px;
        }

          input[data-keysonly="hide"] {
                visibility: hidden;
            }

        @media (min-width: 1680px) {
            .margin-right {
                margin-right: 57px;
            }
            .margin-left {
                margin-left: 57px;
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
                width: 100%;
            }
            .scancode {
                width: 30%;
                height: 103px;
            }
            .sn-input {
                width: 92.8%;
                padding-left: 2%;
                margin-left: 0;
                height: 19px;
            }
            .sn-words {
                float: left;
                width: 4%;
                font-size: 13px;
                /* padding-left: .75%; */
                margin-left: 1px;
                height: 19px;
                line-height: 21px;
                display: block;
                font-size: 15px;
                padding-right: .75%;
            }
            .hwr-words {
                float: left;
                width: 7%;
                font-size: 13px;
                margin-left: 1px;
                height: 19px;
                line-height: 21px;
                display: block;
                font-size: 15px;
                padding-right: .75%;
            }
            .hwr-input {
                width: 90%;
                padding-left: 2%;
                margin-left: 0;
                height: 19px;
            }
            .desc-input {
                width: 99.4%;
                border: none;
                background-color: #eee;
                padding-left: .5%;
            }
            .detail-input {
                padding-left: 1%;
                margin-left: 1px;
                width: 98.6%;
            }
            .spacer {
                margin-top: 20px;
                padding-right: 7%;
            }
            .version-container {
                padding-left: 2%;
                /*width: 500px;*/
                overflow: auto;
                height: 21px;
                width: 1100px;
                margin-top: 0px;
            }
            .version:nth-child(1n+2) {
                margin-left: 1%
            }
            .container {
                padding-left: 2%;
                margin-top: 20px;
                width: 1100px;
            }
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 16px;
                padding-right: 16px;
                background-color: rgba(238, 238, 238, 1.0);
            }
            .lightgrey-padding-inner {
                /*padding-top: 15px;*/
                /*margin-top: 33px;*/
                /*  background-color: #fff;
            overflow: scroll;
            min-height: 3000px;
            padding-left: 15px;*/
            }
            .lightgrey-padding-inner {
                padding-top: 15px;
                /*margin-top: 33px;*/
                background-color: #fff;
                min-height: 3000px;
                /*overflow: auto;*/
                /*min-width: 1488px;*/
            }
            .detail-input1 {
                padding-left: 1%;
                margin-left: 1px;
                width: 46.8%;
            }
            .totallabel {
                width: 100%;
                /*min-width: 1488px;*/
                overflow: auto;
            }
            .labelholder {
                padding-top: 15px;
                /*margin-top: 33px;*/
                background-color: #fff;
                overflow: auto;
                padding-left: 15px;
                min-width: 1488px;
            }
        }

        @media (max-width: 767px) {
            .scancode {
                width: 30%;
                height: 103px;
            }
            .sn-input {
                width: 92.8%;
                padding-left: 2%;
                margin-left: 0;
                height: 19px;
            }
            .sn-words {
                float: left;
                width: 4%;
                font-size: 13px;
                /* padding-left: .75%; */
                margin-left: 1px;
                height: 19px;
                line-height: 21px;
                display: block;
                font-size: 15px;
                padding-right: .75%;
            }
            .hwr-words {
                float: left;
                width: 7%;
                font-size: 13px;
                margin-left: 1px;
                height: 19px;
                line-height: 21px;
                display: block;
                font-size: 15px;
                padding-right: .75%;
            }
            .hwr-input {
                width: 90%;
                padding-left: 2%;
                margin-left: 0;
                height: 19px;
            }
            .desc-input {
                width: 99.4%;
                border: none;
                background-color: #eee;
                padding-left: .5%;
            }
            .detail-input {
                padding-left: 1%;
                margin-left: 1px;
                width: 98.6%;
            }
            .spacer {
                margin-top: 20px;
                padding-right: 7%;
            }
            .version-container {
                padding-left: 2%;
                /*width: 500px;*/
                overflow: auto;
                height: 21px;
                width: 1100px;
                margin-top: 0px;
            }
            .version:nth-child(1n+2) {
                margin-left: 1%
            }
            .container {
                padding-left: 2%;
                margin-top: 20px;
                width: 1100px;
            }
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 16px;
                padding-right: 16px;
                background-color: rgba(238, 238, 238, 1.0);
            }
            .lightgrey-padding-inner {
                /*padding-top: 15px;*/
                /*margin-top: 33px;*/
                /*  background-color: #fff;
            overflow: scroll;
            min-height: 3000px;
            padding-left: 15px;*/
            }
            .lightgrey-padding-inner {
                padding-top: 15px;
                /*margin-top: 33px;*/
                background-color: #fff;
                min-height: 3000px;
            }
            .detail-input1 {
                padding-left: 1%;
                margin-left: 1px;
                width: 46.8%;
            }
            .totallabel {
                width: 100%;
                /*min-width: 1488px;*/
                overflow: auto;
            }
            .labelholder {
                padding-top: 15px;
                /*margin-top: 33px;*/
                background-color: #fff;
                overflow: auto;
                padding-left: 15px;
                min-width: 1488px;
            }

          
        }
        </style>
            <div id="table">
                </div>
        
                    `
        }
        



    }
customElements.define('defie-shippinglabel', DefieShippingLabel);
 