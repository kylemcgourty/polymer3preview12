
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
    import '../node_modules/@polymer/iron-input/iron-input.js'
    import '../node_modules/@polymer/iron-list/iron-list.js'
    import '../node_modules/@polymer/iron-pages/iron-pages.js'
    import '../node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js'
    import '../node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js'
    import '../node_modules/@polymer/paper-button/paper-button.js'
    import '../node_modules/@polymer/paper-checkbox/paper-checkbox.js'
    import '../node_modules/@polymer/paper-card/paper-card.js'

    import '../node_modules/@polymer/paper-icon-button/paper-icon-button.js'
    import '../node_modules/@polymer/paper-toast/paper-toast.js'
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
            border-left: 4px solid transparent;
            text-align: center;
        }

        .title {
            height: 38px;
            position: relative;
            margin-left: 20px;
            color: #6b6b6b
        }

        .toggleicon {
            position: absolute;
            right: 30px;
        }

        .alink {
            text-decoration: none;
            color: black;
        }

        .inner {
            font-size: 15px;
            padding: 5px 30px 5px 30px;
            margin: 0px!important;
            position: relative;
            border-left: 4px solid transparent;
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

        .menuholder {
            display: none;
            background-color: #eaecef;
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
                                    <div class="title center layout horizontal">
                                        <span style="" style$="{{returnFont(limb.service.fcolor,limb.service.fname,limb.service.fsize)}}">{{limb.name}}</span>
                                        <paper-icon-button class="toggleicon upicon" on-tap="toggleMenuUp" id="up[[index]]" icon="icons:expand-less"></paper-icon-button>
                                        <paper-icon-button class="toggleicon" on-tap="toggleMenuDown" id="down[[index]]" icon="icons:expand-more"></paper-icon-button>
                                    </div>
                                </section>
                                <div class="menuholder" id="container[[index]]">
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


                
                <services-shell name="services"></services-shell>

     

                <customers-shell name="customers"></customers-shell>
                <salesorders-shell name="salesorders"></salesorders-shell>
                <partnumbers-shell name="partnumbers"></partnumbers-shell>
                <invoices-shell  name="invoices" fromso=[[fromso]] ></invoices-shell>


            </iron-pages>
            
        </app-drawer-layout>
        <iron-ajax id="serviceajax" on-response="userResponse" on-error="serviceerror"></iron-ajax>
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

                // option: {
                //     type: String,
                //     value: "list"
                // },
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
                            // "releasedboms": "/bom/components/list/bomslist-index.html",
                            "releasebom-new": "/releasedbom/components/new/releasebomnew-index.html",
                            "releasedboms": "/releasedbom/components/list/releasedbomslist-index.html",
                            "buildorder-new": "/buildorder/components/new/buildordernew-index.html",
                            "buildorders": "/buildorder/components/list/buildorderslist-index.html",
                            "releasedbuildorder-new": "/releasedbuildorder/components/new/releasebuildordernew-index.html",
                            "releasedbuildorders": "/releasedbuildorder/components/list/releasedbuildorderslist-index.html",



                            "workorder-new": "/workorder/components/new/workordernew-index.html",
                            "workorders": "/workorder/components/list/workorderslist-index.html",
                            //kjb
                            "finishedworkorders": "/workorder/components/list/workorderslist-index.html",
                            // kjb ^



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
                            "/salesorders": "SOpriv",
                            "/customers": "SOpriv",
                            "/partnumbers": "SOpriv",
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
                            "service-new": "services",
                            "services": "services",
                            "customer-new": "customers",
                            "customers": "customers",
                            "salesorder-new": "salesorders",
                            "salesorders": "salesorders",
                            "partnumber-new": "partnumbers",
                            "partnumbers": "partnumbers",
                            "invoice-new": "invoices",
                            "invoices": "invoices",
                        }
                    }
                },

                option: {
                    type: String,
                    value: "services"
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

            this.addEventListener('toInvoiceNew', e => {
                console.log('fromso event')
                this.set('fromso', e.detail.model)
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

                this.shadowRoot.querySelector('#container' + undo[0] + " ." + undo[1]).style.fontWeight = "400"
                this.shadowRoot.querySelector('#container' + undo[0] + " ." + undo[2]).style.borderLeft = "none"
            }


            this.push('stylekeeper', [index, child, iron])

            this.shadowRoot.querySelector('#container' + index + " ." + child).style.fontWeight = "900"
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

            this.showMenu = true;

            this.set('leftservices', e.detail.response.results.services)

            console.log('the left services', this.leftservices)

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
            window.location.hash = "";
            this.set('route.path', '/welcome');
            this.showMenu = true;
            this.set('leftservices', e.detail.response.results.services)
            // this.$.serviceajax.generateRequest();
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
        ready() {
            super.ready()

            console.log('readyu called')


             let ur = sessionStorage.getItem("UR")
            ur == undefined || null ? ur = 1 : ur
            this.$.serviceajax.url = "/api/service/leftservice"

            // this.$.serviceajax.url = "/api/user/services/" + ur
            this.$.serviceajax.generateRequest()
           

            this.shadowRoot.addEventListener('leftservice', e => {


            let ur = sessionStorage.getItem("UR")
            ur == undefined || null ? ur = 1 : ur
            this.$.serviceajax.url = "/api/service/leftservice"
            // this.$.serviceajax.url = "/api/user/services/" + ur
            this.$.serviceajax.generateRequest()


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
