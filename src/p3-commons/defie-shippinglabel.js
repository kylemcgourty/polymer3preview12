
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

        selectVersion(e) {
            var index = e.model.index;

            this.partnumber1 = model.shippinglabel[index].pn1;
            this.partnumber2 = model.shippinglabel[index].pn2;
            this.partnumber3 = model.shippinglabel[index].pn3;
            this.partnumber4 = model.shippinglabel[index].pn4;
            this.partnumber5 = model.shippinglabel[index].pn5;
            this.hwr = model.shippinglabel[index].hwr;


            this.labelsn1 = model.shippinglabel[index].sn1;
            this.labelsn2 = model.shippinglabel[index].sn2;
            this.labelsn3 = model.shippinglabel[index].sn3;
            this.labelsn4 = model.shippinglabel[index].sn4;
            this.labelsn5 = model.shippinglabel[index].sn5;
            this.hwrsn = model.shippinglabel[index].hwrsn;

            this.description1 = model.shippinglabel[index].description1;
            this.description2 = model.shippinglabel[index].description2;
            this.description3 = model.shippinglabel[index].description3;
            this.description4 = model.shippinglabel[index].description4;
            this.description5 = model.shippinglabel[index].description5;
            this.hwrdescription = model.shippinglabel[index].hwrdescription;



            this.po = model.shippinglabel[index].po;
            this.goodsmarking = model.shippinglabel[index].goodsmarking;
            this.description = model.shippinglabel[index].description;
            this.bcount1 = model.shippinglabel[index].bcount1;
            this.bcount2 = model.shippinglabel[index].bcount2;

            this.weight = model.shippinglabel[index].weight;

            this.id = model.shippinglabel[index].id;

            model.shippinglabelindex = index;

            this.saveVersion = true;

        }


        initializer(model) {
            // this.fire('closePanel', {})

            this.label = {};


            if (Object.keys(model).length > 0) {

                if (this.location === "salesorder") {
                    this.set('label.companyname', model.billto.companyname);
                    this.set('label.address', model.billto.address1 + ', ' + model.billto.country);
                    this.set('label.phone', model.billto.phone);

                    this.set('label.shipcompanyname', model.shipto.companyname)
                    this.set('label.shipattention', model.shipto.attention)
                    this.set('label.shipaddress', model.shipto.address1 + ', ' + model.shipto.country)
                    this.set('label.shipphone', model.shipto.phone)
                } else if (this.location === "releasedbuildorder") {

                    this.set('label.companyname', model.customer);
                    this.set('label.address', model.address1 + ', ' + model.address2 + ', ' + model.country);
                    this.set('label.phone', model.phone);

                    this.set('label.shipcompanyname', "");
                    this.set('label.shipattention', "");
                    this.set('label.shipaddress', "");
                    this.set('label.shipphone', "")

                }


                if (model.fromedit) {


                    this.saveVersion = true;

                    this.partnumber1 = model.shippinglabel[model.shippinglabelindex].pn1;
                    this.partnumber2 = model.shippinglabel[model.shippinglabelindex].pn2;
                    this.partnumber3 = model.shippinglabel[model.shippinglabelindex].pn3;
                    this.partnumber4 = model.shippinglabel[model.shippinglabelindex].pn4;
                    this.partnumber5 = model.shippinglabel[model.shippinglabelindex].pn5;
                    this.hwr = model.shippinglabel[model.shippinglabelindex].hwr;


                    this.labelsn1 = model.shippinglabel[model.shippinglabelindex].sn1;
                    this.labelsn2 = model.shippinglabel[model.shippinglabelindex].sn2;
                    this.labelsn3 = model.shippinglabel[model.shippinglabelindex].sn3;
                    this.labelsn4 = model.shippinglabel[model.shippinglabelindex].sn4;
                    this.labelsn5 = model.shippinglabel[model.shippinglabelindex].sn5;
                    this.hwrsn = model.shippinglabel[model.shippinglabelindex].hwrsn;

                    this.description1 = model.shippinglabel[model.shippinglabelindex].description1;
                    this.description2 = model.shippinglabel[model.shippinglabelindex].description2;
                    this.description3 = model.shippinglabel[model.shippinglabelindex].description3;
                    this.description4 = model.shippinglabel[model.shippinglabelindex].description4;
                    this.description5 = model.shippinglabel[model.shippinglabelindex].description5;
                    this.hwrdescription = model.shippinglabel[model.shippinglabelindex].hwrdescription;




                    this.po = model.shippinglabel[model.shippinglabelindex].po;
                    this.goodsmarking = model.shippinglabel[model.shippinglabelindex].goodsmarking;
                    this.bcount1 = model.shippinglabel[model.shippinglabelindex].bcount1;
                    this.bcount2 = model.shippinglabel[model.shippinglabelindex].bcount2;

                    this.weight = model.shippinglabel[model.shippinglabelindex].weight;

                    this.id = model.shippinglabel[model.shippinglabelindex].id;

                    model.fromedit = "";


                } else if (Object.keys(model).length > 0) {
                    this.saveVersion = false;

                    this.partnumber1 = "";
                    this.partnumber2 = "";
                    this.partnumber3 = "";
                    this.partnumber4 = "";
                    this.partnumber5 = "";
                    this.hwr = "";


                    this.labelsn1 = "";
                    this.labelsn2 = "";
                    this.labelsn3 = "";
                    this.labelsn4 = "";
                    this.labelsn5 = "";
                    this.hwrsn = "";

                    this.description1 = "";
                    this.description2 = "";
                    this.description3 = "";
                    this.description4 = "";
                    this.description5 = "";
                    this.hwrdescription = "";




                    this.po = "";
                    this.goodsmarking = "";
                    this.bcount1 = "";
                    this.bcount2 = "";

                    this.weight = "";

                    this.id = ""


                }
            }

            const shippinglabel = (data)=> {
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
                                                    <iron-input class="col-xs-9 input" bind-value="${this.label.companyname}">
                                                        <input class="input1">
                                                    </iron-input>
                                                </div>
                                            </div>
                                            <div class="my-content">
                                                <div>
                                                    <iron-input class="col-xs-9 input" bind-value="${this.label.address}">
                                                        <input class="input1">
                                                    </iron-input>
                                                </div>
                                            </div>
                                            <div class="my-content">
                                                <div>
                                                    <iron-input class="col-xs-9 input" bind-value="${this.label.phone}">
                                                        <input class="input1">
                                                    </iron-input>
                                                </div>
                                            </div>
                                            <div class="my-content">
                                                <div>
                                                    <iron-input disabled class="col-xs-9 input">
                                                        <input class="input1">
                                                    </iron-input>
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
                                                        <iron-input class="col-xs-9 input" bind-value="${this.label.shipcompanyname}">
                                                            <input class="input1">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="">
                                                        <iron-input class="col-xs-9 input" bind-value="${this.label.shipattention}">
                                                            <input class="input1">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="">
                                                        <iron-input class="col-xs-9 input" bind-value="${this.label.shipaddress}">
                                                            <input class="input1">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="">
                                                        <iron-input class="col-xs-9 input" bind-value="${this.label.shipphone}">
                                                            <input class="input1">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <div class="col-pns">
                                        <div class="col-md-halfL">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${this.labelsn1}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"><span class="description"> Product No:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.partnumber1}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div class="partnumber"> <span class="description">Description:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.description1}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="sn-words">Sn: </span>
                                                <iron-input bind-value="${this.labelsn1}" id="pn11" class="input sn-input">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                        </div>
                                        <div class="col-md-halfL">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${this.labelsn2}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"><span class="description"> PSU #1:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.partnumber2}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div class="partnumber"><span class="description"> Description:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.description2}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="sn-words">Sn: </span>
                                                <iron-input bind-value="${this.labelsn2}" id="pn11" class="input sn-input">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                        </div>
                                        <div class="col-md-halfL1">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${this.labelsn4}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description">HDD #1:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.partnumber4}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div class="partnumber"> <span class="description">Description:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.description4}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="sn-words">Sn: </span>
                                                <iron-input bind-value="${this.labelsn4}" id="pn11" class="input sn-input">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-pns">
                                        <div class="col-md-halfR">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${this.hwrsn}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description">Model No:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.hwr}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div class="partnumber"> <span class="description">Description:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.hwrdescription}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="hwr-words">HWR: </span>
                                                <iron-input bind-value="${this.hwrsn}" id="pn11" class="input hwr-input">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                        </div>
                                        <div class="col-md-halfR">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${this.labelsn3}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description">PSU #2:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.partnumber3}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div class="partnumber"> <span class="description">Description:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.description3}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="sn-words">Sn: </span>
                                                <iron-input bind-value="${this.labelsn3}" id="pn11" class="input sn-input">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                        </div>
                                        <div class="col-md-halfR1">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${this.labelsn5}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description">HDD #2:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.partnumber5}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div class="partnumber"> <span class="description">Description:</span>
                                                <iron-input class="enteredpn input" bind-value="${this.description5}">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="sn-words">Sn: </span>
                                                <iron-input bind-value="${this.labelsn5}" id="pn11" class="input sn-input">
                                                    <input class="input1">
                                                </iron-input>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="clear: both;"></div>
                                    <div class="col-desc">
                                        <div class="detail-header1"> PO No. </div>
                                        <iron-input bind-value="${this.po}" class="desc-input">
                                            <input class="input1">
                                        </iron-input>
                                    </div>
                                    <!--   <div class="col-desc">
                                        <div class="detail-header1"> Goods Marking </div>
                                        <iron-input bind-value="${this.goodsmarking}" class="desc-input"><input class="input1"></iron-input>
                                    </div> -->
                                    <!--   <div class="col-desc">
                                        <div class="detail-header1"> Description </div>
                                        <iron-input bind-value="${this.description}" class="desc-input"><input class="input1"></iron-input>
                                    </div> -->
                                    <div class="col-pns">
                                        <div class="col-md-bottomL1">
                                            <div class="detail-header"> Box Count </div>
                                            <iron-input bind-value="${this.bcount1}" style="float: left;" class="input1 detail-input1">
                                                <input class="input1">
                                            </iron-input>
                                            <div class="of"> of </div>
                                            <iron-input bind-value="${this.bcount2}" style="float: right;" class="input1 detail-input1">
                                                <input class="input1">
                                            </iron-input>
                                            <div style="clear: both"></div>
                                        </div>
                                    </div>
                                    <div class="col-pns">
                                        <div class="col-md-bottom1">
                                            <div class="detail-header"> Weight (lbs) </div>
                                            <iron-input bind-value="${this.weight}" class="input1 detail-input">
                                                <input class="input1">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="col-desc-bot">
                                        <div class="detail-header1 center"> Assembled in the United States of America </div>
                                    </div>
                </div>`
            }

            render(shippinglabel(this.data), this.shadowRoot.getElementById('table'))




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
            height: 103px;
        }

        .partnumber {
            float: left;
            width: 66%;
            line-height: 50px;
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
            padding-left: 1%;
            margin-left: 1px;
            width: 98.8%;
        }

        .detail-input1 {
            padding-left: 1%;
            margin-left: 1px;
            width: 47.4%;
        }

        .detail-header {
            padding-left: 1%;
        }

        .detail-header1 {
            padding-left: .5%;
        }

        .desc-input {
            width: 99.5%;
            border: none;
            background-color: #eee;
            padding-left: .5%;
        }

        .col-desc {
            width: 98%;
            border: black solid 1px;
            border-bottom: none;
        }

        .col-desc-bot {
            width: 98%;
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
            text-align: initial;
            border: none;
            background-color: #eee;
            height: 21px;
            width: 63%;
            line-height: 0;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
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
            padding-left: 1%
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
 