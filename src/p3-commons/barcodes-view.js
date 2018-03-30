import { Element as PolymerElement }
from '../../node_modules/@polymer/polymer/polymer-element.js'

import '../../src/p3-commons/customer-sidepanel.js'

import '../../src/p3-commons/module-abinfo.js'

import '../../src/p3-commons/module-header.js'



import '../../src/p3-commons/logout-header.js'

import '../../src/p3-commons/barcode-parts.js'

import '../../src/p3-commons/defie-barcodeslist.js'

import '../../src/p3-commons/part-sidepanel.js'







export class BarcodesViewElement extends PolymerElement {
    static get template() {
        return `   <style include="shared-styles iron-flex iron-flex-alignment">


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

        .remover {
            display: none;
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
        <paper-drawer-panel id="drawer" drawer-Width="[[drawerwidth]]" force-narrow="true" right-drawer disable-edge-swipe style="overflow-y: scroll;">
            <paper-header-panel slot="main">
                <div id="top"></div>
                <app-header condenses reveals fixed effects="waterfall blend-background">
                    <app-toolbar class="middle middle-container">
                        <paper-icon-button id="paperToggle" icon="menu" drawer-toggle on-tap="toggleLeft"></paper-icon-button>
                        <div class="app-name" title>  Barcodes </div>
                        <logout-header></logout-header>
                    </app-toolbar>
                </app-header>
                <app-location route="{{route}}"></app-location>
                <app-route route="{{route}}"></app-route>
                <confirm-box id="deletebox" title="Alert" text="Are you sure you want to delete this item?"></confirm-box>
                <section class="new lightgrey-padding card">
                    <div class="lightgrey-padding-inner">
                        <div class="row">
                            <div class="col-xs-12">
                             <module-header id="moduleheader" ></module-header>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <module-abinfo id="abinfo" ></module-abinfo>
                            </div>
                        </div>
                        <div class="row">
                            <div id="totalRow" class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <section class="nopadding nomargin margin-right">
                                    <div class="my-content">
                                        <div class="bottom search-row">
                                            <div id="parts" class="my-content partlist" >
                                                
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div style="clear: both;"></div>
                        <defie-barcodeslist id="barcodes"></defie-barcodeslist>
                        <div class="row my-content">
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-11"></div>
                            <div class="col-xs-12 col-md-11">
                                <div class="my-content button-row text-right">
                                    <paper-button class="button main-button" id="cancel" on-tap="cancel" raised>Cancel</paper-button>
                                    <paper-button class="button main-button" id="save" on-tap="save" raised>Save</paper-button>
                                    <paper-button class="button main-button" id="edit" on-tap="edit" raised>Edit</paper-button>

                                </div>
                            </div>
                        </div>
                        </div>
                </section>
            </paper-header-panel>
            <paper-header-panel id="drawer" slot="drawer">
               
            </paper-header-panel>
        </paper-drawer-panel>
        <iron-media-query query="(max-width: 992px)" query-matches="{{queryMatches}}"></iron-media-query>
        <iron-media-query query="(max-width: 1250px)" query-matches="{{queryMatchesShrink}}"></iron-media-query>
        <iron-media-query query="(max-width: 767px)" query-matches="{{queryMatchesShrinkMax}}"></iron-media-query>
        <iron-ajax method="PUT" id="ajaxSave" handle-as="json" on-response="response" on-error="responseError" content-type="application/json"></iron-ajax>
        <iron-ajax method="PUT" id="ajaxCalc" url="/api/bom/calc" content-type="application/json" on-response="responseCalc"></iron-ajax>
`
    }

    static get properties() {
        return {
            modulebillshipto: {
                type: Object,
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
            disabledinput: {
                type: Object,
                notify: true,
                value: function() {
                    return {
                        ainfo1: true,
                        ainfo2: true,
                        ainfo3: true,
                        ainfo4: true,
                        ainfo5: true,
                        ainfo6: true,
                        ainfo7: true,
                        binfo1: true,
                        binfo2: true,
                        binfo3: true,
                        binfo4: true,
                        binfo5: true,
                        binfo6: true,
                        binfo7: true,
                    }
                }
            },
            displaysearch: {
                type: Object,
                notify: true,
                value: function() {
                    return {
                        ainfo1: "none",
                        ainfo2: "none",
                        ainfo3: "none",
                        ainfo4: "none",
                        ainfo5: "none",
                        ainfo6: "none",
                        ainfo7: "none",
                        binfo1: "none",
                        binfo2: "none",
                        binfo3: "none",
                        binfo4: "none",
                        binfo5: "none",
                        binfo6: "none",
                        binfo7: "none",

                    }
                }
            },
            searchid: {
                type: Object,
                notify: true,
                value: function() {
                    return {
                        ainfo1: "customerlist",
                        ainfo6: "openbomandbopanel",
                        binfo2: "showParts"

                    }
                }
            },
            ainfo: {
                type: Object,
                notify: true,
                value: function() {
                    return {
                        title: "Project",
                        info1: "Company",
                        info2: "Company id",
                        info3: "Barcode Name",
                        info4: "Qty",
                        info5: "Serial Number",
                        info6: "BOM/BO id",
                        info7: "WO id",
                    }
                }
            },
            binfo: {
                type: Object,
                notify: true,
                value: function() {
                    return {
                        title: "Product Info",
                        info1: "Product No.",
                        info2: "Part id",
                        info3: "Model",
                        info4: "Description",
                        info5: "Version",
                        info6: "ECO",
                        info7: "Deviation",
                    }
                }
            },
            panelprops: {
                type: Array,
                notify: true,
                value: function() {
                    return [

                        'showcustomersidepanel',
                        'showbarcodesparts',
                        "showbomandbolist",
                        'showParts'


                    ];
                }
            },

            drawerwidth: {
                type: String,
                value: '320px'
            },
            subtotal: {
                type: Number,
            },
            dataarray: {
                type: Array,
                reflectToAttribute: true
            },
            updateM: { //updateM is the proxy object that will be used to send to server with correct data format
                type: Object,
                notify: true
            },
            selectedItem: {
                type: String,
                value: undefined
            },
            queryMatches: {
                type: Boolean,
                observer: 'resized'
            },
            queryMatchesShrink: {
                type: Boolean,
                observer: 'resized'
            },
            queryMatchesShrinkMax: {
                type: Boolean,
                observer: 'resized'
            },
            showbilling: {
                type: Boolean,
                notify: true,
                value: true,
                // isToggle: true
            },
            table: {
                type: Boolean,
                notify: true,
                value: true
            },
            showshipping: {
                type: Boolean,
                notify: true,
                value: true,
                isToggle: true
            },
            showstatus: {
                type: Boolean,
                notify: true,
                value: false
            },
            showinventory: {
                type: Boolean,
                notify: true,
                value: false
            },
            showserialnumber: {
                type: Boolean,
                notify: true,
                value: false
            },
            modelcustomerlist: {
                type: Object,
                notify: true,
                value: function() {
                    return {}
                }
            },
            modelinventorylist: {
                type: Object,
                notify: true,
                value: function() {
                    return {}
                }
            },
            newBom: {
                type: String,
                notify: true,
                reflectToAttribute: true,
                value: "",

            },
            fromview: {
                type: String,
                reflectToAttribute: true,
                value: 'new'
            },
            autocompletemap: {
                type: Array,
                value: function() {
                    return [{
                        key: 'customer',
                        isMain: true
                    }, {
                        key: 'address'
                    }];
                }
            },


            model: {
                type: Object,
                reflectToAttribute: true,
                notify: true,
            },

            components: {
                type: Object,
                reflectToAttribute: true,
                notify: true
            },

            setting: {
                type: Object,
                reflectToAttribute: true,
                notify: true
            },

            startview: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true
            }
        }
    }

    constructor() {
        super()

    }


    static get observers() {
        return [
        ]
    }



    start(returnURL, view, saveURL, editbutton) {

            this.returnURL = returnURL
            this.view = view
            this.setModel(this.model)

            this.$.moduleheader.open(this.model.settings, { pagename: "Barcodes", pageidtext: "Barcode id:", pageid: this.model.idver, date: this.convertDate3(this.model.created) })
            this.setModuleABInfo()
            this.close()
            this.scrollTop()
            this.editbutton = editbutton

       if (saveURL){
                    this.saveURL = saveURL
                    this.showSave(true)
                } else {
                    this.showSave(false)
                }

        }

        showSave(save) {

                this.shadowRoot.getElementById('edit').classList.add('remover')

            if (save){
                this.shadowRoot.getElementById('save').classList.remove('remover')
                this.shadowRoot.getElementById('cancel').classList.add('remover')

            } else {
                this.shadowRoot.getElementById('save').classList.add('remover')
                this.shadowRoot.getElementById('cancel').classList.remove('remover')

            }

            if (this.editbutton){
                this.shadowRoot.getElementById('edit').classList.remove('remover')

            }
        }



    setModuleABInfo() {

        this.set("modulebillshipto.ainfovalues.ainfo1_value", this.model.company);
        this.set("modulebillshipto.ainfovalues.ainfo2_value", this.model.companyidver);
        this.set("modulebillshipto.ainfovalues.ainfo3_value", this.model.barcodename);
        this.set("modulebillshipto.ainfovalues.ainfo4_value", this.model.qty);
        this.set("modulebillshipto.ainfovalues.ainfo5_value", this.model.serialnumber);
        this.set("modulebillshipto.ainfovalues.ainfo6_value", this.model.bomboidver);
        this.set("modulebillshipto.ainfovalues.ainfo7_value", this.model.woidver);


        this.set("modulebillshipto.binfovalues.binfo1_value", this.model.productno);
        this.set("modulebillshipto.binfovalues.binfo2_value", this.model.partidver);
        this.set("modulebillshipto.binfovalues.binfo3_value", this.model.model);
        this.set("modulebillshipto.binfovalues.binfo4_value", this.model.description);
        this.set("modulebillshipto.binfovalues.binfo5_value", this.model.version);
        this.set("modulebillshipto.binfovalues.binfo6_value", this.model.eco);
        this.set("modulebillshipto.binfovalues.binfo7_value", this.model.deviation);


        this.$.abinfo.open(this.modulebillshipto, this.disabledinput, this.displaysearch, this.searchid, this.ainfo, this.binfo)
    }









    setModel(model) {


        if (model) {

            console.log('the model in wo', model)
            if (model.items[0].qty == "Qty") {
                model.items = model.items.slice(1)

            }

            var items = model.items;
            items.unshift({
                mfgpn: "Product No",
                qty: "Qty",
                idver: "Part Id",
                description: "Description",
                serialnumbers: "Serial Numbers"
            })
            this.$.barcodes.open(items, this.view, "none!important")
        }
    }

    cancel () {
        this.set('route.path', this.returnURL)
    }



    compute(i) {
        return i + 1
    }



            


           
    selectpart() {
        if (window.innerWidth < 768) {
            this.drawerwidth = "320px"
        } else {
            this.drawerwidth = "640px"
        }

          if (!this.rbomid || !this.rbomidver){
                document.querySelector('#toast').text = "Please select a bom first.";
                document.querySelector('#toast').show();
                return
              }


        this.adjustPanelProps(this.panelprops, "showbarcodesparts");


        this.shadowRoot.getElementById('barcodeparts').open(this.model.settings.id, this.rbomid, this.rbomidver)
            
            this.$.drawer.togglePanel();
    }


    convertDate3(input) {
        if (input === undefined) {
            input = new Date().toString();
            sliced = input.split(" ");
            var result = sliced[1] + " " + sliced[2] + ", " + sliced[3];
            return result
        } else {
            var localtime = (new Date(input)).toString();
            var sliced = localtime.split(" ");
            var result = sliced[1] + " " + sliced[2] + ", " + sliced[3];
            return result;
        }
    }





    DataBindingI(result) {
        if (result.detail) {

                this.rbomid = partnumber.bomid
                this.rbomidver = partnumber.bomidver


                this.convertModule()


            this.convertModule()

            this.modulebillshipto.binfovalues.binfo1_value = partnumber.mfgpn
            this.modulebillshipto.binfovalues.binfo2_value = partnumber.idver
            this.modulebillshipto.binfovalues.binfo3_value = partnumber.model
            this.modulebillshipto.binfovalues.binfo4_value = partnumber.description


            this.$.abinfo.open(this.modulebillshipto, this.disabledinput, this.displaysearch, this.searchid, this.ainfo, this.binfo)



        } else {
            document.querySelector('#toast').text = result.error;
            document.querySelector('#toast').show();
        }
    }


    convertModule() {

        this.modulebillshipto = this.$.abinfo.returnModel()


        this.set('model.company', this.modulebillshipto.ainfovalues.ainfo1_value)
        this.set('model.companyidver', String(this.modulebillshipto.ainfovalues.ainfo2_value))
        this.set('model.barcodename', this.modulebillshipto.ainfovalues.ainfo3_value)
        if (isNaN(this.modulebillshipto.ainfovalues.ainfo4_value)) {
            document.querySelector('#toast').text = 'Qty must be a number.';
            document.querySelector('#toast').show();
            return false
        }
        this.set('model.qty', Number(this.modulebillshipto.ainfovalues.ainfo4_value))
        this.set('model.serialnumber', this.modulebillshipto.ainfovalues.ainfo5_value)
        this.set('model.bomboidver', this.modulebillshipto.ainfovalues.ainfo6_value)
        this.set('model.woidver', this.modulebillshipto.ainfovalues.ainfo7_value)
        this.set('model.productno', this.modulebillshipto.binfovalues.binfo1_value)
        this.set('model.partidver', this.modulebillshipto.binfovalues.binfo2_value)
        this.set('model.model', this.modulebillshipto.binfovalues.binfo3_value)
        this.set('model.description', this.modulebillshipto.binfovalues.binfo4_value)
        this.set('model.version', this.modulebillshipto.binfovalues.binfo5_value)
        this.set('model.eco', this.modulebillshipto.binfovalues.binfo6_value)
        this.set('model.deviation', this.modulebillshipto.binfovalues.binfo7_value)
        this.model.companyid = Number(this.model.companyid)


        return true

    }



    save() {

            this.model.items = this.$.barcodes.retrieveData().slice(1)


            if (this.model.items.length == 0){
                document.querySelector('#toast').text = 'Please select a bom and bom components';
                document.querySelector('#toast').show();
                return
           }


           var result = this.convertModule()
           if (result != true){
            return
           }
           let ct = sessionStorage.getItem("CUSTOMTOKEN")
            this.$.ajaxSave.headers['CustomToken'] = ct;
            this.$.ajaxSave.url = this.saveURL
            this.$.ajaxSave.body = JSON.stringify(this.model);
            this.$.ajaxSave.generateRequest();

      
       
    }


    response(request) {


        if (request.detail.response.status) {
            document.querySelector('#toast').text = 'Saved successfully.';
            document.querySelector('#toast').show();


             let viewRoute = this.route.path.replace('edit', 'view')

            this.set('route.path', viewRoute)
       
        }
    }

    edit() {
        let editRoute = this.route.path.replace('view', 'edit')

            this.set('route.path', editRoute)
    }


    close() {
        this.$.drawer.closeDrawer();
    }

    scrollTop() {
        this.shadowRoot.getElementById('top').scrollIntoView()
    }


    adjustPanelProps(props) {
        var args = Array.prototype.slice.call(arguments, 1);
        var self = this;

        props.forEach(function(item) {
            var newVal = !args.includes(item);
            self.set(item, newVal);
        });
    }

    ready() {
        super.ready();

        this.titlecolor();

        this.shadowRoot.addEventListener('sendpartlist', e => {
            window.innerWidth < 768 ? this.drawerwidth = "320px" : this.drawerwidth = "640px"
            this.$.showpart.open(this.model.settings.id)
            this.adjustPanelProps(this.panelprops, "showParts");
            this.$.drawer.togglePanel();

        })


        this.shadowRoot.addEventListener('InventoryPartEvent', e => { this.close();
            this.DataBindingI(e) });


        this.shadowRoot.addEventListener('closePanel', e => {
            this.close()
        })

        this.shadowRoot.addEventListener('BarcodeParts', e => {
            let item = e.detail.data
            item.barcodes = [];
            for (var i = 0; i < item.qty; i++) {
                item.barcodes.push({ barcode: "" })
            }

            this.model.items = this.$.barcodes.retrieveData()
            this.model.items.push(item)

            this.$.barcodes.open(this.model.items)
            this.close()

        })

        this.shadowRoot.addEventListener('BOMorBOpart', e => {
            let item = e.detail
            item.barcodes = [];
            for (var i = 0; i < item.qty; i++) {
                item.barcodes.push({ barcode: "" })
            }
            this.push('barcodes', item)

            this.set('modulebillshipto.ainfovalues.ainfo6_value', item.parentidver)

        })



        this.shadowRoot.addEventListener('sendcustomerlist', e => {
            window.innerWidth < 768 ? this.drawerwidth = "320px" : this.drawerwidth = "640px"
            this.adjustPanelProps(this.panelprops, "showcustomersidepanel");
            this.$.showcustomer.open(this.model.settings.id);
            this.$.drawer.togglePanel();
        })


        this.shadowRoot.addEventListener('showbomandbolist', e => {
            window.innerWidth < 768 ? this.drawerwidth = "320px" : this.drawerwidth = "640px"
            this.adjustPanelProps(this.panelprops, "showbomandbolist");
            this.$.showbomandbo.open();
            this.$.drawer.togglePanel();
        })


      

    }




    titlecolor() {

        this.headercolor = "#8c080a"
        this.updateStyles({
            '--title-background-normal': this.headercolor,
            '--title-normal': 'white',
        });
    }

}
customElements.define("barcodes-viewelement", BarcodesViewElement);