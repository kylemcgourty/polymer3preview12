 import { PolymerElement, html }
 from '../../node_modules/@polymer/polymer/polymer-element.js'
 

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
 import '@polymer/iron-input/iron-input.js'
 import '@polymer/iron-list/iron-list.js'
 import '@polymer/iron-pages/iron-pages.js'
 import '@polymer/iron-resizable-behavior/iron-resizable-behavior.js'
 import '@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js'
 import '@polymer/paper-button/paper-button.js'
 import '@polymer/paper-checkbox/paper-checkbox.js'
 import '@polymer/paper-card/paper-card.js'
 import '@polymer/paper-icon-button/paper-icon-button.js'
 import '@polymer/paper-toast/paper-toast.js'



 
 Number.prototype.pct = function(c) {
     var d = '.';
     var t = ',';
     let n = this;
     c = isNaN(c = Math.abs(c)) ? 2 : c;
     d = d == undefined ? "." : d;
     t = t == undefined ? "," : t;
     const s = n < 0 ? "-" : "";
     const i = `${parseInt(n = Math.abs(+n || 0).toFixed(c))}`;
     var j
     j = (j = i.length) > 3 ? j % 3 : 0;
     return `${s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "")}%`;
 };

 window.float = num => {
     if (typeof num === "number")
         return num;
     if (num === undefined) {
         return 0;
     }
     if (num === null) {
         return null;
     }

     const REGEX1 = /\,/g;
     const REGEX2 = /\$/g;
     const REGEX3 = /\%/g;
     const REGEX4 = /\€/g;
     const REGEX5 = /\£/g;

     //remove commas
     num = num.replace(REGEX1, '');
     //remove dollars
     num = num.replace(REGEX2, '');
     //remove percent
     num = num.replace(REGEX3, '');
     //remove eur
     num = num.replace(REGEX4, '');
     //remove pound
     num = num.replace(REGEX5, '');
     return parseFloat(num);

 }

 Number.prototype.usd = function(c) {
     var d = '.';
     var t = ',';
     const prefix = '$';
     let n = this;
     c = isNaN(c = Math.abs(c)) ? 2 : c;
     d = d == undefined ? "." : d;
     t = t == undefined ? "," : t;
     const s = n < 0 ? "-" : "";
     const i = `${parseInt(n = Math.abs(+n || 0).toFixed(c))}`;
     var j
     j = (j = i.length) > 3 ? j % 3 : 0;
     return s + prefix + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

 export class LicensorsShell extends PolymerElement {


     static get template() {
         return html`
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

        <div>Polymer 3 preview.12 Loaded </div>
            
           
        </app-drawer-layout>
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
             hash: {
                 type: String,
                 reflectToAttribute: true
             },

             option: {
                 type: String,
                 value: "list"
             },

             stylekeeper: {
                 type: Array,
                 value: function() {
                     return []
                 }
             },

             history: {
                 type: Boolean,

             },

             model: {
                 type: Object,
                 value: function() {
                     return {
                         "mainlocation": {
                             "company": "",
                             "attention": "",
                             "street": "",
                             "zip": "",
                             "city": "",
                             "state": "",
                             "country": "",
                             "phone": "",
                             "fax": "",
                             "domain": ""
                         },
                         "services": [],
                         "maincontact": {
                             "firstname": "",
                             "lastname": "",
                             "title": "",
                             "role": "",
                             "email": "",
                             "workphone": "",
                             "cellphone": ""
                         },
                         "payment": {
                             "term": "",
                             "terms": "",
                             "effectivedate": "",
                             "creditlimit": "$0.00",
                             "discount": Number(0).pct(2),
                             "apname": "",
                             "apphone": "",
                             "apemail": "",
                             "apaddress": ""
                         },
                         "sla": {
                             "id": "",
                             "expireddate": "",
                             "industry": "",
                             "region": "",
                             "startdate": "",
                             "status": true,
                             "supportlevel": ""
                         },
                         "products": {
                             "product": "",
                             "platform": "",
                             "domain": "",
                             "host": ""
                         },
                         "settings": {
                             "address": true,
                             "logo": "",
                             "phone": true
                         },
                         "logincredential": {
                             "primaryemail": "",
                             "retypeprimaryemail": "",
                             "password": "",
                             "retypepassword": ""
                         },
                         "id": "",
                         "idver": "",
                         "termsandconditions": "",
                         "version": "",
                     }
                 }
             },

             MasterRoutes: {
                 type: Object,
                 value: {
                     "licensors": "list",
                     "": "list",
                     "licensor-new": "new",
                     "licensor-view": "view",
                     "licensor-edit": "edit",
                 }
             },

             importList: {
                type: Object,
                value: function() {
                    return {
                        "list": './licensors.js',
                        "new":'./licensor-new.js',
                        "view": './licensor-view.js',
                        "edit": './licensor-edit.js',
                        "viewnew": './licensor-viewnew.js'
                    }
                }
            }
         };
     }

     constructor() {
         super()

         console.log('lic shell loads')
     }

     static get observers() {
         return [
             '_routePageChanged(route.*)',
         ];
     }

     _routePageChanged(page, v) {

        if (page === undefined) {
             return;
        }
        if (!page.base.path.includes("licensor")){
            return
        }
         let components = page.base.path.split("/")

         let choice

         if (components.length == 2) {
             choice = this.MasterRoutes[components[1]]

         } else {
             if (components.includes("licensor-new")) {
                 choice = "viewnew"
             } else {
                 choice = components[2]

             }
         }
           let module = this.importList[choice]

                import(module).then((mod) =>{
                    this.set('option', choice)
                    this.start(choice)
                })




}
    start(choice){

         switch (choice) {


             case "new":

                 if (this.cloneflag == true) {
                     this.model1.idver = ""
                     this.model1.id = ""
                     this.cloneflag = false

                 } else {
                     this.model1 = {};
                     this.model1 = JSON.parse(JSON.stringify(this.model));
                 }
                 this.startnew = true

                 break;
             case "viewnew":
                 this.startviewnew = true
                 break;
             case "view":
                 this.startview = true
                 break;

             case "list":
                 this.set('model1.savehistory', false)
                 this.history = false;
                 this.startlist = true;
                 break;
             case "edit":
                 this.history = false;
                 this.startedit = true

                 break;
         }

     }

     startPage(choice) {

         if (choice == "new") {

             this.$.new.getList()
         } else if (choice == "edit") {
             this.$.edit.setBillshipto(this.model1)
             this.$.edit.setModel(this.model1)

         } else if (choice == "viewnew") {
             this.$.viewnew.setModel(this.model1)

         } else if (choice == "view") {
             this.$.view.setModel(this.model1)

         }
     }

 



    

     ready() {
         super.ready()

         console.log('in lc shell')


     }
 }


 customElements.define('licensors-shell', LicensorsShell);