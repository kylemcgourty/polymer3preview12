import { PolymerElement, html}
from '@polymer/polymer/polymer-element.js'

import '@polymer/iron-ajax/iron-ajax.js'
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-drawer/app-drawer.js'


import '@polymer/app-layout/app-header-layout/app-header-layout.js'

import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/app-layout/app-layout-behavior/app-layout-behavior.js'

import '@polymer/app-route/app-route.js'
import '@polymer/app-route/app-location.js'

import '@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js'
import '@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js'
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/iron-icons/iron-icons.js'
import '@polymer/iron-icons/editor-icons.js'
import '@polymer/iron-image/iron-image.js'
import '@polymer/iron-input/iron-input.js'
import '@polymer/iron-list/iron-list.js'
import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-resizable-behavior/iron-resizable-behavior.js'
import '@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js'
import '@polymer/paper-button/paper-button.js'
import '@polymer/paper-checkbox/paper-checkbox.js'
import '@polymer/paper-card/paper-card.js'
import '@polymer/paper-dialog/paper-dialog.js'
import '@polymer/paper-dialog-behavior/paper-dialog-behavior.js'

import '@polymer/polymer/polymer-legacy.js'

// import '../node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js'






import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/paper-toast/paper-toast.js'





// import '../node_modules/@polymer/paper-dialog/paper-dialog.js'
// import '../node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js'
// import '../node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js'
// import '/services/src/services-shell.js'
// import '/salesorders/src/salesorders-shell.js'


// import '../src/welcome-page.js'





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
        return html`
 
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
                font-size: 14px;
            
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
                    <div style="height: 100%; overflow: auto;">
                        <app-toolbar id="drawerToolbar" slot="drawerToolbar" style="height: 73px; border-bottom: 0 solid #ccc; background-color: #fafafa; color:#fff">
                            <div id="logo-container" class="logo">
                                <a href="/" class="logo"><img src="../images/logo44.png" alt="Defie"></a>
                            </div>
                        </app-toolbar>
                        <iron-selector id="selector" selected="0" attr-for-selected="name1" selectable=".inner">
                            <div> <a href="licensor-new">Licensors</a>
                        </iron-selector>
                    </div>
            </app-drawer>
            <iron-pages id="custIronPages" selected="[[option]]" attr-for-selected="name" fallback-selection="view404" role="main">
                

                <licensors-shell name="licensor" setting="[[setting]]"></licensors-shell>


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
                        "welcome": "welcome",

                        

                        "licensor-new": "licensor",
                        "licensors": "licensor",
                        
                    }
                }
            },

            importList: {
                type: Object,
                value: function() {
                    return {
                        
                        "licensors": "/licensors/src/licensors-shell.js",
                        "licensor-new": "/licensors/src/licensors-shell.js",
                       
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

        if (route == "signin" || route == "signin-authenticate") {
            return;
        }

        // if (route == "welcome") {
        //     this.set('option', 'welcome')
        //     return;
        // }
         
        // if (Array.isArray(module)) {
        //     Promise.all(module.map((item) => { import (item) })).then(() => {
        //         this.set('option', this.ServicesList[route])
        //     })
        // } else {
            import (module).then((mod) => {
                this.set('option', this.ServicesList[route])
            })
        // }
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


    ready() {
        super.ready()


    }
}


customElements.define('defie-menu', DefieMenu);