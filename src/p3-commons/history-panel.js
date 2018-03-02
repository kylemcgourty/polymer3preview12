import {LitElement, html} from '../../node_modules/@polymer/lit-element/lit-element.js'
import {repeat} from '../../node_modules/lit-html/lib/repeat.js'
import {render} from '../../node_modules/lit-html/lib/lit-extended.js';

export class HistoryPanel extends LitElement {
    
    static get properties() {
        return {

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
            pageTitle: {
                type: String,
            }
        }
    }

    static get observers() {
        return [
        ]
    }

    constructor() {
        super();
        this.history = [];
        this.pageTitle = "Unset";
    }

    propByString(o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, '');           // strip a leading dot
        var a = s.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in o) {
                o = o[k];
            } else {
                return;
            }
        }
        return o;
    }

    open(cols, getHistoryUrl, getSingleUrlPrefix, selectedEventName, pageTitle='History') {

        this.scrollTop()

        this.data = [];
        this.results = [];

        this.getSingleUrlPrefix = getSingleUrlPrefix;

        // Column definitions
        let col1 = cols[0];
        this.col1title = col1.title
        this.col1name = col1.name;
        this.col1formatter = col1.formatter
        if (!this.col1formatter) { this.col1formatter = this.defaultColumnFormatter}

        let col2 = cols[1];
        this.col2title = col2.title
        this.col2name = col2.name;
        this.col2formatter = col2.formatter
        if (!this.col2formatter) { this.col2formatter = this.defaultColumnFormatter}

        let col3 = cols[2];
        this.col3title = col3.title
        this.col3name = col3.name;
        this.col3formatter = col3.formatter
        if (!this.col3formatter) { this.col3formatter = this.defaultColumnFormatter}
        // End column definitions

        this.selectedEventName = selectedEventName;
        this.pageTitle = pageTitle;

        this.shadowRoot.querySelector("#ajaxHistory").url = getHistoryUrl;
        this.shadowRoot.querySelector("#ajaxHistory").generateRequest();

    }

    defaultColumnFormatter(v) {
        return v;
    }

    getRecord(item) {

        let record = item;

        if (this.getSingleUrlPrefix.includes('qasingle')){
            let idver = record.col1
            let id =record.col1.split("-")[0]
             this.shadowRoot.querySelector("#ajaxSingle").url = this.getSingleUrlPrefix + "/" + id+"/" + idver;
        } else {
             this.shadowRoot.querySelector("#ajaxSingle").url = this.getSingleUrlPrefix + "/" + record.id + "/" + record.idver;

        }

        this.shadowRoot.querySelector("#ajaxSingle").generateRequest();
    }

    receiveSingle(e) {

        let record = e.detail.response.results

        this.dispatchEvent(new CustomEvent(this.selectedEventName, {
            composed: true,
            bubbles: true,
            detail: {
                model: record,
                latestidver: this.latestidver
            }
        }))

        this.dispatchEvent(new CustomEvent('closePanel', {
            composed: true,
            bubbles: true
        }))


    }

    receiveRecords(e) {
        this.results = e.detail.response.results

        for (var i = 0; i < this.results.length; i++) {
            this.data.push({
                id: this.results[i].id,
                idver: this.results[i].idver,
                col1: this.col1formatter(this.propByString(this.results[i], this.col1name)),
                col2: this.col2formatter(this.propByString(this.results[i], this.col2name)),
                col3: this.col3formatter(this.propByString(this.results[i], this.col3name))
            });
        }

        let total

        this.data.push({
            col1: this.col1title,
            col2: this.col2title,
            col3: this.col3title
        })

        this.data.reverse()

        this.history = this.data
        this.results = this.results.reverse()
        this.latestidver = this.results[0].idver

        const histlist = data => {
            return html`
            ${repeat (
                data,
                item => item.idver,
                item => html`
                        <div class="container">
                            <div on-tap="${() =>this.getRecord(item)}" class="unit">
                                <div class="layout horizontal">
                                    <div class="left"> ${item.col1} </div>
                                    <div class="middle"> ${item.col2} </div>
                                    <div class="right"> ${item.col3} </div>
                                </div>
                            </div>
                        </div>
                    `
                )}
            `;
        }

        render(histlist(this.history), this.shadowRoot.getElementById("history"));

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

    render({history, url}) {
        return html`<style include="shared-styles iron-flex iron-flex-alignment">
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
        
        .container:nth-child(1) .unit {
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
        
        .left {
            width: 33%;
            margin-left: 20px;
            margin-top: 8px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            display: inline-block;
        }
        
        .middle {
            width: 33%;
            margin-top: 8px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            display: inline-block;
        }
        
        .right {
            margin-top: 8px;
            width: 33%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            display: inline-block;
        }
        </style>
        <div class="page">
            <div id="top"></div>
            <div class="title-rightpaneldraw">${this.pageTitle} </div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
                <div id="history" class="results-container layout vertical">
                </div>
            </div>
            <iron-ajax id="ajaxSingle" method="GET" handle-as="json" on-response="${this.receiveSingle.bind(this)}" content-type="application/json"></iron-ajax>
            <iron-ajax id="ajaxHistory" method="POST" handle-as="json" url="{{url}}" on-response="${this.receiveRecords.bind(this)}" content-type="application/json"></iron-ajax>`
    }


}

customElements.define('history-panel', HistoryPanel);