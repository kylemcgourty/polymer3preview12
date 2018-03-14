import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'


import { repeat } from '../../node_modules/lit-html/lib/repeat.js'

import { render } from '../../node_modules/lit-html/lib/lit-extended.js';

import '../../src/p3-commons/search-inner.js'



export class BarcodeParts extends LitElement {

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

        this.searchfields = {}
        this.searchfields.searchfield1 = "Part id"
        this.searchfields.searchfield2 = "Product No."
        this.searchfields.searchfield3 = "Brand"
        this.searchfields.searchfield4 = "Description"

        this.searchkeyindexes = {}
        this.searchkeyindexes.searchkeyindex1 = "idver"
        this.searchkeyindexes.searchkeyindex2 = "mfgpn_l"
        this.searchkeyindexes.searchkeyindex3 = "mfgname_l"
        this.searchkeyindexes.searchkeyindex4 = "description_l"

        this.searchdisplay = {}
        this.searchdisplay.display = "block"
    }

    static get observers() {
        return []

    }

    open(data, profileid) {




        this.profileid = profileid

        this.generateSearch(false, false, true)


        let temp = [];

        if (data.length == 0) {

            let querypackage = {
                query: "",
                option: "idver"
            }
            let ct = sessionStorage.getItem("CUSTOMTOKEN")
            this.shadowRoot.getElementById('ajaxSearch').headers['CustomToken'] = ct;
            this.shadowRoot.getElementById('ajaxSearch').url = "/inventory/search/" + profileid
            this.shadowRoot.getElementById('ajaxSearch').body = JSON.stringify(querypackage)
            this.shadowRoot.getElementById('ajaxSearch').generateRequest();

        }



        // this.set('data', temp)
    }

    receiveQueryResults(response) {
        console.log('the resp', response)



        this.data = response.detail.response.results

        if (this.data == null) {
            if (this.data == null && !this.shadowRoot.getElementById('noMatchesError')) {
                var error = document.createElement("div")
                error.textContent = "No matching results"
                error.style = "Color: red";
                error.id = "noMatchesError"
                this.shadowRoot.querySelector('#container').insertBefore(error, this.shadowRoot.querySelector('#ilcontainer'))
                this.data = []
            }
        }


        this.data.forEach((item, i) => {
            item.id = i;
            item.qty = 0
        })

        const datatable = (data, searchdisplay, searchkeyindexes, searchfields) => {
            return html `<div>
                <div id="container" class="table-padding">

                <search-inner searchdisplay="${ searchdisplay }" searchkeyindexes="${ searchkeyindexes }" searchfields="${ searchfields }"></search-inner>
                 <div id="ilcontainer" class="row">
                     </div>
                ${repeat (
                        data,
                        item => item.id,
                        item => html` 
                        <div  class="container">
                            <div class="height">
                                <div on-tap="${()=>{this.add(item)}}"><span class="pn key"> Product No. </span>
                                        <input disabled value="${item.mfgpn}" class="input">
                                </div>
                                <div on-tap="${()=>{this.add(item)}}"><span class="part key"> Part id </span>
                                        <input disabled value="${item.idver}" class="input">
                                </div>
                                <div class="qtyholder"><span class="qty key" on-tap="${()=>{this.add(item)}}"> Qty </span>
                                        <input id$="qty-${item.id}" value="${item.qty}"  class="input">
                                </div>
                                <div on-tap="${()=>{this.add(item)}}"><span class="description key"> Description </span>
                                        <input disabled value="${item.description}" class="input">
                                </div>
                            </div>
                        </div>
                      `
                )}
                </div>
                </div>`
        }

        render(datatable(this.data, this.searchdisplay, this.searchkeyindexes, this.searchfields), this.shadowRoot.getElementById('table'))




        if (this.data.length > 0 && this.shadowRoot.getElementById('noMatchesError')) {
            this.shadowRoot.getElementById('noMatchesError').remove()
        }

    }

    generateSearch(e, pass, retrieveAll) {
        let query
        if (e.detail) {
            if (e.detail.inputValue === "") {
                retrieveAll = true;
            } else if (e.keyCode !== 13 && e.type == "keyup") {
                return
            } else {
                retrieveAll = false
            }
            query = e.detail.inputValue;
        }

        if (retrieveAll) {
            query = ""
            this.searchoption = 'idver'
        }

        let querypackage = {
            query: query.toString().toLowerCase(),
            option: this.searchoption
        }
        let ct = sessionStorage.getItem("CUSTOMTOKEN")
        this.shadowRoot.querySelector('#ajaxSearch').headers['CustomToken'] = ct;
        this.shadowRoot.querySelector('#ajaxSearch').url = "/inventory/search/" + this.profileid
        this.shadowRoot.querySelector('#ajaxSearch').body = JSON.stringify(querypackage)
        this.shadowRoot.querySelector('#ajaxSearch').generateRequest()
    }



    setSearchOption(e) {

        e.detail.id === "all" ? this.generateSearch(e, undefined, 'idver') : this.searchoption = e.detail.id
        if (e.detail) {
            this.generateSearch(e)
        }

    }

    statusChange() {
        var data = this.searched || this.model
        this.responselist(data, true)
    }


    newFunction() {

        this.data.push({
            procedures: "",
            pass: "",
            issue: "",
            resolution: "",
            qa: "",
            title: "function"
        })


    }

    remove(item) {
        this.data.splice(item.id, 1)
    }

    add(item) {

        item.qty = this.shadowRoot.getElementById('qty-' + item.id).value
        this.dispatchEvent(new CustomEvent('BarcodeParts', {
            composed: true,
            bubbles: true,
            detail: {
                data: item
            }
        }))
    }

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
    ready() {
        super.ready()

        this.shadowRoot.addEventListener('selectedInnerSearchOption', e => {
            this.generateSearch(e);
        });
        this.shadowRoot.addEventListener('selectedSearchOption', e => {
            this.setSearchOption(e);
        });
    }
    render() {
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
            padding-left: 3%;
            padding-right: 3%;
            margin-top: 31px;
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
            width: 20%;
            float: left;
        }

        .input {
            width: 150%;
            /*min-height: 24px;*/
            text-align: initial;
            border: none;
            /*background-color: #eee;*/
            /*border-color: #eee;*/
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            /*box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);*/
            width: 100%;
            background-color: rgba(0, 0, 0, 0)
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
            color: #8c1409;
        }

        .listoptions {
            margin-bottom: 10px;
        }

        .main-button {
            background-color: #890101;
            color: white;
        }

        .buttons {
            float: right;
        }

        .key {
            min-width: 112px;
            width: 20%;
            display: inline-block;
        }

        .value {
            width: 78%;
        }

        .qtyholder .input {
            background-color: white;
            width: 100px;
            border: 1px solid black;
            padding-left: 3px;
            border-radius: 3px;
        }

        .head {
            margin-top: 14px;
        }

        .barcode-icons {
            margin-top: -9px;
        }

        .mfgpn {
            width: 86%;
        }

        .mfgpn .input {
            color: blue;
        }

        .mfgpn-input {
            width: 100%
        }

        .container:nth-child(even) .height {
            background-color: #eee
        }

        .container {
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
        }

        .height {
            margin-top: 5px;
        }

        @media (max-width: 479px) {
            .key {
                width: 32%;
                display: inline-block;
            }

            .value {
                width: 55%;
            }
        }
        </style>
        <div id="page">
            <div class="title-rightpaneldraw">Barcodes Parts</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="${()=>{this.close.bind(this)}}"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
                <div>
                </div>
               <div id="table">
               </div>
            </div>
            <div class="layout horizontal buttons">
                <!-- <paper-button class="button main-button" on-tap="add" raised>Add</paper-button> -->
                <paper-button class="button" on-tap="close" raised>Cancel</paper-button>
            </div>
        </div>
        <iron-ajax id="ajaxSearch" method="POST" handle-as="json" url="/inventory/search" on-response="${this.receiveQueryResults.bind(this)}" content-type="application/json"></iron-ajax>`
    }

}
customElements.define("barcode-parts", BarcodeParts);