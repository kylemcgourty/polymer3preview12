import {Element as PolymerElement}
  from '../../node_modules/@polymer/polymer/polymer-element.js'



    import './defie-qalist.js'
    import './add-procedure.js'
    import './sort-panel.js'
    import './customer-sidepanel.js'
    import './module-header.js'
    import './module-abinfo.js'








    import '../../node_modules/@polymer/polymer/lib/legacy/legacy-element-mixin.js'


    
   export class QACheckListViewElement extends PolymerElement {
        static get template() {
            return ` <style include="shared-styles iron-flex iron-flex-alignment">
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

              .card {
        margin: 24px;
        padding: 16px;
        /*color: #757575;*/
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .spacer {
        margin-top: 24px;
        clear: both;
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

        .unit:nth-child(2) {
            background-color: var(--title-background-normal);
            color: black;
            /*height: 65px;*/
            font-size: 17px;
            /*min-height: 54px;*/
            line-height: 2.5;
            border-bottom: none
        }

        .unit:nth-child(2) .data {
            background-color: var(--title-background-normal);
            color: white;
            height: 38px;
            font-size: 17px;
            min-height: 38px;
            line-height: 2.5;
            box-shadow: none;
            margin-top: 0px;
        }

        .unit:nth-child(2) .options {
            background-color: var(--title-background-normal);
            color: white;
            height: 35px;
            font-size: 17px;
            min-height: 35px;
            line-height: 2.5;
            margin-top: 0px;
        }

        .unit:nth-child(2) .actions-header {
            display: block;
            background-color: var(--title-background-normal);
            color: white;
            height: 35px;
            font-size: 17px;
            min-height: 35px;
            line-height: 2.3;
            box-shadow: none;
            margin-top: 0px;
            margin: auto;
        }

        .unit:nth-child(2) .opt1,
        .unit:nth-child(2) .icon1,
        .unit:nth-child(2) .icon2 {
            display: none;
        }
        /*   .unit:nth-child(2) .opt1 {
            width: 73px;
        }*/

        .unit:nth-child(2) .procedure-icons {
            color: white;
        }

        .unit:nth-child(2) .tax {
            display: none
        }

        .unit:nth-child(2) .bd6-1head {
            display: inline-block;
        }

        .unit:nth-child(2) .input1 {
            outline: none;
        }

        .bd6-1head {
            display: none;
        }

        .unit:nth-child(2) .input1 {
            background-color: var(--title-background-normal);
            height: 38px;
            font-size: 18px;
            min-height: 38px;
            line-height: 2.5;
            pointer-events: none;
            text-align: center;
            color: white
        }

        .unit:nth-child(2) .function-icons {
            display: none;
        }

        .actions-header {
            display: none;
        }

        [class$="-1head"] {
            display: none;
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
           min-height: 5000px;
        }

        .my-content {
            display: block;
            min-height: 24px;
            position: relative;
            word-wrap: break-word;
        }

        .title {
            color: black;
            font-size: 21px;
            font-weight: 400;
            border-bottom: 1px solid #f50057;
        }

        .subtitle {
            font-size: 15px;
            font-weight: 400;
            color: #000;
            margin-left: 36px;
        }

        .title-margin {
            margin: 17px 0;
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
        }

        .right-subicon {
            position: absolute;
            right: 0px;
            bottom: 0px;
            z-index: 0;
        }

        .right-icon {
            position: absolute;
            right: 0;
            bottom: 1px;
            z-index: 0;
        }

        .right-icon1 {
            position: absolute;
            right: 0;
            bottom: 0px;
            z-index: 0;
        }

        .iron-bottom-positon {}

        .bankiron-bottom-positon {
            bottom: 4px;
        }

        .iron-bottom-padding {}

        .days {
            display: inline-block;
            width: 35px;
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

        .email {
            height: 24px;
            text-align: right;
            padding-right: 16px;
        }

        .table-row {
            line-height: 15px;
            border-bottom: 1px solid #dbdbdb;
            background-color: white;
            width: 100%;
            font-size: 13px;
            font-weight: 500;
        }

        .last-column {}

        .fourfontsize {
            font-size: 21px;
        }

        .button-row {
            margin-right: 8px;
            margin-bottom: 32px;
        }

        .bottom {
            min-height: 48px;
            position: relative;
            bottom: 0px;
        }

        .listfont {
            font-size: 13px;
        }

        .listfontdesc {
            font-size: 13px;
            height: 18px;
            overflow: hidden;
        }

        .table-right-padding {}

        .table-width {
            min-width: 205px;
        }

        .withinboundary {
            width: 100%;
        }

        #Handling {
            --paper-input-container-label: {
                font-size: 13px!important;
            }
            ;
        }

         :host {
            --paper-input-container-label: 13px;
        }

        .specialpadding {
            padding-right: 9px;
        }

        .partlist {
            padding-top: 16px;
            padding-left: 0%;
            font-size: 16px;
            font-weight: 500;
        }

        .logout {
            float: right;
            font-size: 14px;
            line-height: 2;
        }

        .removeborder {
            border: none;
            background-color: white;
        }

        .tax {
            --paper-checkbox-size: 15px;
            padding-left: 6px;
        }

        #list {
            width: 100%;
        }

        .data-container {
            /* white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            background-color: #eee;
            margin-top: 6px;*/
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
            overflow: hidden;
            height: 39px;
            /*     height: 67px;
            overflow: hidden;*/
        }

        .bod {
            height: 100%;
            background-color: white;
        }

        .icon {
            margin-left: 14px;
            margin-right: 14px;
            margin: auto;
        }

        .rm-icon-mid {
            padding-left: 14px;
            padding-right: 0px;
            margin: auto;
        }

        .mobile-opts {
            display: none;
        }

        .core {
            height: auto;
            width: 100%;
        }

        .icon1,
        .icon2 {
            margin-top: -5px;
        }

        .i-input {
            /*padding-right: 4px;*/
            width: 100%;
            box-sizing: border-box;
            padding-right: 3px;
            padding-left: 3px;
        }

        .bd9-2 .input1 {
            padding-right: 2px;
            box-sizing: border-box;
        }

        #showSN {
            display: block
        }

        div[class^="group"] {
            padding-left: 9px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            height: 29px;
            flex-shrink: 0;
            overflow: hidden;
            height: 37px;
        }

        div[class^="box"] {
            flex-shrink: 0;
            width: 100%;
            height: 37px;
            /*width: 100%;*/
            /*overflow: hidden;*/
        }
        /*    div[class^="bd"]:nth-child(3) {
            padding-left: 6px;
            height: 29px;
        }
        */

        div[class^="bd"] {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 2;
            height: 29px;
            flex-shrink: 0;
            box-sizing: border-box;
            height: 37px;
            /*overflow: hidden;*/
        }

        div[class^="bd1-m"] {
            width: 0px;
            height: 0px;
            min-width: 0px;
        }

        .noshrink {
            flex-shrink: 0
        }

        .sn-container {
            display: none!important;
        }

        #showSN {
            display: block!important;
        }

        .opt1 {
            height: 30px;
            box-sizing: border-box;
            line-height: 2;
            padding-left: 10px;
        }

        .options {
            min-width: 94px;
            width: 9%;
            flex-shrink: none;
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            height: 33px;
            flex-shrink: 0;
        }

        .data {
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            height: 33px;
            width: 100%;
        }

        .procedure-icons {
            color: black;
        }

        .function-icons {
            color: black;
            margin-top: -6px;
        }

        [data-procedure="procedure-title"].procedure-icons {
            display: none;
        }

        [data-procedure="procedure-title"].function-icons {
            display: block;
        }

        .group1 [data-procedure="procedure-title"] .input1 {
            color: blue;
        }

        [data-procedure="procedure-title"] .input1 {
            border: none!important;
        }

        [data-procedure="function"].procedure-icons {
            display: none;
        }

        [data-procedure="function"].function-icons {
            display: none;
        }

        .group4 .input1,
        .group5 .input1,
        .group1 .input1,
        .group8 .input1,
        .group3 .input1,
        .group7 .input1 {
            border: 1px solid grey;
            border-radius: 1px;
        }

        .unit:nth-child(2) .input1 {
            border: none!important;
        }

        .group1 {
            min-width: 150px;
            width: 7%;
            flex-grow: 1;
            padding-right: 6px!important;
        }

        .group2 {
            min-width: 102px;
            width: 5.8%;
            flex-grow: 1;
        }

        .group3 {
            width: 9%;
            flex-grow: 1;
            min-width: 250px;
        }

        .group4 {
            min-width: 150px;
            width: 7%;
            flex-grow: 1;
        }

        .group5 {
            min-width: 150px;
            width: 7%;
            flex-grow: 1;
            padding-right: 6px;
        }

        .group6 {
            width: 7%;
            flex-grow: 1;
            min-width: 70px;
            box-sizing: border-box;
        }

        .group7 {
            width: 7%;
            flex-grow: 1;
            min-width: 102px;
        }

        .group8 {
            width: 7%;
            flex-grow: 1;
            min-width: 120px;
        }

        .group9 {
            width: 7%;
            flex-grow: 1;
            min-width: 120px;
        }

        .bd1-1 {
            min-width: 132px;
            width: 43%;
        }

        .bd1-2 {
            min-width: 110px;
            width: 100%;
            padding-left: 6px;
        }

        .bd2-1 {
            min-width: 71px;
            width: 100%;
        }

        .bd2-2 {
            min-width: 104px;
            width: 100%;
        }

        .bd2-mob {
            min-width: 0px;
            width: 100%;
        }

        .bd3-1 {
            min-width: 71px;
            width: 100%;
        }

        .bd3-2 {
            min-width: 104px;
            width: 100%;
        }

        .bd4-1 {
            min-width: 100%;
            width: 100%;
            padding-left: 23px;
            box-sizing: border-box;
        }

        .bd4-2 {
            min-width: 140px;
            width: 100%;
        }

        .bd4-head {
            min-width: 46px;
            width: 100%;
        }

        .bd5-1 {
            min-width: 71px;
            width: 100%;
        }

        .bd5-2 {
            min-width: 82px;
            width: 100%;
        }

        .bd6-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
            padding-left: 40%;
        }

        .bd7-2 {
            min-width: 70px;
            width: 100%;
            box-sizing: border-box;
            padding-right: 5px;
        }

        .bd8-2,
        .bd9-2 {
            min-width: 120px;
            width: 100%;
        }

        .bd8-2 {}
        /* .bd6-1 {
            width: 45px;
        }
        
        .bd6-2 {
            width: 90px;
            box-sizing: border-box!important;
            padding-left: 5px;
        }
        
        .bd6-3 {
            width: 144px;
        }
        
        .bd7-1 {
            width: 71px;
        }
        
        .bd7-2 {
            width: 47%;
            min-width: 104px;
        }
        
        .bd7-3 {
            padding-left: 18px!important;
            width: 94px;
        }
        
        .bd7-4 {
            width: 47%;
            min-width: 104px;
        }*/

        .ilrow {}

        .mobi-icon {
            height: 0px;
            padding: 0;
            width: 0px;
        }

        .bd2-2 .input1 {
            outline: #545659 auto 5px;
            outline-offset: -2px;
        }

        .input1 {
            /*text-align: right;*/
            border: none;
            background-color: #eee;
            width: 100%;
            /* box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5); */
            color: black;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }

        .dot {
            /*border-bottom: 1px dotted #000;*/
            overflow: auto;
            height: 40px;
        }

        .statusbutton {
            --paper-radio-button-label-spacing: 5px;
        }

        .desktop-only {
            display: block;
        }

        .mobile-only {
            display: none;
        }

        .procedures-desk {
            display: block;
        }

        .procedures-mobile {
            display: none
        }

        .historyicon {
            float: right;
        }

        .remover {
            display: none
        }
        @media (max-width: 1843px) {
            .procedures-desk {
                display: none;
            }
            .procedures-mobile {
                display: block
            }
            .desktop-only {
                display: none!important;
            }
            .mobile-only {
                display: block!important;
            }
            .unit:nth-child(2) {
                display: none
            }
            .mobileheader {
                background-color: var(--title-background-normal);
                color: white;
                height: 38px;
                font-size: 19px;
                min-height: 38px;
                line-height: 2;
                pointer-events: none;
                display: block;
                text-align: center;
            }
            [class$="-1head"],
            [class$="-3head"] {
                display: inline-block;
                width: 31%;
            }
            .input1 {
                text-align: left
            }
            [class^="group"] {
                width: 230px;
                max-width: 230px;
                min-width: 230px;
                box-sizing: border-box;
            }
            .i-input {
                width: 64%;
            }
             .input1 {
                width: 98%;
                margin: 2px;
            }
            .core,
            .data,
            .data-container,
            .options {
                height: auto;
            }
            .bd4-1 {
                padding-left: 0px;
            }
            .opt1,
            .iconholder {
                margin: auto;
            }
            .bd8-2 {
                padding-right: 0px;
            }
            .bd6-1head {
                display: inline-block!important;
            }
            .bd6-2 {
                padding-left: 0px;
            }
            .bd6-2 .i-input {
                padding-left: 0px!important;
            }
            .bd6-2 .input1 {
                font-size: 14px;
            }
            .bd6-2 {
                padding-left: 0px;
            }
            .bd4-1 .i-input {
                width: 100%!important;
                padding-left: 0px!important;
            }
            .group2 .i-input,
            .group3 .i-input,
            .group5 .i-input,
            .group7 .i-input,
            .group8 .i-input,
            .group9 .i-input {
                margin-left: -4px;
            }
            .tax {
                padding-left: 0px;
            }
            .mobile-list {
                flex: 1 1 auto;
            }
            .procedures-title {
                /*color: #ad5f27;*/
                font-size: 19px;
                width: 92%;
                line-height: 2;
                padding-left: 10px;
                box-sizing: border-box;
            }
            .title-border {
                border: 1px solid black;
                border-radius: 3px;
                background-color: var(--title-background-normal);
            }
            .mobile-functions {
                height: 28px;
                width: 50%;
                line-height: 1.9;
            }
            .mobile-container {
                background-color: #eee;
                margin-top: 8px;
                overflow: hidden;
                width: 100%;
                box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
                height: 39px;
            }
            .mobile-functions .input1 {
                border: 1px solid grey;
                border-radius: 3px;
                height: 24px;
                line-height: 1;
                box-sizing: border-box;
                padding-left: 4px;
            }
            .mobile-functions .i-input {
                width: 100%!important;
                line-height: 2.6;
            }
            [data-procedure="procedure-title"].mobile-functions .input1 {
                border: none!important;
            }
            [data-procedure="procedure-title"].mobile-proceduretitle .input1 {
                color: #dd9e56;
            }
            [data-procedure="procedure-title"] .i-input {
                /*width: 93%;*/
            }
            .procedure-icons {
                color: white;
                margin-left: 60px
            }
            .mobiletitle {
                font-size: 18px;
                color: white;
                margin-left: 7px;
                line-height: 2
            }
            .function-icons {
                float: right;
            }
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
            #grid1 {
                overflow: auto
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
            .button-row {
                padding-right: 8px;
            }
            .right-icon {
                position: absolute;
                right: 0;
                bottom: 8px;
                z-index: 0;
            }
            .logout {
                float: right;
                font-size: 14px;
                line-height: 2;
                margin-top: 15%;
            }
            #grid1 {
                overflow: auto
            }
        }

        @media (max-width: 479px) {
            .procedurestitle {
                width: 75%;
            }
            .mobiletotal {
                width: 68%;
                float: right;
            }
            .search-row {
                margin-left: 0px;
                margin-top: 0px;
                margin-bottom: 0px;
                height: 48px;
                position: relative;
                width: 50%;
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
                width: 74vw;
            }
            .bd1-1 {
                width: 34vw;
            }
            .bd1-mob1 {
                width: 16vw!important;
            }
            .bd1-mob2 {
                text-align: right;
                width: 24vw!important;
            }
            .bd2-1 {
                width: 24vw;
            }
            .bd2-2 {
                width: 50vw;
            }
            .bd3-1 {
                width: 24vw;
            }
            .bd3-2 {
                width: 50vw;
            }
            .bd6-1 {
                width: 17vw;
            }
            .bd6-2 {
                width: 31vw;
            }
            .bd6-3 {
                text-align: right;
                width: 26vw;
            }
            .bd7-1 {
                width: 16vw;
            }
            .bd7-2 {
                width: 16vw;
                text-align: right;
                box-sizing: border-box!important;
                padding-right: 2%;
            }
            .bd7-3 {
                width: 22vw;
                padding-left: 0!important;
            }
            .bd7-4 {
                width: 20vw;
            }
            .i-input {
                width: 100%
            }
            .icon1,
            .icon2 {
                margin-left: 3vw;
            }
            div[class^="bd8-"] {
                width: 74vw;
            }
            .bd2-2,
            .bd3-2,
            .bd4-1,
            .bd6-3,
            .bd7-4,
            .bd8-1,
            .bd8-2,
            .bd1-mob2 {
                padding-right: 1.5vw;
                box-sizing: border-box!important;
            }
            .data {
                height: 100%;
                overflow: hidden;
                width: 100%;
            }
            .ilrow:nth-child(1) .core {
                margin-top: 0px;
            }
            #expanded {
                height: 248px;
            }
            .group5 {
                min-width: 0px!important;
                width: 0px!important;
                height: 0px!important;
            }
            .options {
                line-height: 2.5;
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
                background-color: #fff;
                min-height: 2700px;
            }
            .opt1 {
                padding-left: 1vw;
            }
            .data-container {
                height: 38px;
                overflow: hidden;
            }
            .options {
                height: 100%;
                overflow: hidden;
            }
            .dot {
                height: 30px;
            }
        }
        </style>
        <paper-drawer-panel id="drawer" drawer-Width="[[drawerwidth]]" force-narrow="true" right-drawer disable-edge-swipe style="overflow-y: scroll;">
            <paper-header-panel slot="main">
                <div id="top"></div>
                <app-header condenses reveals fixed effects="waterfall blend-background">
                    <app-toolbar class="middle middle-container">
                        <paper-icon-button id="paperToggle" icon="menu" drawer-toggle on-tap="toggleLeft"></paper-icon-button>
                        <div class="app-name" title> QA Check List </div>
                        <logout-header></logout-header>
                    </app-toolbar>
                </app-header>
                <app-location route="{{route}}"></app-location>
                <app-route route="{{route}}"></app-route>
                <confirm-box id="deletebox" title="Alert" text="Are you sure you want to delete this item ?"></confirm-box>
                <section class="new lightgrey-padding  card">
                    <div class="lightgrey-padding-inner">
                        <div class="row">
                            <div class="col-xs-12">
                                <module-header on-moreactions="changepanel" id="moduleheader" pageid="" pageidtext="QA List id:" pagename="QA Check List" date="{{convertDate3()}}" viewpage="true"></module-header>

                            </div>
                        </div>
                        <div class="row">
                            <div>
                                <module-abinfo id="abinfo"></module-abinfo>
                            </div>
                        </div>
                        <div class="spacer row">
                            <div class="my-content">
                            </div>
                        </div>
                        <div style="clear: both;"></div>
                        <section class="list part-number-sub-list">
                            <defie-qalist id="qalist"></defie-qalist>
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
                        
                    </div>
                </section>
                <!-- <add-function id="function"></add-function> -->
            </paper-header-panel>
            <paper-header-panel slot="drawer">
                 <div hidden="{{showcustomersidepanel}}">
                    <customer-sidepanel id="showcustomer" headercolor="[[headercolor]]"></customer-sidepanel>
                </div>
                <div hidden="{{addprocedure}}">
                    <add-procedure admin="{{admin}}" id="add"></add-procedure>
                </div>
                <div hidden="{{editprocedure}}">
                    <edit-procedure fromedit="{{data}}" id="edit"></edit-procedure>
                </div>
                <!-- <div hidden="{{addfunction}}"> -->
                <template is="dom-if" if="{{!addfunction}}">
                    <add-function id="function"></add-function>
                    <!-- </div> -->
                </template>
                <div hidden="{{adminsignin}}">
                    <admin-signin id="signin" admin="{{admin}}"></admin-signin>
                </div>
                <div hidden="{{showsortpanel}}">
                    <sort-panel id="sort"></sort-panel>
                </div>
                <div hidden="{{historypanel}}">
                    <procedureshistory-panel record="{{procedures}}" latestidver="{{latestidver}}" toggle="{{toggle}}" id="history"></procedureshistory-panel>
                </div>
            </paper-header-panel>
        </paper-drawer-panel>
        <iron-media-query query="(max-width: 992px)" query-matches="{{queryMatches}}"></iron-media-query>
        <iron-media-query query="(max-width: 1250px)" query-matches="{{queryMatchesShrink}}"></iron-media-query>
        <iron-media-query query="(max-width: 767px)" query-matches="{{queryMatchesShrinkMax}}"></iron-media-query>
        <iron-ajax method="PUT" id="ajaxSave" handle-as="json" on-response="response" on-error="responseError" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxGet" method="GET" handle-as="json" on-response="receiveProcedure" content-type="application/json"></iron-ajax>`
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
                        ainfo4: "showprocedurelist",
                        ainfo5: "showqachecklist",
                        ainfo6: "showbarcodelist",
                        ainfo7: "showshippinglabellist"
                    }
                }
            },
            
            binfo: {
                type: Object,
                notify: true,
                value: function() {
                    return {
                        title: "Build Info",
                        info1: "Product No.",
                        info2: "Part id",
                        info3: "Model",
                        info4: "Description",
                        info5: "Version",
                        info6: "ECO",
                        info7: "Deviation"
                    }
                }
            },
                drawerwidth: {
                    type: String,
                    value: '320px'
                },
                headercolor: {
                    type: String,
                    reflectToAttribute: true,
                    notify: true,
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

                panelprops: {
                    type: Array,
                    notify: true,
                    value: function() {
                        return [
                            'addprocedure',
                            'editprocedure',
                            'adminsignin',
                            'showsortpanel',
                            'addfunction'
                        ];
                    }
                },

                model: {
                    type: Object,
                    reflectToAttribute: true,
                    notify: true,
                },

                admin: {
                    type: String,
                    value: "superuser"
                },

                   procedures: {
                    type: Object,
                    reflectToAttribute: true,
                    value: function () {
                        return {}
                    }
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

        start(returnRoute, view, saveURL, editbutton, bomConfig, woConfig){
                

                bomConfig ? bomConfig : bomConfig = "BOM/BO id"
                woConfig ? woConfig : woConfig = "WO id"

               this.ainfo= {
             
                 
                        title: "Product Info",
                        info1: "Company",
                        info2: "Company Id",
                        info3: "QA Check List",
                        info4: "Qty",
                        info5: "Serial Number",
                         info6: bomConfig,
                        info7: woConfig,
                    }
           

                this.view = view
                this.setmoduleheader()
                this.setModel(this.model)
                this.setBillshipto();
                this.startview = undefined
                this.returnRoute = returnRoute
                this.editbutton = editbutton
                this.scrollTop()



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

         edit(){

            console.log('route', this.route.path)
            let editRoute = this.route.path.replace('view', 'edit')

            this.set('route.path', editRoute)

        }


        setmoduleheader() {
            
            this.$.moduleheader.open(this.model.settings, {pagename: "QA Check List", pageidtext: "QA List id:", pageid: this.model.qalistidver, date: this.convertDate3(this.model.createdat)})
        }


        setBillshipto(model) {
       


        this.set('modulebillshipto.ainfovalues.ainfo1_value', this.model.brand)
        this.set('modulebillshipto.ainfovalues.ainfo2_value', this.model.brandidver)
        this.set('modulebillshipto.ainfovalues.ainfo3_value', this.model.qaname)
        this.set('modulebillshipto.ainfovalues.ainfo4_value', this.model.qty)
        this.set('modulebillshipto.ainfovalues.ainfo5_value', this.model.serialnumber)
        this.set('modulebillshipto.ainfovalues.ainfo6_value', this.model.bomboidver)
        this.set('modulebillshipto.ainfovalues.ainfo7_value', this.model.woidver)



        this.set('modulebillshipto.binfovalues.binfo1_value', this.model.mfgpn)
        this.set('modulebillshipto.binfovalues.binfo2_value', this.model.partidver)
        this.set('modulebillshipto.binfovalues.binfo3_value', this.model.model)
        this.set('modulebillshipto.binfovalues.binfo4_value', this.model.description)
        this.set('modulebillshipto.binfovalues.binfo5_value', this.model.version)
        this.set('modulebillshipto.binfovalues.binfo6_value', this.model.eco)
        this.set('modulebillshipto.binfovalues.binfo7_value', this.model.deviation)


        this.$.abinfo.open(this.modulebillshipto, this.disabledinput, this.displaysearch, this.searchid, this.ainfo, this.binfo)

    }


    cancel() {
        this.set('route.path', this.returnRoute)
    }


        setModel(model) {
            if (model) {
                var items = [];
                items.unshift({
                    procedures: "Functions",
                    pass: "Pass | Fail",
                    issue: "Issue",
                    resolution: "Resolution",
                    replacement: "Replacement",
                    qa: "QA",
                    signoff: "Sign Off"

                })

                items = items.concat(model.qalist)
                this.set('data', items);

                this.$.qalist.open(this.data, "#db8002", undefined, this.view)


            }


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


    save() {

        this.convertModule()


        let data = this.$.qalist.retrieveData().slice(1)

        data.forEach(function(val, index) {
            data[index].lineid = index
        })

        this.model.qalist = data

        this.model.qty = Number(this.model.qty)




        let ct = sessionStorage.getItem("CUSTOMTOKEN")
        this.$.ajaxSave.headers['CustomToken'] = ct;
        this.$.ajaxSave.url = this.saveURL
        this.$.ajaxSave.body = JSON.stringify(this.model);
        this.$.ajaxSave.generateRequest();
    }

    response(request) {
        



            document.querySelector('#toast').text = 'Saved successfully.';
            document.querySelector('#toast').show();


        
            let viewRoute = this.route.path.replace('edit', 'view')

            this.set('route.path', viewRoute)


    }


      computeDisplay(val, item) {


        if (val === "procedure-title") {
            return true
        } else if (this.admin == "superuser") {
            return false
        } else {
            return true
        }

    }

    converter() {

        // this.set('mobiledata', this.data.slice(1))


        if (this.data.length == 1) {
            return
        }

        if (this.data.length > 0) {

            this.start = undefined

            this.set('mobiledata', [])
            let index = 1
            let bool = true

            while (bool) {

                if (this.data[index] == undefined) {


                    this.end = index;

                    this.converterHelper()

                    this.start = undefined

                    bool = false;
                    break;
                }

                if (!this.start && this.data[index].title == "procedure-title") {

                    this.start = index
                    index = index + 1
                    continue;

                }

                if (this.start && this.data[index].title == "procedure-title") {


                    this.end = index

                    this.converterHelper()

                    this.start = undefined

                    continue;
                }


                index = index + 1

            }

        }

    }

    converterHelper() {

        let temp = []


        let result = this.data.slice(this.start, this.end)


        let group = []


        group = temp.concat(JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(result)))



        let length = group.length

        let l1 = 0
        let l2 = length / 6
        let l3 = 2 * length / 6
        let l4 = 3 * length / 6
        let l5 = 4 * length / 6
        let l6 = 5 * length / 6



        group.forEach(function(item, index) {

            if (index < l2) {
                item.columndata = item.pass
            } else if (l2 <= index < l3) {
                item.columndata = item.issue
            } else if (l3 <= index < l4) {
                item.columndata = item.resolution
            } else if (l4 <= index < l5) {
                item.columndata = item.replacement
            } else if (l5 <= index < l6) {
                item.columndata = item.qa
            } else if (l6 <= index) {
                item.columndata = item.signoff
            }


        })

        group[l1].columndata = "Pass | Fail"
        group[l1].title = "procedure-title"

        group[l2].columndata = "Issues"
        group[l2].title = "procedure-title"

        group[l3].columndata = "Resolution"
        group[l3].title = "procedure-title"

        group[l4].columndata = "Replacement"
        group[l4].title = "procedure-title"

        group[l5].columndata = "QA"
        group[l5].title = "procedure-title"

        group[l6].columndata = "Sign Off"
        group[l6].title = "procedure-title"


        this.mobiledata = this.mobiledata.concat(group)



    }




    newEdits(e) {

        this.set('data', e.detail.newmodel)
    }


    addFunctionMobile(item, qadata) {


        if (item) {


            let id = item.titleid


            var index = 0
            let bool = true


            while (bool) {

                if (qadata[index] == undefined) {
                    return
                }


                if (id === qadata[index].titleid) {

                    break

                }

                index = index + 1

            }

            this.insertionIndex = index


            let data = [];


            data.push(qadata[index])

            index = index + 1

            while (bool) {

                if (qadata[index] == undefined || qadata[index].title == "procedure-title") {
                    break;
                }

                data.push(qadata[index])

                index = index + 1
            }


            this.adjustPanelProps(this.panelprops, "addprocedure")

            setTimeout(function() {
                this.$.drawer.togglePanel();

                this.shadowRoot.getElementById('add').openfunction(JSON.parse(JSON.stringify(data)), true)

            }.bind(this), 200)

        }

    }

    mobileFunctions(data) {


        let id = data[0].titleid


        let bool = true

        let i = 0;

        while (bool) {

            if (this.qaData[i] == undefined) {
                break;
            }

            if (this.qaData[i].titleid == id) {



                let index = i
                for (var j = 1; j < data.length; j++) {


                    if (this.qaData[index + j] != undefined && this.qaData[index + j].title != "procedure-title") {
                        this.qaData[index + j].procedures = data[j].procedures
                    } else {
                        this.qaData.splice(index + j, 0, data[j])
                    }



                }


            }
            ++i
        }




        this.$.qalist.open(this.qaData, "#db8002", true)

    }
    addFunction(item) {


        if (window.screen.width < 768) {
            this.drawerwidth = "320px"
        } else {
            this.drawerwidth = "640px"
        }


        let index = item.id
        this.insertionIndex = index
        let data = []

        data.push(this.qaData[index])

            ++index

        let bool = true


        while (bool) {

            if (this.qaData[index] == undefined || this.qaData[index].title == "procedure-title") {
                break;
            }

            data.push(this.qaData[index])

            index = index + 1

        }
        this.adjustPanelProps(this.panelprops, "addprocedure")

        setTimeout(function() {
            this.$.drawer.togglePanel();

            this.shadowRoot.getElementById('add').openfunction(JSON.parse(JSON.stringify(data)))

        }.bind(this), 200)

        // this.$.function.open(data)

    }







    addProcedure(data) {

        if (window.screen.width < 768) {
            this.drawerwidth = "320px"
        } else {
            this.drawerwidth = "640px"
        }

        this.manage = "addprocedure"

        this.drawerwidth = "620px"
        this.adjustPanelProps(this.panelprops, "addprocedure")
        this.$.add.open(data)

        this.$.drawer.togglePanel();
    }




    history(e) {



        if (window.screen.width < 768) {
            this.drawerwidth = "320px"
        } else {
            this.drawerwidth = "640px"
        }

        this.adjustPanelProps(this.panelprops, "historypanel")

        let url1 = "/api/bom/procedures/history/" + this.model.bomid + "/" + this.model.procedureid


        this.$.history.open(this.procedures, url1)


        this.$.drawer.togglePanel()


    }

    convertModule() {

        this.modulebillshipto = this.$.abinfo.returnModel()

        this.set('model.brand', this.modulebillshipto.ainfovalues.ainfo1_value)
        this.set('model.brandidver', this.modulebillshipto.ainfovalues.ainfo2_value.toString())
        this.set('model.qaname', this.modulebillshipto.ainfovalues.ainfo3_value)
        this.set('model.qty', Number(this.modulebillshipto.ainfovalues.ainfo4_value))
        this.set('model.serialnumber', String(this.modulebillshipto.ainfovalues.ainfo5_value))
        this.set('model.bomboidver', this.modulebillshipto.ainfovalues.ainfo6_value)
        this.set('model.woidver', this.modulebillshipto.ainfovalues.ainfo7_value)


        this.set('model.mfgpn', this.modulebillshipto.binfovalues.binfo1_value)
        this.set('model.partidver', this.modulebillshipto.binfovalues.binfo2_value)
        this.set('model.model', this.modulebillshipto.binfovalues.binfo3_value)
        this.set('model.description', this.modulebillshipto.binfovalues.binfo4_value)
        this.set('model.version', this.modulebillshipto.binfovalues.binfo5_value)
        this.set('model.eco', this.modulebillshipto.binfovalues.binfo6_value)
        this.set('model.deviation', this.modulebillshipto.binfovalues.binfo7_value)


        this.set('model.total', float(this.model.total))



    }

  

    chooseCustomer() {
        window.innerWidth < 768 ? this.drawerwidth = "320px" : this.drawerwidth = "640px"
        this.adjustPanelProps(this.panelprops, "showcustomersidepanel");
        this.$.showcustomer.open(this.model.settings.id);
        this.$.drawer.togglePanel();
    }


    adjustPanelProps(props) {
        var args = Array.prototype.slice.call(arguments, 1);
        var self = this;

        props.forEach(function(item) {
            var newVal = !args.includes(item);
            self.set(item, newVal);
        });
    }


    close() {
        this.$.drawer.closeDrawer();
    }



    scrollTop() {
        this.latestidver = ""

        this.shadowRoot.getElementById('top').scrollIntoView()

    }

    resizeQAList(e) {

        if (this.route.path.includes("qachecklists/edit")) {
            this.$.qalist.resize(e)
        }
    }


    setPanelSize() {
        if (window.screen.width < 768) {
            this.drawerwidth = "320px"
        } else {
            this.drawerwidth = "640px"
        }
    }






    ready() {
        super.ready();

        this.titlecolor();


        window.addEventListener('resize', (e) => { this.resizeQAList(e) }, true)


        this.shadowRoot.addEventListener('sendcustomerlist', e => {
            this.adminsignin = true
            this.adminstatus = true
            window.innerWidth < 768 ? this.drawerwidth = "320px" : this.drawerwidth = "640px"
            this.adjustPanelProps(this.panelprops, "showcustomersidepanel");
            this.$.showcustomer.open(this.model.settings.id);
            this.$.drawer.togglePanel();
        })



        this.shadowRoot.addEventListener('CustomerEvent', e => {
            let cust = e.detail.routeData
            this.set('model.brand', cust.companyname)
            this.set('model.brandid', cust.id)
            this.set('model.brandidver', cust.idver)

            this.modulebillshipto.ainfovalues.ainfo1_value = this.model.brand
            this.modulebillshipto.ainfovalues.ainfo2_value = this.model.brandidver

            this.$.abinfo.open(this.modulebillshipto, this.disabledinput, this.displaysearch, this.searchid, this.ainfo, this.binfo)


        });


        this.shadowRoot.addEventListener('closePanel', e => {
            this.close()
        })

        this.shadowRoot.addEventListener('addProcedure', e => {
            this.setPanelSize()

            this.addProcedure(e.detail.data)
        })

        this.shadowRoot.addEventListener('mobilefunctions', e => {

            this.mobileFunctions(e.detail.data)
        })

        this.shadowRoot.addEventListener('addFunction', e => {
            this.setPanelSize()
            this.qaData = e.detail.data
            this.addFunction(e.detail.item)
        })

        this.shadowRoot.addEventListener('addFunctionMobile', e => {
            this.setPanelSize()
            this.qaData = e.detail.data

            this.addFunctionMobile(e.detail.item, e.detail.data)
        })

        this.$.add.addEventListener('addprocedure', e => {
            this.close()
            this.newProcedure(e)
        })

        this.shadowRoot.addEventListener('update-table', e => {
            this.data = this.data.slice(0, 1)

            this.set('data', this.data.concat(e.detail.model))
            this.$.qalist.open(this.data, "#db8002")
            this.close()
        })

        this.$.edit.addEventListener('editprocedure', e => {
            this.close()
            this.newEdits(e)
        })

        this.shadowRoot.addEventListener('sorted', e => {

            let model = e.detail.model

            this.$.add.open1(model)



            let closeFirst = new Promise((resolve, reject) => {
                this.close();
                setTimeout(() => {
                    resolve()
                }, 500)
            })
            closeFirst.then(() => {

                if (window.screen.width < 768) {
                    this.drawerwidth = "320px"
                } else {
                    this.drawerwidth = "640px"
                }

                this.adjustPanelProps(this.panelprops, "addprocedure");
                this.$.drawer.togglePanel();
            })
        })

        this.shadowRoot.addEventListener('functions', e => {

            let newData = e.detail.data

            let first = this.qaData.slice(0, this.insertionIndex)
            let index = this.insertionIndex + 1
            let bool = true
            while (bool) {

                if (this.qaData[index] == undefined || this.qaData[index].title == "procedure-title") {
                    break;
                }

                index = index + 1
            }
            let second = this.qaData.slice(index)
            this.set('qaData', [])


            let len = first.length

            let len2 = len + newData.length


            var data = first.concat(newData, second)

            this.set('qaData', JSON.parse(JSON.stringify(data)))

            for (var i = len2 - 1; i >= len; i--) {

                this.splice('qaData', i, 1)

            }



            for (var i = len; i < len2; i++) {

                this.splice('qaData', i, 0, JSON.parse(JSON.stringify(data[i])))

            }

            this.$.qalist.open(this.qaData, "#db8002")



            this.close()
        })





        this.shadowRoot.addEventListener('openSort', e => {
            let closeFirst = new Promise((resolve, reject) => {
                this.close();
                setTimeout(() => {
                    resolve()
                }, 500)
            })
            closeFirst.then(() => {

                this.drawerwidth = "320px"
                let data = e.detail.data
                let index = e.detail.index
                this.manage = e.detail.service
                this.adjustPanelProps(this.panelprops, "showsortpanel");
                this.$.sort.open(data, index);
                this.$.drawer.togglePanel();
            })


        })

    }




    titlecolor() {

        this.headercolor = "#db8002"
        this.updateStyles({
            '--title-background-normal': this.headercolor,
            '--title-normal': 'white',
        });
    }

}
    customElements.define("qachecklist-viewelement", QACheckListViewElement);
