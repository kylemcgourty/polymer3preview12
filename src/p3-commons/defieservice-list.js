
       import {Element as PolymerElement}
    from '../../node_modules/@polymer/polymer/polymer-element.js' 
   
   export class DefieServiceList extends PolymerElement {

        static get template() {
            return `
               <style include="shared-styles iron-flex iron-flex-alignment">
         :host {
            display: block;
            --title-background-normal: black;
            --title-normal: white;
        }

        .unit:nth-child(2) {
            background-color: var(--title-background-normal);
            color: white;
            /*height: 65px;*/
            font-size: 16px;
            /*min-height: 54px;*/
            line-height: 2.5;
            border-bottom: none
        }

        .unit:nth-child(2) .data {
            background-color: var(--title-background-normal);
            color: white;
            height: 38px;
            font-size: 16px;
            min-height: 38px;
            line-height: 2.5;
            box-shadow: none;
            margin-top: 0px;
            height: 40px;
        }

        .unit:nth-child(2) .options {
            background-color: var(--title-background-normal);
            color: white;
            height: 35px;
            font-size: 16px;
            min-height: 35px;
            line-height: 2.5;
            margin-top: 0px;
        }

        .unit:nth-child(2) .actions-header {
            display: block;
            background-color: var(--title-background-normal);
            color: white;
            height: 35px;
            font-size: 16px;
            min-height: 35px;
            line-height: 2.3;
            box-shadow: none;
            margin-top: 0px;
            margin: auto;
        }

        .unit:nth-child(2) .data-container,
        .unit:nth-child(2) .container {
            height: 40px;
            margin-top: 0px;
        }

        .unit:nth-child(2) .opt1,
        .unit:nth-child(2) .icon1,
        .unit:nth-child(2) .icon2 {
            /*display: none;*/
        }

        .unit:nth-child(2) .group10,
        .unit:nth-child(2) .group11,
        .unit:nth-child(2) .group12,
        .unit:nth-child(2) .appendages {
            display: none!important;
        }

        .unit:nth-child(2) .options {
            visibility: hidden;
        }

        .unit:nth-child(2) .tax {
            display: none
        }

        .bd6-1head {
            display: none;
        }

        .unit:nth-child(2) .input1 {
            background-color: var(--title-background-normal);
            color: white;
            height: 38px;
            /*font-size: 1vw;*/
            font-size: .85vw;
            min-height: 38px;
            line-height: 2.5;
            pointer-events: none;
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

        .mobileheader {
            display: none;
        }

        .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }

        .text-right {
            text-align: right;
        }

        .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
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

        .partlist {
            padding-top: 16px;
            padding-left: 0%;
            font-size: 16px;
            font-weight: 500;
        }

        .tax {
            --paper-checkbox-size: 15px;
            padding-left: 11px;
        }

        #list {
            width: 100%;
            flex: 1 1 auto;
        }

        .ilholder {
            display: flex;
            flex-direction: column;
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
            height: 33px;
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
            /*    padding-right: 3px;
            padding-left: 3px;*/
            line-height: 2.2;
        }

        .bd9-2 .input1 {
            box-sizing: border-box;
        }

        #showSN {
            display: block
        }

        div[class^="group"] {
            margin-left: 9px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            height: 29px;
            flex-shrink: 0;
            overflow: hidden;
        }

        div[class^="box"] {
            height: 29px;
            flex-shrink: 0;
            width: 100%
            /*width: 100%;*/
            /*overflow: hidden;*/
        }

        div[class^="bd"] {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 2;
            height: 29px;
            flex-shrink: 0;
            box-sizing: border-box;
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

        .show {
            display: block!important;
            visibility: visible!important;
        }

        .serials {
            visibility: hidden;
        }

        .serials2 {
            display: none;
        }

        .appendages {
            background-color: #eee;
            width: 100%;
        }

        .unit {
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
            overflow: hidden;
        }

        .opt1 {
            height: 30px;
            box-sizing: border-box;
            line-height: 2;
            padding-left: 10px;
        }

        .options {
            min-width: 128px;
            width: auto;
            flex-shrink: none;
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            /*height: 33px;*/
            flex-shrink: 0;
        }

        .container {
            background-color: #eee;
            margin-top: 8px;
            overflow: hidden;
            width: 100%;
        }

        .data {
            background-color: #eee;
            /*margin-top: 8px;*/
            overflow: hidden;
            height: 33px;
            width: 100%;
        }

        .group1 {
            width: 10%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group2 {
            width: 10%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group3 {
            width: 10%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group4 {
            width: 10%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group5 {
            width: 10%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group6 {
            width: 10%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group7 {
            width: 10%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group8 {
            width: 10%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group9 {
            width: 10%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group10 {
            width: 10%;
            flex-grow: 1;
            min-width: 41px;
            box-sizing: border-box;
        }

        .group10,
        .bd10-1,
        .group11,
        .bd11-1 {
            height: 24px!important;
        }

        .group12 {
            height: auto!important;
            display: none;
        }

        .group12 [class^="bd"] {
            height: 24px!important
        }

        .group12 [class="bd12-1head"] {
            display: block;
        }

        .group14 {
            flex-grow: 1;
            min-width: 200px;
            width: 15%;
            flex-grow: 1;
        }

        .bd1-1 {
            mmin-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd1-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd2-1 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd2-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd2-mob {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd3-1 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd3-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd4-1 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd4-1 .input1 {}

        .bd4-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd5-1 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd5-2 .input1 {}

        .bd5-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd5-head {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd6-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd7-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd8-2,
        .bd9-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd8-2 {
            min-width: 76px;
            width: 100%;
            box-sizing: border-box;
        }

        .bd14-1 {
            min-width: 100%;
            width: 100%;
            padding-left: 23px;
            box-sizing: border-box;
            text-align: left!important;
        }

        .group12 [class$="head"] {
            width: 120px!important;
            display: inline-block;
        }

        .group10 [class^="bd"],
        .group11 [class^="bd"],
        .group12 [class^="bd"],
        .serialtitle {
            line-height: 1.5!important
        }

        .input1 {
            border: none;
            background-color: #eee;
            width: 100%;
            /* box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5); */
            color: black;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 13px;
        }

        .desktop-only {
            display: block;
        }

        .mobile-only {
            display: none;
        }

        .mobile-options {
            display: none!important;
        }

        .mobile-part {
            display: block!important;
        }

        [data-align="center"] {
            text-align: center;
        }

        [data-align="right"] {
            text-align: right;
        }

        [data-align="left"] {
            text-align: left;
        }

        [data-small="twelve"] {
            width: 9%!important
        }

        [data-size="large"] {
            min-width: 100px!important;
            width: 16%!important;
            flex-grow: 1!important;
        }

        [data-size="small"] {
            min-width: 80px!important;
            width: 6%!important;
            flex-grow: 1!important;
        }

        .checkboxholder {
            width: 100%;
        }

        .serialtitle {
            height: 24px;
            line-height: 2.0;
            padding-left: 10px;
            width: 133px;
            box-sizing: border-box;
        }

        .checkbox {
            /*margin:  25% 25% 25% 25%;*/
            padding: 8px 8px 8px 15px;
            width: 10.5px;
        }

        .outline {
            outline: #545659 auto 5px;
            outline-offset: -2px;
        }

        .notebook-options {
            display: none!important
        }

        .no-icon {
            display: none!important;
            text-align: center;
            width: 100%;
        }


        @media(max-width: 1500px) {

            [data-size="large"],
            [data-size="small"] {
                width: 210px!important;
                max-width: 210px!important;
                min-width: 210px!important;
                box-sizing: border-box!important;
            }

            .notebook-options {
                display: block!important;
                width: 120px;
                min-width: 120px;
                background-color: #eee;
                margin-top: 8px;
            }


            .desktop-only {
                display: none!important;
            }
            .options {
                width: 16%!important;
            }
            .container {
                width: 91%!important;
            }
            .mobile-only {
                display: block!important;
            }
            .unit:nth-child(2) {
                display: none!important;
            }
            .checkboxholder {
                width: 48%;
                text-align: left;
                box-sizing: border-box;
                padding-right: 3px;
                padding-left: 3px;
                margin-left: 4px;
            }
            .mobileheader {
                background-color: var(--title-background-normal);
                color: white;
                height: 40px;
                font-size: 19px;
                line-height: 1.3;
                pointer-events: none;
                display: block;
                text-align: center;
                padding-top: 10px;
            }
            [class$="-1head"],
            [class$="-3head"] {
                display: inline-block;
                width: 80px;
                min-width: 80px;
            }
            [class^="bd"] {
                text-overflow: unset!important;
            }
            [class^="bd"] .input1 {
                text-align: left;
                width: 100%;
                height: 29px;
            }

            .datapoint {
                width: 130px;
                min-width: 130px;
            }
            [class^="group"] {
                width: 210px;
                max-width: 210px;
                min-width: 210px;
                box-sizing: border-box;
            }
            [data-size="large"] {
                width: 210px!important;
                max-width: 210px!important;
                min-width: 210px!important;
                box-sizing: border-box!important;
            }
            .input1 {
                width: 107px;
                text-align: left!important font-size: 14px;
                padding-left: 2px;
            }
            .i-input {
                width: 100%!important;
                height: 28px;
                line-height: 2;
                padding-left: 3px;
            }

            .core {

                -webkit-justify-content: space-between;
                justify-content: space-between;
            }

            .options {
                display: none!important;
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
            .bd14-1 {
                padding-left: 0px;
            }

            .opt1,
            .iconholder {
                margin: auto;
            }
            .bd5-1 .input1 {
                width: 100%!important;
            }
            .bd6-1head {
                display: inline-block!important;
            }
            .bd6-2 {
                padding-left: 0px;
            }
            .bd6-2 .i-input {
                padding-left: 4px!important;
            }
            .bd6-2 .input1 {
                font-size: 13px;
            }
            .bd8-2 {
                padding-right: 0px;
            }
            .group1 .i-input,
            .group2 .i-input,
            .group3 .i-input,
            .group4 .i-input,
            .group5 .i-input,
            .group6 .i-input,
            .group7 .i-input,
            .group8 .i-input,
            .group9 .i-input {
                margin-left: -4px;
            }
            .tax {
                padding-left: 0px;
                /*margin-left: -3px;*/
            }
        }

        @media (max-width: 479px) {
            .bd5-mobile {
                width: 80px;
            }
            .bd5-mobilehead {
                width: 130px;
            }

            .bd5-mobilehead .input1 {
                color: blue;
            }



            .datapoint {
                width: 50vw;
            }
            .container {
                width: 100%!important;
            }
            .options {
                display: none!important;
            }
            .mobile-options {
                display: block!important;
            }
            .notebook-options {
                display: none!important;
            }
            .mobile-part {
                display: none!important;
            }
            .mobile-icons {
                position: absolute;
                right: 0;
            }
            .i-input {
                width: calc(87vw - 120px)!important;
            }
            .iconholder {
                margin: 0;
            }
            .bd4-1 {
                padding-left: 0px;
            }
            .desk-title,
            .desk-title2 {
                display: none!important;
            }
            .mobile-title {
                display: block!important;
            }
            [class^="group"] {
                width: 92vw;
                max-width: 92vw;
                min-width: 92vw;
                box-sizing: border-box;
            }
            .data {
                width: 100%;
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
        /* .forapor {
            display: none;
            visibility: hidden;
        }*/

        #forAPOR {
            font-size: 20px;
            color: red;
            padding-left: 8px;
            margin: auto;
        }
        </style>
        <div class="ilholder">
            <div class="mobileheader"> Items </div>
            <iron-list id="list" items="[[data]]" scroll-target="document">
                <template>
                    <div class="unit">
                        <div class="layout vertical">
                            <div class="data-container layout horizontal">
                                <div class="options layout vertical">
                                    <div class="layout horizontal wrap">
                                        <!-- <div class="firstset layout horizontal wrap"> -->
                                        <!--                                         <div  class="iconholder forapor" style="display:[[item.checkboxdisplay]]!important; visibility: [[item.checkboxvisibility]]!important">
                                            <paper-checkbox checked="{{model.idisplay}}" class="checkbox"
                                            on-tap="rowToHighlight"></paper-checkbox>
                                        </div> -->
                                        <!-- <div id="forAPOR"> {{item.subheadercontent}}</div> -->
                                        <div class="iconholder" style="display:[[item.icons.firstdisplay]]!important; visibility: [[item.icons.firstvisibility]]!important">
                                            <paper-icon-button  disabled="[[item.icons.firstdisabler]]" icon="[[item.icons.first]]" on-tap="event1" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder" style="display:[[item.icons.seconddisplay]]!important; visibility: [[item.icons.secondvisibility]]!important">
                                            <paper-icon-button disabled="[[item.icons.seconddisabler]]" icon="[[item.icons.second]]" on-tap="event2" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder" style="display:[[item.icons.thirddisplay]]!important; visibility: [[item.icons.thirdvisibility]]!important">
                                            <paper-icon-button disabled="[[item.icons.thirddisabler]]" icon="[[item.icons.third]]" on-tap="event3" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder" style="display:[[item.icons.fourthdisplay]]!important; visibility: [[item.icons.fourthvisibility]]!important">
                                            <paper-icon-button disabled="[[item.icons.fourthdisabler]]" icon="[[item.icons.fourth]]" on-tap="event4" class="icon1"></paper-icon-button>
                                        </div>
                                        <!-- </div> -->
                                        <!-- <div class="secondset layout horizontal wrap"> -->
                                        <div class="iconholder" style="display:[[item.icons.fifthdisplay]]!important; visibility: [[item.icons.fifthvisibility]]!important">
                                            <paper-icon-button disabled="[[item.icons.fifthdisabler]]" icon="[[item.icons.fifth]]" on-tap="event5" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder" style="display:[[item.icons.sixthdisplay]]!important; visibility: [[item.icons.sixthvisibility]]!important">
                                            <paper-icon-button disabled="[[item.icons.sixthdisabler]]" icon="[[item.icons.sixth]]" on-tap="event6" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder" style="display:[[item.icons.seventhdisplay]]!important; visibility: [[item.icons.seventhvisibility]]!important">
                                            <paper-icon-button disabled="[[item.icons.seventhdisabler]]" icon="[[item.icons.seventh]]" on-tap="event7" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder" style="display:[[item.icons.eighthdisplay]]!important; visibility: [[item.icons.eighthvisibility]]!important">
                                            <paper-icon-button disabled="[[item.icons.eighthdisabler]]" icon="[[item.icons.eighth]]" on-tap="event8" class="icon1"></paper-icon-button>
                                        </div>
                                        <div class="iconholder" style="display:[[item.icons.ninthdisplay]]!important; visibility: [[item.icons.ninthvisibility]]!important">
                                            <paper-icon-button disabled="[[item.icons.ninthdisabler]]" icon="[[item.icons.ninth]]" on-tap="event9" class="icon1"></paper-icon-button>
                                        </div>
                                        <!-- </div> -->
                                    </div>
                                </div>
                                <div class="container layout vertical">
                                    <div class="data layout horizontal wrap">
                                        <div class="core layout horizontal wrap">
                                            <!-- MOBILE -->
                                            <div class="mobile-options layout horizontal">
                                                <div class="group5 layout horizontal wrap">
                                                    <div class="box5-data layout horizontal">
                                                        <div class="bd5-mobile">
                                                            <div>
                                                                <iron-input class="i-input" bind-value="[[col0]]">
                                                                    <input disabled class="input1" disabled>
                                                                </iron-input>
                                                            </div>
                                                        </div>
                                                        <div class="bd5-mobilehead">
                                                            <iron-input class="i-input" bind-value="{{item.col0.value}}">
                                                                <input disabled on-tap="event0" class="input1">
                                                            </iron-input>
                                                        </div>
                                                        <div class="mobile-icons layout horizontal">
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="[[item.icons.first]]" style="display: [[item.icons.firstdisplay]]" on-tap="event1" class="icon1"></paper-icon-button>
                                                            </div>
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="[[item.icons.second]]" style="display: [[item.icons.seconddisplay]]" on-tap="event2" class="icon1"></paper-icon-button>
                                                            </div>
                                                            <div class="iconholder">
                                                                <paper-icon-button icon="icons:more-vert" on-tap="iconPanel" class="icon1"></paper-icon-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- END MOBILE -->
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col0.size]]" style="display:[[item.col0.display]];" class="group2 layout horizontal wrap mobile-part">
                                                <div class="box2-data layout horizontal">
                                                    <div class="bd2-1head">
                                                        <iron-input class="i-input" bind-value="[[col0]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd2-2">
                                                        <iron-input class="i-input" bind-value="{{item.col0.value}}">
                                                            <input disabled style="color:[[item.col0.color]]" on-tap="event0" data-align$="[[item.col0.textalign]]" class="input1 col0input inputnum">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col1.size]]" style="display:[[item.col1.display]];" class="group1 layout horizontal wrap">
                                                <div class="box1-data layout horizontal">
                                                    <div class="bd2-1head">
                                                        <iron-input class="i-input" bind-value="[[col1]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd1-1 datapoint">
                                                        <iron-input class="i-input" bind-value="{{item.col1.value}}">
                                                            <input disabled style="color: [[item.col1.color]]" data-align$="[[item.col1.textalign]]" class="input1" on-tap="event11">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col2.size]]" style="display:[[item.col2.display]];" class="group4 layout horizontal wrap">
                                                <div class="box4-data layout horizontal">
                                                    <div class="bd4-1head">
                                                        <iron-input class="i-input" bind-value="[[col2]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd4-1 datapoint">
                                                        <iron-input class="i-input" bind-value="[[item.col2.value]]">
                                                            <input disabled data-align$="[[item.col2.textalign]]" class="input1" style="color:[[item.col2.color]]" on-tap="event22">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col3.size]]" style="display:[[item.col3.display]];" class="group5 layout horizontal wrap ">
                                                <div class="box5-data layout horizontal">
                                                    <div class="bd5-1head">
                                                        <iron-input class="i-input" bind-value="[[col3]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd5-2 datapoint">
                                                        <iron-input class="i-input" bind-value="{{item.col3.value}}">
                                                            <input disabled data-align$="[[item.col3.textalign]]" style="color:[[item.col3.color]]" class="input1 inputnum" on-tap="event33">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col4.size]]" style="display:[[item.col4.display]];" class="group6 layout horizontal wrap">
                                                <div class="box6-data layout horizontal">
                                                    <div class="bd6-1head">
                                                        <iron-input class="i-input" bind-value="[[col4]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd6-2 datapoint">
                                                        <iron-input class="i-input" bind-value="{{item.col4.value}}">
                                                            <input disabled data-align$="[[item.col4.textalign]]" class="input1 inputnum" on-tap="event44">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col5.size]]" style="display:[[item.col5.display]];" class="group3 layout horizontal wrap">
                                                <div class="box3-data layout horizontal">
                                                    <div class="bd3-1head">
                                                        <iron-input class="i-input" bind-value="[[col5]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd3-2 datapoint">
                                                        <iron-input class="i-input" bind-value="{{item.col5.value}}">
                                                            <input disabled data-align$="[[item.col5.textalign]]" class="input1 inputnum">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col6.size]]" style="display:[[item.col6.display]];" class="group7 layout horizontal wrap">
                                                <div class="box7-data layout horizontal">
                                                    <div class="bd7-1head">
                                                        <iron-input class="i-input" bind-value="[[col6]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd7-2 datapoint">
                                                        <iron-input class="i-input" on-focusout="doCalculateMargin" bind-value="{{item.col6.value}}">
                                                            <input style="color:[[item.col6.color]]" disabled data-align$="[[item.col6.textalign]]" class="input1 inputnum" on-tap="event66">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col7.size]]" style="display:[[item.col7.display]];" class="group8 layout horizontal wrap">
                                                <div style="display: [[item.col7.specialicon]]" class="no-icon iconholder">
                                                    <paper-icon-button disabled="{{false}}" icon="[[item.col7.icon]]" on-tap="specialevent" class="icon1"></paper-icon-button>
                                                </div>
                                                <div style="display: [[item.col7.noshow]]" class="box8-data layout horizontal">
                                                    <div class="bd8-1head">
                                                        <iron-input class="i-input" bind-value="[[col7]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd8-2 datapoint">
                                                        <iron-input class="i-input" on-focusout="doCalculatePrice" bind-value="{{item.col7.value}}">
                                                            <input disabled data-align$="[[item.col7.textalign]]" class="input1 inputnum">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col8.size]]" style="display:[[item.col8.display]];" class="group9 layout horizontal wrap">
                                                <div class="box9-data layout horizontal">
                                                    <div class="bd9-1head">
                                                        <iron-input class="i-input" bind-value="[[col8]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd9-2 datapoint">
                                                        <iron-input class="i-input" bind-value="{{item.col8.value}}">
                                                            <input disabled data-align$="[[item.col8.textalign]]" class="input1 inputnum">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col9.size]]" style="display:[[item.col9.display]];" class="group9 layout horizontal wrap">
                                                <div class="box9-data layout horizontal">
                                                    <div class="bd9-1head">
                                                        <iron-input class="i-input" bind-value="[[col9]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd9-2 datapoint">
                                                        <iron-input style="display:[[editableCheck(item.col9.editable)]];" class="i-input" bind-value="{{item.col9.value}}">
                                                            <input data-align$="[[item.col9.textalign]]" on-focusout="inputEvent9" class="outline input1 inputnum">
                                                        </iron-input>
                                                        <iron-input style="display:[[editableCheck1(item.col9.editable)]];" class="i-input" bind-value="{{item.col9.value}}">
                                                            <input disabled data-align$="[[item.col9.textalign]]" class="input1 inputnum">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-small$="[[item.twelve]]" data-size$="[[item.col10.size]]" style="display:[[item.col10.display]];" class="group9 layout horizontal wrap">
                                                <div class="box9-data layout horizontal">
                                                    <div class="bd9-1head">
                                                        <iron-input class="i-input" bind-value="[[col10]]">
                                                            <input disabled class="input1" disabled>
                                                        </iron-input>
                                                    </div>
                                                    <div class="bd9-2 datapoint">
                                                        <iron-input class="i-input" bind-value="{{item.col10.value}}">
                                                            <input disabled data-align$="[[item.col10.textalign]]" class="input1 inputnum">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="notebook-options layout horizontal">
                                    <div class="group5 layout horizontal wrap">
                                        <div class="box5-data layout horizontal">
                                            <div class="mobile-icons layout horizontal">
                                                <div class="iconholder">
                                                    <paper-icon-button icon="[[item.icons.first]]" style="display: [[item.icons.firstdisplay]]" on-tap="event1" class="icon1"></paper-icon-button>
                                                </div>
                                                <div class="iconholder">
                                                    <paper-icon-button icon="[[item.icons.second]]" style="display: [[item.icons.seconddisplay]]" on-tap="event2" class="icon1"></paper-icon-button>
                                                </div>
                                                <div class="iconholder">
                                                    <paper-icon-button icon="icons:more-vert" on-tap="iconPanel" class="icon1"></paper-icon-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="group10 layout horizontal wrap">
                                                <div class="box10-data layout horizontal">
                                                    <div class="bd10-2">
                                                        <span class="bd10-1head"> [[col9]]</span>
                                                        <iron-input class="i-input" bind-value="{{item.col9.value}}">
                                                            <input disabled data-align$="[[item.col9.textalign]]" class="input1 inputnum">
                                                        </iron-input>
                                                    </div>
                                                </div>
                                            </div> -->
                            </div>
                        </div>
                    </div>
                </template>
            </iron-list>
        </div>
        </div>
            `
        }

        static get properties() {
            return {
                checkboxdisplay: {
                    type: String,
                    value: 'none',
                },
                checkboxvisibility: {
                    type: String,
                    value: 'hidden,'
                },

                true: {
                    type: Boolean,
                    value: true
                },

                data: {
                    type: Array,
                    value: function() {
                        return []
                    }
                },
                false: {
                    type: Boolean,
                    value: false
                },
                history: {
                    type: Boolean,
                    reflectToAttribute: true,
                    value: true
                },
                col0: {
                    type: String,
                    reflectToAttribute: true,
                },
                col1: {
                    type: String,
                    reflectToAttribute: true,
                },
                col2: {
                    type: String,
                    reflectToAttribute: true,

                },
                col3: {
                    type: String,
                    reflectToAttribute: true,

                },
                col4: {
                    type: String,
                    reflectToAttribute: true,

                },
                col5: {
                    type: String,
                    reflectToAttribute: true,

                },
                col6: {
                    type: String,
                    reflectToAttribute: true,

                },
                col7: {
                    type: String,
                    reflectToAttribute: true,

                },
                col8: {
                    type: String,
                    reflectToAttribute: true,

                },
                col9: {
                    type: String,
                    reflectToAttribute: true,

                },
                // rowToHighlight: {
                //     type: Object,
                //     notify: true,
                //     reflectToAttribute: true,
                //     value: function() {
                //         return {

                //         }
                //     }
                // },

            }
        }

        static get observers() {
            return [
                // `highlighter(rowToHighlight)`,
            ]
        }

        // rowToHighlight(rthl) {
        //     console.log("rthl in obs", rthl)
        //     console.log("this.$", this.$)
        // }
        rowToHighlight(e) {
            console.log("dsafdas", e)
            console.log("e.model.index", e.model.index)
            console.log("e.path[0]", e.path[0])
            console.log("e.path[6]", e.path[6])
        }
        constructor() {
            super()





        }

        editableCheck(val) {
            if (val === true) {
                return ""
            } else {
                return "none"
            }
        }

        editableCheck1(val) {
            if (val === true) {
                return "none"
            } else {
                return ""
            }
        }


        show(val) {
            console.log('the display val', val)
        }

        show2(val) {
            console.log('the display val2', val)
        }

        open(coldata, data) {

            if (coldata.twelve) {
                console.log('insde twelve')
                this.set('twelve', "twelve")
                console.log('this.twelve', this.twelve)
            }

            if (coldata) {
                for (var prop in coldata) {
                    this.set(prop, coldata[prop].value)
                }


                let temp = []
                temp.push(coldata)
                temp = temp.concat(data)
                this.set('data', temp)


                this.updateStyles({
                    '--title-background-normal': coldata.color.value,
                    '--title-normal': 'white',
                });

                // this.shadowRoot.querySelector('.col0input').style.textAlign = "center"
            }
        }


        specialevent(e) {
            this.dispatchEvent(new CustomEvent('specialevent', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }


        event0(e) {
            this.dispatchEvent(new CustomEvent('event0', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }

        event1(e) {

            console.log("this.$", this.$)

            this.dispatchEvent(new CustomEvent('event1', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }

        event2(e) {
            this.dispatchEvent(new CustomEvent('event2', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e,
                    serviceid: this.data[e.model.index].col0.value.split("-")[0],
                }
            }))
        }
        event3(e) {
            this.dispatchEvent(new CustomEvent('event3', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }
        event4(e) {
            this.dispatchEvent(new CustomEvent('event4', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }
        event5(e) {
            console.log("event5")
            this.dispatchEvent(new CustomEvent('event5', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }
        event6(e) {
            this.dispatchEvent(new CustomEvent('event6', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }
        event7(e) {
            console.log("event7")
            this.dispatchEvent(new CustomEvent('event7', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }

        event8(e) {
            this.dispatchEvent(new CustomEvent('event8', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }
        event9(e) {
            this.dispatchEvent(new CustomEvent('event9', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }
        event11(e) {
            this.dispatchEvent(new CustomEvent('event11', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }
        event22(e) {
            this.dispatchEvent(new CustomEvent('event22', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }
        event66(e) {
            this.dispatchEvent(new CustomEvent('event66', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }

        inputEvent9(e) {
            this.dispatchEvent(new CustomEvent('inputEvent9', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }


        iconPanel(e) {
            this.dispatchEvent(new CustomEvent('iconPanel', {
                bubbles: true,
                composed: true,
                detail: {
                    event: e
                }
            }))
        }


        toggleLeft() {
            this.dispatchEvent(new CustomEvent('CloseMenuEvent', {
                composed: true,
                bubbles: true
            }));
        }



        adjustPanelProps(props) {
            var args = Array.prototype.slice.call(arguments, 1);
            var self = this;

            props.forEach(function(item) {
                var newVal = !args.includes(item);
                self.set(item, newVal);
            });
        }



        scrollTop() {
            this.shadowRoot.getElementById('top').scrollIntoView()

        }
        ready() {
            super.ready()



        }

    }
   customElements.define('defieservice-list', DefieServiceList);