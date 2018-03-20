
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
            this.label = this.model

            this.label.companyname = this.shadowRoot.getElementById('company').value
            this.label.address = this.shadowRoot.getElementById('address').value
            this.label.phone = this.shadowRoot.getElementById('phone').value

            this.label.shipcompanyname = this.shadowRoot.getElementById('shipcompany').value
            this.label.shipattention = this.shadowRoot.getElementById('shipattention').value
            this.label.shipaddress = this.shadowRoot.getElementById('shipaddress').value
            this.label.shipphone = this.shadowRoot.getElementById('shipphone').value


            this.label.company = this.shadowRoot.getElementById('company').value
            this.label.company = this.shadowRoot.getElementById('company').value
            this.label.company = this.shadowRoot.getElementById('company').value


            this.label.pn1 = this.shadowRoot.getElementById('partnumber1').value;
            this.label.pn2 = this.shadowRoot.getElementById('partnumber2').value;
            this.label.pn3 = this.shadowRoot.getElementById('partnumber3').value;
            this.label.pn4 = this.shadowRoot.getElementById('partnumber4').value;
            this.label.pn5 = this.shadowRoot.getElementById('partnumber5').value;
            this.label.hwr = this.shadowRoot.getElementById('hwr').value;

            this.label.sn1 = this.shadowRoot.getElementById('labelsn1').value
            this.label.sn2 = this.shadowRoot.getElementById('labelsn2').value
            this.label.sn3 = this.shadowRoot.getElementById('labelsn3').value
            this.label.sn4 = this.shadowRoot.getElementById('labelsn4').value
            this.label.sn5 = this.shadowRoot.getElementById('labelsn5').value
            this.label.hwrsn = this.shadowRoot.getElementById('hwrsn').value

            this.label.description1 = this.shadowRoot.getElementById('description1').value
            this.label.description2 = this.shadowRoot.getElementById('description2').value
            this.label.description3 = this.shadowRoot.getElementById('description3').value
            this.label.description4 = this.shadowRoot.getElementById('description4').value
            this.label.description5 = this.shadowRoot.getElementById('description5').value
            this.label.hwrdescription = this.shadowRoot.getElementById('hwrdescription').value


            this.label.po = this.shadowRoot.getElementById('po').value
            this.label.bcount1 = this.shadowRoot.getElementById('bcount1').value.toString()
            this.label.bcount2 = this.shadowRoot.getElementById('bcount2').value.toString()
            this.label.weight = this.shadowRoot.getElementById('weight').value

            return this.label


        }

       

        initializer(model) {
            // this.fire('closePanel', {})

            this.model= model;

            

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
                                                        <input id="company" value="${model.companyname}" class="input1 col-xs-9">
                                                </div>
                                            </div>
                                            <div class="my-content">
                                                <div>
                                                        <input id="address" value="${model.address}" class="input1 col-xs-9">
                                                </div>
                                            </div>
                                            <div class="my-content">
                                                <div>
                                                        <input id="phone" value="${model.phone}" class="input1 col-xs-9">
                                                </div>
                                            </div>
                                            <div class="my-content">
                                                <div>
                                                        <input class="input1 col-xs-9">
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
                                                            <input id="shipcompany" value="${model.shipcompanyname}" class="input1 col-xs-9">
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="">
                                                            <input id="shipattention" value="${model.shipattention}" class="input1 col-xs-9">
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="">
                                                            <input id="shipaddress" value="${model.shipaddress}" class="input1 col-xs-9">
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="">
                                                            <input id="shipphone" value="${model.shipphone}" class="input1 col-xs-9">
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
                                            <div class="partnumber"><span class="description"> Product No:</span>
                                                    <input  id="partnumber1" value="${model.pn1}" class="input1 enteredpn">
                                            </div>
                                            <div class="partnumber"> <span class="description">Description:</span>
                                                    <input id="description1" value="${model.description1}" class="input1 enteredpn">
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="sn-words">Sn: </span>
                                                    <input value="${model.sn1}" id="labelsn1" class="sn-input input1">
                                            </div>
                                        </div>
                                        <div class="col-md-halfL">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.sn2}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"><span class="description"> PSU #1:</span>
                                                    <input id="partnumber2" value="${model.pn2}" class="input1 enteredpn">
                                            </div>
                                            <div class="partnumber"><span class="description"> Description:</span>
                                                    <input id="description2" value="${model.description2}" class="input1 enteredpn">
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="sn-words">Sn: </span>
                                                    <input id="labelsn2" value="${model.sn2}" class="sn-input input1">
                                            </div>
                                        </div>
                                        <div class="col-md-halfL1">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.sn4}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description">HDD #1:</span>
                                                    <input id="partnumber4" value="${model.pn4}" class=" enteredpn input1">
                                            </div>
                                            <div class="partnumber"> <span class="description">Description:</span>
                                                    <input id="description4" value="${model.description4}" class=" enteredpn input1">
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="sn-words">Sn: </span>
                                                    <input id="labelsn4" value="${model.sn4}" class="sn-input input1">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-pns">
                                        <div class="col-md-halfR">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.hwrsn}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description">Model No:</span>
                                                    <input id="hwr" value="${model.hwr}" class="input1 enteredpn">
                                            </div>
                                            <div class="partnumber"> <span class="description">Description:</span>
                                                    <input id="hwrdescription" value="${model.hwrdescription}" class="input1 enteredpn">
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="hwr-words">HWR: </span>
                                                    <input id="hwrsn" value="${model.hwrsn}" class="input1 hwr-input">
                                            </div>
                                        </div>
                                        <div class="col-md-halfR">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.sn3}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description">PSU #2:</span>
                                                    <input id="partnumber3" value="${model.pn3}" class="input1 enteredpn">
                                            </div>
                                            <div class="partnumber"> <span class="description">Description:</span>
                                                    <input id="description3" value="${model.description3}" class="input1 enteredpn">
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="sn-words">Sn: </span>
                                                    <input id="labelsn3" value="${model.sn3}" class="input1 sn-input">
                                            </div>
                                        </div>
                                        <div class="col-md-halfR1">
                                            <div class="scancode">
                                                <scan-code id="my_barcode" type="qrcode" data="${model.sn5}" height="100" width="100"></scan-code>
                                            </div>
                                            <div class="partnumber"> <span class="description">HDD #2:</span>
                                                    <input id="partnumber5" value="${model.pn5}" class="input1 enteredpn">
                                            </div>
                                            <div class="partnumber"> <span class="description">Description:</span>
                                                    <input id="description5" value="${model.description5}" class="input1 enteredpn">
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="serialnumber"><span class="sn-words">Sn: </span>
                                                    <input id="labelsn5" value="${model.sn5}" class="input1 sn-input">
                                            </div>
                                        </div>
                                    </div>
                                    <div style="clear: both;"></div>
                                    <div class="col-desc">
                                        <div class="detail-header1"> PO No. </div>
                                            <input id="po" value="${model.po}" class="desc-input input1">
                                    </div>
                                    <!--   <div class="col-desc">
                                        <div class="detail-header1"> Goods Marking </div>
                                    </div> -->
                                    <!--   <div class="col-desc">
                                        <div class="detail-header1"> Description </div>
                                    </div> -->
                                    <div class="col-pns">
                                        <div class="col-md-bottomL1">
                                            <div class="detail-header"> Box Count </div>
                                                <input id="bcount1" style="float: left;"  value="${model.bcount1}" class="input1 detail-input1">
                                            <div class="of"> of </div>
                                                <input id="bcount2" style="float: left;"  value="${model.bcount2}" class="input1 detail-input1">
                                            <div style="clear: both"></div>
                                        </div>
                                    </div>
                                    <div class="col-pns">
                                        <div class="col-md-bottom1">
                                            <div class="detail-header"> Weight (lbs) </div>
                                                <input id="weight" value="${model.weight}" class="input1  detail-input">
                                        </div>
                                    </div>
                                    <div class="col-desc-bot">
                                        <div class="detail-header1 center"> Assembled in the United States of America </div>
                                    </div>
                </div>`
            }

            render(shippinglabel(model), this.shadowRoot.getElementById('table'))




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
 