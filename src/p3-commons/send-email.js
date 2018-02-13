import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'


import { render } from '../../node_modules/lit-html/lib/lit-extended.js';

import './emailfilter.js'
import './emailfiltercc.js'

export class SendEmail extends LitElement {


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
  
    constructor() {
        super();

             this._email = {}
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
    open(filename, posturl, searchurl, profileid, customerid) {

        console.log('send in mail open')

        if (filename) this.filename = filename;
        if (posturl) this.posturl = posturl
        this.searchurl = searchurl
        this.resetElement();

        this._email = {}

        this._email.subject = this.filename
        this._email.message = ""
        this._email.ispdf = true
        this._email.ishtml = true
        this._email.to = []
        this._email.cc = []


        this._contact = {}
        this._contact.name = ""
        this._contact.address = ""
        this._contact.address1 = ""
        this._contact.address2 = ""

        this._contact.email = ""
        this._contact.phone = ""
        this._contact.title = ""


        this.shadowRoot.getElementById('emailfilter').open(profileid, customerid);
        this.shadowRoot.getElementById('emailfiltercc').open(profileid, customerid);

    }

    clearContacts(){
        this.shadowRoot.getElementById('emailfilter').clearContacts(); 
    }

    cancel() {

        this.set('_email.subject', "");
        this.set('_email.message', "");
        this.dispatchEvent(new CustomEvent('closePanel', {
            composed: true,
            bubbles: true
        }));
    }










    send(e) {
        document.querySelector('#toast').show("Sending message.");

        let emails1 =this.shadowRoot.getElementById('emailfilter').returnEmails()
        let emails2 =this.shadowRoot.getElementById('emailfiltercc').returnEmails()


        console.log('got emails1', emails1)

       this._email.to = this._email.to.concat(emails1).concat(emails2)


        console.log('the emails', this._email.to)

        // this.$.ajax.url = this.posturl;
        // this.$.ajax.body = JSON.stringify(this._email);

        // this.$.ajax.generateRequest();
        // this.dispatchEvent(new CustomEvent('closePanel', {
        //     composed: true,
        //     bubbles: true
        // }));

    }
    success(request) {
        document.querySelector('#toast').show("Sent successfully.");

        this.set('_email.subject', "");
        this.set('_email.message', "");
    }
    ajaxerror() {
        document.querySelector('#toast').show("Error sending email.");
    }
    titlecolor() {
        this.headercolor = "#406aad";

        let elem = this.shadowRoot.getElementById('mainbutton')
        elem.style.setProperty('background-color', this.headercolor)


    }

    ready() {
        super.ready()
    }
    render({}) {

        return html`

<style include="iron-flex iron-flex-alignment">

              /*  //////////////FLEX BOX/////////  */

                .layout.horizontal,
          .layout.vertical {
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
          }

          .layout.inline {
            display: -ms-inline-flexbox;
            display: -webkit-inline-flex;
            display: inline-flex;
          }

          .layout.horizontal {
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
          }

          .layout.vertical {
            -ms-flex-direction: column;
            -webkit-flex-direction: column;
            flex-direction: column;
          }

          .layout.wrap {
            -ms-flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
          }

          .layout.no-wrap {
            -ms-flex-wrap: nowrap;
            -webkit-flex-wrap: nowrap;
            flex-wrap: nowrap;
          }

          .layout.center,
          .layout.center-center {
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }

          .layout.center-justified,
          .layout.center-center {
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
          }

          .flex {
            -ms-flex: 1 1 0.000000001px;
            -webkit-flex: 1;
            flex: 1;
            -webkit-flex-basis: 0.000000001px;
            flex-basis: 0.000000001px;
          }

          .flex-auto {
            -ms-flex: 1 1 auto;
            -webkit-flex: 1 1 auto;
            flex: 1 1 auto;
          }

          .flex-none {
            -ms-flex: none;
            -webkit-flex: none;
            flex: none;
          }

          .layout.start {
            -ms-flex-align: start;
            -webkit-align-items: flex-start;
            align-items: flex-start;
          }

          .layout.center,
          .layout.center-center {
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }

          .layout.end {
            -ms-flex-align: end;
            -webkit-align-items: flex-end;
            align-items: flex-end;
          }

          .layout.baseline {
            -ms-flex-align: baseline;
            -webkit-align-items: baseline;
            align-items: baseline;
          }

          /**
           * Alignment in main axis.
           */
          .layout.start-justified {
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
          }

          .layout.center-justified,
          .layout.center-center {
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
          }

          .layout.end-justified {
            -ms-flex-pack: end;
            -webkit-justify-content: flex-end;
            justify-content: flex-end;
          }

          .layout.around-justified {
            -ms-flex-pack: distribute;
            -webkit-justify-content: space-around;
            justify-content: space-around;
          }

          .layout.justified {
            -ms-flex-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between;
          }

         
          /**
           * multi-line alignment in main axis.
           */
          .layout.start-aligned {
            -ms-flex-line-pack: start;  /* IE10 */
            -ms-align-content: flex-start;
            -webkit-align-content: flex-start;
            align-content: flex-start;
          }

          .layout.end-aligned {
            -ms-flex-line-pack: end;  /* IE10 */
            -ms-align-content: flex-end;
            -webkit-align-content: flex-end;
            align-content: flex-end;
          }

          .layout.center-aligned {
            -ms-flex-line-pack: center;  /* IE10 */
            -ms-align-content: center;
            -webkit-align-content: center;
            align-content: center;
          }

          .layout.between-aligned {
            -ms-flex-line-pack: justify;  /* IE10 */
            -ms-align-content: space-between;
            -webkit-align-content: space-between;
            align-content: space-between;
          }

          .layout.around-aligned {
            -ms-flex-line-pack: distribute;  /* IE10 */
            -ms-align-content: space-around;
            -webkit-align-content: space-around;
            align-content: space-around;
          }

          /* ////////////////END FLEXBOX /////////////// */


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
                text-align: left;
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
        <div on-tap=${(e)=>this.clearContacts()}>
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
                        <defie-emailfilter style="margin-top: 14px;" id="emailfilter"></defie-emailfilter>
                        <defie-emailfiltercc style="margin-top: 3px;" id="emailfiltercc"></defie-emailfiltercc>
                        <div></div>
                        <div class="my-content col-xs-3c messagefield">Subject:</div>
                        <div class="my-content col-xs-9a messagefield">
                                <input class="input" value="${this._email.subject}">
                        </div>
                        <div class=" my-content col-xs-3c messagefield">Message:</div>
                        <div class="my-content col-xs-9a messagefield">
                            <textarea class="input-textarea-edit" rows="3" id="emailmessage"></textarea>
                        </div>
                        <div style="clear: both;"></div>
                        <div class="my-content">
                            <div class="row files">
                                <div class="overflowtext" style="margin-bottom: 5px;">
                                    <paper-checkbox class="emailcheckbox" checked="${this._email.ispdf}"></paper-checkbox>
                                    <span id="pdftext"><span>${this.filename}</span>.pdf</span>
                                </div>
                                <div class="overflowtext">
                                    <paper-checkbox class="emailcheckbox" checked="${this._email.ishtml}"></paper-checkbox>
                                    <span id="htmltext"><span>${this.filename}</span>.html</span>
                                </div>
                            </div>
                            <div class="my-content"></div>
                            <div class="button-row text-right">
                                <paper-button id="mainbutton" class="emailbutton main-button" on-click=${this.send.bind(this)} raised>Send</paper-button>
                                <paper-button class="emailbutton" on-click=${this.cancel.bind(this)} raised>Cancel</paper-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <iron-ajax id="ajax" method="POST" on-response="success" on-error="ajaxerror"></iron-ajax>
        <iron-ajax id="ajaxSave" method="PUT" handle-as="json" on-response="responseActionEdit" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxSaveC" method="POST" handle-as="json" on-response="responseAction" on-error="showError" content-type="application/json"></iron-ajax>`
    }
}


customElements.define('send-email', SendEmail)