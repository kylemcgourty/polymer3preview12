
   import {Element as PolymerElement}
     from '../../node_modules/@polymer/polymer/polymer-element.js'

   import './emailfilter.js'
   import './emailfiltercc.js'

   export class SendEmail extends PolymerElement {
        static get template() {
            return `  <style include="iron-flex iron-flex-alignment">




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

         .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);

            font-size: 13.3px;

            text-overflow: ellipsis;
            overflow: hidden;
        }

          .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
        }

           .text-right {
            text-align: right;
        }


        .col-xs-3c {
                position: relative;
    text-align: right;
    min-height: 1px;
    padding-left: 0px;
    padding-right: 0px;
    padding-right: 6px;
    width: 11%;
    float: left;
        }



        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
        }
      .table-padding {
            padding-left: 16px;
            padding-right: 16px;
            margin-top: 26px;
            height: 100vh
        }
        
        .search-container {
            position: relative;
            width: 70%;
            /*margin-left: 6px;*/
        }
        
        #listpage {
            /*overflow-y: auto;*/
            overflow-y: auto;
            height: 100vh;
        }
        
        .results-container {
            /*margin-top: 12px;*/
            /*margin-top: 18px;*/
            height: 76vh;
        }
        
        iron-list {
            /*flex: 1 1 auto;*/
        }
        
        .status-container {
            width: 83px;
            margin-left: 5%;
        }
        
        .search-icon {
            position: absolute;
            top: -6px;
            right: 0;
        }
        
        .search {
            width: 100%;
        }
        
        .view {
            border: none;
            color: blue;
            background: #eee;
            font-size: 14px;
        }
        
        .view:focus {
            outline: none!important;
        }
        
        #searchQuery {
            width: 100%;
            border: none;
            outline: none;
            border-bottom: 1px solid black;
        }
        
        #searchQuery::placeholder {
            font-size: 17px;
        }
        
        #searchQuery::-webkit-input-placeholder {
            font-size: 17px;
        }
        
        #searchQuery:-moz-placeholder {
            font-size: 17px;
        }
        
        #searchQuery::-moz-placeholder {
            font-size: 17px;
        }
        
        #searchQuery:-ms-input-placeholder {
            font-size: 17px;
        }
        
         .dropdown {
            margin-left: 26px;
        }
        
        paper-listbox {
            width: 100px;
            display: block;
            padding: 8px 0;
            color: #212121;
            overflow: hidden;
        }
        
        paper-dropdown-menu {
            display: block;
            margin-top: -15px;
            width: 100px;
        }
        
        paper-item.iron-selected {
            font-weight: bold;
            color: blue;
        }
        
        .layout-horizontal {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            background-color: #eee;
            margin-top: 9px;
        }
        
        div[class^="group"] {
            padding-left: 9px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        
        div[class^="box"] {
            min-height: 29px;
        }
        
        div[class^="bd"] {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            min-height: 35px;
            line-height: 2.5;
            padding-left: 3px;
        }
        
        div[class^="bd"]:first-child {
            width: 53%;
        }
        
        div[class^="bd"]:nth-child(3),
        div[class^="bd"]:nth-child(2) {
            width: 100%;
        }
        
        div[class^="group"],
        div[class^="box"] {
            width: 100%
        }
        
        div[class^="group7"],
        div[class^="box7"] {
            width: 98.5%!important
        }
        
        .searchcontainer {
            margin-top: 9px;
        }
        
        .s-container1 div,
        .s-container2 div {
            margin-top: 8px;
            /* margin-left: 20px; */
            width: 109px;
        }
        
        .mobile-options {
            min-width: 73px;
            width: 5.1%;
        }
        
        .options {
            min-width: 73px;
            width: 5.1%;
        }
        
        .group1 {
            margin-top: 9px;
            background-color: #eee;
        }
        
        .bd1-1 {
            width: 100%!important;
            padding-left: 11px!important;
        }
        
        .box1-data {
            width: 100%!important;
        }
        
        .group1 {
            width: 8%!important;
        }
        
        .group2 {
            min-width: 260px;
            width: 260px;
        }
        
        .group3 {
            min-width: 260px;
            width: 260px;
        }
        
        .group4 {
            min-width: 260px;
            width: 260px;
        }
        
        .group5 {
            min-width: 260px;
            width: 260px;
        }
        
        .group6 {
            min-width: 260px;
            width: 260px;
        }
        
        .group7 {
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
            background-color: #eee;
        }
        
        .bd1-1 {
            width: 163px;
        }
        
        .bd1-2 {
            width: 110px;
            padding-left: 6px;
        }
        
        .bd2-1 {
            width: 300px;
        }
        
        .bd2-mob {
            width: 0px;
        }
        
        .bd3-1 {
            width: 110px;
            box-sizing: border-box;
            padding-left: 3px;
        }
        
        .bd3-head {
            width: 46px;
        }
        
        .bd4-1 {
            width: 106px;
            box-sizing: border-box;
            padding-left: 3px;
        }
        
        .bd4-2 {
            width: 96px;
        }
        
        .bd4-head {
            width: 53px;
        }
        
        .bd5-1 {
            width: 95px;
            box-sizing: border-box;
            padding-left: 3px;
        }
        
        .bd5-2 {
            width: 93px;
        }
        
        .bd5-head {
            width: 68px;
        }
        
        .bd6-1 {
            width: 95px;
            box-sizing: border-box;
            padding-left: 3px;
        }
        
        .bd6-2 {
            width: 93px;
        }
        
        .bd6-head {
            width: 68px;
        }
        
        .bd7-1 {
            /*width: 100%!important;*/
        }
        /*     .layout-horizontal:nth-child(1) {
            margin-top: 0px;
        }*/
        
        .ilrow {
            /*  display: -ms-flexbox;
            display: -webkit-flex;
            display: -webkit-flex;
            display: flex;*/
            /*margin-top: 5px;*/
        }
        
        .desk-opts {
            /*display: none;*/
            visibility: collapse;
            width: 0px;
            height: 0px;
            min-width: 0px;
        }
        /**/
        
        .mobi-icon {
            height: 0px;
            padding: 0;
            width: 0px;
        }
        
        #list {
            flex: 1 1 auto;
        }  

        .iron-position {
            text-align: left;
            padding-left: 35px;
        }
        
        .side-padding {
            padding-left: 16px;
            padding-right: 16px;
            margin-top: 4%;
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
        
        .text-right {
            text-align: right;
        }
        
        .col-xs-12 {
            position: relative;
            min-height: 1px;
            padding-left: 16px;
            padding-right: 16px;
        }
        
        .col-xs-12a {
            position: relative;
            min-height: 1px;
            /* padding-left: 15px;
        padding-right: 15px;*/
        }
        
        .col-xs-6 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            float: left;
            width: 50%;
        }
        
    
        
      
        .col-xs-3b {
            position: relative;
            text-align: right;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 15%;
            float: left;
        }
        
        .col-xs-9b {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 80%;
        }
        
       
        
        .input-textarea-edit {
            min-height: 24px;
            text-align: initial;
            border: none;
            background-color: #eee;
            /*border-color: #eee;*/
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 99.1%;
            font-size: 14px;
            --iron-autogrow-textarea: {
                padding-left: 1%;
            }
        }
        
        .input-textarea-edit textarea {
            padding-left: 1%;
        }
        
        .input-textarea-list {
            min-height: 24px;
            text-align: initial;
            border: none;
            border-color: white;
            background-color: white;
        }
        
        .title-rightpaneldraw {
            font-size: 16px;
            background-color: #e6e6e6;
            padding-left: 5%;
            padding-bottom: 0%;
            padding-top: 3%;
        }
        
        .title-rightpaneldraw-list {
            font-size: 16px;
            margin-top: 20px;
        }
        
        .bottom-left {
            line-height: normal;
            position: absolute;
            bottom: 10px;
        }
        
        paper-dialog {
            right: 0px;
            height: 100%;
            margin-right: 0px;
            margin-bottom: -23px;
            overflow: auto;
        }
        
        .table-row {
            line-height: 48px;
            border-bottom: 1px solid #dbdbdb;
            background-color: white;
            width: 100%;
            font-size: 14px;
            font-weight: 500;
        }
        
        .last-column {
            padding-right: 10px;
        }
      
        
        .email-spacing {
            margin-top: 6px;
        }
        
        .email-spacing1 {
            margin-top: 2px;
        }
        
        .email {
            width: 100%;
        }
        
        .right-icon {
            position: absolute;
            right: 27px;
            bottom: 21px;
            z-index: 0;
        }
        
        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }
        
        .bottom {
            position: relative;
        }
        
        .search-row {
            margin-left: 0;
            margin-top: 0px;
            margin-bottom: 8px;
            padding-left: 24px;
            padding-right: 24px;
            height: 48px;
            position: relative;
            padding-bottom: 18px;
        }
        /* .mobilepadding {
        padding-left: 20px;
        padding-right: 20px;
    }*/
        
        .card-padding {
            padding-left: 24px;
            padding-right: 24px;
        }
        /*    .popup {
        height: 2200px;
    }*/
        
        .row-style {
            padding-left: 0px;
            padding-right: 0px;
        }
        
        .title-style {
            padding-bottom: 0px;
            background-color: white;
            margin-top: 0px;
            margin-left: 16px;
            font-size: 16px;
            margin-right: 16px;
        }
        
        .CL-popup {
            padding-right: 0px;
            padding-left: 0px;
        }
        
        .icon-style {
            color: gray;
            float: right;
            left: 34px;
            bottom: -4px;
            border: 1px solid gray;
            margin-right: 40px;
        }
        
        .title {
            --paper-input-container-label: {
                font-size: 14px!important;
            }
            ;
            --paper-input-container-input: {
                font-size: 14px!important;
            }
            ;
        }
        
        .top-margin {
            margin-top: 20px;
        }
        
        .set-height {
            height: 24px;
        }
        
        .item {
            /*border: 1px solid #ccc;*/
            margin-bottom: 20px;
            margin-left: 20px;
            margin-right: 20px;
        }
        
        .float-left {
            float: left;
        }
        
        .float-right {
            float: right;
        }
        
        .moved-icon {
            margin-right: -5%;
            padding-right: 0%;
            padding-left: 4%;
        }
        
        .moved-icon2 {
            margin-right: -6%;
            margin-left: 4%;
        }
        
        .to-front {
            z-index: 2;
        }
        
        .col-lg-6 {
            width: 100%;
        }
        
        .col-xs-9a {
            width: 88%;
            float: left;
        }
        
        .subject {
            width: 99%;
            padding-left: 1%
        }
        
        .fitting-width {
            width: 98%;
        }
        
        .title-font {
            font-size: 17px;
        }
        
        .cl-listborder {
            border: 1px solid lightgray;
            border-radius: 7px;
            background-color: #FFF;
            padding-top: 1%;
            padding-bottom: 1%;
        }
        
        .messagefield {
            margin-top: 8px;
        }
        
        .files {
            margin-top: 10px;
            padding-left: 12%;
        }
        #title {
            --paper-input-container-label: {
                font-size: 14px!important;
            }
            ;
            --paper-input-container-input: {
                font-size: 14px!important;
            }
            ;
        }

        .right-icon2 {
            position: absolute;
            right: -1px;
            /*bottom: -7px;*/
            bottom: -11px;
            z-index: 0;
        }
        .right-icon3 {
            position: absolute;
            right: 39px;
            /*bottom: -7px;*/
            bottom: -11px;
            z-index: 0;
        }
        .right-icon4 {
            position: absolute;
            right: 79px;
            /*bottom: -7px;*/
            bottom: -11px;
            z-index: 0;
        }

        .spacer {
            margin-top: 20px;
        }



        @media (max-width: 767px) {
                .col-xs-9a {
                    width: 100%;
                    float: left;
                }
                .files {
                    margin-top: 10px;
                    padding-left: 0%;
                }
                .set-height {
                    height: 28px;
                }
                .col-xs-3 {
                    float: left;
                    width: 7%;
                    min-height: 1px;
                    padding-left: 0px;
                    padding-right: 6px;
                    text-align: right;
                }
                 .search-row {
                    margin-left: 0px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    height: 48px;
                    position: relative;
                    width: 50%;
                }
                .options {
                    height: 30px;
                }
                div[class^="box"] {
                    height: 30px;
                }
                div[class^="bd"] {
                    height: 30px;
                    line-height: 2.5;
                }
                div[class^="group"] {
                    height: 30px;
                    padding-left: 0px;
                    width: 100%;
                }
                .layout-horizontal {
                    height: 30px;
                }
                .ilrow:nth-child(1) .layout-horizontal {
                    margin-top: 0px;
                }
                #expanded {
                    height: 206px;
                }
                div[class^="box2"] {
                    height: 60px!important;
                }
                div[class^="bd2"] {
                    height: 60px!important;
                    line-height: 2.5;
                }
                div[class^="group2"] {
                    height: 60px!important;
                }
                .ilrow {
                    /*margin-top: 9px;*/
                }
                .group1 {
                    width: 78vw!important;
                    padding-left: 0px!important;
                    min-width: 69vw;
                }
                .bd1-1 {
                    width: 42vw;
                    max-width: 42vw;
                }
                .bd1-2 {
                    width: 34vw;
                    max-width: 34vw;
                }
                .bd2-mob {
                    width: 14vw;
                    height: 60px;
                }
                .bd2-1 {
                    width: 77vw;
                    white-space: normal!important;
                    overflow: visible!important;
                    height: 60px;
                    padding-left: 1vw;
                }
                .bd3-1,
                .bd4-1,
                .bd5-1,
                .bd6-1 {
                    width: 35vw;
                    padding-left: 1vw;
                }
                .bd3-2,
                .bd4-2,
                .bd5-2,
                .bd6-2 {
                    width: 40vw;
                }
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
                only-mobile {
                    display: inline-block;
                }
                .lightgrey-padding {
                    padding-top: 0;
                    padding-left: 4vw;
                    padding-right: 4vw;
                    padding-bottom: 4vw;
                    background-color: rgba(238, 238, 238, 1.0);
                }
                .lightgrey-padding-inner {
                    /*padding-top: 15px;*/
                    background-color: #fff;
                    min-height: 2700px;
                }
                .bottom {
                    margin-right: 0px;
                }
                .search {
                    width: 100%
                }
                .mobile-opts {
                    display: block;
                    /*        display: -ms-flexbox;
                    display: -webkit-flex;
                    display: flex;*/
                }
                .desk-icon {
                    height: 0px;
                    padding: 0;
                    width: 0px;
                }
                .mob-icon {
                    height: 48px;
                    width: 48px;
                    margin-left: -6px;
                    padding-top: 0px;
                }
                .rm-icon-mid {
                    height: 40px;
                    width: 40px;
                    padding-left: 3px;
                    padding-top: 2px;
                    padding-bottom: 12px;
                }
                section {
                    display: block;
                    padding: 0;
                }
                .button-row {
                    padding-right: 8px;
                }
                .visible-xs {
                    display: inline-block !important;
                }

            }
            .searchoptions {
                position: relative;
                height: 36px;
            }

            .singleoption {
                margin-top: auto;
                padding-left: 12px;

            }
            .firstoption {
                margin-top: auto;

            }
        }


        </style>
        <div hidden="{{emailpage}}">
            <div class="title-rightpaneldraw">
                Email
            </div>



            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>

            <div class="row">
                <div class="my-content title-style">
                    <div class="email col-xs-6">
                        <paper-icon-button icon="editor:format-list-bulleted" class="hover to-front" on-tap="contactlist" style="float: right;"></paper-icon-button>
                        <paper-icon-button icon="add-circle" data-dialog="popup-contact" class="hover to-front" on-tap="addContact" style="float: right;"></paper-icon-button>
                    </div>
                </div>
            </div>
            <div class="row-style">
                <div class="col-xs-12">
                    <div class="my-content">
                        <!--                             <my-tagsearch id="title" small-row url="{{searchurl}}" label="To:" tags="{{_email.to}}"></my-tagsearch>
                        <my-tagsearch id="title" small-row url="{{searchurl}}" label="CC:" tags="{{_email.cc}}"></my-tagsearch> -->
                        <!-- <div class="my-content">
                            <div class="col-xs-3">To:</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9 input" bind-value="{{_email.to}}"><input class="input"></iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3">CC:</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9 input" bind-value="{{_email.cc}}"><input class="input"></iron-input>
                            </div>
                        </div> -->
                        <defie-emailfilter small-row label="[[to]]" style="margin-top: 14px;" model-customerlist1="[[customerlist]]" id="emailfilter" map-string='[{"key":"companyname", "isMain": "true"},{"key":"address", "isMain": "true"}]' tags="{{_email.to}}" not-taggable searchstring="{{emailto}}" required></defie-emailfilter>
                        <defie-emailfiltercc small-row label="[[cc]]" style="margin-top: 3px;" model-customerlist2="[[customerlist]]" id="emailfiltercc" map-string='[{"key":"companyname", "isMain": "true"},{"key":"address", "isMain": "true"}]' tags="{{_email.cc}}" not-taggable searchstring="{{emailcc}}" required></defie-emailfiltercc>
                        <div></div>
                        <div class="my-content col-xs-3c messagefield">Subject:</div>
                        <div class="my-content col-xs-9a messagefield">
                            <iron-input class="input subject" bind-value="{{_email.subject}}">
                                <input class="input">
                            </iron-input>
                        </div>
                        <div class=" my-content col-xs-3c messagefield">Message:</div>
                        <div class="my-content col-xs-9a messagefield">
                            <iron-autogrow-textarea class="input-textarea-edit" rows="3" bind-value="{{_email.message}}"></iron-autogrow-textarea>
                        </div>
                        <div style="clear: both;"></div>
                        <div class="my-content">
                            <div class="row files">
                                <div class="overflowtext" style="margin-bottom: 5px;">
                                    <paper-checkbox class="emailcheckbox" checked="{{_email.ispdf}}"></paper-checkbox>
                                    <span id="pdftext"><span>{{filename}}</span>.pdf</span>
                                </div>
                                <div class="overflowtext">
                                    <paper-checkbox class="emailcheckbox" checked="{{_email.ishtml}}"></paper-checkbox>
                                    <span id="htmltext"><span>{{filename}}</span>.html</span>
                                </div>
                            </div>
                            <div class="my-content"></div>
                            <div class="button-row text-right">
                                <paper-button class="emailbutton main-button" on-click="send" raised>Send</paper-button>
                                <paper-button class="emailbutton" on-click="cancel" raised>Cancel</paper-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="listpage" hidden="{{listpage}}">
            <div class="title-rightpaneldraw">
                Contacts List
            </div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="backPanel">Back</span>
                    <iron-icon icon="icons:arrow-back" 
                    class="close-icon" on-click="backPanel"> </iron-icon>

                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div id="container" class="table-padding">
                <div style="padding-bottom:24px">
                    <div class="search-flex layout horizontal">
                        <div class="search-container">
                            <iron-input class="search" slot="input">
                                <input class="paper-input-input" placeholder="Show All" id="searchQuery" on-keypress="generateSearch" on-focusout="generateSearch">
                            </iron-input>
                            <div on-tap="generateSearch" class="search-icon">
                                <paper-icon-button class="search-icon" icon="search"></paper-icon-button>
                            </div>
                        </div>
                    </div>
                    <div class="options-container">
                        <div class="searchoptions layout horizontal">
                            <div class="searchcontainer layout vertical">
                                <div class="s-container1 layout horizontal">
                                    <div>
                                        <input on-change="setSearchOption" on-keypress="setSearchOption" id="name_l" name="searchoptions" class="listoptions" type="radio" checked>Name
                                    </div>
                                    <div>
                                        <input on-change="setSearchOption" on-keypress="setSearchOption" id="email_l" name="searchoptions" class="listoptions" type="radio">
                                        Email
                                    </div>
                                    <div>
                                        <input on-change="setSearchOption" on-keypress="setSearchOption" id="title_l" name="searchoptions" class="listoptions" type="radio">
                                        Title
                                    </div>
                                    <div>
                                        <input on-change="setSearchOption" on-keypress="setSearchOption" id="phone_l" name="searchoptions" class="listoptions" type="radio">
                                        Phone
                                    </div>
                                </div>
                                <div class="s-container2 layout horizontal">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="s-container2 layout horizontal">
                        <div>
                        </div>
                    </div>
                </div>
                <div class="results-container">
                    <iron-list id="list" items="[[data]]" multi-selection selection-enabled scroll-target="listpage">
                        <template>
                            <div>
                                <div id={{item.id}} style="padding-bottom: 24px;">
                                    <div class="my-content"></div>

                                    
                                    <div class="row layout horizontal">
                                        <!-- <div class="my-content"></div> -->
                                        <div class="layout vertical" style="width: 100%">
                                                <div class="my-content">
                                                    <div class="col-xs-3b">First Name</div>
                                                    <div class="text-right">
                                                        <iron-input class="col-xs-9b" bind-value="{{item.firstname}}">
                                                            <input  disabled class="input">
                                                            <paper-icon-button  class="right-icon4" style="visibility: {{item.visibility4}}" icon="icons:settings-overscan" on-tap="selectContact" id={{item.id}}></paper-icon-button>
                                                            <paper-icon-button style="visibility: {{item.visibility3}}" class="right-icon3" icon="create" on-tap="edit"></paper-icon-button>
                                                            <paper-icon-button style="visibility: {{item.visibility2}}" class="right-icon2" icon="icons:close" on-tap="delete" id={{item.id}}></paper-icon-button>
                                                        </iron-input>
                                                    </div>
                                                </div>

                                                <div class="my-content">
                                                    <div class="col-xs-3b">Last Name</div>
                                                    <div class="text-right">
                                                        <iron-input class="col-xs-9b" bind-value="{{item.lastname}}">
                                                            <input  disabled class="input">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="col-xs-3b">Title</div>
                                                    <div class="text-right">
                                                        <iron-input class="col-xs-9b" bind-value="{{item.title}}">
                                                            <input  disabled class="input">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="col-xs-3b">Email</div>
                                                    <div class="text-right">
                                                        <iron-input class="col-xs-9b" bind-value="{{item.email}}">
                                                            <input  disabled class="input">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="col-xs-3b">Phone</div>
                                                    <div class="text-right">
                                                        <iron-input class="col-xs-9b" bind-value="{{item.phone}}">
                                                            <input  disabled class="input">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="col-xs-3b">Address</div>
                                                    <div class="text-right">
                                                        <iron-input class="col-xs-9b" bind-value="{{item.address}}">
                                                            <input  disabled class="input">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                                <div class="my-content">
                                                    <div class="col-xs-3b">Role</div>
                                                    <div class="text-right">
                                                        <iron-input class="col-xs-9b" bind-value="{{item.role}}">
                                                            <input  disabled class="input">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </iron-list>
                </div>
            </div>
        </div>
        <div  id="edit" hidden="{{editpage}}">
            <div class="title-rightpaneldraw">
                Edit Contact Info
            </div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="backPanel">Back</span>
                     <iron-icon icon="icons:arrow-back" 
                    class="close-icon" on-click="backPanel"></iron-icon>
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class='row-style side-padding'>
                <div class="col-xs-12">
                    <div class="my-content top-margin">
                        <div class="col-xs-3b">First Name</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9b" bind-value="{{_contact.firstname}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3b">Last Name</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9b" bind-value="{{_contact.lastname}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3b">Title</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9b" bind-value="{{_contact.title}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3b">Email</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9b red" on-focusout="compareToEmailList" bind-value="{{_contact.email}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3b">Phone</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9b" bind-value="{{_contact.phone}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3b">Address</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9b" bind-value="{{_contact.address}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content">
                        <div class="col-xs-3b">Role</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9b" bind-value="{{_contact.role}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-content"></div>
            <div class="spacer row">
                <div class="col-xs-12">
                    <div class="my-content text-right">
                    <!-- <div class="text-right"> -->
                        <paper-button class="button main-button" on-click="editbilling" data-dialog="popup-contact" raised>Save</paper-button>
                        <paper-button dialog-dismiss class="button" on-click="cancel1" raised>Cancel</paper-button>
                    </div>
                </div>
            </div>
        </div>
        <div hidden="{{addpage}}">
            <div class="title-rightpaneldraw">
               New Contact Info
            </div>
            <div style="background-color: #e6e6e6; height: 25px">
                <div class="close-interface">
                    <span on-tap="backPanel">Back</span>
                     <iron-icon icon="icons:arrow-back" class="close-icon" on-click="backPanel"></iron-icon>
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class="row-style side-padding">
                <div class='row'>
                    <div class="col-xs-12">
                        <div class="my-content">
                            <div class="col-xs-3b">First Name</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9b" bind-value="{{_contact.firstname}}">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                         <div class="my-content">
                        <div class="col-xs-3b">Last Name</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9b" bind-value="{{_contact.lastname}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                        <div class="my-content">
                            <div class="col-xs-3b">Title</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9b" bind-value="{{_contact.title}}">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3b">Email</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9b" bind-value="{{_contact.email}}">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3b">Phone</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9b" bind-value="{{_contact.phone}}">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3b">Address</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9b" bind-value="{{_contact.address}}">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                            <div class="col-xs-3b">Role</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9b" bind-value="{{_contact.role}}">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="my-content"></div>
            <div class="spacer row">
                <div class="col-xs-12">
                    <div class="text-right">
                        <paper-button class="button main-button" on-click="savecontact" data-dialog="popup-contact" raised>Save</paper-button>
                        <paper-button dialog-dismiss class="button" on-click="cancel2" raised>Cancel</paper-button>
                    </div>
                </div>
            </div>
        </div>
        <iron-ajax id="ajaxClist" method="GET" handle-as="json" on-response="responseClist" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajax" method="POST" on-response="success" on-error="ajaxerror"></iron-ajax>
        <iron-ajax id="ajaxSave" method="PUT" handle-as="json" on-response="responseActionEdit" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxSaveC" method="POST" handle-as="json" on-response="responseAction" on-error="showError" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxDelete" method="DELETE" handle-as="json" on-response="responseDelete"></iron-ajax>
         <iron-ajax id="ajaxSearch" method="POST" handle-as="json" on-response="responseClist" content-type="application/json"></iron-ajax>
        `
        }
        static get properties() {
            return {
                _contact: {
                    type: Object,
                    notify: true,
                    value: function() {
                        return {};
                    }
                },
                model: {
                    type: Array,
                    notify: true,
                    value: function() {
                        return [];
                    }
                },
                listpage: {
                    type: Boolean,
                    value: true
                },
                editpage: {
                    type: Boolean,
                    value: true
                },
                addpage: {
                    type: Boolean,
                    value: true
                },
                emailpage: {
                    type: Boolean,
                    value: false
                },
                _email: {
                    type: Object,
                    notify: true,
                    value: function() {
                        return {
                            ispdf: true,
                            ishtml: true,
                            to: [],
                            cc: []
                        };
                    }
                },
                posturl: {
                    type: String
                },
                searchurl: {
                    type: String,
                    notify: true
                },
                listIndex: {
                    type: Number,
                    value: undefined
                },
                filename: {
                    type: String,
                    notify: true,
                    value: function() {
                        return '';
                    },
                },
                data: {
                    type: Array,
                    value: function() {
                        return []
                    }
                },
                to: {
                    type: String,
                    value: "To:"
                },
                cc: {
                    type: String,
                    value: "Cc:"
                },
                searchurl: {
                    type: String,
                    notify: true
                },
            }
        }
        static get observers() {
            return [
                'changesubject(filename)',
            ]
        }
        constructor() {
            super();
            this.titlecolor();
        }



        generateSearch(e, pass, retrieveAll) {
            console.log("generatesearch called")

            if(this.searchoption == undefined || this.searchoption == null || this.searchurl == ""){
                this.searchoption = "name_l"
            }

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
                // type: this.panelname.toLowerCase()\
                type: "Contact",
            }

            console.log("here is the query package", querypackage)


            console.log("companyid?", this.searchurl.split("/").reverse()[0])


            this.$.ajaxSearch.url = this.searchurl

            this.$.ajaxSearch.body = JSON.stringify(querypackage)
            this.$.ajaxSearch.generateRequest();
        }



        setSearchOption(e) {
            console.log("e.path[0].id in setSearchOption", e.path[0].id)
            e.path[0].id === "all" ? this.generateSearch(e, undefined, 'mfgpn') : this.searchoption = e.path[0].id



            if (this.$.searchQuery.value) {
                this.generateSearch()
            }
        }





        selectContact(e) {
            console.log("herer in e!", e)
            console.log(e.model.item.id)
            console.log(e.model.item)

            this.listpage = true;
            this.editpage = true;
            this.emailpage = false;
            this.addpage = true;

            console.log("e.target.value", e.target.value)

            // e.target.value === undefined ? e.target.value = '' : e.target.value = e.target.value
            // e.target.value === undefined ? e.target.value = '' : e.target.value = e.model.item.email

            if(e.target.value === undefined) {
                e.target.value = e.model.item.email
            }


            console.log("e.target.value", e.target.value)


            // this.set('_email', e.model.item.email)
            this.$.emailfilter.focusout(e)

        }


        resetElement() {
        for (let k in this.properties) {
            if (k === 'model') {
                if (typeof this.properties[k].value === 'function') {
                    this.set(k, this.properties[k].value());
                }
            }
        }
    };



        changesubject() {
            this.set('_email.subject', this.filename);
        }
        open(filename, posturl, searchurl) {

            console.log('open called', filename, posturl, searchurl);
            if (filename) this.set('filename', filename);
            if (posturl) this.set('posturl', posturl);
            this.set('searchurl', searchurl);
            this.resetElement();

            this.addpage = true;
            this.listpage = true;
            this.editpage = true;
            this.emailpage = false;
            
            // this.set('_email.to', "");
            // this.set('_email.cc', "");
            this.set('_email.subject', this.filename);
            this.set('_email.message', "");
            this.set('_email.ispdf', true);
            this.set('_email.ishtml', true);


            this.set('_contact.name', "");
            this.set('_contact.address', "");
            this.set('_contact.address1', "");
            this.set('_contact.address2', "");

            this.set('_contact.email', "");
            this.set('_contact.phone', "");
            this.set('_contact.title', "");
            console.log(this._email)
            this.$.emailfilter.open();
            // this.$.emailfiltercc.open();
        }
        getCList() {
            console.log("here in getClist")
            this.$.ajaxClist.url = this.searchurl;
            this.$.ajaxClist.generateRequest();
        }
        responseClist(request) {
            var result = request.detail.response;

            console.log("result oimn responseClist", result)

            if (result) {
                this.set("customerlist", result.results);
                console.log(this.data)
                // this.set('data', []);

                // this.set('data', result.results);
                this.set('data', this.customerlist)



                var length = this.customerlist.length

                console.log("length", length)



                for (var i = 0; i < this.customerlist.length; i++) {
                    this.data[i].address = this.customerlist[i].address
                    console.log("inside", this.data[i].address)

                    this.notifyPath(`data[${i}].address`)
                }

                console.log("this.customerlist", this.customerlist)

                console.log("this.customerlist[length-1]", this.customerlist[length-1])

                 if (this.customerlist[length-1].id === 100000){
                        this.set('customerlist.'+ (length-1) + '.visibility2', 'hidden')
                        this.set('customerlist.'+ (length-1) + '.visibility3', 'hidden')
                       // this.set('customerlist.'+ (length-1) + '.visibility4', 'hidden')
                    }

                // this.set('customerlist.0.visibility3', 'visible')
                // this.set('customerlist.0.visibility2', 'hidden')

                // this.set('data.0.visibility3', 'visible')
                // this.set('data.0.visibility2', 'hidden')


                        //     this.shadowRoot.dispatchEvent(new CustomEvent('iron-resize', {
                        //     bubbles: true,
                        //     composed: true
                        // }))

                // if(e.detail.baseURI.split('/')[3] == "customers") {

                //     this.model.map(function(x) {
                //         x.visibility4 = 'hidden'
                //     })
                // }



            }
        }
        cancel() {
            console.log('cancel is called');
            // this.fire('resetEmail', {})
            this.set('_email.subject', "");
            this.set('_email.message', "");
            this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }));
        }

        cancel1() {
            this.set('_contact.name', "");
            this.set('_contact.address1', "");
            this.set('_contact.address2', "");

            this.set('_contact.email', "");
            this.set('_contact.phone', "");
            this.set('_contact.title', "");

            this.listpage = false;
            this.editpage = true;
            this.emailpage = true;
            this.addpage = true;
        }

        cancel2() {
            this.set('_contact.name', "");
            this.set('_contact.address1', "");
            this.set('_contact.address2', "");

            this.set('_contact.email', "");
            this.set('_contact.phone', "");
            this.set('_contact.title', "");

            this.listpage = true;
            this.editpage = true;
            this.emailpage = false;
            this.addpage = true;
        }

        addContact(e) {
            // this.$.addcontacturl.open(this.searchurl);

            this.set('_contact', {})

            console.log('add contact called')
            this.listpage = true;
            this.editpage = true;
            this.emailpage = true;
            this.addpage = false;

        }

        delete(e) {
            console.log("here is e.model inside delete", e.model)
            console.log("here is e.model inside delete", e.model.item.id)
            var item = e.model.item;
            var id = item.id;
            var contact = this.model.filter(function(x) {
                return x.id == id;
            })[0];
            console.log("this is the search model before ", this.searchurl)
            // this.$.ajaxDelete.url = this.searchurl;
            this.$.ajaxDelete.url = this.searchurl + "/" + e.model.item.id;



            console.log("CONTASCT",contact)


                        console.log("this.$.ajaxDelete inside delete of bill list", this.$.ajaxDelete)
                        console.log("this.$.ajaxDelete.url inside delete of bill list", this.$.ajaxDelete.url)
            console.log("this.searchurl inside delete of bill list", this.searchurl)



            this.$.ajaxDelete.body = JSON.stringify(e.model.item);
            this.$.ajaxDelete.generateRequest();
        }

        responseDelete(request) {
            var result = request.detail.response;
            console.log(result)
            if (result) {
                document.querySelector('#toast').text = "Removed successfully, refreshing in 2s.";
                document.querySelector('#toast').show();
                setTimeout(function() {
                    document.querySelector('#toast').text = "Removed successfully, refreshing in 1s.";
                    document.querySelector('#toast').show();
                }, 1000);
                setTimeout(function() {
                    document.querySelector('#toast').text = "Removed successfully, refreshing now.";
                    document.querySelector('#toast').show();
                }, 2000);
                setTimeout(function() {
                    this.getCList()
                }.bind(this), 2000);
            } else {
                document.querySelector('#toast').text = "Error removing.";
                document.querySelector('#toast').show();
            }
            // this.listpage = true;
            // this.editpage = true;
            // this.emailpage = false;
        }

        contactlist(e) {
            console.log("contactlist function called", e)
            this.listpage = false;
            this.editpage = true;
            this.emailpage = true;
            this.addpage = true;
            this.getCList();
        }

        editbilling(e) {

            this.$.ajaxSave.url = this.searchurl + "/" + this._contact.id;  
            this.$.ajaxSave.body = JSON.stringify(this._contact);
            this.$.ajaxSave.generateRequest();
        }

        savecontact() {

            console.log("this._contact in savecontact", this._contact)
    

            console.log("this.searchurl                ",this.searchurl)

            this.$.ajaxSaveC.url = this.searchurl;  

            console.log("this.$.ajaxSaveC.url                ", this.$.ajaxSaveC.url)


            this.$.ajaxSaveC.body = JSON.stringify(this._contact);
            this.$.ajaxSaveC.generateRequest();
        }

        showError(e) {
            var msg = e.detail.request.xhr.response.error;
            if (msg) document.querySelector('#toast').show(msg);
        }
        responseAction(request) {

            console.log(" inside responseaction ", request.detail.response)

            var result = request.detail.response;
            console.log(result)
            if (result.error) {
                document.querySelector('#toast').text = result.error;
                document.querySelector('#toast').show();
            } else {
                document.querySelector('#toast').text = "Save successfully";
                document.querySelector('#toast').show();
                // this.$.ajaxList.generateRequest();
                this.listpage = false;
                this.editpage = true;
                this.emailpage = true;
                this.addpage = true;

                this.getCList();
                // console.log('here is model, request,', this.model, request);
                // console.log('here is contact', this._contact);
                // var newContact = JSON.stringify(this._contact);
                // newContact = JSON.parse(newContact);
                // this.unshift('model', newContact);
                // console.log('model afterwards', this.model);

                this.set('_contact.name', "");
                this.set('_contact.address1', "");
                this.set('_contact.address2', "");

                this.set('_contact.email', "");
                this.set('_contact.phone', "");
                this.set('_contact.title', "");
                // this.close();
            }

        }

        responseActionEdit(request) {

            console.log("here ein responseActionAEdit", request.detail.response)


            var result = request.detail.response;
            console.log(result)
            if (result.error) {
                document.querySelector('#toast').text = result.error;
                document.querySelector('#toast').show();
            } else {
                document.querySelector('#toast').text = "Save successfully";
                document.querySelector('#toast').show();
                // this.$.ajaxList.generateRequest();
                this.listpage = false;
                this.editpage = true;
                this.emailpage = true;
                this.addpage = true;

                if (this.listIndex >= 0) {
                    this.splice('model', this.listIndex, 1);
                    this.listIndex = undefined;
                    console.log('called in if', this.model);
                }
                this.getCList();

                // console.log('here is model, request,', this.model, request);
                // console.log('here is contact', this._contact);
                // var newContact = JSON.stringify(this._contact);
                // newContact = JSON.parse(newContact);
                // this.unshift('model', newContact);
                // console.log('model afterwards', this.model);

                // this.set('_contact.name', "");
                // this.set('_contact.address1', "");
                // this.set('_contact.address2', "");

                // this.set('_contact.email', "");
                // this.set('_contact.phone', "");
                // this.set('_contact.title', "");
                // this.close();
            }
        }
        edit(e) { //transfer the data


            // var id = e.model.item.id;


            // var contact = this.model.filter(function(x) {

            //     console.log("in filter", x)

            //     return x.id == id;
            // })[0];

            // if (contact) {
            //     this.set('_contact', contact);
            // }
            this.set('_contact', e.model.item)


            // this.$["popup-contact"].open();
            this.listIndex = e.model.index;
            this.listpage = true;
            this.editpage = false;
            this.emailpage = true;
            this.addpage = true;
        }
        close() {
            // this.$.popup.close();
            this.listpage = true;
            this.editpage = true;
            this.emailpage = false;
            this.addpage = true;
            this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }));
        }

        backPanel() {
            // this.$.popup.close();
            this.listpage = true;
            this.editpage = true;
            this.emailpage = false;
            this.addpage = true;
            // this.dispatchEvent(new CustomEvent('closePanel', {
            //     composed: true,
            //     bubbles: true
            // }));
        }



        send(e) {
            console.log('send in email')
            document.querySelector('#toast').show("Sending message.");
            console.log(this._email)
            console.log(this._email.to)
            console.log(this._email.cc)

            this.$.ajax.url = this.posturl;
            this.$.ajax.body = JSON.stringify(this._email);

            this.$.ajax.generateRequest();
            this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }));

        }
        success(request) {
            document.querySelector('#toast').show("Sent successfully.");
            // this.fire('resetEmail', {})
            // this.set('_email.to', "");
            // this.set('_email.cc', "");
            this.set('_email.subject', "");
            this.set('_email.message', "");
        }
        ajaxerror() {
            document.querySelector('#toast').show("Error sending email.");
        }
        titlecolor() {
            this.headercolor = "#406aad";
            this.updateStyles({
                '--title-background-normal': this.headercolor,
                '--title-normal': 'white',
            });
        }
    }
 
    customElements.define('send-email', SendEmail)

