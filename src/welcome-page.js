   import { Element as PolymerElement }
   from '../../node_modules/@polymer/polymer/polymer-element.js'
   import '../../node_modules/@polymer/paper-drawer-panel/paper-drawer-panel.js'
   import '../../node_modules/@polymer/paper-header-panel/paper-header-panel.js'
   import '../src/p3-commons/logout-header.js'

   export class WelcomePage extends PolymerElement {

       static get template() {
           return ` 
        <style include="shared-styles iron-flex iron-flex-alignment">
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }

         :host {
            display: flex;
        }

        main {
            width: 100%;
        }

        .inline-block {
            display: inline-block;
        }

        .title {
            color: black;
            font-size: 21px;
            font-weight: 400;
        }

        .my-content {
            display: block;
            min-height: 48px;
            position: relative;
            word-wrap: break-word;
        }

        footer {
            height: 73px;
            width: 100%;
            position: absolute;
            bottom: 0;
            background-color: #82dcff;
        }

        .main {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            width: 80%;
            height: 95%;
            z-index: 2;
        }

        .signin-title {
            margin: 0;
            font-size: 48px;
            font-weight: 300;
            color: #06266c;
        }

        .welcome {
            height: 460px;
        }

        @media (max-width: 767px) {
            .main {
                width: 100%;
                margin-top: 10%;
                position: static;
            }
            .signin-title {
                padding-top: 14px;
                font-size: 32px;
            }
            .footer {
                display: none;
            }
            .welcome {
                padding: 16px;
            }
            .main {
                width: 100%;
                margin-top: 0;
                padding: 0 8px;
            }
            .signin-title {
                padding-top: 0;
                height: 100px;
                position: relative;
            }

            .span {
                color: rgba(0, 0, 0, 0.8);
                font-size: 12px;
                display: block;
            }
        }

        @media (min-width: 1680px) {
            .centered {
                position: fixed;
                top: 45%;
                left: 57%;
                /* bring your own prefixes */
                transform: translate(-50%, -50%);
            }
        }

        @media (min-width: 768px) and (max-width: 1679px) and (orientation:portrait) {
            .centered {
                position: fixed;
                top: 45%;
                left: 50%;
                /* bring your own prefixes */
                transform: translate(-50%, -50%);
            }
        }

        @media (min-width: 768px) and (max-width: 1679px) and (orientation:landscape) {
            .centered {
                position: fixed;
                top: 45%;
                left: 63%;
                /* bring your own prefixes */
                transform: translate(-50%, -50%);
            }
        }

        @media (min-width: 992px) {
            .col-md-4 {
                float: left;
                width: 14.667%;
            }
        }

        @media (max-width: 960px) {
            footer {
                position: fixed;
                bottom: 0px;
                height: 73px;
                background-color: #82dcff;
                text-align: center;
                font-size: 34px;
                padding-top: 19px;
                z-index: 0;
                color: white;
                right: 0px;
                left: 0px;
                margin-left: 0px;
            }
        }

        @media (max-width: 767px) {
            .signinho-title {
                font-size: 20px;
                font-weight: 300;
            }

            .signin-title {
                /*color: #F88100;*/
                font-size: 24px;
                font-weight: 300;
            }
            .mobile {
                font-size: 12px;
                line-height: 10;
            }
            .centered {
                position: fixed;
                top: 50%;
                left: 50%;
                /* bring your own prefixes */
                transform: translate(-50%, -50%);
            }
            footer {
                position: fixed;
                bottom: 0px;
                height: 73px;
                background-color: #82dcff;
                text-align: center;
                font-size: 34px;
                padding-top: 19px;
                z-index: 0;
                color: white;
                right: 0px;
                left: 0px;
                margin-left: 0px;
            }
        }

        .app-name {
            font-size: 21px;
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
        </style>
        <paper-drawer-panel id="drawer" drawer-Width="[[drawerwidth]]" force-narrow="true" right-drawer disable-edge-swipe style="overflow-y: scroll;">
            <paper-header-panel slot="main">
                <app-header condenses reveals fixed effects="waterfall blend-background">
                    <app-toolbar class="middle middle-container">
                        <paper-icon-button id="paperToggle" icon="menu" drawer-toggle on-tap="toggleLeft"></paper-icon-button>
                        <div class="app-name" title name="{{pagetitle}}">Get Started</div>
                        <logout-header></logout-header>
                    </app-toolbar>
                </app-header>
                <section class="welcome">
                    <main>
                        <div class="my-content signin-title centered">

                        </div>
                    </main>
                    <footer></footer>
                </section>
            </paper-header-panel>
            <paper-header-panel slot="drawer">
            </paper-header-panel>
        </paper-drawer-panel>
            `
       }
       static get properties() {

           return {
               fullname: {
                   type: String,
                   value: function() {
                       fullname: "Defie"
                   },
               }
           }
       }
       titlecolor() {
           this.headercolor = "#82dcff"
           this.updateStyles({
               '--title-background-normal': this.headercolor,
               '--title-normal': 'white',
           });
       }
       toggleLeft() {
           this.dispatchEvent(new CustomEvent('CloseMenuEvent', {
               composed: true,
               bubbles: true
           }));
       }
       ready() {
           super.ready();
           this.titlecolor();
       }
   }
   customElements.define('welcome-page', WelcomePage);