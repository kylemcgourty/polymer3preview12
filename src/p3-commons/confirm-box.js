
// <link rel="import" href="../../bower_components/polymer/polymer.html">
// <link rel="import" href="../../bower_components/paper-dialog/paper-dialog.html">
// <link rel="import" href="../../bower_components/paper-dialog-scrollable/paper-dialog-scrollable.html">


 import {Element as PolymerElement}
  from '../../node_modules/@polymer/polymer/polymer-element.js'

// import '../../node_modules/@polymer/paper-dialog/paper-dialog.js'



   export class ConfirmBox extends PolymerElement {
        static get template() {
            return `  <style include="shared-styles">
    #paperToggle {
        min-height: 40px;
        min-width: 40px;
    }
    paper-dialog {
        background-color: #fff;
        z-index: 101!important;
    }

/*     paper-dialog > #confirmbox {
        display: var(--do-not-close);
    }
     paper-dialog > #confirmboxCU {
        display: var(--do-not-close);
    }*/
/*    #confirmbox {
        display: var(--do-not-close);
    }
    #confirmboxCU {
        display: var(--do-not-close);
    }*/

      #main {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;

        @apply --paper-drawer-panel-main-container;
      }

      .transition > #main {
        transition: left ease-in-out 0.3s, padding ease-in-out 0.3s;
      }

      .right-drawer > #main {
        left: 0;
      }

      .right-drawer.transition > #main {
        transition: right ease-in-out 0.3s, padding ease-in-out 0.3s;
      }

      #main > ::slotted(*) {
        height: 100%;
      }


    #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        visibility: hidden;
        /*opacity: 0;*/
        transition: opacity ease-in-out 0.38s, visibility ease-in-out 0.38s;
        background-color: rgba(0, 0, 0, 0.3);
        @apply --paper-drawer-panel-scrim;
      }

/*    .narrow-layout > #main:not(.iron-selected) > #scrim,
      .dragging > #main > */

      #scrim {
        visibility: var(--show-the-scrim);
        opacity: var(--show-the-opacity);
      }



/*    .narrow-layout > #main {
        padding: 0;
      }

      .right-drawer.narrow-layout > #main {
        left: 0;
        right: 0;
      }

*/

      .narrow-layout > #main > * {
        margin: 0;
        min-height: 100%;
        left: 0;
        right: 0;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }



    </style>

<!--         <div id="main" style="visibility:{{toShowScrim}};" on-iron-overlay-closed="doNothing(e)">
            <slot name="main"></slot>
            <div id="scrim"></div>
        </div> -->

        <paper-dialog id="confirmbox" opened="{{opened}}" style="display:var(--do-not-close)" on-iron-overlay-closed="doNothing(e)"><!-- with-backdrop -->
            <h2>[[title]]</h2>
            <paper-dialog-scrollable>[[text]]</paper-dialog-scrollable>
            <div class="buttons">
                <paper-button dialog-dismiss on-tap="deny">Cancel</paper-button>
                <paper-button dialog-confirm on-tap="confirmremove">Yes</paper-button>
            </div>
        </paper-dialog>`
        }

        static get properties() {
            return {
                model: {
                    type: Object,
                    notify: true,
                    value: function() {
                        return {
                            itemid: {
                                type: String
                            },
                            itemname: {
                                type: String
                            },
                            title: {
                                type: String,
                                value: "Delete"
                            },
                            index: {
                                type: Number
                            },
                            text: {
                                type: String,
                                value: "Are you sure want to delete?"
                            },
                            opened: {
                                type: Boolean
                            }
                        };
                    }
                },
                toShowScrim: {
                    type: String,
                    notify:true,
                    reflectToAttribute:true,
                    value: "hidden"
                },
                toShowOpacity: {
                    type: Number,
                    notify:true,
                    reflectToAttribute:true,
                    // value: 0
                },
            }
        }


        static get observers() {
            return [
            '_modalChanged(modal, __readied)',
            ]
        }





        _modalChanged(modal, __readied) {
            console.log("here in observers....", modal, __readied)
        }
        constructor() {
            super();
            Utils.apply(this);

            document.querySelector('my-app').addEventListener('iron-overlay-closed', function(e) {
                console.log("here in iron-overlay-closed ...", e)
                // e.stopPropagation();
                //     this.updateStyles({
                //     '--do-not-close': 'block'
                // })
            });


        }

        doNothing(e){
            console.log("in function doNothing, just trying to keep confirmbox open", e)
            // e.stopPropagation()
            this.updateStyles({
                '--do-not-close': 'block'
            })
        }


        confirmremove() {
            console.log("inside confirmbox confirmremove")

            this.updateStyles({
                '--show-the-scrim': "hidden",
                '--show-the-opacity': "0",
                '--do-not-close': 'none'
            })


            console.log("confirmremove event dispatched")
            this.dispatchEvent(new CustomEvent('confirmremoved', {composed: true, bubbles: true, detail: {itemid: this.itemid, itemname: this.itemname, index: this.index}}));
        }
        deny(){
            console.log("inside confirmbox deny")


            this.updateStyles({
                '--show-the-scrim': "hidden",
                '--show-the-opacity': "0",
                '--do-not-close': 'none'
            })


            this.dispatchEvent(new CustomEvent('closePanel', {composed: true, bubbles: true}));
        }





        open(itemid, itemname, index) {

            // this.set('toShowScrim', "visible")
            // this.set('toShowOpacity', 1)

            this.updateStyles({
                '--show-the-scrim': "visible",
                '--show-the-opacity': "1"
            })


             console.log("open called itemid itemname index", itemid, itemname, index, this.opened)
            
            
             this.set('itemid', itemid);

             this.set('itemname', itemname);
             this.set('index', index);
             this.set("opened", true);

             console.log("open called itemid itemname index", itemid, itemname, index, this.opened)
        }

    }
  customElements.define('confirm-box', ConfirmBox);

