  import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'


  import { repeat } from '../../node_modules/lit-html/lib/repeat.js'

  import { render } from '../../node_modules/lit-html/lib/lit-extended.js';


  export class CombinedpanelList extends LitElement {
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
                      return [

                      ]
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

      generateSearch(e, pass, retrieveAll) {
          if (e) {
              if (e.keyCode !== 13 && e.type == "keypress") {
                  return
              }
          }
          let query = this.$.searchQuery.value.trim();
          if (retrieveAll) {
              query = ""
              this.searchoption = 'id'
          }
          let querypackage = {
              query: query.toString().toLowerCase(),
              option: this.searchoption,
              type: this.panelname.toLowerCase()
          }

          console.log("here is the query package", querypackage)

          this.$.ajaxSearch.body = JSON.stringify(querypackage)
          this.$.ajaxSearch.generateRequest();
      }



      setSearchOption(e) {
          e.path[0].id === "all" ? this.generateSearch(e, undefined, 'mfgpn') : this.searchoption = e.path[0].id

          if (this.$.searchQuery.value) {
              this.generateSearch()
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
          this.$.ajaxSearch.body = JSON.stringify(querypackage)
          this.$.ajaxSearch.generateRequest();

      }
      populateObject(e) {

          var customListener = "new" + this.panelname;

          var newObj = {}

          this.singleObject = e.model.item;

          this.arrayvalues.map((key, index) => {
              var newNumber = parseInt(index) + 1
              var fieldName = 'fieldvalue' + newNumber
              newObj[key] = this.singleObject[fieldName]
          })

          this.singleObject = {}
          this.singleObject = newObj

          console.log("this.singleObject in populateObject", this.singleObject)

          console.log("`${customListener}`", customListener)

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
      open1(url, panelname, displaylist, fieldnamelist, singleObject) {

          this.panelname = panelname
          this.displaylist = displaylist
          this.fieldnamelist = fieldnamelist
          this.singleObject = {}

          var BElocation = this.panelname.toLowerCase()

          console.log("BElocation asdfkjdashfkdas", BElocation)

          if (typeof url === 'string') this.url = url;
          let baseurl = this.url.split("/")


          this.shadowRoot.querySelector("#searchQuery").value = ""
          this.searchoption = this.searchkeyindexes["searchkeyindex1"]


          console.log("her would be the baseYURL", baseurl[5])

          if (baseurl[2] == "vendor") {
              this.searchurl = "/vendor/search/" + `${BElocation}` + "/" + baseurl[5]
              // this.set('searchoption', "vendorid")
          } else if (baseurl[2] = "customer") {
              this.searchurl = "/customer/search/" + `${BElocation}` + "/" + baseurl[5]

              console.log("this.searchurl in open1", this.searchurl)
          }
          console.log("here is the searchurl", this.searchurl)

          const datatable = item => {
              return html` 
                    <div class="title-rightpaneldraw">
                        New ${ panelname } Info
                    </div>
                    <div style="background-color: #e6e6e6;">
                        <div class="close-interface">
                            <span on-tap="close">Close</span>
                            <iron-icon icon="close" on-tap="close"></iron-icon>
                        </div>
                    </div>
                    <div class="title-style side-padding">
                        <div class="my-content" style="display: ${ displaylist.displayfield1 }">
                            <div class="col-xs-3"> ${ fieldnamelist.fieldname1 }</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="${ item.fieldvalue1 }">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content" style="display: ${ displaylist.displayfield2 }">
                            <div class="col-xs-3"> ${ fieldnamelist.fieldname2 }</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="${ item.fieldvalue2 }">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content" style="display: ${ displaylist.displayfield3 }">
                            <div class="col-xs-3"> ${ fieldnamelist.fieldname3 }</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="${ item.fieldvalue3 }">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content" style="display: ${ displaylist.displayfield4 }">
                            <div class="col-xs-3"> ${ fieldnamelist.fieldname4 }</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="${ item.fieldvalue4 }">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content" style="display: ${ displaylist.displayfield5 }">
                            <div class="col-xs-3"> ${ fieldnamelist.fieldname5 }</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="${ item.fieldvalue5 }">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content" style="display: ${ displaylist.displayfield6 }">
                            <div class="col-xs-3">${ fieldnamelist.fieldname6 }</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="${ item.fieldvalue6 }">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content" style="display: ${ displaylist.displayfield7 }">
                            <div class="col-xs-3">${ fieldnamelist.fieldname7 }</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="${ item.fieldvalue7 }">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content" style="display: ${ displaylist.displayfield8 }">
                            <div class="col-xs-3">${ fieldnamelist.fieldname8 }</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="${ item.fieldvalue8 }">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content" style="display: ${ displaylist.displayfield9 }">
                            <div class="col-xs-3">${ fieldnamelist.fieldname9 }</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="${ item.fieldvalue9 }">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content" style="display: ${ displaylist.displayfield10 }">
                            <div class="col-xs-3">${ fieldnamelist.fieldname10 }</div>
                            <div class="text-right">
                                <iron-input class="col-xs-9" bind-value="${ item.fieldvalue10 }">
                                    <input class="input">
                                </iron-input>
                            </div>
                        </div>
                        <div class="my-content">
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-11"></div>
                            <div class="col-xs-12 col-md-11">
                                <div class="spacer my-content button-row text-right">
                                    <paper-button on-tap="${() => this.save1(item)}" class="button main-button" raised>Save</paper-button>
                                    <paper-button class="button" on-tap="${() => this.close1(item)}" raised>Cancel</paper-button>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
          }

          render(datatable(this.singleObject), this.shadowRoot.querySelector('#newpage'))


      }
      close1() {
          this.billing.name = ""
          this.billing.attention = ""
          this.billing.fax = ""
          this.billing.phone = ""
          this.billing.street = ""
          this.billing.zip = ""
          this.billing.city = ""
          this.billing.state = ""
          this.billing.country = ""
          this.billing.email = ""
          this.dispatchEvent(new CustomEvent('closePanel', {
              composed: true,
              bubbles: true
          }));
      }

      close1() {

          this.singleObject = ""

          this.dispatchEvent(new CustomEvent('closePanel', {
              composed: true,
              bubbles: true
          }));
      }


      save1(e) {
          console.log("this.event in save1", e)
          console.log("this.singleObject in save1", this.singleObject)
          if (this.singleObject.status == "on") {
              this.singleObject.status = true
          }

          var newObj = {}
          console.log("this.arrayvalues insides save1", this.arrayvalues)
          this.arrayvalues.map((key, index) => {
              console.log("here is key")
              var newNumber = parseInt(index) + 1
              var fieldName = 'fieldvalue' + newNumber
              console.log("here is value", this.singleObject[fieldName])
              newObj[key] = this.singleObject[fieldName]
          })

          console.log("newObj before flush", newObj)

          this.singleObject = {}
          this.singleObject = newObj
          console.log("RIGHT BEFORE SAVING singleObject", this.singleObject);


          this.$.ajax1.url = this.url;
          this.$.ajax1.body = JSON.stringify(this.singleObject);
          this.$.ajax1.generateRequest();
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
          this.billing.name = ""
          this.billing.attention = ""
          this.billing.fax = ""
          this.billing.phone = ""
          this.billing.street = ""
          this.billing.zip = ""
          this.billing.city = ""
          this.billing.state = ""
          this.billing.country = ""
          this.billing.email = ""

          this.singleObject = {}

          this.listpage = false;
          this.editpage = true;
          this.newpage = true;
      }
      ajaxerror1() {
          document.querySelector('#toast').show("Error saving contact.");
      }




      open(url, populate, noneditable = false) {
          console.log("page", this.listpage, this.editpage, this.newpage)
          // console.log("here in panelname function combinedplist", panelname)
          console.log("here in this.panelname function combinedplist", this.panelname)
          console.log("here in this.panelname function combinedplist", this.arrayvalues)
          console.log("here in this.panelname function combinedplist", this.searchfields)
          console.log("here in this.panelname function combinedplist", this.arrayvalues)

          console.log("here in url function combinedplist", url)
          console.log("here in populate function combinedplist", populate)
          console.log("here in populate function combinedplist", populate)

          this.populate = populate
          console.log(this.populate)


          console.log("searchkeyindexes", this.searchkeyindexes)
          console.log("searchkeyindexes", this.searchkeyindexes["searchkeyindex1"])

          this.searchoption = this.searchkeyindexes["searchkeyindex1"]


          var BElocation = this.panelname.toLowerCase()
          console.log("BElocation asdfkjdashfkdas", BElocation)


          if (typeof url === 'string') this.url = url
          let baseurl = this.url.split("/")


          console.log("her would be the baseYURL", baseurl[5])


          if (baseurl[2] == "vendor") {
              this.searchurl = "/vendor/search/" + `${BElocation}` + "/" + baseurl[5]
          } else if (baseurl[2] = "customer") {
              this.searchurl = "/customer/search/" + `${BElocation}` + "/" + baseurl[5]

              console.log("this.searchurl in open", this.searchurl)
          }
          console.log("here right before generate earch is called... SEARCHURL", this.searchurl)
          this.$.ajaxList.generateRequest();
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
          console.log("here in successlist, e and ir", e, ir)
          console.log("here in successlist, this.arrayvalues", this.arrayvalues)
          console.log("the results", ir.response.results)
          this.model = []


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

              console.log(item)
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


          // var holder = []
          // this.set'holder', this.model)
          // this.set('model', [])
          // this.set('model', this.holder)


          var length = ir.response.results.length

          console.log("RGITHEBFORE the id checker")


          if (this.panelname === "Billing") {
              if (this.model[length - 1].id === 1000) {
                  console.log("inside the id checker")
                  this.set('model.' + (length - 1) + '.visibility2', 'hidden')
                  this.set('model.' + (length - 1) + '.visibility3', 'hidden')
                  this.set('model.' + (length - 1) + '.visibility4', 'hidden')
                  this.notifyPath('model.' + (length - 1) + '.visibility2')
                  this.notifyPath('model.' + (length - 1) + '.visibility3')
                  this.notifyPath('model.' + (length - 1) + '.visibility4')
              }
          } else if (this.panelname === "Shipping") {
              if (this.model[length - 1].id === 10000) {
                  console.log("inside the id checker")
                  this.set('model.' + (length - 1) + '.visibility2', 'hidden')
                  this.set('model.' + (length - 1) + '.visibility3', 'hidden')
                  this.set('model.' + (length - 1) + '.visibility4', 'hidden')
                  this.notifyPath('model.' + (length - 1) + '.visibility2')
                  this.notifyPath('model.' + (length - 1) + '.visibility3')
                  this.notifyPath('model.' + (length - 1) + '.visibility4')
              }
          } else if (this.panelname === "Contact") {
              if (this.model[length - 1].id === 100000) {
                  console.log("inside the id checker")
                  this.set('model.' + (length - 1) + '.visibility2', 'hidden')
                  this.set('model.' + (length - 1) + '.visibility3', 'hidden')
                  this.set('model.' + (length - 1) + '.visibility4', 'hidden')
                  this.notifyPath('model.' + (length - 1) + '.visibility2')
                  this.notifyPath('model.' + (length - 1) + '.visibility3')
                  this.notifyPath('model.' + (length - 1) + '.visibility4')
              }
          }


          console.log("this.model after map", this.model)

          // this.set('model', this.model)

          console.log("this.url", this.url)
          console.log("this.searchurl", this.searchurl)
          console.log(this.shadowRoot.querySelector('iron-list'))

          setTimeout(() => {
              this.shadowRoot.querySelector('iron-list').dispatchEvent(new CustomEvent('iron-resize', {
                  bubbles: true,
                  composed: true
              }));


          }, 100)
      }

      edit(e) {

          console.log("e inside the edit function", e)


          this.listpage = true;
          this.editpage = false;
          this.newpage = true;
          var id = e.model.item.id;

          console.log("id inside edit", id)

          var singleObject = this.model.filter(function(x) {
              return x.id == id;
          })[0];
          if (singleObject) {
              this.singleObject = singleObject
              this.singleObject.status = true
              var tempSingleObject = (JSON.parse(JSON.stringify(this.singleObject)));
              this.temporaryHolder = tempSingleObject
          }
      }
      delete(e) {
          var item = e.model.item;
          var id = item.id;

          console.log("e", e)
          console.log("e.model.item", e.model.item)

          var billing = this.model.filter(function(x) {
              return x.id == id;
          })[0];

          if (this.largeModel.billing) {
              for (let i = 0; i < this.largeModel.billing.length; i++) {
                  if (this.largeModel.billing[i].id === id) {
                      this.splice('largeModel.billing', i, 1);
                  }
              }
          }

          this.$.ajaxDelete.url = this.url + "/" + e.model.item.id;
          this.$.ajaxDelete.body = JSON.stringify(billing);
          this.$.ajaxDelete.generateRequest();
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
              setTimeout(this.$.ajaxList.generateRequest.bind(this.$.ajaxList), 2000);
          } else {
              document.querySelector('#toast').text = "Error removing.";
              document.querySelector('#toast').show();
          }
      }

      save(e) {
          var newObj = {}

          console.log("this.arrayvalues insides save", this.arrayvalues)
          this.arrayvalues.map((key, index) => {
              console.log("here is key")
              var newNumber = parseInt(index) + 1
              var fieldName = 'fieldvalue' + newNumber
              console.log("here is value", this.singleObject[fieldName])
              newObj[key] = this.singleObject[fieldName]
          })

          newObj["id"] = this.singleObject.id
          console.log("this.singleObject before flush inside save", this.singleObject)

          this.singleObject = {}
          this.singleObject = newObj
          console.log("RIGHT BEFORE SAVING singleObject", this.singleObject);

          this.$.ajaxSave.url = this.url + "/" + this.singleObject.id;
          this.$.ajaxSave.body = JSON.stringify(this.singleObject);
          this.$.ajaxSave.generateRequest();
      }

      responseAction(request) {
          var result = request.detail.response;
          if (result.error) {
              document.querySelector('#toast').text = result.error;
              document.querySelector('#toast').show();
          } else {
              document.querySelector('#toast').text = "Saved successfully.";
              document.querySelector('#toast').show();
              this.$.ajaxList.generateRequest();
              this.listpage = false;
              this.editpage = true;
              this.newpage = true;
          }
      }

      isNoneditable(item) {
          if (this.noneditable) {
              return true;
          }

          if (item.id && (item.id == 1000 || item.id == 10000)) {
              return true;
          }

          return false;
      }
      getPopulateObjectIconClass(item) {
          if (this.isNoneditable(item)) {
              return "right-icon2";
          }
          return "right-icon4";
      }

      render({ admin }) {
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
            

        /*STANDARDIZED CSS*/
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

         .input {
            width: 100%;
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);

            font-size: 13.3px;

            text-overflow: ellipsis;
            overflow: hidden;
        }

          .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
        }

           .text-right {
            text-align: right;
        }


    /*END STANDARDIZED CSS*/



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
        /*        .leftcontent {
                        background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }*/

        .iron-position {
            text-align: left;
            padding-left: 35px;
        }

        .table-padding {
            padding-left: 16px;
            padding-right: 16px;
            /*margin-top: 26px;*/
            margin-top: 4%;
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
        /*.results-container {
            background-color: #eee;
            width: 100%;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
        }*/

        iron-list {
            flex: 1 1 auto;
        }

        .status-container {
            width: 83px;
            margin-left: 5%;
        }

        .search-icon {
            position: absolute;
            /*top: -3px;*/
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
            margin-left: 9px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        div[class^="box"] {
            min-height: 29px;
            min-height: 20px;
            margin-top: auto;
            margin-bottom: auto;
            \ width: 100%;
        }

        div[class^="bd"] {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            height: 29px;


            font-size: 13px;
            /*vertical-align: center!important;*/
            line-height: 2.5;
        }

        div[class^="bd"]:first-child {
            width: 15%;
            /*vertical-align: center;*/
        }

        div[class^="bd"]:nth-child(3),
        div[class^="bd"]:nth-child(2) {
            /*width: 100%;*/
            width: 50%;
            /*vertical-align: center;*/
        }

        div[class^="group"],
        div[class^="box"] {
            width: 100%
        }
        /* div[class^="group7"],
        div[class^="box7"] {
            width: 98.5%!important
        }*/

        .searchcontainer {
            margin-top: 9px;
        }

        .s-container1 div,
        .s-container2 div {
            margin-top: 8px;
            /* margin-left: 20px; */
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

       

        .iconinput {
            padding-right: 122px;
            box-sizing: border-box;
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

     
        .col-xs-12 {
            position: relative;
            min-height: 1px;
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

        .right-icon1 {
            position: absolute;
            right: 0;
            bottom: 0px;
            z-index: 0;
            padding-right: 52px;
            padding-top: 22px;
            padding-left: 0px;
            padding-bottom: 0px;
            display: block;
        }

        .right-icon2 {
            position: absolute;
            right: -1px;
            /*bottom: -7px;*/
            bottom: -9px;
            z-index: 0;
        }

        .right-icon3 {
            position: absolute;
            right: 39px;
            /*bottom: -7px;*/
            bottom: -9px;
            z-index: 0;
        }

        .right-icon4 {
            position: absolute;
            right: 79px;
            /*bottom: -7px;*/
            bottom: -9px;
            z-index: 0;
        }
        .spacer {
            margin-top: 20px;
        }
        </style>
        <div id="listpage" hidden="{{listpage}}">
            <div class="title-rightpaneldraw">
                {{panelname}} List
            </div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div id="container" class="table-padding">

                <div style="display: {{searchdisplay.display}}; padding-bottom:24px">
                    <div class="search-flex layout horizontal">
                        <div class="search-container">
                            <iron-input class="search" slot="input">
                                <input class="paper-input-input" placeholder="Show All" id="searchQuery" on-keypress="generateSearch" on-focusout="generateSearch">
                            </iron-input>
                            <div on-tap="generateSearch" class="search-icon">
                                <paper-icon-button class="search-icon" icon="search"></paper-icon-button>
                            </div>
                        </div>
                    </div>
                    <div class="options-container">
                        <div class="searchoptions layout horizontal">
                            <div class="searchcontainer layout vertical">
                                <div class="s-container1 layout horizontal">
                                    <div>
                                        <input on-change="setSearchOption" on-keypress="setSearchOption" id="{{searchkeyindexes.searchkeyindex1}}" name="searchoptions" class="listoptions" type="radio" checked>{{searchfields.searchfield1}}
                                    </div>
                                    <div>
                                        <input on-change="setSearchOption" on-keypress="setSearchOption" id="{{searchkeyindexes.searchkeyindex2}}" name="searchoptions" class="listoptions" type="radio">{{searchfields.searchfield2}}
                                    </div>
                                    <div>
                                        <input on-change="setSearchOption" on-keypress="setSearchOption" id="{{searchkeyindexes.searchkeyindex3}}" name="searchoptions" class="listoptions" type="radio">{{searchfields.searchfield3}}
                                    </div>
                                    <div>
                                        <input on-change="setSearchOption" on-keypress="setSearchOption" id="{{searchkeyindexes.searchkeyindex4}}" name="searchoptions" class="listoptions" type="radio">{{searchfields.searchfield4}}
                                    </div>
                                </div>
                                <div class="s-container2 layout horizontal">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="s-container2 layout horizontal">
                        <div>
                        </div>
                    </div>
                </div>


                <section id="options">
                    <div id="ilcontainer">
                    </div>
                </section> 

                
                <iron-list id="list" items="[[model]]" scroll-target="listpage">
                    <template>
                        <div style="padding-bottom:24px">
                            <!-- <div class="my-content"></div> -->
                            <div class="row layout horizontal">
                                <div class="my-content"></div>
                                <div class="layout vertical" style="width: 100%;">
                                    <div class="my-content" style="display: [[displaylist.displayfield1]]">
                                        <div class="col-xs-3">{{fieldnamelist.fieldname1}}</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.fieldvalue1}}">
                                                <input disabled class="iconinput input">
                                            </iron-input>
                                            <paper-icon-button class$="{{getPopulateObjectIconClass(item)}}" icon="icons:settings-overscan" on-tap="populateObject"></paper-icon-button>
                                            <paper-icon-button hidden={{isNoneditable(item)}} class="right-icon3" icon="create" on-tap="edit"></paper-icon-button>
                                            <paper-icon-button hidden={{isNoneditable(item)}} class="right-icon2" icon="icons:close" on-tap="delete"></paper-icon-button>
                                        </div>
                                    </div>
                                    <div class="my-content" style="display: [[displaylist.displayfield2]]">
                                        <div class="col-xs-3">{{fieldnamelist.fieldname2}}</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.fieldvalue2}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" style="display: [[displaylist.displayfield3]]">
                                        <div class="col-xs-3">{{fieldnamelist.fieldname3}}</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.fieldvalue3}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" style="display: [[displaylist.displayfield4]]">
                                        <div class="col-xs-3">{{fieldnamelist.fieldname4}}</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.fieldvalue4}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" style="display: [[displaylist.displayfield5]]">
                                        <div class="col-xs-3">{{fieldnamelist.fieldname5}}</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.fieldvalue5}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" style="display: [[displaylist.displayfield6]]">
                                        <div class="col-xs-3">{{fieldnamelist.fieldname6}}</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.fieldvalue6}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" style="display: [[displaylist.displayfield7]]">
                                        <div class="col-xs-3">{{fieldnamelist.fieldname7}}</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.fieldvalue7}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" style="display: [[displaylist.displayfield8]]">
                                        <div class="col-xs-3">{{fieldnamelist.fieldname8}}</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.fieldvalue8}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" style="display: [[displaylist.displayfield9]]">
                                        <div class="col-xs-3">{{fieldnamelist.fieldname9}}</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.fieldvalue9}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" style="display: [[displaylist.displayfield10]]">
                                        <div class="col-xs-3">{{fieldnamelist.fieldname10}}</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.fieldvalue10}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </iron-list>
            </div>
        </div>
        <div id="edit" hidden="{{editpage}}">
            <div class="title-rightpaneldraw">
                <span>Edit {{panelname}} Info</span>
            </div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class="row-style side-padding">
                <div class="col-xs-12">
                    <div class="my-content" style="display: [[displaylist.displayfield1]]">
                        <div class="col-xs-3">{{fieldnamelist.fieldname1}}</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9" bind-value="{{singleObject.fieldvalue1}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content" style="display: [[displaylist.displayfield2]]">
                        <div class="col-xs-3">{{fieldnamelist.fieldname2}}</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9" bind-value="{{singleObject.fieldvalue2}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content" style="display: [[displaylist.displayfield3]]">
                        <div class="col-xs-3">{{fieldnamelist.fieldname3}}</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9" bind-value="{{singleObject.fieldvalue3}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content" style="display: [[displaylist.displayfield4]]">
                        <div class="col-xs-3">{{fieldnamelist.fieldname4}}</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9" bind-value="{{singleObject.fieldvalue4}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content" style="display: [[displaylist.displayfield5]]">
                        <div class="col-xs-3">{{fieldnamelist.fieldname5}}</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9" bind-value="{{singleObject.fieldvalue5}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content" style="display: [[displaylist.displayfield6]]">
                        <div class="col-xs-3">{{fieldnamelist.fieldname6}}</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9" bind-value="{{singleObject.fieldvalue6}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content" style="display: [[displaylist.displayfield7]]">
                        <div class="col-xs-3">{{fieldnamelist.fieldname7}}</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9" bind-value="{{singleObject.fieldvalue7}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content" style="display: [[displaylist.displayfield8]]">
                        <div class="col-xs-3">{{fieldnamelist.fieldname8}}</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9" bind-value="{{singleObject.fieldvalue8}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content" style="display: [[displaylist.displayfield9]]">
                        <div class="col-xs-3">{{fieldnamelist.fieldname9}}</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9" bind-value="{{singleObject.fieldvalue9}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                    <div class="my-content" style="display: [[displaylist.displayfield10]]">
                        <div class="col-xs-3">{{fieldnamelist.fieldname10}}</div>
                        <div class="text-right">
                            <iron-input class="col-xs-9" bind-value="{{singleObject.fieldvalue10}}">
                                <input class="input">
                            </iron-input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-content">
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-11"></div>
                <div class="col-xs-12 col-md-11">
                    <div class="spacer my-content button-row text-right">
                        <paper-button on-tap="save" class="button main-button" raised>Save</paper-button>
                        <paper-button class="button" on-tap="cancel" raised>Cancel</paper-button>
                    </div>
                </div>
            </div>
            <confirm-box id="confirmbox"></confirm-box>
        </div>
        <div id="listpage"></div>
        <div id="editpage"></div>
        <div id="newpage"></div>
        <iron-ajax id="ajaxSearch" method="POST" handle-as="json" url="{{searchurl}}" on-response="successList" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajax1" method="POST" on-response="success1" on-error="ajaxerror1"></iron-ajax>
        <iron-ajax id="ajaxList" url="{{url}}" method="GET" on-response="successList"></iron-ajax>
        <iron-ajax id="ajaxSave" method="PUT" handle-as="json" on-response="responseAction" content-type="application/json"></iron-ajax>
        <iron-ajax id="ajaxDelete" method="DELETE" handle-as="json" on-response="responseDelete"></iron-ajax>
        `
      }
  }
  customElements.define("combinedpanel-list", CombinedpanelList);