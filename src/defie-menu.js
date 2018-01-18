
    import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js'

    import '../node_modules/@polymer/iron-ajax/iron-ajax.js'
    import '../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js'
    import '../node_modules/@polymer/app-layout/app-header/app-header.js'
    import '../node_modules/@polymer/app-layout/app-drawer/app-drawer.js'


    import '../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js'

    import '../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
    import '../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js'
    import '../node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js'

    import '../node_modules/@polymer/app-route/app-route.js'
    import '../node_modules/@polymer/app-route/app-location.js'

    import '../node_modules/@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js'
    import '../node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js'
    import '../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js'
    import '../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js'
    import '../node_modules/@polymer/iron-icon/iron-icon.js'
    import '../node_modules/@polymer/iron-icons/iron-icons.js'
    import '../node_modules/@polymer/iron-image/iron-image.js'
    import '../node_modules/@polymer/iron-input/iron-input.js'
    import '../node_modules/@polymer/iron-list/iron-list.js'
    import '../node_modules/@polymer/iron-pages/iron-pages.js'
    import '../node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js'
    import '../node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js'
    import '../node_modules/@polymer/paper-button/paper-button.js'
    import '../node_modules/@polymer/paper-checkbox/paper-checkbox.js'
    import '../node_modules/@polymer/paper-card/paper-card.js'
    import '../node_modules/@polymer/paper-dialog/paper-dialog.js'
    import '../node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js'

    // import '../node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js'
   





    import '../node_modules/@polymer/paper-icon-button/paper-icon-button.js'
    import '../node_modules/@polymer/paper-toast/paper-toast.js'

    // import '../node_modules/@polymer/paper-dialog/paper-dialog.js'
    // import '../node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js'
    // import '../node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js'
    // import '/services/src/services-shell.js'
    // import '/salesorders/src/salesorders-shell.js'


    




// <iron-lazy-pages id="custIronPages" selected="[[option]]" attr-for-selected="vista" fallback-selection="view404" role="main">
                
//                 <template data-path="service-new.html" vista="new" is="dom-if" restamp>
//                     <service-new startnew="{{startnew}}" setting="[[setting]]" id="new" model="{{model1}}" sendclone="{{sendclone}}" services="[[services]]"></service-new>
//                 </template>

//                 <template is="dom-if" vista="viewnew" data-path="service-viewnew.html" restamp>
//                     <service-viewnew startviewnew="{{startviewnew}}" setting="[[setting]]" model="{{model1}}" id="viewnew" cloneflag="{{cloneflag}}" services="[[services]]"></service-viewnew>
//                 </template>

//                 <template is="dom-if" data-path="services.html" vista="list" restamp>
//                     <services-list startlist="{{startlist}}" key="[[key]]" id="list" model1="{{model1}}" leftindex="{{leftindex}}" permission="[[permission]]" route="{{route}}" incoming-service="[[addC]]"></services-list>
//                 </template>

//                 <template is="dom-if" data-path="service-view.html" vista="view" restamp>
//                     <service-view startview="{{startview}}" setting="[[setting]]" model="[[model1]]" id="view"></service-view>
//                 </template>

//                 <template is="dom-if" data-path="service-edit.html" vista="edit" restamp>
//                     <service-edit startedit="{{startedit}}" setting="[[setting]]" model="{{model1}}" leftindex="{{leftindex}}" id="edit" services="[[services]]"></service-edit>
//                 </template>

//             </iron-lazy-pages>














// Number.prototype.pct = function(c) {
//     var d = '.';
//     var t = ',';
//     let n = this;
//     c = isNaN(c = Math.abs(c)) ? 2 : c;
//     d = d == undefined ? "." : d;
//     t = t == undefined ? "," : t;
//     const s = n < 0 ? "-" : "";
//     const i = `${parseInt(n = Math.abs(+n || 0).toFixed(c))}`;
//     j = (j = i.length) > 3 ? j % 3 : 0;
//     return `${s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "")}%`;
// };
       
        
  export  class DefieMenu extends PolymerElement {
        // static get is() {
        //     return 'services-shell'
        // }

        static get template() {
            return `
 
        <style include="shared-styles iron-flex iron-flex-alignment">
         :host {
            --app-primary-color: #4cc3d9;
            --app-secondary-color: black;
            display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
            display: none;
        }

        app-header {
            color: #fff;
            background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
            --paper-icon-button-ink-color: white;
        }

        .drawer-list {
            margin: 0 20px;
        }

        .drawer-list a {
            display: block;
            padding: 0 16px;
            text-decoration: none;
            color: var(--app-secondary-color);
            line-height: 40px;
        }

        .drawer-list a.iron-selected {
            color: black;
            font-weight: bold;
        }

        .logo {
            padding-left: 12%;
        }

        .outer {
            font-size: 15px;
            line-height: 24px;
            display: block;
            text-align: center;
        }

        .title {
            position: relative;
            color: black;
            font-weight: 500;
            border-left: thick solid white;
            padding-top: 10px!important;

        }

        .toggleicon {
            position: absolute;
            right: 30px;
        }

        .alink {
            text-decoration: none;
                color: #6b6b6b;
            
        }

        .inner {
            font-size: 15px;
            padding: 0px 30px 10px 30px;
            margin: 0px!important;
            position: relative;
            border-left: 4px solid transparent;
            height: 22px;
        }

        #selector .iron-selected {
            font-size: 15px;
            padding: 5px 30px 5px 30px;
            margin: 0px!important;
            position: relative;
            border-left: 4px solid #f50057;
            color: #f50057;
            background-color: #D3D3D3;
        }

        #papperToggle {
            height: 24px;
            width: 24px;
        }

        .upicon {
            display: none;
        }

        .menuborder .iron {
            border-left: thick solid white;
        }



        

        </style>

        <app-location route="{{route}}"></app-location>
        <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
        <app-route route="{{subroute}}" pattern="/:company" data="{{routeData1}}" tail="{{subroute1}}"></app-route>
        <app-route route="{{subroute1}}" pattern="/:id" data="{{routeData2}}" tail="{{subroute2}}"></app-route>
        <app-route route="{{subroute2}}" pattern="/:vista" data="{{routeData3}}" tail="{{subroute3}}"></app-route>
        <app-drawer-layout fullbleed id="appDrawer" responsive-width="979px">
            <app-drawer class="sliding" id="startDrawer" slot="drawer" align="left">
                <template is="dom-if" if="{{showMenu}}">
                    <div style="height: 100%; overflow: auto;">
                        <app-toolbar id="drawerToolbar" slot="drawerToolbar" style="height: 73px; border-bottom: 0 solid #ccc; background-color: #fafafa; color:#fff">
                            <div id="logo-container" class="logo">
                                <a href="/" class="logo"><img src="../../../images/logo44.png" alt="Defie"></a>
                            </div>
                        </app-toolbar>
                        <iron-selector id="selector" selected="0" attr-for-selected="name1" selectable=".inner">
                            <template is="dom-repeat" items="{{leftservices}}" as="limb">
                                <section class="outer" id="{{limb.id}}" style="border-top: 1px solid #eceff1;">
                                    <div class="title center layout horizontal menuborder inner">
                                        <span style="" style$="{{returnFont(limb.service.fcolor,limb.service.fname,limb.service.fsize)}}">{{limb.name}}</span>
                                    </div>
                                </section>
                                <div class="menuholder menuborder" id="container[[index]]">
                                    <div class="inner iron iron0" name1="{{limb.transportapps.0.name}}" style$="{{privilege(limb.transportapps.0.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro0" id="{{limb.transportapps.0.link}}" href="{{limb.transportapps.0.link}}">{{limb.transportapps.0.name}}</a>
                                    </div>
                                    <div class="inner iron iron1" name1="{{limb.transportapps.1.name}}" style$="{{privilege(limb.transportapps.1.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro1" id="{{limb.transportapps.1.link}}"  href="{{limb.transportapps.1.link}}">{{limb.transportapps.1.name}}</a>
                                    </div>
                                    <div class="inner iron iron2" name1="{{limb.transportapps.2.name}}" style$="{{privilege(limb.transportapps.2.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro2" href="{{limb.transportapps.2.link}}">{{limb.transportapps.2.name}}</a>
                                    </div>
                                    <div class="inner iron iron3" name1="{{limb.transportapps.3.name}}" style$="{{privilege(limb.transportapps.3.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro3" href="{{limb.transportapps.3.link}}">{{limb.transportapps.3.name}}</a>
                                    </div>
                                    <div class="inner iron iron4" name1="{{limb.transportapps.4.name}}" style$="{{privilege(limb.transportapps.4.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro4" href="{{limb.transportapps.4.link}}">{{limb.transportapps.4.name}}</a>
                                    </div>
                                    <div class="inner iron iron5" name1="{{limb.transportapps.5.name}}" style$="{{privilege(limb.transportapps.5.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro5" href="{{limb.transportapps.5.link}}">{{limb.transportapps.5.name}}</a>
                                    </div>
                                    <div class="inner iron iron6" name1="{{limb.transportapps.6.name}}" style$="{{privilege(limb.transportapps.6.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro6" href="{{limb.transportapps.6.link}}">{{limb.transportapps.6.name}}</a>
                                    </div>
                                    <div class="inner iron iron7" name1="{{limb.transportapps.7.name}}" style$="{{privilege(limb.transportapps.7.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro7" href="{{limb.transportapps.7.link}}">{{limb.transportapps.7.name}}</a>
                                    </div>
                                    <div class="inner iron iron8" name1="{{limb.transportapps.8.name}}" style$="{{privilege(limb.transportapps.8.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro8" href="{{limb.transportapps.8.link}}">{{limb.transportapps.8.name}}</a>
                                    </div>
                                    <div class="inner iron iron9" name1="{{limb.transportapps.9.name}}" style$="{{privilege(limb.transportapps.9.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro9" href="{{limb.transportapps.9.link}}">{{limb.transportapps.9.name}}</a>
                                    </div>
                                    <div class="inner iron iron10" name1="{{limb.transportapps.10.name}}" style$="{{privilege(limb.transportapps.01.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro10" href="{{limb.transportapps.10.link}}">{{limb.transportapps.10.name}}</a>
                                    </div>
                                    <div class="inner iron iron11" name1="{{limb.transportapps.11.name}}" style$="{{privilege(limb.transportapps.11.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro11" href="{{limb.transportapps.11.link}}">{{limb.transportapps.11.name}}</a>
                                    </div>
                                    <div class="inner iron iron12" name1="{{limb.transportapps.12.name}}" style$="{{privilege(limb.transportapps.12.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro12" href="{{limb.transportapps.12.link}}">{{limb.transportapps.12.name}}</a>
                                    </div>
                                    <div class="inner iron iron13" name1="{{limb.transportapps.13.name}}" style$="{{privilege(limb.transportapps.13.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro13" href="{{limb.transportapps.13.link}}">{{limb.transportapps.13.name}}</a>
                                    </div>
                                    <div class="inner iron iron14" name1="{{limb.transportapps.14.name}}" style$="{{privilege(limb.transportapps.14.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro14" href="{{limb.transportapps.14.link}}">{{limb.transportapps.14.name}}</a>
                                    </div>
                                    <div class="inner iron iron15" name1="{{limb.transportapps.15.name}}" style$="{{privilege(limb.transportapps.15.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro15" href="{{limb.transportapps.15.link}}">{{limb.transportapps.15.name}}</a>
                                    </div>
                                    <div class="inner iron iron16" name1="{{limb.transportapps.16.name}}" style$="{{privilege(limb.transportapps.16.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro16" href="{{limb.transportapps.16.link}}">{{limb.transportapps.16.name}}</a>
                                    </div>
                                    <div class="inner iron iron17" name1="{{limb.transportapps.17.name}}" style$="{{privilege(limb.transportapps.17.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro17" href="{{limb.transportapps.17.link}}">{{limb.transportapps.17.name}}</a>
                                    </div>
                                    <div class="inner iron iron18" name1="{{limb.transportapps.18.name}}" style$="{{privilege(limb.transportapps.18.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro18" href="{{limb.transportapps.18.link}}">{{limb.transportapps.18.name}}</a>
                                    </div>
                                    <div class="inner iron iron19" name1="{{limb.transportapps.19.name}}" style$="{{privilege(limb.transportapps.19.link, limb.privileges)}}">
                                        <a on-tap="resetSearch" class="alink micro19" href="{{limb.transportapps.19.link}}">{{limb.transportapps.19.name}}</a>
                                    </div>
                                </div>
                            </template>
                        </iron-selector>
                    </div>
                </template>
            </app-drawer>
            <iron-pages id="custIronPages" selected="[[option]]" attr-for-selected="name" fallback-selection="view404" role="main">
                <signin-shell name="signin"></signin-shell>

                <services-shell name="services" setting="[[setting]]"></services-shell>


                <purchaseorders-shell setting="[[setting]]" name="purchaseorders"></purchaseorders-shell>
                <receivepos-shell setting="[[setting]]" name="receivepos" frompo="[[frompo]]"></receivepos-shell>

                <vendorrmas-shell setting="[[setting]]" name="vendorrmas" licensoraddress="[[licensoraddress]]"></vendorrmas-shell>
                <vendorshiprmas-shell setting="[[setting]]" name="vendorshiprmas" fromvrma="[[fromvrma]]" fromvrmarelation="[[fromvrmarelation]]" licensoraddress="[[licensoraddress]]"></vendorshiprmas-shell>
                <vendorreceivermas-shell setting="[[setting]]" name="vendorreceivermas" fromvrmatorec="[[fromvrmatorec]]" fromvrmatorecrelation="[[fromvrmatorecrelation]]" licensoraddress="[[licensoraddress]]"></vendorreceivermas-shell>

                <returnpos-shell setting="[[setting]]" name="returnpos" licensoraddress="[[licensoraddress]]"></returnpos-shell>


                <shipreturnpos-shell setting="[[setting]]" name="shipreturnpos" fromrtnpo="[[fromrtnpo]]"></shipreturnpos-shell>


                <licensors-shell name="licensor" setting="[[setting]]"></licensors-shell>
                <licusers-shell name="licuser" setting="[[setting]]"></licusers-shell>

                <salesorders-shell setting="[[setting]]" name="salesorders" fromquote="[[fromquote]]"></salesorders-shell>
                <invoices-shell setting="[[setting]]" name="invoices" fromso="[[fromso]]" fromcinv="[[fromcinv]]"></invoices-shell>

                <createinvoices-shell setting="[[setting]]" name="createinvoices" frominv="[[frominv]]"></createinvoices-shell>

                <returnsos-shell setting="[[setting]]" name="returnsos"></returnsos-shell>
                <creditmemos-shell setting="[[setting]]" name="creditmemos" fromrtnso="[[fromrtnso]]" fromccm="[[fromccm]]"></creditmemos-shell>


                <createcreditmemos-shell setting="[[setting]]" name="createcreditmemos" fromcm="[[fromcm]]"></createcreditmemos-shell>


                <apdistributedaccounts-shell setting="[[setting]]" name="apdistributedaccounts"></apdistributedaccounts-shell>
                <apchartofaccounts-shell setting="[[setting]]" name="apchartofaccounts"></apchartofaccounts-shell>



                <boms-shell setting="[[setting]]" name="boms"></boms-shell>

                <releasedboms-shell rbom="[[rbom]]" setting="[[setting]]" name="releasedboms"></releasedboms-shell>

                <buildorders-shell setting="[[setting]]" name="buildorders"></buildorders-shell>

                <workorders-shell setting="[[setting]]" name="workorders"></workorders-shell>


                <releasedbuildorders-shell rbo="[[rbo]]" setting="[[setting]]" name="releasedbuildorders"></releasedbuildorders-shell>





                <profiles-shell setting="[[setting]]" name="profiles"></profiles-shell>

                <users-shell setting="[[setting]]" name="users"></users-shell>



                <customers-shell name="customers" setting="[[setting]]"></customers-shell>

                <customerrmas-shell setting="[[setting]]" name="customerrmas" licensoraddress="[[licensoraddress]]"></customerrmas-shell>
                <customershiprmas-shell setting="[[setting]]" name="customershiprmas" fromcrma="[[fromcrma]]" fromcrmarelation="[[fromcrmarelation]]" licensoraddress="[[licensoraddress]]"></customershiprmas-shell>
                <customerreceivermas-shell setting="[[setting]]" name="customerreceivermas" fromcrmatorec="[[fromcrmatorec]]" fromcrmatorecrelation="[[fromcrmatorecrelation]]" licensoraddress="[[licensoraddress]]"></customerreceivermas-shell>


                <partnumbers-shell name="partnumbers" setting="[[setting]]" toparts="[[toparts]]"></partnumbers-shell>
                <services-shell name="services" setting="[[setting]]"></services-shell>
                
                <quotes-shell setting="[[setting]]" name="quotes"></quotes-shell>

              <vendors-shell name="vendors" setting="[[setting]]"></vendors-shell>

                <accountsreceivable-shell name="accountsreceivable" setting="[[setting]]"></accountsreceivable-shell>
              <accountspayable-shell name="accountspayable" ap="[[ap]]" setting="[[setting]]"></accountspayable-shell>
              <approvetopay-shell name="approvetopay" setting="[[setting]]"></approvetopay-shell>

            </iron-pages>
            
        </app-drawer-layout>
        <iron-ajax id="serviceajax" on-response="userResponse" on-error="serviceerror"></iron-ajax>
        <iron-ajax id="ajaxSetting" method="GET" handle-as="json" on-response="responseSetting" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxSetting1" method="GET" handle-as="json" on-response="responseSetting1" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxSetting2" method="GET" handle-as="json" on-response="responseSetting2" content-type="application/json"></iron-ajax>

        <iron-ajax id="ajaxShipto" method="GET" handle-as="json" on-response="responseShipto" content-type="application/json"></iron-ajax>
           `
        }

        static get properties() {
            return {
                addC: {
                    type: String,
                    reflectToAttribute: true,
                    value: "",
                },
                menus: {
                    type: Array,
                    reflectToAttribute: true
                },
                licensoraddress: {
                    type: Object,
                    reflectToAttribute: true,
                    value: function() {
                        return {}
                    }
                },
                
                setting: {
                    type: Object,
                    reflectToAttribute: true,
                    value: function() {
                        return {}
                    }
                },

                hash: {
                    type: String,
                    reflectToAttribute: true
                },

                option: {
                    type: String,
                    // value: "list"
                },

                model: {
                    type: Object,
                    notify: true,
                    value: function() {
                        return {
                            id: '',
                            idver: '',
                            stype: '',
                            name: '',
                            ftext: 'roboto',
                            fsize: '15px',
                            fcolor: '#000000',
                            iname: '',
                            isize: '24px',
                            icolor: '#000000',
                            idisplay: true,
                            servicelocation: 0,
                            appftext: 'roboto',
                            appfsize: '15px',
                            appfcolor: '#000000',
                            apptoptoolbar: '',
                            app2ndtoolbar: '',
                            appbutton1: '',
                            appbutton2: '',
                            transportapps: [],
                        };
                    }
                },

                mainRoutes: {
                    type: Object,
                    value: {
                        "signers": "/signers/components/list/signerslist-index.html",

                            "arentercashreceipts": "/arentercashreceipt/components/list/arentercashreceiptslist-index.html",
                            "arentercashreceipt-new": "/arentercashreceipt/components/new/arentercashreceiptnew-index.html",



                            "closedcustrmas": "/atpreport/components/list/closedcustrmaslist-index.html",



                            "barcodes": "/barcode/components/list/barcodeslist-index.html",
                            "barcodes-new": "/barcode/components/new/barcodesnew-index.html",
                            "qachecklists": "/qachecklist/components/list/qachecklistslist-index.html",
                            "qachecklist-new": "/qachecklist/components/new/qachecklistnew-index.html",



                            "atpreports": "/atpreport/components/list/atpreportslist-index.html",



                            "approvetopays": "/approvetopay/components/list/approvetopayslist-index.html",

                            "apstatus": "/apstatus/components/list/apstatuslist-index.html",

                            "payables": "/payable/components/list/payableslist-index.html",
                            "payable-new": "/payable/components/new/payablenew-index.html",


                            // "apdistributedaccounts": "/apdistributedaccount/components/list/apdistributedaccountslist-index.html",
                            "apdistributedaccounts-new": "/accounts/components/new/apdistributedaccountsnew-index.html",

                            "apchartofaccounts-new": "/chartofaccounts/components/new/apchartofaccountsnew-index.html",




                            "createinvoices": "/createinvoice/components/list/createinvoiceslist-index.html",
                            "createinvoice-new": "/createinvoice/components/new/createinvoicenew-index.html",

                            "partnumbers": "/inventory/components/list/partnumberslist-index.html",
                            "partnumber-new": "/inventory/components/new/partnumbernew-index.html",
                            "customers": "/customer/components/list/customerslist-index.html",
                            "customer-new": "customer/components/new/customernew-index.html",
                            "quotes": "/quote/components/list/quoteslist-index.html",
                            "quote-new": "/quote/components/new/quotenew-index.html",
                            "salesorders": "/salesorder/components/list/salesorderslist-index.html",
                            "salesorder-new": "/salesorder/components/new/salesordernew-index.html",

                            "partnumbers": "/partnumber/components/list/partnumberslist-index.html",
                            "partnumber-new": "/partnumber/components/new/partnumbernew-index.html",


                            "invoices": "/invoice/components/list/invoiceslist-index.html",
                            "invoice-new": "/invoice/components/new/invoicenew-index.html",
                            "creditmemos": "/creditmemo/components/list/creditmemoslist-index.html",
                            "creditmemo-new": "/creditmemo/components/new/creditmemonew-index.html",
                            "returnsos": "/returnso/components/list/returnsoslist-index.html",
                            "returnso-new": "/returnso/components/new/returnsonew-index.html",
                            "vendor-new": "/vendor/components/new/vendornew-index.html",
                            "vendors": "/vendor/components/list/vendorslist-index.html",
                            "purchaseorders": "/purchaseorder/components/list/purchaseorderslist-index.html",
                            "purchaseorder-new": "/purchaseorder/components/new/purchaseordernew-index.html",
                            "receivepos": "/receivepo/components/list/receiveposlist-index.html",
                            "receivepo-new": "/receivepo/components/new/receiveponew-index.html",
                            "returnpos": "/returnpo/components/list/returnposlist-index.html",
                            "returnpo-new": "/returnpo/components/new/returnponew-index.html",
                            "shipreturnpos": "/shipreturnpo/components/list/shipreturnposlist-index.html",
                            "shipreturnpo-new": "/shipreturnpo/components/new/shipreturnponew-index.html",


                            "bom-new": "/bom/components/new/bomnew-index.html",
                            "boms": "/bom/components/list/bomslist-index.html",
                            "releasebom-new": "/releasedbom/components/new/releasebomnew-index.html",
                            "releasedboms": "/releasedbom/components/list/releasedbomslist-index.html",
                            "buildorder-new": "/buildorder/components/new/buildordernew-index.html",
                            "buildorders": "/buildorder/components/list/buildorderslist-index.html",
                            "releasedbuildorder-new": "/releasedbuildorder/components/new/releasebuildordernew-index.html",
                            "releasedbuildorders": "/releasedbuildorder/components/list/releasedbuildorderslist-index.html",



                            "workorder-new": "/workorder/components/new/workordernew-index.html",
                            "workorders": "/workorder/components/list/workorderslist-index.html",
                            "finishedworkorders": "/workorder/components/list/workorderslist-index.html",



                            "service-new": "/service/components/new/servicenew-index.html",
                            "services": "/service/components/list/serviceslist-index.html",
                            "users": "/user/components/list/userslist-index.html",
                            "user-new": "/user/components/new/usernew-index.html",
                            "licensors": "/licensor/components/list/licensorslist-index.html",
                            "licensor-new": "/licensor/components/new/licensornew-index.html",
                            "locations": "/location/components/list/locationslist-index.html",
                            "location-new": "/location/components/new/locationnew-index.html",

                            "customerrmas": "/customerrma/components/list/customerrmaslist-index.html",
                            "customerrma-new": "/customerrma/components/new/customerrmanew-index.html",

                            "customerreceivermas": "/customerreceiverma/components/list/customerreceivermaslist-index.html",
                            "customerreceiverma-new": "/customerreceiverma/components/new/customerreceivermanew-index.html",

                            "customershiprmas": "/customershiprma/components/list/customershiprmaslist-index.html",
                            "customershiprma-new": "/customershiprma/components/new/customershiprmanew-index.html",


                            "vendorrmas": "/vendorrma/components/list/vendorrmaslist-index.html",
                            "vendorrma-new": "/vendorrma/components/new/vendorrmanew-index.html",

                            "vendorshiprmas": "/vendorshiprma/components/list/vendorshiprmaslist-index.html",
                            "vendorshiprma-new": "/vendorshiprma/components/new/vendorshiprmanew-index.html",

                            "vendorreceivermas": "/vendorreceiverma/components/list/vendorreceivermaslist-index.html",
                            "vendorreceiverma-new": "/vendorreceiverma/components/new/vendorreceivermanew-index.html",
                            "service-new": "/var/www/go/src/p3-services/index.html",
                            "services": "/var/www/go/src/p3-services/index.html"
                    }
                },

                PermissionMap: {
                    type: Object,
                    value: function() {
                        return {
                            "/customerrmas": "SOpriv",
                            "/customershiprmas": "SOpriv",
                            "/customerreceivermas": "SOpriv",

                            "/apdistributedaccounts": "SOpriv",
                            "/apchartofaccounts": "SOpriv",



                            "/vendorrmas": "SOpriv",
                            "/vendorshiprmas": "SOpriv",
                            "/vendorreceivermas": "SOpriv",
                            "/shipreturnpos": "SOpriv",
                            "/purchaseorders": "SOpriv",
                            "/receivepos": "SOpriv",
                            "/returnpos": "SOpriv",
                            "/returnsos": "SOpriv",
                            "/salesorders": "SOpriv",
                            "/invoices": "SOpriv",
                            "/createinvoices": "SOpriv",
                            "/customers": "SOpriv",
                            "/vendors": "SOpriv",
                            "/partnumbers": "SOpriv",
                            "/quotes": "SOpriv",
                            "/creditmemos": "SOpriv",
                            "/createcreditmemos": "SOpriv",
                            "/accountspayable": "SOpriv",
                            "/accountsreceivable": "SOpriv",
                        }
                    }
                },

                 stylekeeper: {
                    type: Array,
                    value: function() {
                        return []
                    }
                },

                ServicesList: {
                    type: Object,
                    value: function () {
                        return {
                            "homepage": "signin",
                            "signin": "signin",
                            "signin-authenticate": "signin",
                            "welcome": "signin",

                            "apdistributedaccounts-new": "apdistributedaccounts",
                            "apchartofaccounts-new": "apchartofaccounts",

                            "accountspayable": "accountspayable",
                            "ap-vendors": "accountspayable",

                            "accountsreceivable": "accountsreceivable",
                            "ar-customers": "accountsreceivable",

                            "customerrma-new": "customerrmas",
                            "customerrmas": "customerrmas",
                            "customershiprma-new": "customershiprmas",
                            "customershiprmas": "customershiprmas",
                            "customerreceiverma-new": "customerreceivermas",
                            "customerreceivermas": "customerreceivermas",
                            "vendorrma-new": "vendorrmas",
                            "vendorrmas": "vendorrmas",
                            "vendorshiprma-new": "vendorshiprmas",
                            "vendorshiprmas": "vendorshiprmas",
                            "vendorreceiverma-new": "vendorreceivermas",
                            "vendorreceivermas": "vendorreceivermas",
                            "shipreturnpo-new": "shipreturnpos",
                            "shipreturnpos": "shipreturnpos",
                            "purchaseorder-new": "purchaseorders",
                            "purchaseorders": "purchaseorders",
                            "receivepo-new": "receivepos",
                            "receivepos": "receivepos",
                            "returnpo-new": "returnpos",
                            "returnpos": "returnpos",
                            "returnso-new": "returnsos",
                            "returnsos": "returnsos",
                            "creditmemo-new": "creditmemos",
                            "creditmemos": "creditmemos",

                            "createcreditmemo-new": "createcreditmemos",
                            "createcreditmemos": "createcreditmemos",

                            "licensor-new": "licensor",
                            "licensors": "licensor",
                            "licuser-new": "licuser",
                            "licusers": "licuser",
                            "service-new": "services",
                            "services": "services",
                            "customer-new": "customers",
                            "customers": "customers",
                            "salesorder-new": "salesorders",
                            "salesorders": "salesorders",
                            "partnumber-new": "partnumbers",
                            "partnumbers": "partnumbers",
                            "createinvoice-new": "createinvoices",
                            "createinvoices": "createinvoices",
                            "invoice-new": "invoices",
                            "invoices": "invoices",
                            "partnumber-new": "partnumbers",
                            "partnumbers": "partnumbers",
                            "boms": "boms",
                            "bom-new": "boms",
                            "releasedboms": "releasedboms",
                            "releasebom-new": "releasedboms",
                            "buildorders": "buildorders",
                            "buildorder-new": "buildorders",
                            "releasedbuildorders": "releasedbuildorders",
                            "releasebuildorder-new": "releasedbuildorders",
                            "workorders": "workorders",
                            "workorder-new": "workorders",
                            "vendor-new": "vendors",
                            "vendors": "vendors",
                            "quote-new": "quotes",
                            "quotes": "quotes",
                            "profiles": "profiles",
                            "profile-new":"profiles",
                            "users": "users",
                            "user-new":"users",
                            "accountspayable-new": "accountspayable",
                            "accountspayable":"accountspayable",
                            "ap-status":"accountspayable",
                            "ap-vendors":"accountspayable",
                            "approvetopay-new": "approvetopay",
                            "approvetopay-check": "approvetopay",
                            "approvetopay":"approvetopay",
                            "approvetopay-report":"approvetopay",


                        }
                    }
                },

                option: {
                    type: String,
                    value: "services"
                },

                showMenu: {
                    type: Boolean,
                    value: false
                }
            };
        }

        constructor() {
            super()
            this.addEventListener('ToWelcomeEvent', e => {
                this.toWelcomePage(e);
            });
            this.addEventListener('printpage', e => {
                window.print();
            });
            this.addEventListener('toparts', e => {
                console.log('toparts  event', e)
                this.set('toparts', e.detail.model)
            });
             this.addEventListener('toAP', e => {
                console.log('toAP  event', e)
                this.set('ap', e.detail.model)
            });
            this.addEventListener('toReleasedBomNew', e => {
                this.set('rbom', e.detail.model)
            });
            this.addEventListener('toReleaseBuildOrderNew', e => {
                this.set('rbo', e.detail.model)
            });
            this.addEventListener('toSalesOrderNew', e => {
                this.set('fromquote', e.detail.model)
            });
            this.addEventListener('toInvoiceNew', e => {
                this.set('fromso', e.detail.model)
            });
            this.addEventListener('toCreateInvoices', e => {
                this.set('frominv', e.detail.model)
            });
            this.addEventListener('toInvoices', e => {
                this.set('fromcinv', e.detail.model)
            });
            this.addEventListener('toCreditMemoNew', e => {
                this.set('fromrtnso', e.detail.model)
            });
            this.addEventListener('toCreateCreditMemos', e => {
                this.set('fromcm', e.detail.model)
            });
            this.addEventListener('toCreditMemos', e => {
                this.set('fromccm', e.detail.model)
            });
            this.addEventListener('toReceivepoNew', e => {
                this.set('frompo', e.detail.model)
            });
            this.addEventListener('toShipReturnPONew', e => {
                this.set('fromrtnpo', e.detail.model)
            });
            this.addEventListener('toVendorShipRMANew', e => {
                this.set('fromvrma', e.detail.model)
            });
            this.addEventListener('toVendorShipRMAView', e => {
                this.set('fromvrmarelation', e.detail.model)
            });
            this.addEventListener('toVendorReceiveRMANew', e => {
                this.set('fromvrmatorec', e.detail.model)
            });
            this.addEventListener('toVendorReceiveRMAView', e => {
                this.set('fromvrmatorecrelation', e.detail.model)
            });
            this.addEventListener('toCustomerShipRMANew', e => {
                this.set('fromcrma', e.detail.model)
            });
            this.addEventListener('toCustomerShipRMAView', e => {
                console.log('fromcrmarelation event', e.detail.model)
                this.set('fromcrmarelation', e.detail.model)
            });
            this.addEventListener('toCustomerReceiveRMANew', e => {
                this.set('fromcrmatorec', e.detail.model)
            });
            this.addEventListener('toCustomerReceiveRMAView', e => {
                console.log('fromvrmarec event', e.detail.model)
                this.set('fromcrmatorecrelation', e.detail.model)
            });
        }

        static get observers() {
            return [
                '_routePageChanged(route.*)',
            ];
        }

        _routePageChanged(page, v) {


            console.log('the page', page)
            if (page === undefined ||  page.base.path === "/" ) {
                console.log('inside')
                 this.set('option', 'signin')
                 return
            }

           

            let route = page.base.path.split("/")[1]

            this.lazyloader
            let choice

            console.log('the comp', route)
        
            this.set('option', this.ServicesList[route])

            console.log("this.ServicesList[route]", this.ServicesList[route])

            console.log('the option', this.option)

        }


        toggleMenuUp(e) {



            let index = e.model.index;

            this.shadowRoot.querySelector('#container' + index).style.display = "none"
            this.shadowRoot.querySelector('#up' + index).style.display = "none"
            this.shadowRoot.querySelector('#down' + index).style.display = "block"



        }
        toggleMenuDown(e) {



            let index = e.model.index;

            this.shadowRoot.querySelector('#container' + index).style.display = "block"
            this.shadowRoot.querySelector('#up' + index).style.display = "block"
            this.shadowRoot.querySelector('#down' + index).style.display = "none"




        }

        routeSetter(route) {
            console.log('in route settter', route)
            route=route.split("/")[1]
            this.set('option', this.ServicesList[route])

            console.log('the option', this.option)
        }

        resetSearch(e) {

            console.log('e in reset search', e, e.model.id, e.target.id)

            // this.routeSetter(e.target.id)


            let index = e.model.index;
            let child = e.path[0].classList[1]


            let num = child.split('o')[1]
            let iron = "iron" + num



            if (this.stylekeeper.length > 0) {
                let undo = this.pop('stylekeeper')

                this.shadowRoot.querySelector('#container' + undo[0] + " ." + undo[1]).style.color = "#6b6b6b"

                this.shadowRoot.querySelector('#container' + undo[0] + " ." + undo[2]).style.borderLeft = "thick solid white"
            }


            this.push('stylekeeper', [index, child, iron])

            this.shadowRoot.querySelector('#container' + index + " ." + child).style.color = "#e82c45"

            this.shadowRoot.querySelector('#container' + index + " ." + iron).style.borderLeft = "thick solid #f93422"




            let microservice = e.target.getAttribute("href").slice(1)


            this.dispatchEvent(new CustomEvent(microservice + '-ResetSearch'), {})

        }


        privilege(link, privilege) {
            console.log('the link', link, "the priv", privilege)

            if (link != "" && link != undefined && link != "undefined") {
                return "display: block"
            } else {
                return "display: none"
            }
            // if (link) {

            //     if (privilege == "View" && link.includes("-new")) {
            //         return "display: none;"

            //     } else {
            //         return "display: block;"
            //     }
            // } else {
            //     return "display: none"
            // }
        }

        userResponse(e) {

            console.log('e in service', e)

            // this.showMenu = true;

            this.set('leftservices', e.detail.response.results.services)

            console.log('the left services', this.leftservices)


            this.getSetting(sessionStorage.getItem("PR"))

            // this.set('leftservices', e.detail.response.results)

            // this.leftservices.map((micro) => {
            //     if (micro.privileges == "View") {
            //         micro.transportapps.map((app) => {

            //             if (this.PermissionMap[app.link]) {
            //                 this.set(this.PermissionMap[app.link], "View")
            //             }
            //         })
            //     }
            // })


        }

        toWelcomePage(e) {

            console.log('reached To Welcome Page', e)
            this.tempMenu();
            this.set('route.path', '/welcome');
            this.showMenu = true;
            this.set('leftservices', e.detail.services)
            // this.$.serviceajax.generateRequest();
        }


        tempMenu(){
            console.log('in temp menu')
            let ur = sessionStorage.getItem("UR")
            ur == undefined || ur == null ? ur = 0 : ur
            this.$.serviceajax.url = "/service/leftservice"
            // this.$.serviceajax.url = "/api/user/services/0" 
            this.$.serviceajax.generateRequest()
            this.showMenu = true;

        }



        // _pageChanged(route) {

        //     if (route.base.path == "undefined") {
        //         return
        //     }
        //     let components = route.base.path.split("/")


        //     if (components[1].split('-')[1]) {
        //         this.set(this.page + 'hash', "")
        //         this.set(this.page + 'hash', this.newRoutes[components[4]])
        //     } else {
        //         this.set(this.page + 'hash', "")
        //         this.set(this.page + 'hash', this.listRoutes[components[4]])
        //     }



        // }


        // Router(hash) {

        //     this.option = hash;


        //     if (this.option == "edit") {
        //         this.$.edit.scrollTop()
        //         this.$.edit.close()
        //     } else if (this.option == "view") {
        //         if (this.showless) {
        //             this.history = false
        //             this.showless = ""
        //         } else {
        //             this.history = true;
        //         }
        //         this.$.view.setModel(this.model1)/
        //         this.$.view.close()
        //         this.$.view.scrollTop()
        //     } else if (this.option == "list") {
        //         this.$.list.scrollTop()
        //     }

        //     if (hash === "list" && this.model1.changeList === true) {
        //         this.set('model1.changelist', false)
        //         this.dispatchEvent(new CustomEvent('resizeCust', {
        //             composed: true,
        //             bubbles: true
        //         }))
        //     }

        // }

        responseSetting(response) {
            var results = response.detail.response

            if (results) {

                console.log('setting results', results)
                this.setting = results
                sessionStorage.setItem("PR", this.setting.id)

            }
        }
        responseSetting1(response) {
            var results = response.detail.response.results[0]

            if (results) {

                console.log('setting results', results)
                this.setting = results
                sessionStorage.setItem("PR", this.setting.id)


            document.querySelector('#toast').text = 'Licensor\'s settings changed successfully.';
            document.querySelector('#toast').open();
            }
        }
        responseSetting2(response) {
            var results = response.detail.response

            if (results) {

                console.log('setting results', results)
                this.setting = results
                sessionStorage.setItem("PR", this.setting.id)


            document.querySelector('#toast').text = 'Company\'s settings changed successfully.';
            document.querySelector('#toast').open();
            }
        }

        getSetting(id) {

            id ? id : id = 50000
            this.$.ajaxSetting.url = "/profile/setting/"+id;
            this.$.ajaxSetting.generateRequest();
        }


        responseShipto(response) {
            var results = response.detail.response
            console.log("here are results in responseshipto")
            if (results) {
                this.licensoraddress = results
            }
        }

        getDefaultShipto() {
            this.$.ajaxShipto.url = "/profile/defaultaddress";
            this.$.ajaxShipto.generateRequest();
        }


        ready() {
            super.ready()

            this.getDefaultShipto();

            console.log('readyu called')


             let ur = sessionStorage.getItem("UR")
            ur == undefined || null ? ur = 1 : ur
            this.$.serviceajax.url = "/service/leftservice"

            // this.$.serviceajax.url = "/api/user/services/" + ur
            this.$.serviceajax.generateRequest()
            // this.showMenu = true;
           

            document.querySelector('defie-menu').addEventListener('leftservice', e => {

                    console.log("HIT EVENT")

            let ur = sessionStorage.getItem("UR")
            ur == undefined || ur == null ? ur = 1 : ur
            this.$.serviceajax.url = "/service/leftservice"
            // this.$.serviceajax.url = "/api/user/services/" + ur
            this.$.serviceajax.generateRequest()
            this.showMenu = true;



            })

            this.shadowRoot.addEventListener('LicensorSettings', e => {
                console.log('e in def menu', e)
                let id = e.detail.id

                this.$.ajaxSetting1.url = "/licensor/setting/"+id;
                this.$.ajaxSetting1.generateRequest();

            })

            this.shadowRoot.addEventListener('ProfileSettings', e => {
                console.log('e in def menu', e)
                let id = e.detail.id

                this.$.ajaxSetting2.url = "/profile/setting/"+id;
                this.$.ajaxSetting2.generateRequest();

            })



            this.shadowRoot.addEventListener('api/service/GetHistory-ViewEvent', e => {
                this.model1 = {}
                this.model1 = e.detail.model
                let idver = e.detail.latestidver
                this.set('model1.savehistoryidver', idver)
                this.startview = true;
                this.history = true;

                this.set('route.path', "service/view/" + this.model1.name + "/" + this.model1.idver)
            })

        }
    }


    customElements.define('defie-menu', DefieMenu);
