import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'

import { repeat } from '../../node_modules/lit-html/lib/repeat.js'

import { render } from '../../node_modules/lit-html/lib/lit-extended.js';

import '../../src/p3-commons/search-inner.js'


export class CustomerCreditcards extends LitElement {
    static get properties() {
        return {
            panelname: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: "",
            },
            arrayvalues: {
                type: Array,
                reflectToAttribute: true,
                notify: true,
                value: function() {
                    return []
                },
            },

            listpage: {
                type: Boolean,
                value: false,

                reflectToAttribute: true
            },
            editpage: {
                type: Boolean,
                value: false,

                reflectToAttribute: true
            },
            flag: {
                type: Boolean,
                value: false,
                reflectToAttribute: true
            },
            newpage: {
                type: Boolean,
                value: false,

                reflectToAttribute: true
            },
            model: {
                type: Array,
                notify: true,
                value: function() {
                    return [];
                }
            },
            largeModel: {
                type: Object,
                notify: true,
                reflectToAttribute: true,
                value: function() {
                    return {};
                }
            },
            temporaryHolder: {
                type: Object,
                value: function() {
                    return {}
                }
            },
            billing: {
                type: Object,
                notify: true,
                value: function() {
                    return { //call return function
                        name: "",
                        attention: "",
                        fax: "",
                        phone: "",
                        street: "",
                        zip: "",
                        city: "",
                        state: "",
                        country: "",
                        email: "",
                        visibility4: "",
                        status: true
                    };
                }
            },

            url: {
                type: String,
                notify: true
            },
            searchurl: {
                type: String,
                notify: true
            },
            populate: {
                type: String,
                notify: true
            },
            searchstring: {
                type: String,
                notify: true,
                value: function() {
                    return "";
                }
            },
            queryMatches: {
                type: String
            },
            from: {
                type: String
            },
            status: {
                type: String,
                value: "true"
            },
            searchoption: {
                type: String,
                value: ""
            },
            singleObject: {
                type: Object,
                notify: true,
                value: function() {
                    return {};
                }
            },
            noneditable: {
                type: Boolean,
                value: false,
                reflectToAttribute: true
            }
        }
    }

    constructor() {
        super();
    }
    ready() {
        super.ready();
        this.shadowRoot.addEventListener('selectedInnerSearchOption', e => {
            this.generateSearch(e);
        });
        this.shadowRoot.addEventListener('selectedSearchOption', e => {
            this.setSearchOption(e);
        });
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
            1231
        }
        if (retrieveAll) {
            query = ""
            this.searchoption = 'id'
        }
        let querypackage = {
            query: query.toString().toLowerCase(),
            option: this.searchoption,
            type: this.panelname.toLowerCase()
        }
        if (this.panelname == "Profile") {
            this.queryurl = this.searchurl + "/search"
        } else {
            let spliturl = this.searchurl.split("/")
            this.queryurl = spliturl[1] + "/search/" + spliturl[3] + "/" + spliturl[4] + "/" + spliturl[5]
        }
        this.shadowRoot.querySelector('#ajaxSearch').url = this.queryurl
        this.shadowRoot.querySelector('#ajaxSearch').body = JSON.stringify(querypackage)
        this.shadowRoot.querySelector('#ajaxSearch').generateRequest()
    }



    setSearchOption(e) {
        e.detail.id === "all" ? this.generateSearch(e, undefined, 'id') : this.searchoption = e.detail.id

        if (e.detail) {
            this.generateSearch(e)
        }
    }

    statusChange(e) {

        var status = e.path[0].id

        this.status = this.filter[e.path[0].id]
        var data = this.searched || this.model
        this.responselist(data, true)
    }
    open3() {
        let querypackage = {
            query: "",
            option: "idver"
        }
        if (this.panelname == "Profile") {
            this.queryurl = this.searchurl + "/search"
        } else {
            let spliturl = this.searchurl.split("/")
            this.queryurl = spliturl[1] + "/search/" + spliturl[3] + "/" + spliturl[4] + "/" + spliturl[5]
        }
        this.shadowRoot.querySelector('#ajaxSearch').url = this.queryurl
        this.shadowRoot.querySelector('#ajaxSearch').body = JSON.stringify(querypackage)
        this.shadowRoot.querySelector('#ajaxSearch').generateRequest()
    }
    populateObject(item) {
        var customListener = "new" + this.panelname;

        var newObj = {}

        this.singleObject = item;

        this.arrayvalues.map((key, index) => {
            var newNumber = parseInt(index) + 1
            var fieldName = 'fieldvalue' + newNumber
            newObj[key] = this.singleObject[fieldName]
        })

        this.singleObject = {}
        this.singleObject = newObj

        this.dispatchEvent(new CustomEvent(`${customListener}`, {
            composed: true,
            bubbles: true,
            detail: {
                billing: this.singleObject,
                shipping: this.singleObject,
                contact: this.singleObject,
                bank: this.singleObject,
                trade: this.singleObject,
            }
        }));
    }
    open1(url, panelname, displaylist, fieldnamelist, singleObject, arrayvalues) {

        this.newpage = false
        this.editpage = true
        this.listpage = true

        this.arrayvalues = arrayvalues
        this.panelname = panelname
        this.displaylist = displaylist
        this.fieldnamelist = fieldnamelist
        this.singleObject = {}
        this.singleObject.fieldvalue1 = ""
        this.singleObject.fieldvalue2 = ""
        this.singleObject.fieldvalue3 = ""
        this.singleObject.fieldvalue4 = ""
        this.singleObject.fieldvalue5 = ""
        this.singleObject.fieldvalue6 = ""
        this.singleObject.fieldvalue7 = ""
        this.singleObject.fieldvalue8 = ""
        this.singleObject.fieldvalue9 = ""
        this.singleObject.fieldvalue10 = ""
        this.singleObject.fieldvalue11 = ""
        this.singleObject.fieldvalue12 = ""
        this.singleObject.fieldvalue13 = ""
        this.singleObject.fieldvalue14 = ""
        this.singleObject.fieldvalue15 = ""
        this.singleObject.id = Number
        this.singleObject.status = Boolean

        var BElocation = this.panelname.toLowerCase()

        if (typeof url === 'string') this.url = url;
        let baseurl = this.url.split("/")

        this.searchurl = "/customer/search/" + `${BElocation}` + "/" + baseurl[5]

        this.spacer = "margin-top:0px"

        const datatable = (item, newpage, spacer) => {
            return html ` 
                    <div class="title-rightpaneldraw">
                        New ${ panelname } Info
                    </div>
                    <div style="background-color: #e6e6e6;">
                        <div class="close-interface">
                            <span on-tap="${() => this.close()}">Close</span>
                            <iron-icon icon="close" on-tap="${() => this.close()}"></iron-icon>
                        </div>
                    </div>
                    <div class="title-style side-padding">
                      <div class='row'>
                          <div>
                            <div class="my-content top-margin">
                                <div class="col-xs-3" style="font-size: 15px; font-weight: bold">ACH</div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield1 }">
                                <div class="col-xs-3"> ${ fieldnamelist.fieldname1 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue1" value="${ item.fieldvalue1 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield2 }">
                                <div class="col-xs-3"> ${ fieldnamelist.fieldname2 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue2" value="${ item.fieldvalue2 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield3 }">
                                <div class="col-xs-3"> ${ fieldnamelist.fieldname3 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue3" value="${ item.fieldvalue3 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield4 }">
                                <div class="col-xs-3"> ${ fieldnamelist.fieldname4 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue4" value="${ item.fieldvalue4 }">
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class='row'>
                        <div>
                            <div class="my-content top-margin">
                                <div class="col-xs-3" style="font-size: 15px; font-weight: bold">Wire Info</div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield5 }">
                                <div class="col-xs-3"> ${ fieldnamelist.fieldname5 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue5" value="${ item.fieldvalue5 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield6 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname6 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue6" value="${ item.fieldvalue6 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield7 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname7 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue7" value="${ item.fieldvalue7 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield8 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname8 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue8" value="${ item.fieldvalue8 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield9 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname9 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue9" value="${ item.fieldvalue9 }">
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class='row'>
                        <div>
                            <div class="my-content top-margin">
                                <div class="col-xs-3" style="font-size: 15px; font-weight: bold">Credit Card</div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield10 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname10 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue10" value="${ item.fieldvalue10 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield11 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname11 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue11" value="${ item.fieldvalue11 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield12 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname12 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue12" value="${ item.fieldvalue12 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield13 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname13 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue13" value="${ item.fieldvalue13 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield14 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname14 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue14" value="${ item.fieldvalue14 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield15 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname15 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="newfieldvalue15" value="${ item.fieldvalue15 }">
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div class="my-content">
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-11"></div>
                            <div class="col-xs-12 col-md-11">
                                <div class="my-content button-row text-right" style="${ spacer }">
                                    <paper-button on-tap="${(item) => this.save1(item)}" class="button main-button" raised>Save</paper-button>
                                    <paper-button class="button" on-tap="${() => this.close1(item)}" raised>Cancel</paper-button>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
        }

        render(datatable(this.singleObject, this.newpage, this.spacer), this.shadowRoot.querySelector('#newpage'))


    }

    close1() {

        this.singleObject = {}

        this.dispatchEvent(new CustomEvent('closePanel', {
            composed: true,
            bubbles: true
        }));
    }


    save1(item) {
        this.singleObject.fieldvalue1 = this.shadowRoot.getElementById('newfieldvalue1').value
        this.singleObject.fieldvalue2 = this.shadowRoot.getElementById('newfieldvalue2').value
        this.singleObject.fieldvalue3 = this.shadowRoot.getElementById('newfieldvalue3').value
        this.singleObject.fieldvalue4 = this.shadowRoot.getElementById('newfieldvalue4').value
        this.singleObject.fieldvalue5 = this.shadowRoot.getElementById('newfieldvalue5').value
        this.singleObject.fieldvalue6 = this.shadowRoot.getElementById('newfieldvalue6').value
        this.singleObject.fieldvalue7 = this.shadowRoot.getElementById('newfieldvalue7').value
        this.singleObject.fieldvalue8 = this.shadowRoot.getElementById('newfieldvalue8').value
        this.singleObject.fieldvalue9 = this.shadowRoot.getElementById('newfieldvalue9').value
        this.singleObject.fieldvalue10 = this.shadowRoot.getElementById('newfieldvalue10').value
        this.singleObject.fieldvalue11 = this.shadowRoot.getElementById('newfieldvalue11').value
        this.singleObject.fieldvalue12 = this.shadowRoot.getElementById('newfieldvalue12').value
        this.singleObject.fieldvalue13 = this.shadowRoot.getElementById('newfieldvalue13').value
        this.singleObject.fieldvalue14 = this.shadowRoot.getElementById('newfieldvalue14').value
        this.singleObject.fieldvalue15 = this.shadowRoot.getElementById('newfieldvalue15').value
        this.singleObject.status = true
        console.log(this.arrayvalues)
        var newObj = {}
        this.arrayvalues.map((key, index) => {
            var newNumber = parseInt(index) + 1
            var fieldName = 'fieldvalue' + newNumber
            newObj[key] = this.singleObject[fieldName]
        })

        this.singleObject = {}
        this.singleObject = newObj

        this.shadowRoot.querySelector('#ajax1').url = this.url
        this.shadowRoot.querySelector('#ajax1').body = JSON.stringify(this.singleObject)
        this.shadowRoot.querySelector('#ajax1').generateRequest()

        this.close1();
    }



    success1(request) {
        var result = request.detail.response;
        if (result.error) {
            document.querySelector('#toast').text = result.error;
            document.querySelector('#toast').show();
        } else {
            document.querySelector('#toast').text = "Saved successfully.";
            document.querySelector('#toast').show();
        }

        this.singleObject = {}

        this.listpage = false;
        this.editpage = true;
        this.newpage = true;
    }
    ajaxerror1() {
        document.querySelector('#toast').show("Error saving contact.");
    }




    open(url, populate, panelname, displaylist, fieldnamelist, singleObject, searchfields, searchdisplay, searchkeyindexes, arrayvalues, noneditable = false) {

        this.newpage = true
        this.editpage = true
        this.listpage = false

        this.panelname = panelname
        this.displaylist = displaylist
        this.fieldnamelist = fieldnamelist
        this.singleObject = {}
        this.searchfields = searchfields
        this.searchdisplay = searchdisplay
        this.searchkeyindexes = searchkeyindexes
        this.arrayvalues = arrayvalues

        this.populate = populate

        this.searchoption = this.searchkeyindexes["searchkeyindex1"]

        var BElocation = this.panelname.toLowerCase()

        if (typeof url === 'string') this.url = url

        let baseurl = this.url.split("/")

        this.searchurl = "/customer/type/" + "credit" + "/" + baseurl[4] + "/" + baseurl[5]
        this.shadowRoot.querySelector('#ajaxList').url = this.searchurl
        this.shadowRoot.querySelector('#ajaxList').body = JSON.stringify()
        this.shadowRoot.querySelector('#ajaxList').generateRequest()
    }



    close() {
        this.dispatchEvent(new CustomEvent('closePanel', {
            bubbles: true,
            composed: true
        }))
    }

    cancel() {
        this.listpage = false;
        this.editpage = true;
        this.newpage = true;
        for (let i = 0; i < this.model.length; i++) {
            if (this.temporaryHolder.id === this.model[i].id) {
                this.model[i] = this.temporaryHolder
            }
        }

    }

    successList(e, ir) {
        this.model = []
        if (ir) {
            if (ir.response.results === null && !this.shadowRoot.getElementById('noMatchesError')) {
                var error = document.createElement("div")
                error.textContent = "No matching results"
                error.style = "Color: red";
                error.id = "noMatchesError"
                this.$.options.insertBefore(error, this.$.ilcontainer)
                this.setList([], true, true)
                return
            }

            if (ir.response.results === null && this.shadowRoot.getElementById('noMatchesError')) {
                return
            }
            if (this.shadowRoot.getElementById('noMatchesError')) {
                this.shadowRoot.getElementById('noMatchesError').remove()
            }



            ir.response.results.map((item) => {

                var newObj = {};
                this.arrayvalues.map(function(fieldname, index) {
                    var newNumber = parseInt(index) + 1
                    var newValue = 'fieldvalue' + newNumber
                    newObj[newValue] = item[fieldname]
                })
                // newObj[companyid] = item[companyid]
                newObj["id"] = item["id"]
                // newObj[idver] = item[idver]

                this.model.push(newObj)
            });
            var length = ir.response.results.length

        } else if (e.detail.response.results != null) {
            e.detail.response.results.map((item) => {

                var newObj = {};
                this.arrayvalues.map(function(fieldname, index) {
                    var newNumber = parseInt(index) + 1
                    var newValue = 'fieldvalue' + newNumber
                    newObj[newValue] = item[fieldname]
                })
                // newObj[companyid] = item[companyid]
                newObj["id"] = item["id"]
                // newObj[idver] = item[idver]

                this.model.push(newObj)
            });
            var length = e.detail.response.results.length
        }

        //no match record
        if (this.model.length == 0 && !this.shadowRoot.getElementById('noMatchesError')) {
            var error = document.createElement("div")
            error.textContent = "No matching results"
            error.style = "Color: red";
            error.id = "noMatchesError"
            this.shadowRoot.querySelector('#container').insertBefore(error, this.shadowRoot.querySelector('#ilcontainer'))
            this.model = ""
        }

        if (this.model.length > 0 && this.shadowRoot.getElementById('noMatchesError')) {
            this.shadowRoot.getElementById('noMatchesError').remove()
        }

        if (this.model.length > 0) {
                this.model[length - 1].visibility2 = true
                this.model[length - 1].visibility3 = false
                this.model[length - 1].visibility4 = false
                if (this.model[length - 1].id === 10001) {
                    this.model[length - 1].visibility2 = true
                    this.model[length - 1].visibility3 = true
                    this.model[length - 1].visibility4 = true
                    // this.set('model.' + (length - 1) + '.visibility2', 'hidden')
                    // this.set('model.' + (length - 1) + '.visibility3', 'hidden')
                    // this.set('model.' + (length - 1) + '.visibility4', 'hidden')
                    // this.notifyPath('model.' + (length - 1) + '.visibility2')
                    // this.notifyPath('model.' + (length - 1) + '.visibility3')
                    // this.notifyPath('model.' + (length - 1) + '.visibility4')
                }
            console.log("model visibility   ", this.model)

        }

        const datatable = (items, listpage, panelname, searchdisplay, searchkeyindexes, searchfields, displaylist, fieldnamelist) => {
            return html ` 
                <div class="title-rightpaneldraw">
                    ${ panelname } List
                </div>
                <div style="background-color: #e6e6e6;">
                    <div class="close-interface">
                        <span on-tap="${() => this.close()}">Close</span>
                        <iron-icon icon="close" on-tap="${() => this.close()}"></iron-icon>
                    </div>
                </div>
                <div id="container" class="table-padding">
                     <search-inner searchdisplay="${ searchdisplay }" searchkeyindexes="${ searchkeyindexes }" searchfields="${ searchfields }"></search-inner>
                     <div id="ilcontainer" class="row">
                     ${repeat (
                        items,
                        item => item.id,
                        item => html`

                <div style="padding-bottom:24px">
                    <div class="row layout horizontal">
                        <div class="my-content"></div>
                        <div class="layout vertical" style="width: 100%;">
                            <div class="my-content top-margin">
                                <div class="col-xs-3" style="font-size: 15px; font-weight: bold">ACH</div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield1 }; height:19px">
                                <div class="col-xs-3">${ fieldnamelist.fieldname1 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                   <div class="layout horizontal">
                                    <input disabled class="iconinput input" value="${ item.fieldvalue1 }" >
                                    <paper-icon-button hidden="true" class="right-icon1 smalleranimation" icon="icons:settings-overscan" on-tap="${() => this.populateObject(item)}"></paper-icon-button>
                                    <paper-icon-button hidden=${ item.visibility3 } class="right-icon1 smalleranimation" icon="create" on-tap="${() => this.edit(item)}"></paper-icon-button>
                                    <paper-icon-button hidden=${ item.visibility4 } class="right-icon2 smalleranimation" icon="icons:close" on-tap="${() => this.delete(item)}"></paper-icon-button>
                                  </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield2 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname2 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue2 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield3 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname3 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue3 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield4 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname4 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue4 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content top-margin">
                                <div class="col-xs-3" style="font-size: 15px; font-weight: bold">Wire Info</div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield5 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname5 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue5 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield6 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname6 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue6 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield7 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname7 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue7 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield8 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname8 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue8 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield9 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname9 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue9 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content top-margin">
                                <div class="col-xs-3" style="font-size: 15px; font-weight: bold">Credit Card</div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield10 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname10 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue10 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield11 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname11 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue11 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield12 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname12 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue12 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield13 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname13 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue13 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield14 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname14 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue14 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield15 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname15 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input disabled class="input" value="${ item.fieldvalue15 }">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        `)}
            </div>
                   `;
        }

        render(datatable(this.model, this.listpage, this.panelname, this.searchdisplay, this.searchkeyindexes, this.searchfields, this.displaylist, this.fieldnamelist), this.shadowRoot.querySelector('#listpage'))


    }

    edit(item) {

        this.listpage = true;
        this.editpage = false;
        this.newpage = true;
        var id = item.id;


        var singleObject = this.model.filter(function(x) {
            return x.id == id;
        })[0];
        if (singleObject) {
            this.singleObject = singleObject
            this.singleObject.status = true
            var tempSingleObject = (JSON.parse(JSON.stringify(this.singleObject)));
            this.temporaryHolder = tempSingleObject
        }

        this.spacer = "margin-top:0px"

        const datatable = (item, panelname, displaylist, fieldnamelist, spacer) => {
            return html ` 
                    <div class="title-rightpaneldraw">
                        Edit ${ panelname } Info
                    </div>
                    <div style="background-color: #e6e6e6;">
                        <div class="close-interface">
                            <span on-tap="${() => this.close()}">Close</span>
                            <iron-icon icon="close" on-tap="${() => this.close()}"></iron-icon>
                        </div>
                    </div>
                    <div class="title-style side-padding">
                        <div class='row'>
                          <div>
                            <div class="my-content top-margin">
                                <div class="col-xs-3" style="font-size: 15px; font-weight: bold">ACH</div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield1 }">
                                <div class="col-xs-3"> ${ fieldnamelist.fieldname1 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue1" value="${ item.fieldvalue1 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield2 }">
                                <div class="col-xs-3"> ${ fieldnamelist.fieldname2 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue2" value="${ item.fieldvalue2 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield3 }">
                                <div class="col-xs-3"> ${ fieldnamelist.fieldname3 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue3" value="${ item.fieldvalue3 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield4 }">
                                <div class="col-xs-3"> ${ fieldnamelist.fieldname4 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue4" value="${ item.fieldvalue4 }">
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class='row'>
                        <div>
                            <div class="my-content top-margin">
                                <div class="col-xs-3" style="font-size: 15px; font-weight: bold">Wire Info</div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield5 }">
                                <div class="col-xs-3"> ${ fieldnamelist.fieldname5 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue5" value="${ item.fieldvalue5 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield6 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname6 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue6" value="${ item.fieldvalue6 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield7 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname7 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue7" value="${ item.fieldvalue7 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield8 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname8 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue8" value="${ item.fieldvalue8 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield9 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname9 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue9" value="${ item.fieldvalue9 }">
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class='row'>
                        <div>
                            <div class="my-content top-margin">
                                <div class="col-xs-3" style="font-size: 15px; font-weight: bold">Credit Card</div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield10 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname10 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue10" value="${ item.fieldvalue10 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield11 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname11 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue11" value="${ item.fieldvalue11 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield12 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname12 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue12" value="${ item.fieldvalue12 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield13 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname13 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue13" value="${ item.fieldvalue13 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield14 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname14 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue14" value="${ item.fieldvalue14 }">
                                    </div>
                                </div>
                            </div>
                            <div class="my-content" style="display: ${ displaylist.displayfield15 }">
                                <div class="col-xs-3">${ fieldnamelist.fieldname15 }</div>
                                <div class="text-right col-xs-9" style="float:right">
                                    <div>
                                        <input class="input" id="editfieldvalue15" value="${ item.fieldvalue15 }">
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div class="my-content">
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-11"></div>
                            <div class="col-xs-12 col-md-11">
                                <div class="my-content button-row text-right" style="${ spacer }">
                                <paper-button on-tap="${(item) => this.save(item)}" class="button main-button" raised>Save</paper-button>
                                <paper-button class="button" on-tap="${() => this.cancel(item)}" raised>Cancel</paper-button>
                            </div>
                            </div>
                        </div>
                    </div>
            `;
        }

        render(datatable(this.singleObject, this.panelname, this.displaylist, this.fieldnamelist, this.spacer), this.shadowRoot.querySelector('#editpage'))


    }
    delete(item) {
        var id = item.id;

        var billing = this.model.filter(function(x) {
            return x.id == id;
        })[0];

        // if (this.largeModel.billing) {
        //     for (let i = 0; i < this.largeModel.billing.length; i++) {
        //         if (this.largeModel.billing[i].id === id) {
        //             this.splice('largeModel.billing', i, 1);
        //         }
        //     }
        // }
        this.shadowRoot.querySelector('#ajaxDelete').url = this.url + "/" + item.id
        this.shadowRoot.querySelector('#ajaxDelete').body = JSON.stringify(this.singleObject)
        this.shadowRoot.querySelector('#ajaxDelete').generateRequest()
    }

    responseDelete(request) {
        var result = request.detail.response;
        if (result) {
            document.querySelector('#toast').text = "Removed successfully, refreshing in 2s.";
            document.querySelector('#toast').show();
            setTimeout(function() {
                document.querySelector('#toast').text = "Removed successfully, refreshing in 1s.";
                document.querySelector('#toast').show();
            }, 1000);
            setTimeout(function() {
                document.querySelector('#toast').text = "Removed successfully, refreshing now.";
                document.querySelector('#toast').show();
            }, 2000);
            setTimeout(this.shadowRoot.querySelector('#ajaxList').generateRequest.bind(this.shadowRoot.querySelector('#ajaxList')), 2000);
        } else {
            document.querySelector('#toast').text = "Error removing.";
            document.querySelector('#toast').show();
        }
    }

    save(e) {

        this.singleObject.fieldvalue1 = this.shadowRoot.getElementById('editfieldvalue1').value
        this.singleObject.fieldvalue2 = this.shadowRoot.getElementById('editfieldvalue2').value
        this.singleObject.fieldvalue3 = this.shadowRoot.getElementById('editfieldvalue3').value
        this.singleObject.fieldvalue4 = this.shadowRoot.getElementById('editfieldvalue4').value
        this.singleObject.fieldvalue5 = this.shadowRoot.getElementById('editfieldvalue5').value
        this.singleObject.fieldvalue6 = this.shadowRoot.getElementById('editfieldvalue6').value
        this.singleObject.fieldvalue7 = this.shadowRoot.getElementById('editfieldvalue7').value
        this.singleObject.fieldvalue8 = this.shadowRoot.getElementById('editfieldvalue8').value
        this.singleObject.fieldvalue9 = this.shadowRoot.getElementById('editfieldvalue9').value
        this.singleObject.fieldvalue10 = this.shadowRoot.getElementById('editfieldvalue10').value
        this.singleObject.fieldvalue11 = this.shadowRoot.getElementById('editfieldvalue11').value
        this.singleObject.fieldvalue12 = this.shadowRoot.getElementById('editfieldvalue12').value
        this.singleObject.fieldvalue13 = this.shadowRoot.getElementById('editfieldvalue13').value
        this.singleObject.fieldvalue14 = this.shadowRoot.getElementById('editfieldvalue14').value
        this.singleObject.fieldvalue15 = this.shadowRoot.getElementById('editfieldvalue15').value
        this.singleObject.status = true


        var newObj = {}

        this.arrayvalues.map((key, index) => {
            var newNumber = parseInt(index) + 1
            var fieldName = 'fieldvalue' + newNumber
            newObj[key] = this.singleObject[fieldName]
        })

        newObj["id"] = this.singleObject.id

        this.singleObject = {}
        this.singleObject = newObj

        this.shadowRoot.querySelector('#ajaxSave').url = this.url + "/" + this.singleObject.id
        this.shadowRoot.querySelector('#ajaxSave').body = JSON.stringify(this.singleObject)
        this.shadowRoot.querySelector('#ajaxSave').generateRequest()
    }

    responseAction(request) {
        var result = request.detail.response;
        if (result.error) {
            document.querySelector('#toast').text = result.error;
            document.querySelector('#toast').show();
        } else {
            document.querySelector('#toast').text = "Saved successfully.";
            document.querySelector('#toast').show();
            this.shadowRoot.querySelector('#ajaxList').generateRequest()
            this.listpage = false;
            this.editpage = true;
            this.newpage = true;
        }
    }

    render({ admin, newpage, editpage, listpage }) {
        return html `
       <style include="iron-flex iron-flex-alignment">

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
            

              #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
        }
        
        iron-icon {
            height: 20px;
            width: 20px;
        }

        .ilrow {
            margin-bottom: 7px;
            background-color: #eee;
            width: 100%;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }

        .iron-position {
            text-align: left;
            padding-left: 35px;
        }
        
        .table-padding {
            padding-left: 16px;
            padding-right: 16px;
            margin-top: 26px;
            height: 100vh
        }
        
        .search-container {
            position: relative;
            width: 70%;
        }
        
        #listpage {
            overflow-y: auto;
            height: 100vh;
        }
        
        .results-container {
            margin-top: 12px;
            height: 76vh;
        }
        
        iron-list {
            flex: 1 1 auto;
        }
        
        .status-container {
            width: 83px;
            margin-left: 5%;
        }
        
        .search-icon {
            position: absolute;
            top: -6px;
            right: 0;
        }
        
        .search {
            width: 100%;
        }
        
        .view {
            border: none;
            color: blue;
            background: #eee;
            font-size: 14px;
        }
        
        .view:focus {
            outline: none!important;
        }
        
        #searchQuery {
            width: 100%;
            border: none;
            outline: none;
            border-bottom: 1px solid black;
        }
        
        #searchQuery::placeholder {
            font-size: 17px;
        }
        
        #searchQuery::-webkit-input-placeholder {
            font-size: 17px;
        }
        
        #searchQuery:-moz-placeholder {
            font-size: 17px;
        }
        
        #searchQuery::-moz-placeholder {
            font-size: 17px;
        }
        
        #searchQuery:-ms-input-placeholder {
            font-size: 17px;
        }
        
        .dropdown {
            margin-left: 26px;
        }
        
        paper-listbox {
            width: 100px;
            display: block;
            padding: 8px 0;
            color: #212121;
            overflow: hidden;
        }
        
        paper-dropdown-menu {
            display: block;
            margin-top: -15px;
            width: 100px;
        }
        
        paper-item.iron-selected {
            font-weight: bold;
            color: blue;
        }
        
        .layout-horizontal {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            background-color: #eee;
            margin-top: 9px;
        }
        
        div[class^="group"] {
            /*padding-left: 9px;*/
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        
        div[class^="box"] {
            /*min-height: 29px;*/
            min-height: 20px;
        }
        
        div[class^="bd"] {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            /*min-height: 35px;*/
            /*line-height: 2.5;*/
            /*padding-left: 3px;*/
        }
        
        div[class^="bd"]:first-child {
            width: 53%;
        }
        
        div[class^="bd"]:nth-child(3),
        div[class^="bd"]:nth-child(2) {
            width: 100%;
        }
        
        div[class^="group"],
        div[class^="box"] {
            width: 100%
        }
        
    /*    div[class^="group7"],
        div[class^="box7"] {
            width: 98.5%!important
        }*/
        
        .searchcontainer {
            margin-top: 9px;
        }
        
        .s-container1 div,
        .s-container2 div {
            margin-top: 8px;
            width: 109px;
        }
        
        .mobile-options {
            min-width: 73px;
            width: 5.1%;
        }
        
        .options {
            min-width: 73px;
            width: 5.1%;
        }
        
        .desk-opts {
            visibility: collapse;
            width: 0px;
            height: 0px;
            min-width: 0px;
        }
        
        .mobi-icon {
            height: 0px;
            padding: 0;
            width: 0px;
        }
        
        #list {
            flex: 1 1 auto;
        }
        
        .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }
        
        .input-textarea-edit {
            min-height: 57px;
            padding: 6px 2px;
            text-align: left;
            border: hidden;
            border-color: white;
            background-color: white;
            border-bottom: 1px dotted #000;
        }
        
        .input-textarea-list {
            min-height: 24px;
            max-width: 350px;
            text-align: initial;
            border: none;
            border-color: white;
            background-color: white;
        }
        
        .text-right {
            text-align: right;
        }
        
        .col-xs-12 {
            position: relative;
            min-height: 1px;
        }
        
        .col-xs-3 {
            position: relative;
            text-align: right;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 15%;
            float: left;
        }
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 80%;
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
        
        .cl-listborder {
            border: 1px solid lightgray;
            border-radius: 7px;
            background-color: #FFF;
        }
        
        .table-row {
            line-height: 48px;
            background-color: white;
            width: 100%;
            font-size: 13px;
            font-weight: 500;
        }
        
        .last-column {
            padding-right: 10px;
        }
        
        .my-content {
            font-size: 14px;
            /*min-height: 24px;*/
            clear:both;
        }
        
        .right-icon {
            position: absolute;
            right: 27px;
            bottom: 21px;
            z-index: 0;
        }
        
        .right-text {
            text-align: right;
        }
        
        .main-button {
            background-color: var(--title-background-normal);
            color: var(--title-normal);
        }
        
        .uploadicon {
            margin-top: 24px;
            min-height: 24px;
        }
        
        .title-top {
            padding-top: 10px;
        }
        
        .bottom {
            position: relative;
            float: left;
        }
        
        .bottom-listicon {
            float: top;
        }
        
        .search-row {
            margin-left: 0;
            margin-top: 0px;
            margin-bottom: 8px;
            padding-left: 15px;
            padding-right: 15px;
            height: 48px;
            position: relative;
        }
        
        
        .card-padding {
            padding-left: 15px;
            padding-right: 15px;
        }
        
        .row-style {
            padding-left: 0px;
            padding-right: 0px;
        }
        
        .title-style1 {
            padding-bottom: 0px;
            background-color: white;
            margin-top: 0px;
            margin-left: 16px;
            font-size: 16px;
            margin-right: 16px;
            margin-bottom: 20px;
            padding-top: 24px;
        }
        
        .side-padding {
            padding-left: 16px;
            padding-right: 16px;
            margin-top: 4%;
        }
        
        .CL-popup {
            padding-right: 0px;
            padding-left: 0px;
        }
        
        .icon-style {
            color: gray;
            float: right;
            left: 34px;
            bottom: -4px;
            border: 1px solid gray;
            margin-right: 40px;
        }
        
        .float-right {
            justify-content: flex-end;
        }
        
        .move-left {
            margin-left: -3.4%;
        }
        
        .fitting-width {
            width: 98%;
        }
        
        .float-left {
            float: left;
        }
        
        .set-height {
            height: 24px;
        }
        
        .padding-bottom {
            padding-bottom: 7px;
        }
        
        .title-font {
            font-size: 17px;
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
        
        #title {
            --paper-input-container-label: {
                font-size: 13px!important;
            }
            ;
            --paper-input-container-input: {
                font-size: 13px!important;
            }
            ;
        }
        
        .top-icons: {
            position:; relative;
        }

        /*@media (max-width: 479px) {
            .search-row {
                margin-left: 0px;
                margin-top: 0px;
                margin-bottom: 0px;
                height: 48px;
                position: relative;
                width: 50%;
            }
            .options {
                height: 30px;
            }
            div[class^="box"] {
                height: 30px;
            }
            div[class^="bd"] {
                height: 30px;
                line-height: 2.5;
            }
            div[class^="group"] {
                height: 30px;
                padding-left: 0px;
                width: 100%;
            }
            .layout-horizontal {
                height: 30px;
            }
            .ilrow:nth-child(1) .layout-horizontal {
                margin-top: 0px;
            }
            #expanded {
                height: 206px;
            }
            div[class^="box2"] {
                height: 60px!important;
            }
            div[class^="bd2"] {
                height: 60px!important;
                line-height: 2.5;
            }
            div[class^="group2"] {
                height: 60px!important;
            }
            .group1 {
                width: 78vw!important;
                padding-left: 0px!important;
                min-width: 69vw;
            }
            .bd1-1 {
                width: 42vw;
                max-width: 42vw;
            }
            .bd1-2 {
                width: 34vw;
                max-width: 34vw;
            }
            .bd2-mob {
                width: 14vw;
                height: 60px;
            }
            .bd2-1 {
                width: 77vw;
                white-space: normal!important;
                overflow: visible!important;
                height: 60px;
                padding-left: 1vw;
            }
            .bd3-1,
            .bd4-1,
            .bd5-1,
            .bd6-1 {
                width: 35vw;
                padding-left: 1vw;
            }
            .bd3-2,
            .bd4-2,
            .bd5-2,
            .bd6-2 {
                width: 40vw;
            }
            .big-frame {
                padding: 0px 0px;
                background: rgba(238, 238, 238, 0.5);
            }
            .search-padding {
                padding-left: 0px;
                padding-right: 0px;
            }
            .right-icon {
                max-width: 24px;
                max-height: 24px;
                width: 24px;
                height: 24px;
            }
            only-mobile {
                display: inline-block;
            }
            .lightgrey-padding {
                padding-top: 0;
                padding-left: 4vw;
                padding-right: 4vw;
                padding-bottom: 4vw;
                background-color: rgba(238, 238, 238, 1.0);
            }
            .lightgrey-padding-inner {
                background-color: #fff;
                min-height: 2700px;
            }
            .bottom {
                margin-right: 0px;
            }
            .search {
                width: 100%
            }
            .mobile-opts {
                display: block;
            }
            .desk-icon {
                height: 0px;
                padding: 0;
                width: 0px;
            }
            .mob-icon {
                height: 48px;
                width: 48px;
                margin-left: -6px;
                padding-top: 0px;
            }
            .rm-icon-mid {
                height: 40px;
                width: 40px;
                padding-left: 3px;
                padding-top: 2px;
                padding-bottom: 12px;
            }
            section {
                display: block;
                padding: 0;
            }
            .button-row {
                padding-right: 8px;
            }
            .visible-xs {
                display: inline-block !important;
            }
        }*/

        .right-icon1 {
            position: absolute;
            right: 0px;
            z-index: 0;
        }
        .right-icon2 {
            position: absolute;
            right: 36px;
            z-index: 0;
        }

        .right-icon3 {
            position: absolute;
            right: 72px;
            z-index: 0;
        }

        .right-icon4 {
            position: absolute;
            right: 79px;
            /*bottom: -7px;*/
            bottom: -9px;
            z-index: 0;
        }

        .button-row {
            padding-top: 16px;
        }
        .smalleranimation, host {
          padding: 0px;
          height: 19px;
          width: 24px;
        }
        </style>
        <div id="listpage" hidden=${ listpage }></div>
        <div id="editpage" hidden="${ editpage }"></div>
        <div id="newpage" hidden=${ newpage }></div>
        <iron-ajax id="ajaxSearch" method="POST" handle-as="json" on-response="${this.successList.bind(this)}" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajax1" method="POST" on-response="${this.success1.bind(this)}" on-error="${this.ajaxerror1.bind(this)}"></iron-ajax>
        <iron-ajax id="ajaxList" method="GET" handle-as="json" content-type="application/json" on-response="${this.successList.bind(this)}"></iron-ajax>
        <iron-ajax id="ajaxSave" method="PUT" handle-as="json" on-response="${this.responseAction.bind(this)}" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxDelete" method="DELETE" handle-as="json" on-response="${this.responseDelete.bind(this)}"></iron-ajax>
        `
    }
}
customElements.define("customer-creditcards", CustomerCreditcards);