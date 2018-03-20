import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'

import { render } from '../../node_modules/lit-html/lib/lit-extended.js'

export class SearchOptions extends LitElement {
    static get properties() {
        return {
            statuslist: {
                type: Array,
                reflectToAttribute: true,
                notify: true
            },
        }
    }
    constructor() {
        super();
    }

    selectedSO(e) {
        this.dispatchEvent(new CustomEvent("selectedSearchOption", {
            bubbles: true,
            composed: true,
            detail: {
                id: e.path[0].id,
                keycode: e.keyCode,
                type: e.type,
                inputValue: this.searchinput,
            }
        }))
    }

    closed() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            composed: true,
            bubbles: true
        }))
    }


    renderItems(sol, searchinput) {
        this.sol=sol
        this.searchinput = searchinput
        const searchtypes = data => {
            return html `
            <div class="title-rightpaneldraw">Search Options</div>
                <div style="background-color: #e6e6e6;">
                    <div class="close-interface">
                        <span on-tap="${() => this.close()}">Close</span>
                        <iron-icon icon="close" on-tap="${() => this.close()}"></iron-icon>
                    </div>
                </div>
                <div class="table-padding">
                    <div class="title"> Filter by </div>
                    <form>
                        <div class="layout vertical wrap">
                            <div  class="singleoption" style="visibility: ${ data[0][0] }">
                                <input checked="checked" on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[0][1] }" name="searchoptions" class="searchfield" type="radio"><span class="field"> ${ data[0][0] } </span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[1][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[1][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[1][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[2][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[2][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[2][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[3][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[3][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[3][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[4][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[4][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[4][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[5][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[5][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"><span class="field">  ${ data[5][0] }</span>
                            </div>
                            <div  class="singleoption" style="visibility: ${ data[6][0] }">
                                <input on-tap="selectsdSO" id="${ data[6][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[6][0] }</span>
                            </div>
                            <div class="singleoption" style="visibility: ${ data[7][0] }">
                                <input on-tap="${(e)=>{this.selectedSO(e)}}" id="${ data[7][1] }" value="Void" name="searchoptions" class="searchfield" type="radio"> <span class="field"> ${ data[7][0] }</span>
                            </div>
                        </div>
                   </form>
                </div>
      `;
        }

        render(searchtypes(this.sol), this.shadowRoot.querySelector('#searchoptions'))
    }

    ready() {
        super.ready();
    }

    render({ checked, passThroughOptions, model, viewoutersearchrow, so }) {
        return html `
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
        <div id="searchoptions"></div>
       `
    }
}
customElements.define('search-options', SearchOptions);