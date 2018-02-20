import { Element as PolymerElement }
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
import '../node_modules/@polymer/iron-icons/editor-icons.js'
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


export class DefieMenu extends PolymerElement {
    // static get is() {
    //     return 'services-shell'
    // }

    static get template() {
        return `
 
        <style include=" iron-flex iron-flex-alignment">
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
                                <a href="/" class="logo"><img src="../images/logo44.png" alt="Defie"></a>
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

                <workorders-shell setting="[[setting]]" name="workorders" rbomtowo="[[rbomtowo]]" rbotowo="[[rbotowo]]"></workorders-shell>
                <finishworkorders-shell setting="[[setting]]" name="finishworkorders" fromwo="[[fromwo]]"></finishworkorders-shell>
                <deployedworkorders-shell setting="[[setting]]" name="deployedworkorders" fromfwo="[[fromfwo]]"></deployedworkorders-shell>



                <releasedbuildorders-shell rbo="[[rbo]]" setting="[[setting]]" name="releasedbuildorders"></releasedbuildorders-shell>


                <qachecklists-shell setting="[[setting]]" name="qachecklists"></qachecklists-shell>




                <profiles-shell setting="[[setting]]" fromlicensor="[[fromlicensor]]" name="profiles"></profiles-shell>

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

              <accountspayable-shell name="accountspayable" ap="[[ap]]" apve="[[apve]]" setting="[[setting]]"></accountspayable-shell>
              <approvetopay-shell name="approvetopay" setting="[[setting]]"></approvetopay-shell>
              <apcreditmemos-shell apcm="[[apcm]]" name="apcreditmemos" setting="[[setting]]"></apcreditmemos-shell>


                <cashreceipt-shell name="cashreceipt" setting="[[setting]]"></cashreceipt-shell>


            </iron-pages>
            
        </app-drawer-layout>
        <iron-ajax id="userajax" on-response="userResponse" on-error="serviceerror"></iron-ajax>
        <iron-ajax id="serviceajax" on-response="serviceResponse" on-error="serviceerror"></iron-ajax>
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
                value: function() {
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
                        "finishworkorders": "finishworkorders",
                        "finishworkorder-new": "finishworkorders",
                        "deployedworkorders": "deployedworkorders",
                        "deployedworkorder-new": "deployedworkorders",
                        "vendor-new": "vendors",
                        "vendors": "vendors",
                        "quote-new": "quotes",
                        "quotes": "quotes",
                        "qachecklist-new": "qachecklists",
                        "qachecklists": "qachecklists",
                        "profiles": "profiles",
                        "profile-new": "profiles",
                        "profile-view": "profiles",
                        "users": "users",
                        "user-new": "users",
                        "accountspayable-new": "accountspayable",
                        "accountspayable": "accountspayable",
                        "ap-status": "accountspayable",
                        "ap-vendors": "accountspayable",
                        "approvetopay-new": "approvetopay",
                        "approvetopay-check": "approvetopay",
                        "approvetopay": "approvetopay",
                        "approvetopay-report": "approvetopay",
                        "apcreditmemo-new": "apcreditmemos",
                        "apcreditmemo": "apcreditmemos",
                    }
                }
            },

            importList: {
                type: Object,
                value: function() {
                    return {
                    "users": "/users/src/users-shell.js",
                    "user-new": "/users/src/users-shell.js",
                    "partnumbers": "/inventorys/src/partnumbers-shell.js",
                    "partnumber-new":"/inventorys/src/partnumbers-shell.js",
                    "salesorders": "/salesorders/src/salesorders-shell.js",
                    "salesorder-new": "/salesorders/src/salesorders-shell.js",
                    "customers": "/customers/src/customers-shell.js",
                    "customer-new": "/customers/src/customers-shell.js",
                    "licensors": "/licensors/src/licensors-shell.js",
                    "licensor-new": "/licensors/src/licensors-shell.js",
                    "services": "/services/src/services-shell.js",
                    "service-new": "/services/src/services-shell.js",
                    "profiles": "/profiles/src/profiles-shell.js",
                    "profile-new": "/profiles/src/profiles-shell.js",
                    "profile-view": "/profiles/src/profiles-shell.js",
                    "apdistributedaccounts-new": "/apdistributedaccounts/src/apdistributedaccounts-shell.js",
                    "apchartofaccounts-new": "/apchartofaccounts/src/apchartofaccounts-shell.js",
                    
                    "accountsreceivable": "/accountsreceivables/src/accountsreceivable-shell.js",
                    "ar-customers": "/accountsreceivables/src/accountsreceivable-shell.js",
                    "customerrma-new": "/customerrmas/src/customerrmas-shell.js",
                    "customerrmas": "/customerrmas/src/customerrmas-shell.js",
                    "customershiprma-new": "/customershiprmas/src/customershiprmas-shell.js",
                    "customershiprmas": "/customershiprmas/src/customershiprmas-shell.js",
                    "customerreceiverma-new": "/customerreceivermas/src/customerreceivermas-shell.js",
                    "customerreceivermas": "/customerreceivermas/src/customerreceivermas-shell.js",
                    "vendorrma-new": "/vendorrmas/src/vendorrmas-shell.js",
                    "vendorrmas": "/vendorrmas/src/vendorrmas-shell.js",
                    "vendorshiprma-new": "/vendorshiprmas/src/vendorshiprmas-shell.js",
                    "vendorshiprmas": "/vendorshiprmas/src/vendorshiprmas-shell.js",
                    "vendorreceiverma-new": "/vendorreceivermas/src/vendorreceivermas-shell.js",
                    "vendorreceivermas": "/vendorreceivermas/src/vendorreceivermas-shell.js",
                    "shipreturnpo-new": "/shipreturnpos/src/shipreturnpos-shell.js",
                    "shipreturnpos": "/shipreturnpos/src/shipreturnpos-shell.js",
                    "purchaseorder-new": "/purchaseorders/src/purchaseorders-shell.js",
                    "purchaseorders": "/purchaseorders/src/purchaseorders-shell.js",
                    "receivepo-new": "/receivepos/src/receivepos-shell.js",
                    "receivepos": "/receivepos/src/receivepos-shell.js",
                    "returnpo-new": "/returnpos/src/returnpos-shell.js",
                    "returnpos":"/returnpos/src/returnpos-shell.js",
                    "returnso-new": "/returnsos/src/returnsos-shell.js",
                    "returnsos":"/returnsos/src/returnsos-shell.js",
                    "creditmemo-new": "/creditmemos/src/creditmemos-shell.js",
                    "creditmemos": "/creditmemos/src/creditmemos-shell.js",
                    "createcreditmemo-new": "/createcreditmemos/src/createcreditmemos-shell.js",
                    "createcreditmemos": "/createcreditmemos/src/createcreditmemos-shell.js",
                    "licuser-new": "/licuser/src/licusers-shell.js",
                    "licusers": "/licuser/src/licusers-shell.js",
                    "createinvoice-new": "/createinvoices/src/createinvoices-shell.js",
                    "createinvoices": "/createinvoices/src/createinvoices-shell.js",
                    "invoice-new": "/invoices/src/invoices-shell.js",
                    "invoices": "/invoices/src/invoices-shell.js",
                    "boms": "/boms/src/boms-shell.js",
                    "bom-new": "/boms/src/boms-shell.js",
                    "qachecklists": "/qachecklists/src/qachecklists-shell.js",
                    "qachecklist-new": "/qachecklists/src/qachecklists-shell.js",
                    "releasedboms": "/releasedboms/src/releasedboms-shell.js",
                    "releasebom-new": "/releasedboms/src/releasedboms-shell.js",
                    "buildorders": "/buildorders/src/buildorders-shell.js",
                    "buildorder-new": "/buildorders/src/buildorders-shell.js",
                    "releasedbuildorders": "/releasedbuildorders/src/releasedbuildorders-shell.js",
                    "releasebuildorder-new": "/releasedbuildorders/src/releasedbuildorders-shell.js",
                    "workorders": "/workorders/src/workorders-shell.js",
                    "workorder-new": "/workorders/src/workorders-shell.js",
                    "finishworkorders": "/finishworkorders/src/finishworkorders-shell.js",
                    "finishworkorder-new": "/finishworkorders/src/finishworkorders-shell.js",
                    "deployedworkorders": "/deployedworkorders/src/deployedworkorders-shell.js",
                    "deployedworkorder-new": "/deployedworkorders/src/deployedworkorders-shell.js",
                    "vendor-new": "/vendors/src/vendors-shell.js",
                    "vendors": "/vendors/src/vendors-shell.js",
                    "quote-new": "/quotes/src/quotes-shell.js",
                    "quotes": "/quotes/src/quotes-shell.js",
                    "accountspayable-new": "/accountspayables/src/accountspayable-shell.js",
                    "accountspayable": "/accountspayables/src/accountspayable-shell.js",
                    "ap-vendors": ["/accountspayables/src/accountspayable-shell.js", "/approvetopays/src/approvetopay-shell.js"],
                    "ap-status": "/accountspayables/src/accountspayable-shell.js",
                    "approvetopay-new": "/approvetopays/src/approvetopay-shell.js",
                    "approvetopay-check": "/approvetopays/src/approvetopay-shell.js",
                    "approvetopay": "/approvetopays/src/approvetopay-shell.js",
                    "approvetopay-report": "/approvetopays/src/approvetopay-shell.js",
                    "apcreditmemo-new": "/apcreditmemos/src/apcreditmemos-shell.js",
                    "apcreditmemo": "/apcreditmemos/src/apcreditmemos-shell.js",

                    }
                }
            },


            stylekeeper: {
                type: Array,
                value: function() {
                    return []
                }
            },


        }
    }


    constructor() {
        super()
        this.addEventListener('toProfileView', e => {
            this.set('fromlicensor', e.detail.model)
        });
        this.addEventListener('ToWelcomeEvent', e => {
            this.toWelcomePage(e);
        });
        this.addEventListener('printpage', e => {
            window.print();
        });
        this.addEventListener('toparts', e => {
            this.set('toparts', e.detail.model)
        });
        this.addEventListener('toAP', e => {
            this.set('ap', e.detail.model)
        });
        this.addEventListener('toAccountsPayables', e => {
            this.set('apve', e.detail.model)
        });
        this.addEventListener('toAPCM', e => {
            this.set('apcm', e.detail.model)
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
            this.set('fromcrmarelation', e.detail.model)
        });
        this.addEventListener('toCustomerReceiveRMANew', e => {
            this.set('fromcrmatorec', e.detail.model)
        });
        this.addEventListener('toCustomerReceiveRMAView', e => {
            this.set('fromcrmatorecrelation', e.detail.model)
        });
        this.addEventListener('toFinishworkorderNew', e => {
            this.set('fromwo', e.detail.model)
        });
         this.addEventListener('toDeployedWorkOrderNew', e => {
            this.set('fromfwo', e.detail.model)
        });
        this.addEventListener('RBOMtoWONew', e => {
            this.set('rbomtowo', e.detail.model)
        });
        this.addEventListener('RBOtoWONew', e => {
            this.set('rbotowo', e.detail.model)
        });
        this.addEventListener('logoutapp', e => {
            this.set('route.path', "")
        this.showMenu = false;

        });

        this.addEventListener('CloseMenuEvent', e => {
           this.$.startDrawer.toggle()

        });

    }


    static get observers() {
        return [
            '_routePageChanged(route.*)',
        ];
    }

    _routePageChanged(page, v) {
        if (page === undefined || page.base.path === "/") {
            this.set('option', 'signin')
            return
        }

        let route = page.base.path.split("/")[1]

        let choice

        let module = this.importList[route]


        if (route == "signin" || route == "signin-authenticate" || route == "welcome") {
            return;
        }

        if (Array.isArray(module)) {
            Promise.all(module.map( (item) => {import(item)} )).then(() =>{
                this.set('option', this.ServicesList[route])
            })
        } else {
            import(module).then((mod) =>{
                this.set('option', this.ServicesList[route])
            })
        }
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
        route = route.split("/")[1]
        this.set('option', this.ServicesList[route])
    }

    resetSearch(e) {

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

        

        this.set('leftservices', e.detail.response.results)


    }

    serviceResponse(e) {
        this.set('leftservices', e.detail.response.results.services)

        this.getSetting(sessionStorage.getItem("PR"))
    }

    toWelcomePage(e) {

        this.set('route.path', '/welcome');
        this.showMenu = true;
        this.set('leftservices', e.detail.services)
        this.getSetting(sessionStorage.getItem("PR"))

        this.$.serviceajax.generateRequest();
    }


    // tempMenu() {
    //     let ur = sessionStorage.getItem("UR")
    //     ur == undefined || ur == null ? ur = 0 : ur
    //     this.$.serviceajax.url = "/service/leftservice"
    //     // this.$.serviceajax.url = "/api/user/services/0" 
    //     this.$.serviceajax.generateRequest()
    //     this.showMenu = true;

    // }



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
           
            this.setting = results
            sessionStorage.setItem("PR", this.setting.id)

        }
    }
    responseSetting1(response) {
        var results = response.detail.response.results[0]

        if (results) {

            this.setting = results
            sessionStorage.setItem("PR", this.setting.id)


            document.querySelector('#toast').text = 'Licensor\'s settings changed successfully.';
            document.querySelector('#toast').open();
        }
    }
    responseSetting2(response) {
        var results = response.detail.response

        if (results) {

            this.setting = results
            sessionStorage.setItem("PR", this.setting.id)


            document.querySelector('#toast').text = 'Company\'s settings changed successfully.';
            document.querySelector('#toast').open();
        }
    }

    getSetting(id) {
        id ? id : id = 50000
        this.$.ajaxSetting.url = "/profile/setting/" + id;
        this.$.ajaxSetting.generateRequest();
    }


    responseShipto(response) {
        var results = response.detail.response
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

        let ur = sessionStorage.getItem("UR")
        ur == undefined || null ? ur = 1 : ur
        this.$.serviceajax.url = "/service/leftservice"


        // this.$.serviceajax.url = "/api/user/services/" + ur
        this.$.serviceajax.generateRequest()
        this.showMenu = true;


        document.querySelector('defie-menu').addEventListener('userservices', e => {

        let ur = sessionStorage.getItem("UR")


        this.$.userajax.url = "/user/services/" + ur
        this.$.userajax.generateRequest()
        this.showMenu = true;



        })


        document.querySelector('defie-menu').addEventListener('leftservice', e => {

            let ur = sessionStorage.getItem("UR")
            ur == undefined || ur == null ? ur = 1 : ur
            this.$.serviceajax.url = "/service/leftservice"
            // this.$.serviceajax.url = "/api/user/services/" + ur
            this.$.serviceajax.generateRequest()
            this.showMenu = true;



        })

        this.shadowRoot.addEventListener('LicensorSettings', e => {
            let id = e.detail.id

            this.$.ajaxSetting1.url = "/licensor/setting/" + id;
            this.$.ajaxSetting1.generateRequest();

        })

        this.shadowRoot.addEventListener('ProfileSettings', e => {
            let id = e.detail.id

            this.$.ajaxSetting2.url = "/profile/setting/" + id;
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