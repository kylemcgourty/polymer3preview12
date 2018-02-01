import { LitElement, html } from '../../../node_modules/@polymer/lit-element/lit-element.js'
export class SortPanel extends LitElement {
    static get properties() {
        return {
            showTitle: {
                type: Object,
                reflectToAttribute: true,
                notify: true,
                value: function() {
                    return {
                        display0: "block",
                        display1: "hidden",
                        tableTitle: "",
                    }
                }
            },
            history: {
                type: Array,
                value: function() {
                    return []
                }
            },
            data: {
                type: Array,
                value: function() {
                    return []
                }
            },
            model: {
                type: Object,
                notify: true,
                reflectToAttribute: true,
                value: function() {
                    return {}
                }
            }
        }
    }

    static get observers() {
        return []
    }

    constructor() {
        super()
        this.display0 = ""
    }

    open(model, index, showTitle) {
        this.set('showTitle', showTitle)
        this.model = model
        let procedure = false

        let lineitems
        if (this.model.lineitems) {
            this.list = this.model.lineitems
            lineitems = JSON.parse(JSON.stringify(model.lineitems))
            lineitems[index - 1].highlight = "selected"
        } else if (this.model.transportapps) {
            this.list = this.model.transportapps
            lineitems = JSON.parse(JSON.stringify(model.transportapps))
            lineitems[index - 1].highlight = "selected"
        } else if (this.model.productgrouping) {
            this.list = this.model.productgrouping[0].items;
            lineitems = JSON.parse(JSON.stringify(model.productgrouping[0].items))
            lineitems[index - 1].highlight = "selected"

        } else if (this.model[0].procedures) {
            this.list = this.model
            lineitems = JSON.parse(JSON.stringify(model))
            lineitems[index].highlight = "selected";
            procedure = true;
        }

        procedure ? this.current = index : this.current = index - 1;
        this.set('data', lineitems)

        this.unshift('data', {
            // 0: "and here",
            above: "Above",
            below: "Below",
            index: "here",
        })
    }


    movebelow(e) {

        let index = e.model.index;
        let li = this.list[this.current]

        this.next = index;

        if (this.next > this.current) {
            this.splice('list', this.next, 0, li)
            this.splice('list', this.current, 1)
        } else if (this.current > this.next) {
            let l = this.splice('list', this.current, 1)
            this.splice('list', this.next, 0, l[0])
        } else {
            this.close()
            return;
        }

        if (this.showTitle) {

            if (this.showTitle.tableTitle === "Sort Service Location") {

                this.dispatchEvent(new CustomEvent('sortedServices', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        model: this.model
                    }
                }))
            }
        } else {
            this.dispatchEvent(new CustomEvent('sorted', {
                bubbles: true,
                composed: true,
                detail: {
                    model: this.model
                }
            }))
        }
        this.close()
    }



    moveabove(e) {

        let index = e.model.index;
        let li = this.list[this.current]
        this.next = index - 1;

        if (this.next > this.current) {
            this.splice('list', this.next, 0, li)
            this.splice('list', this.current, 1)
        } else if (this.current > this.next) {
            let l = this.splice('list', this.current, 1)
            this.splice('list', this.next, 0, l[0])
        } else {
            this.close()
            return;
        }

        if (this.showTitle) {

            if (this.showTitle.tableTitle === "Sort Service Location") {

                this.dispatchEvent(new CustomEvent('sortedServices', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        model: this.model
                    }
                }))
            }
        } else {

            this.dispatchEvent(new CustomEvent('sorted', {
                bubbles: true,
                composed: true,
                detail: {
                    model: this.model
                }
            }))
        }
        this.close()
    }


    scrollTop() {
        this.shadowRoot.getElementById('top').scrollIntoView()
    }
    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    ready() {
        super.ready()
    }

    render({ showTitle, history, data, model }) {
        return html ` <style include="shared-styles iron-flex iron-flex-alignment">
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

        .table-padding {
            padding-left: 16px;
            padding-right: 16px;
            margin-top: 20px;
            min-height: 2000px;
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

        .container:nth-child(2) .unit {
            display: block;
            background-color: #a0abbc;
            color: white;
            height: 33px;
            font-size: 17px;
            min-height: 33px;
            line-height: 1.0;
            box-shadow: none;
            margin-top: 0px;
        }

        .container:nth-child(2) .middle {
            visibility: hidden;
        }

        .container:nth-child(2) .direction-icon {
            display: none;
        }

        .title {
            display: none;
        }

        .container:nth-child(2) .title {
            display: block;
        }

        .unit {
            height: 33px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            background-color: #eee;
            margin-top: 6px;
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
        }

        [data-selected="selected"] {
            background-color: #b5cdf4;
        }

        .direction-icon {
            margin-top: -10px;
        }

        .left {
            width: 33%;
            margin-top: 8px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            flex-grow: 1;
            text-align: center;
        }

        .middle {
            width: 33%;
            margin-top: 8px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            flex-grow: 1;
            text-align: center;
        }

        .right {
            margin-top: 8px;
            width: 33%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            flex-grow: 1;
            text-align: center;
        }
        </style>
        <div class="page">
            <div id="top"></div>
            <div class="title-rightpaneldraw" style="display: ${showTitle.display0}">Sort Item </div>
            <div class="title-rightpaneldraw" style="display: ${showTitle.display1}"> ${showTitle.tableTitle}</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
                <div id="parts" class="results-container layout vertical">
                    <iron-list id="list" items="${data}" multi-selection selection-enabled scroll-target="document">
                        <template>
                            <div class="container">
                                <div data-selected$="${item.highlight}" class="unit">
                                    <div class="layout horizontal">
                                        <div class="left">
                                            <div class="title"> ${item.above}</div>
                                            <paper-icon-button on-tap="moveabove" class="direction-icon" icon="editor:vertical-align-top"></paper-icon-button>
                                        </div>
                                        <div class="middle"> ${index} </div>
                                        <div class="right">
                                            <div class="title">${item.below}</div>
                                            <paper-icon-button on-tap="movebelow" class="direction-icon" icon="editor:vertical-align-bottom"></paper-icon-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </iron-list>
                </div>
            </div>
            <iron-ajax id="ajaxSingle" method="GET" handle-as="json" on-response="receiveSingle" content-type="application/json"></iron-ajax>
            <iron-ajax id="ajaxHistory" method="POST" handle-as="json" url="${url}" on-response="receiveRecords" content-type="application/json"></iron-ajax>`
    }
}

customElements.define('sort-panel', SortPanel);