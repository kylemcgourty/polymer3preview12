
 

   import {Element as PolymerElement}
   from '../../node_modules/@polymer/polymer/polymer-element.js'

    export class ServiceSearchOptions extends PolymerElement {
       
        static get template() {
        return `
          <style include="shared-styles iron-flex iron-flex-alignmen">
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
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
            /*        padding-left: 15px;
        padding-right: 15px;*/
        }
        
        .table-padding {
            padding-left: 16px;
            padding-right: 16px;
            margin-top: 20px;
        }
        
        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }
        
        .button {
            margin-top: 24px;
            margin-right: 16px;
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
        
        .nooverflow {
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            height: 100%;
            line-height: 2.7;
        }
        
        .col-xs-3 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 30%;
            float: left;
        }
        
        .input {
            width: 150%;
            /*min-height: 24px;*/
            text-align: initial;
            border: none;
            background-color: #eee;
            /*border-color: #eee;*/
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 100%;
        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 65%;
        }
        
        iron-list {
            /*flex: 1 1 auto;*/
        }
        
        .i-input {
            width: 100%;
        }
        
        .my-content {
            margin-top: 10px;
        }
        
        #page {
            overflow-y: auto;
            height: 100vh
        }
        
        .title {
            font-size: 17px;
            margin-top: 12px;
            margin-bottom: 5px;
        }
        
        .listoptions {
            margin-bottom: 10px;
        }
        </style>
        <div id="page">
            <div class="title-rightpaneldraw">Search Options</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
                <div class="title"> Filter by </div>
                <!-- <form> -->
                    <div class="layout vertical">

                        <iron-list id="list" items="[[sol]]" scroll-target="document">
                            <template>
                                <div class="option" style="display: {{ item.0 }}">
                                    <input on-tap="selectedSO" id="{{ item.1 }}" value="Active" name="searchoptions" class="listoptions" type="radio" checked"> {{ item.2 }}
                                </div>
                            </template>
                        </iron-list>





<!--                         <div class="option" style="display: {{ sol.0.0 }}">
                            <input on-change="selectedSO" on-keypress="selectedSO" id="{{ sol.0.1 }}" value="Active" name="searchoptions" class="listoptions" type="radio" checked"> {{ sol.0.2 }}
                        </div>

                        <div class="option" style="display: {{ sol.1.0 }}">
                            <input on-change="selectedSO" on-keypress="selectedSO" id="{{ sol.1.1 }}" value="Void" name="searchoptions" class="listoptions" type="radio"> {{ sol.1.2 }}
                        </div>
                        <div class="option" style="display: {{ sol.2.0 }}">
                            <input on-change="selectedSO" on-keypress="selectedSO" id="{{ sol.2.1 }}" value="Active" name="searchoptions" class="listoptions" type="radio"> {{ sol.2.2 }}
                        </div>
                        <div class="option" style="display: {{ sol.3.0 }}">
                            <input on-change="selectedSO" on-keypress="selectedSO" id="{{ sol.3.1 }}" value="Active" name="searchoptions" class="listoptions" type="radio"> {{ sol.3.2 }}
                        </div>

                        <div class="option" style="display: {{ sol.4.0 }}">
                            <input on-change="selectedSO" on-keypress="selectedSO" id="{{ sol.4.1 }}" value="Active" name="searchoptions" class="listoptions" type="radio" checked> {{ sol.4.2 }}
                        </div>
                        <div class="option" style="display: {{ sol.5.0 }}">
                            <input on-change="selectedSO" on-keypress="selectedSO" id="{{ sol.5.1 }}" value="Void" name="searchoptions" class="listoptions" type="radio"> {{ sol.5.2 }}
                        </div>
                        <div class="option" style="display: {{ sol.6.0 }}">
                            <input on-change="selectedSO" on-keypress="selectsdSO" id="{{ sol.6.1 }}" value="Active" name="searchoptions" class="listoptions" type="radio"> {{ sol.6.2 }}
                        </div>
                        <div class="option" style="display: {{ sol.7.0 }}">
                            <input on-change="selectedSO" on-keypress="selectedSO" id="{{ sol.7.1 }}" value="Active" name="searchoptions" class="listoptions" type="radio"> {{ sol.7.2 }}
                        </div> -->
                    </div>
                <!-- </form> -->
            </div>
        </div>`
    }
        static get properties() {
            return {
                statuslist: {
                    type: Array,
                    reflectToAttribute: true,
                    notify: true
                },
                passThroughOptions: {
                    type: String,
                    notify: true
                },
                sol: {
                    type: Array,
                    reflectToAttribute: true,
                    notify: true,
                    value: [],
                },
                proxysol: {
                    type: Array,
                    reflectToAttribute: true,
                    notify: true,
                    value: [],
                },
                so: {
                    type: String,
                    value: ""
                }
            }
        }
        constructor() {
            super();
        }

        static get observers() {
            return [
                'showval(statuslist)',
                // 'changeToOptionsList(proxysol)',
            ]
        }

        changeToOptionsList(proxysol, inputValue){
         

            // this.set('sol', [])

            this.set('sol', proxysol)
            // this.notifyPath('sol.2.0')
            // this.notifyPath('sol.3.0')

            this.inputValue = inputValue

        }

        // action(e) {
        //     var id = e.path[2].id;
        //     this.dispatchEvent(new CustomEvent('fromSOPanel', {

        //         composed: true,
        //         bubbles: true,
        //         detail: {
        //             action: id
        //         }
        //     }))
        // }

        close() {
             this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }))
        }

        returnCheck(i) {
            if (i === 0) {
                return true;
            } else {
                return false
            }
        }


        selectedSO(e) {
       
                this.dispatchEvent(new CustomEvent("selectedSearchOption", {
                bubbles: true,
                composed: true,
                detail: {
                    id: e.path[0].id,
                    inputValue: this.inputValue,
                }
            }))
        }

        ready() {
            super.ready()
       
        }


    }
customElements.define('service-searchoptions', ServiceSearchOptions);
