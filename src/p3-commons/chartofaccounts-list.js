import { LitElement } from '../../node_modules/@polymer/lit-element/lit-element.js'

import { repeat } from '../../node_modules/lit-html/lib/repeat.js'
import { render, html } from '../../node_modules/lit-html/lib/lit-extended.js';

export class ChartofAccountsList extends LitElement {

    static get properties() {

        return {
            account: {
                type: Array,
                reflectToAttribute: true,
                notify: true,
                value: function() {
                    return []
                }
            },
            typemodel: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "",
            },
            title: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "",
            },
        }
    }
    static get observers() {
        return [

        ]
    }

    renderItems() {
        const types = (account) => {
            return html `
            <div>
            ${repeat (
                 account,
                 item => item.id,
                 item => html`
                        <div class="unit">
                            <div>
                                <div class="title layout horizontal" style="display:${ item.titlevisibility }">
                                    ${ item.account } (${item.low} - ${item.high}) 
                                    <!-- <paper-icon-button class="toggler less" on-tap="showless" id="less[[index]]" style="display:{{less}}" icon="icons:expand-less"></paper-icon-button> -->
                                    <!-- <paper-icon-button class="toggler more" on-tap="showmore" id="more[[index]]" style="display:{{more}}" icon="icons:expand-more"></paper-icon-button> -->
                                </div>
                                <div class="my-content layout horizontal" style="display:${ item.subtitlevisibility }">
                                    <div class="accountdetail">
                                        <input disabled class="input" id="account-${item.id}" value="${item.account}" on-tap="${(item) => this.senddata(item)}">
                                    </div>
                                    <div class="accountdetail">
                                        <input disabled class="input" id="accountno-${item.id}" value="${item.accountno}" on-tap="${(item) => this.senddata(item)}">
                                    </div>
                                </div>
                            </div>
                          `
                         )}
            <div>`;
        }

        render(types(this.account), this.shadowRoot.querySelector('#table'))
    }

    open(profileid) {
                let ct = sessionStorage.getItem("CUSTOMTOKEN")
        this.shadowRoot.querySelector('#ajaxOption').headers['CustomToken'] = ct;
        this.shadowRoot.querySelector('#ajaxOption').url = "/chartofaccounts/" + profileid
        this.shadowRoot.querySelector('#ajaxOption').generateRequest();
    }

    responseOption(request) {

        var data = request.detail.response.chartofaccounts
        console.log(data)

        if (data != "") {
            this.account = [];
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].accountno)
                if (data[i].accountno === undefined) {
                    this.account.push({
                        account: data[i].account,
                        accountno: "title",
                        low: data[i].low,
                        high: data[i].high,
                        titlevisibility: "block",
                        subtitlevisibility: "none",
                        id: i,
                    })
                    for (let j = 0; j < data[i].accounts.length; j++) {
                        this.account.push({
                            account: data[i].accounts[j].account,
                            accountno: data[i].accounts[j].accountno,
                            low: "sub",
                            high: "sub",
                            titlevisibility: "none",
                            subtitlevisibility: "flex",
                            id: i + "." + j,
                        })
                    }
                }
            }
        }
        console.log(this.account)
        this.renderItems()
    }

    showless(e) {
        console.log('sl e', e)
        let index = e.model.index;
        this.shadowRoot.querySelector('#group' + index).style.display = "none"
        this.shadowRoot.querySelector('#more' + index).style.display = "block"
        this.shadowRoot.querySelector('#less' + index).style.display = "none"
    }


    showmore(e) {
        console.log('sm e', e)
        let index = e.model.index;
        this.shadowRoot.querySelector('#group' + index).style.display = "block"
        this.shadowRoot.querySelector('#more' + index).style.display = "none"
        this.shadowRoot.querySelector('#less' + index).style.display = "block"
    }

    senddata(item) {
        let idname = item.path[0].id.split("-")
        let id = idname[1]

        let account = this.shadowRoot.getElementById('account-' + id).value
        let accountno = this.shadowRoot.getElementById('accountno-' + id).value
        console.log(account, accountno)

        this.dispatchEvent(new CustomEvent('chartofaccounts', {
            composed: true,
            bubbles: true,
            detail: {
                typemodel: this.typemodel,
                accountno: accountno,
                account: account
            }
        }))
        this.close()
    }

    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    render({ title }) {


        return html `
        <style include="shared-styles iron-flex iron-flex-alignment">  
      .card {
        margin: 24px;
        padding: 16px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
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
            width: 100%;
        }
        
        .input {
            width: 90%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            font-size: 13.3px;
        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 100%;
            margin-top: 0px;
            margin-bottom: 3px;
        }
        
        .text-right {
            text-align: right;
        }
        
        .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
            font-size: 14px;
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
            margin: 0px;
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
        
        .table-padding {
            padding-left: 5%;
            padding-right: 5%;
            margin-top: 17px;
        }
        
        .remove-icons {
            margin-left: -17px;
            margin-top: -10px;
            padding: 0px;
            width: 18px!important;
            height: 18px!important;
        }
        
        .header {
            position: relative;
        }
        
        .add-icon {
            position: relative;
            padding-bottom: 0px;
        }
        
        .add-icon {
            padding: 0px;
            width: 18px!important;
            height: 18px!important;
            margin-bottom: 11px;
        }
        
        .manage {
            color: blue;
            width: 100%;
            margin-bottom: 10px;
            text-align: right;
        }
        
        .add-icon-container {
            position: relative;
            width: 127px;
        }
        
        .admin {
            visibility: hidden;
        }
        
        [data-admin="superuser"] {
            visibility: visible;
            display: block!important;
        }
        
        [data-adminoff="superuser"] {
            display: none;
        }
        
        .admin1 {
            display: none;
        }
        .accountdetail {
            width: 50%;
        }
        .submit {
            width: 100%;
            text-align: right;
            margin-top: 17px;
            margin-right: 18px;
        }
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


        </style>
        <div class="title-rightpaneldraw"> ${ this.title } </div>
        <div style="background-color: #e6e6e6;">
            <div class="close-interface">
                <span on-tap="${() => this.close()}">Close</span>
                <iron-icon icon="close" on-tap="${() => this.close()}"></iron-icon>
            </div>
        </div>
        <div class="table-padding">
          <div id="table">
          </div>
        </div>
        <iron-ajax id="ajaxOption" method="GET" handle-as="json" on-response="${(item) => this.responseOption(item)}" content-type="application/json"></iron-ajax>
        `
    }
}

customElements.define("chartofaccounts-list", ChartofAccountsList);