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
            // model1: {
            //     type: Object,
            //     notify: true,
            //     reflectToAttribute: true,
            //     value: function() {
            //         return {}
            //     }
            // }

        }
    }

    static get observers() {
        return [
            // 'showme(inventoryList)',
            // "statusChange(status)"

        ]
    }

    constructor() {
        super();
            // this.widthSetter();
        this.url = '';
        this.history = [];
    }

    open(model, company, name, title, url, route, profileid) {

        // url - /servicename/GetHistory
        // route - servicename
        console.log('Open history-panel')

        this.scrollTop()
        this.url = url

        this.url1 = this.url + "/" + profileid + "/" + model.companyid + "/" + model.id + "/" + model.idver
       
        this.route = route
        this.name = name;
        this.title = title
        this.model = model
        this.company = company
        this.data = [];
        this.results = [];
        this.profileid = profileid

        this.shadowRoot.querySelector("#ajaxHistory").url = this.url1;
        this.shadowRoot.querySelector("#ajaxHistory").generateRequest();

    }

    getRecord(e) {

        let index = e.model.index - 1


        let record = this.results[index]

        // || 'createinvoices' || 'shipreturnpos'

            this.$.ajaxSingle.url = '/' + this.route + '/getSingle/' + this.profileid+ "/" + record.companyid + "/" + record.id + "/" + record.idver

       
        this.$.ajaxSingle.generateRequest()
    }

    receiveSingle(e) {

        let record = e.detail.response.results

        if (this.route === 'createcreditmemos' || 'createinvoices' || 'shipreturnpos') {
            var hold = this.url
            var newhold = hold.replace(this.url.split('/')[1], this.route)
            this.set('url', newhold)
        }   

        console.log('the url and viewevent', this.url +"ViewEvent")

        this.dispatchEvent(new CustomEvent(this.url + "-ViewEvent", {
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


        var from = e.detail.url.split("/")[1];


        for (var i = 0; i < this.results.length; i++) {

            if (from === "purchaseorder") {

                this.data.push({
                    idver: this.results[i].idver,
                    company: this.results[i].to.companyname,
                    total: this.usd(this.results[i].sototals.total)
                });
            } else if (from === "vendor" || from == "customer") {

                this.data.push({
                    idver: this.results[i].idver,
                    company: this.results[i].companyname
                });
            } else if (from == "profile") {
                this.data.push({
                    idver: this.results[i].idver,
                    company: this.results[i].ma_company,
                    total: this.results[i].ma_street + ", " + this.results[i].ma_city + ", " + this.results[i].ma_state + ", " + this.results[i].ma_zip + ", " + this.results[i].ma_country
                })
            } else {

                this.data.push({
                    idver: this.results[i].idver,
                    company: this.results[i].companyname,
                    total: this.usd(this.results[i].total)
                });
            }
        }

        let total

        if (from == "profile") {
            total = "Location"
        } else {
            total == "Total"
        }

        this.data.push({
            idver: this.name,
            company: this.title,
            total: total
        })

        this.data.reverse()



        this.history = this.data

        this.results = this.results.reverse()

        this.latestidver = this.results[0].idver

        const histlist = data => {
            return html`
            <div>
            ${repeat (
                data,
                item => item.id,
                item => html`
                        <div class="container">
                            <div on-tap="${() =>this.getRecord(item)}" class="unit">
                                <div class="layout horizontal">
                                    <div class="left"> ${item.idver} </div>
                                    <div class="middle"> ${item.company} </div>
                                    <div class="right"> ${item.total} </div>
                                </div>
                            </div>
                        </div>
                    `
                )}
            </div>`;
        }

        render(histlist(this.history), this.shadowRoot.querySelector("#parts"));

    }

    usd(value) {

    var numberWithCommas = function(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    if (typeof value == "number") {
        value = value.usd(2);


        value = numberWithCommas(value);

        return value;

    } else if (value === undefined) {

        return;

    } else if (value.indexOf('$') != -1) {

        return value;

    } else {

        value = numberWithCommas(value);

        return '$' + value;
    }
    // return value;
};

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
        console.log('rendering history-panel');
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
    }
    
    .middle {
        width: 33%;
        margin-top: 8px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .right {
        margin-top: 8px;
        width: 33%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    </style>
    <div class="page">
        <div id="top"></div>
        <div class="title-rightpaneldraw">History </div>
        <div style="background-color: #e6e6e6;">
            <div class="close-interface">
                <span on-tap="close">Close</span>
                <iron-icon icon="close" on-tap="close"></iron-icon>
            </div>
        </div>
        <div class="table-padding">
            <div id="parts" class="results-container layout vertical">
            </div>
        </div>
        <iron-ajax id="ajaxSingle" method="GET" handle-as="json" on-response="receiveSingle" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxHistory" method="POST" handle-as="json" url="{{url}}" on-response="${this.receiveRecords.bind(this)}" content-type="application/json"></iron-ajax>`
    }


}

customElements.define('history-panel', HistoryPanel);