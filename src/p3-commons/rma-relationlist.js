import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'
import { repeat } from '../../node_modules/lit-html/lib/repeat.js'
import { render } from '../../node_modules/lit-html/lib/lit-extended.js';

export class RMARelationList extends LitElement {
    static get properties() {
        return {
            customerid: {
                type: Array,
                value: function() {
                    return []
                }
            },
            vendorid: {
                type: Array,
                value: function() {
                    return []
                }
            },
            rmahistory: {
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
            },
            model1: {
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
    convertDate3(input) {
        if (input === undefined) {
            input = new Date().toString();
            return input.slice(4, 16)
        } else {
            var localtime = (new Date(input)).toString();
            var sliced = localtime.split(" ");
            var result = sliced[1] + " " + sliced[2] + " " + sliced[3];
            return result;
        }
    }

    constructor() {
        super()
        this.rmahistory = [];
        this.pageTitle = "Unset";
    }

    open(model, requestfrom) {
        console.log("requestfrom in open panel", requestfrom)
        this.scrollTop()
        this.model = model
        if (requestfrom == "custrec") {
            this.pageTitle = "Received RMA"
            this.idname = "Rec. Id"
            this.qtyname = "Rec. Qty"
            this.url = "/requestcrma/GetrecHistory/"
            this.profileid = this.model.profileid
            this.crmaid = this.model.id
            this.customerid = this.model.companyid
        } else if (requestfrom == "custship") {
            this.pageTitle = "Ship RMA"
            this.idname = "Ship. Id"
            this.qtyname = "Ship. Qty"
            this.url = "/requestcrma/GetshipHistory/"
            this.profileid = this.model.profileid
            this.crmaid = this.model.id
            this.customerid = this.model.companyid
        } else if (requestfrom == "custrec-child") {
            this.pageTitle = "Received RMA"
            this.idname = "Rec. Id"
            this.qtyname = "Rec. Qty"
            this.url = "/receivecrma/GetrecHistory/"
            this.profileid = this.model.profileid
            this.crmaid = this.model.crmaid
            this.customerid = this.model.companyid
        } else if (requestfrom == "custship-child") {
            this.pageTitle = "Ship RMA"
            this.idname = "Ship. Id"
            this.qtyname = "Ship. Qty"
            this.url = "/receivecrma/GetshipHistory/"
            this.profileid = this.model.profileid
            this.crmaid = this.model.crmaid
            this.customerid = this.model.companyid
        } else if (requestfrom == "vendrec") {
            this.pageTitle = "Receivd RMA"
            this.idname = "Rec. Id"
            this.qtyname = "Rec. Qty"
            this.url = "/requestvrma/GetrecHistory/"
            this.profileid = this.model.profileid
            this.vrmaid = this.model.id
            this.vendorid = this.model.companyid
        } else if (requestfrom == "vendship") {
            this.pageTitle = "Ship RMA"
            this.idname = "Ship. Id"
            this.qtyname = "Ship. Qty"
            this.url = "/requestvrma/GetshipHistory/"
            this.profileid = this.model.profileid
            this.vrmaid = this.model.id
            this.vendorid = this.model.companyid
        } else if (requestfrom == "vendrec-child") {
            this.pageTitle = "Receivd RMA"
            this.idname = "Rec. Id"
            this.qtyname = "Rec. Qty"
            this.url = "/receivevrma/GetrecHistory/"
            this.profileid = this.model.profileid
            this.vrmaid = this.model.vrmaid
            this.vendorid = this.model.companyid
        } else if (requestfrom == "vendship-child") {
            this.pageTitle = "Ship RMA"
            this.idname = "Ship. Id"
            this.qtyname = "Ship. Qty"
            this.url = "/receivevrma/GetshipHistory/"
            this.profileid = this.model.profileid
            this.vrmaid = this.model.vrmaid
            this.vendorid = this.model.companyid
        }

        this.datename = "Date"
        this.rmahistory = []
        this.data = [];
        this.results = [];
        console.log(this.rmahistory)

        console.log("this.route in opne", this.route)
        console.log("this.url in opne", this.url)

        if (this.crmaid) {
            this.shadowRoot.querySelector("#ajaxrmaHistory").url = this.url + this.profileid + "/" + this.model.companyid + "/" + this.crmaid
        } else if (this.vrmaid)(
            this.shadowRoot.querySelector("#ajaxrmaHistory").url = this.url + this.profileid + "/" + this.model.companyid + "/" + this.vrmaid
        )
        let ct = sessionStorage.getItem("CUSTOMTOKEN")
        this.shadowRoot.querySelector('#ajaxrmaHistory').headers['CustomToken'] = ct;
        this.shadowRoot.querySelector("#ajaxrmaHistory").generateRequest();

    }

    receiveRecords(e) {
        this.results = e.detail.response.results
        console.log('e', this.results.length)

        for (var i = 0; i < this.results.length; i++) {
            this.data.push({
                idver: this.results[i].idver,
                qty: this.results[i].qty,
                date: this.convertDate3(this.results[i].createdat)
            });
        }

        this.data.push({
            idver: this.idname,
            qty: this.qtyname,
            date: this.datename
        })

        this.data.reverse()

        this.rmahistory = []

        this.rmahistory = this.data
        console.log(this.rmahistory)

        this.results = this.results.reverse()
        if (this.results.length > 0) {
            this.latestidver = this.results[0].idver
        }
        const rmahistlist = data => {
            return html `
            ${repeat (
                data,
                item => item.idver,
                item => html`
                        <div class="container">
                            <div on-tap="${() =>this.getRecord(item)}" class="unit">
                                <div class="layout horizontal">
                                    <div class="left"> ${item.idver} </div>
                                    <div class="middle"> ${item.qty} </div>
                                    <div class="right"> ${item.date} </div>
                                </div>
                            </div>
                        </div>
                    `
                )}
            `;
        }

        render(rmahistlist(this.rmahistory), this.shadowRoot.getElementById("relation"));
    }

    getRecord(item) {

        let idver = item.idver
        let id = idver.split("-")[0];

        if (this.url == "/requestcrma/GetrecHistory/") {
            this.shadowRoot.querySelector("#ajaxSingle").url = "/receivecrma/" + this.profileid + "/" + this.customerid + "/" + id + "/" + idver
        } else if (this.url == "/requestcrma/GetshipHistory/") {
            this.shadowRoot.querySelector("#ajaxSingle").url = "/shipcrma/" + this.profileid + "/" + this.customerid + "/" + id + "/" + idver
        } else if (this.url == "/receivecrma/GetrecHistory/") {
            this.shadowRoot.querySelector("#ajaxSingle").url = "/receivecrma/" + this.profileid + "/" + this.customerid + "/" + id + "/" + idver
        } else if (this.url == "/receivecrma/GetshipHistory/") {
            this.shadowRoot.querySelector("#ajaxSingle").url = "/shipcrma/" + this.profileid + "/" + this.customerid + "/" + id + "/" + idver
        } else if (this.url == "/requestvrma/GetrecHistory/") {
            this.shadowRoot.querySelector("#ajaxSingle").url = "/receivevrma/" + this.profileid + "/" + this.vendorid + "/" + id + "/" + idver
        } else if (this.url == "/requestvrma/GetshipHistory/") {
            this.shadowRoot.querySelector("#ajaxSingle").url = "/shipvrma/" + this.profileid + "/" + this.vendorid + "/" + id + "/" + idver
        } else if (this.url == "/receivevrma/GetrecHistory/") {
            this.shadowRoot.querySelector("#ajaxSingle").url = "/receivevrma/" + this.profileid + "/" + this.vendorid + "/" + id + "/" + idver
        } else if (this.url == "/receivevrma/GetshipHistory/") {
            this.shadowRoot.querySelector("#ajaxSingle").url = "/shipvrma/" + this.profileid + "/" + this.vendorid + "/" + id + "/" + idver
        }

        let ct = sessionStorage.getItem("CUSTOMTOKEN")
        this.shadowRoot.querySelector('#ajaxSingle').headers['CustomToken'] = ct;
        this.shadowRoot.querySelector("#ajaxSingle").generateRequest()
    }

    receiveSingle(e) {

        let record = e.detail.response.results
        console.log(record)

        if (this.url == "/requestcrma/GetrecHistory/" || this.url == "/receivecrma/GetrecHistory/") {
            console.log("CUSTREC")
            this.dispatchEvent(new CustomEvent("toCustomerReceiveRMAView", {
                composed: true,
                bubbles: true,
                detail: {
                    model: record,
                    latestidver: record.idver,
                    path: '/customerreceivermas/view/' + record.to.companyname + '/' + record.idver,
                }
            }))


            this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }))

            // this.route.path = '/customerreceivermas/view/' + record.to.companyname + '/' + record.idver

            // this.path = ""
        } else if (this.url == "/requestcrma/GetshipHistory/") {
            console.log("CUSTSHIP")
            this.dispatchEvent(new CustomEvent("toCustomerShipRMAView", {
                composed: true,
                bubbles: true,
                detail: {
                    model: record,
                    latestidver: record.idver,
                    path: '/customershiprmas/view/' + record.to.companyname + '/' + record.idver,
                }
            }))


            this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }))

            // this.route.path = '/customershiprmas/view/' + record.to.companyname + '/' + record.idver

            // this.path = ""
        } else if (this.url == "/requestvrma/GetrecHistory/" || this.url == "/receivevrma/GetrecHistory/") {
            console.log("VENDREC")
            this.dispatchEvent(new CustomEvent("toVendorReceiveRMAView", {
                composed: true,
                bubbles: true,
                detail: {
                    model: record,
                    latestidver: record.idver,
                    path: '/vendorreceivermas/view/' + record.shipto.companyname + '/' + record.idver,
                }
            }))


            this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }))

            // this.route.path = '/vendorreceivermas/view/' + record.shipto.companyname + '/' + record.idver

            // this.path = ""
        } else if (this.url == "/requestvrma/GetshipHistory/") {
            console.log("VENDSHIP")
            this.dispatchEvent(new CustomEvent("toVendorShipRMAView", {
                composed: true,
                bubbles: true,
                detail: {
                    model: record,
                    latestidver: record.idver,
                    path: '/vendorshiprmas/view/' + record.shipto.companyname + '/' + record.idver,
                }
            }))


            this.dispatchEvent(new CustomEvent('closePanel', {
                composed: true,
                bubbles: true
            }))

            // this.route.path = '/vendorshiprmas/view/' + record.shipto.companyname + '/' + record.idver

            // this.path = ""
        }
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


    render({ url }) {
        return html `<style include="shared-styles iron-flex iron-flex-alignment">
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
            <div class="title-rightpaneldraw">${ this.pageTitle }</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="${this.close.bind(this)}">Close</span>
                    <iron-icon icon="close" on-tap="${this.close.bind(this)}"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
                <div id="relation" class="results-container layout vertical">
                </div>
            </div>
            <iron-ajax id="ajaxrmaHistory" method="POST" handle-as="json" url="{{url}}" on-response="${this.receiveRecords.bind(this)}" content-type="application/json"></iron-ajax>
            <iron-ajax id="ajaxSingle" method="GET" handle-as="json" on-response="${this.receiveSingle.bind(this)}" content-type="application/json"></iron-ajax>
        `
    }

}

customElements.define("rma-relationlist", RMARelationList);