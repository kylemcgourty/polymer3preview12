 import { Element as PolymerElement }
 from '../../node_modules/@polymer/polymer/polymer-element.js'

 export class AdminServicePanel extends PolymerElement {
     static get template() {
         return `
        <style include="shared-styles iron-flex iron-flex-alignment">
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
        }
        
        .col-xs-3 {
            display: inline-block;
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 28%;
            float: left;
        }
        
        .i-input {
            margin-top: 7px;
        }
        
        .input {
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 100%;
        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 43%
        }
        
        .text-right {
            text-align: right;
        }
        
        .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
            font-size: 13px;
            height: 22px;
        }
        
        .right {
            margin-left: auto;
            line-height: 100% !important;
        }
        
        .text-center {
            line-height: 100% !important;
        }
        
        .font-size {
            font-size: 13px;
        }
        
        .left {
            line-height: 100% !important;
        }
        
        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }
        
        .button {
            font-size: 13px;
            margin-right: 15px;
        }
        
        .input {
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            font-size: 14px;
            width: 94%;
        }
        
        paper-dialog.deskStyles {
            top: 0px;
            left: 0px;
            margin-left: 0px;
            width: 275px !important;
            max-height: 600px;
        }
        
        paper-dialog.mobileStyles {
            min-width: 275px;
            top: 0px;
            margin-left: 0px;
            overflow: auto !important;
        }
        
        .title-rightpaneldraw {
            font-size: 16px;
            background-color: #e6e6e6;
            padding-left: 5%;
            padding-bottom: 0%;
            padding-top: 3%;
        }
        
        .close-interface {
            position: relative;
            top: -27px;
            text-align: right;
            left: -14px;
        }
        
        .close-interface span {
            display: inline-block;
            height: 25px;
            width: 50px;
        }
        
        .float-left {
            float: left;
        }
        
        .icon-alignment {
            margin-right: -2px;
        }
        
        .large-width {
            width: 67%;
            font-size: 14px;
        }
        
        .checkbox {
            float: right;
            width: 15px;
            height: 15px;
        }
        
        .top-spacing {
            margin-top: 10px;
        }
        
        .top-spacing1 {
            margin-top: 30px;
        }
        
        .top-spacing2 {
            margin-top: 45px;
        }
        
        .side-padding {
            padding-left: 16px
        }
        
        .options {
            margin-top: 33px;
            padding-left: 38px;
            color: blue;
        }
        
        .table-padding {
            padding-left: 5%;
            padding-right: 5%;
            margin-top: 20px;
        }
        
        .remove-icons {
            margin-left: -17px;
        }
        
        .header {
            position: relative;
        }
        
        .expand-icons {
            margin-left: -8px;
            box-sizing: border-box;
            padding-left: 7px;
        }
        
        .table-title {
            width: 50%
        }
        
        .table-title1 {
            width: 66%;
        }
        
        .data1 {
            width: 20%;
            box-sizing: border-box;
            text-align: right;
            font-size: 15px;
        }
        
        .data2 {
            width: 80%;
            font-size: 15px;
            padding-left: 26px;
            box-sizing: border-box;
        }
        
        .option,
        .option1 {
            margin-top: 7px;
            font-size: 15px;
        }
        
        .option1 {
            margin-left: 30px
        }
        
        .search {
            width: 100%;
        }
        
        .search-container {
            width: 70%
        }
        
        .right-icon {
            position: absolute;
            right: 0;
            bottom: 2px;
        }
        
        .list-container {
            margin-top: 20px;
        }
        
        iron-list {
            flex: 1 1 auto;
        }
        
        [data-role="subservice"] {
            visibility: hidden;
        }
        
        [data-layout="service"] {
            padding-top: 15px;
            padding-bottom: 15px;
        }

        [data-layout="service1"] {
            padding-top: 15px;
            padding-bottom: 0px!important;
        }
        
        [data-layout2="serviceend"] {
            padding-bottom: 15px;
        }

        .document {
            overflow: scroll;
            height: 100vh
        }

        [data-role="sub"] {
            visibility: hidden
        }

        .toggleicon {
            margin-right: 9px;
        }
        
        @media (max-width: 767px) {
            .title-rightpaneldraw {
                font-size: 16px;
                background-color: #e6e6e6;
                padding-left: 5%;
                padding-bottom: 0%;
                padding-top: 7%;
                padding-bottom: 7%;
            }
        }
                .right-icon1 {
            position: absolute;
            right: 0;
            bottom: -6px;
            z-index: 0;
        }

        .firstInput {
                font-family: 'Roboto', 'Noto', sans-serif;
                width: 15%;
                padding-right: 5%
            }
        #firstInnerInput {
            background-color: var(--set-edit-color);
            border: var(--set-edit-border);
        }
        .right-icon2 {
            position: absolute;
            right: -1px;
            bottom: -7px;
            color: #5e6268;
            z-index: 0;
        }
        .redtitle {
            color: red;
        }
        .headerName {
            border: none!important;
            width:15%; 
            text-align:right; 
            font-family: 'Roboto', 'Noto', sans-serif; 
            font-size:14px; 
            padding-right: 5%
        }
        .headerVersion {
            border: none!important;
            width:80%; 
            text-align:left; 
            font-family: 'Roboto', 'Noto', sans-serif; 
            font-size:14px; 
            text-align:left
        }
        #searchQuery {
            width: 100%;
            border: none;
            outline: none;
            border-bottom: 1px solid black;
        }
        .search-icon {
            float: right;
            top: -35px;
            right: 0;
        }
        </style>
        <div class="document">
            <div class="title-rightpaneldraw"> Services </div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class="table-padding">

                <div class="search-flex layout horizontal">
                    <div class="search-container">
                        <iron-input class="search" slot="input" style="height: 27px!important">
                            <input class="paper-input-input" placeholder="Show All" id="searchQuery" on-keypress="generateSearch" on-focusout="generateSearch"
                            style="font-size: 16px; height: 27px">
                                <paper-icon-button class="search-icon" icon="search"></paper-icon-button>
                        </iron-input>
                    </div>
                </div>
                <div class="options-container" style="min-height: 39px!important">
                    <div class="searchoptions layout horizontal" style="padding-top: 18px">
                        <div class="searchcontainer layout vertical">
                            <div class="s-container1 layout horizontal">
                                <div style="width: 109px">
                                    <input on-change="setSearchOption" on-keypress="setSearchOption" id="servicename_l" name="searchoptions" class="listoptions" type="radio" checked>App
                                </div>
                                <div style="width: 109px">
                                    <input on-change="setSearchOption" on-keypress="setSearchOption" id="appname_l" name="searchoptions" class="listoptions" type="radio">Service
                                </div>
                            </div>
                            <div class="s-container2 layout horizontal">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <section class="nomargin nopadding margin-left" style="margin-top: 18px">
                        <template is="dom-repeat" items="{{data}}">
                            <div on-tap="sendService" style="background-color: {{item.color}}; margin-top: 7px">
                                <div class="redtitle" style="color: rgb(255, 64, 128)">
                                    {{item.title}}
                                </div>
                                <iron-list items="{{item.transportapps}}" id="list" scroll-target="document">
                                    <template>
                                        <div>
                                            <div class="layout horizontal my-content" style="width:100%">
                                                <iron-input class="firstInput" bind-value="Version {{item.version}}">
                                                    <input id="firstInnerInput" style="width:100%; text-align:right; font-family: 'Roboto', 'Noto', sans-serif; font-size:14px" disabled>
                                                </iron-input>
                                                <iron-input  style="width: 80%;" bind-value="{{item.name}}">
                                                    <input style="width:100%"  disabled class="input">
                                                </iron-input>
                                                <div class="removeholder">
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </iron-list>
                            </div>
                        </template>
                        <div placeholder></div>
                    </section>
                </div>
            </div>
            <iron-ajax id="ajaxlist" method="GET" handle-as="json" on-response="responselist" content-type="application/json"></iron-ajax>
            <iron-ajax id="ajaxGetProfile" method="GET" handle-as="json" on-response="responselist" content-type="application/json"></iron-ajax>
    `
     }
     static get properties() {
         return {
             searchoption: {
                 type: String,
             },
         }
     }

     open(useProfileOnly) {
         if (useProfileOnly === true) {
             this.getProfileList();
         } else {
             this.getList()
         }
     }

     constructor() {
         super()
     }

     responselist(response) {
         if (response.detail) {
             let result = response.detail.response;
             let data = result.results.services;

             this.data = [];

             this.data = data.map((app, i) => {
                 var newAppObj = app
                 var color;
                 var even = i % 2
                 i % 2 === 0 ? color = '#f7f8f9' : color = 'white'
                 newAppObj.color = color;
                 newAppObj.title = app.name;
                 newAppObj.headername = "App";
                 newAppObj.headerversion = "Version";

                 return newAppObj;
             })
         }
         let dt = this.data
         this.data = []
         setTimeout(() => {
             this.set('data', dt)
             // this.shadowRoot.querySelector('iron-list').dispatchEvent(new CustomEvent('iron-resize', {
             //     bubbles: true,
             //     composed: true
             // }));
         }, 10)
     }
     getList() {
         this.$.ajaxlist.url = "/service/leftservice";
         this.$.ajaxlist.generateRequest();
     }
     getProfileList() {
         this.$.ajaxGetProfile.url = "/profile/masterprofile"
         this.$.ajaxGetProfile.generateRequest();
     }


     generateSearch(e, pass, retrieveAll) {
         if (e) {
             if (e.keyCode !== 13 && e.type == "keypress") {
                 return
             }
         }
         let query = this.$.searchQuery.value.trim();
         if (retrieveAll) {
             query = ""
             this.searchoption = 'id'
         }
         let querypackage = {
             query: query.toString().toLowerCase(),
             option: this.searchoption,
         }

         this.$.ajaxSearch.body = JSON.stringify(querypackage)
         this.$.ajaxSearch.generateRequest();

     }

     sendService(e) {

         var data = e.model.item
         this.dispatchEvent(new CustomEvent('sendService', {
             composed: true,
             bubbles: true,
             detail: {
                 service: data
             }
         }))

     }

     expandService(e) {
         let index = e.model.index
         if (this.data[index].layout === "service") {
             this.set('data.' + index + ".layout", "service1")
         } else {
             this.set('data.' + index + ".layout", "service")
         }

         index = index + 1
         let bool = true
         while (bool) {
             if (this.data[index] == undefined || this.data[index].role == "main") {
                 break;
             }

             if (this.data[index].display == "none") {
                 this.set('data.' + index + '.display', "")
             } else {
                 this.set('data.' + index + '.display', "none")

             }

             index = index + 1
         }
     }

 }
 customElements.define('adminservice-panel', AdminServicePanel);