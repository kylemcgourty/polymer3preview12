import {Element as PolymerElement}
  from '../../node_modules/@polymer/polymer/polymer-element.js'
  
  export class PartList extends PolymerElement {
        static get template() {
            return `<style include="shared-styles iron-flex iron-flex-alignment">

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
        
        .search {
            width: 100%;
        }
        
        .input1 {
            min-height: 24px;
            width: 100%;
            text-align: initial;
            border: none;
            background-color: white;
            border-bottom: 1px solid #000;
            font-size: 16px;
        }
        
        .search-container {
            position: relative;
            width: 70%;
            margin-left: 6px;
        }
        
        .search-icon {
            position: absolute;
            top: -3px;
            right: 0;
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
            margin-top: -8px;
            width: 100px;
        }
        
        paper-item.iron-selected {
            font-weight: bold;
            color: blue;
        }
        
        .s-container1 div,
        .s-container2 div {
            margin-top: 8px;
            /* margin-left: 20px; */
            width: 109px;
        }
        
        .dropdown {
            margin-left: 26px;
        }
        
        .options-container {}
        
        .status-container {
            width: 83px;
            margin-left: 5%;
        }
        
        .results-container {
            margin-top: 24px;
            height: 70vh;
        }
        
        div[class^="bd"] {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 75%;
            padding-left: 3px;
            /*height: 35px;*/
            /*line-height: 2.9;*/
        }
        
        div[class^="bd"]:first-child {
            width: 25%;
        }
        
        .part-container {
            width: 100%;
            /*margin-top: 6px*/
            padding-bottom: 24px;
        }
        
        .bd4-1 {
            width: 100%!important;
        }
        
        #list {
            flex: 1 1 auto;
            height: 100%;
        }
        
        .searchcontainer {
            margin-top: 5px;
        }
        
        .page {
            overflow-y: auto;
            height: 100vh
        }
        </style>
        <div class="page">
            <div class="title-rightpaneldraw">Search Products </div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
                <div>
                    <div class="title-style side-padding">
                        <div class="search-flex layout horizontal">
                            <div class="search-container">
                                <!-- <paper-input-container auto-validate$="[[autoValidate]]"> -->
                                <!-- <label slot="label"> Search </label> -->
                                <iron-input class="search" slot="input">
                                    <input class="input1" placeholder="Show All" id="searchQuery" on-keyup="generateSearch">
                                </iron-input>
                                <!-- </paper-input-container> -->
                                <div class="search-icon">
                                    <paper-icon-button class="search-icon" on-tap="generateSearch" icon="search"></paper-icon-button>
                                </div>
                            </div>
                            <!-- <div class="dropdown">
                                <paper-dropdown-menu no-label-float selected-item id="status" label="Active">
                                    <paper-listbox id="drop-down" class="dropdown-content">
                                        <paper-item on-tap="statusChange" id="active" focused>Active</paper-item>
                                        <paper-item on-tap="statusChange" id="inactive">Inactive</paper-item>
                                        <paper-item on-tap="statusChange" id="all">All</paper-item>
                                    </paper-listbox>
                                </paper-dropdown-menu>
                            </div> -->
                        </div>
                        <div class="options-container">
                            <div class="searchoptions layout horizontal">
                                <div class="searchcontainer layout vertical">
                                    <div class="s-container1 layout horizontal">
                                        <!-- <div>
                                            <input on-change="setSearchOption" on-keypress="setSearchOption" id="keyword" value="Active" name="searchoptions" class="listoptions" type="radio">Keyword
                                        </div>
 -->                                        <div>
                                            <input on-change="setSearchOption" checked on-keypress="setSearchOption" id="idver" value="Active" name="searchoptions" class="listoptions" type="radio">Part id
                                        </div>
                                        <div>
                                            <input on-change="setSearchOption" on-keypress="setSearchOption" id="mfgpn_l" value="Void" name="searchoptions" class="listoptions" type="radio">Product No.
                                        </div>
                                        <div>
                                            <input on-change="setSearchOption" on-keypress="setSearchOption" id="mfgname_l" value="Active" name="searchoptions" class="listoptions" type="radio">Brand
                                        </div>
                                        <div>
                                            <input on-change="setSearchOption" on-keypress="setSearchOption" id="description_l" value="Active" name="searchoptions" class="listoptions" type="radio">Description
                                        </div>
                                    </div>
                                    <div class="s-container2 layout horizontal">
                                        <div>
                                            <!-- <input checked on-change="setSearchOption" on-keypress="setSearchOption" id="ptype" value="Active" name="searchoptions" class="listoptions" type="radio">Type -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="parts" class="results-container layout vertical">
                            <iron-list id="list" items="[[dataarray]]" multi-selection selection-enabled scroll-target="document">
                                <template>
                                    <div on-tap="inventoryChoice">
                                        <div class="part-container layout vertical">

                                    <div class="my-content" >
                                        <div class="col-xs-3">Company</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.0}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Company Id</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.1}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Product No.</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.2}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Description</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.3}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Model</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.4}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Category</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.5}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Type</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.6}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Avg. Cost</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.7}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </template>
                            </iron-list>
                        </div>
                    </div>
                </div>
            </div>
            <iron-ajax id="ajaxSearch" method="POST" handle-as="json"  on-response="receiveQueryResults" content-type="application/json"></iron-ajax>`;
        }

        static get properties() {
            return {
                inventoryList: {
                    type: Object,
                    reflectToAttribute: true,
                    notify: true,
                    value: function() {
                        return {};
                    }
                },
                inventory: {
                    type: Array,
                    value: function() {
                        return [];
                    }
                },

                status: {
                    type: Boolean,
                    value: true
                },

                searchoption: {
                    type: String,
                    value: "idver"
                },

                filter: {
                    type: String,
                    reflectToAttribute: true
                },

                negfilter : {
                    type: String,
                    reflectToAttribute: true,
                },

                profileid: {
                    type: String,
                    reflectToAttribute: true,
                }

            }
        }

        static get observers() {
            return [
                'showme(inventoryList)',
                "statusChange(status)"

            ]
        }

        constructor() {
            super()
                // this.widthSetter();
        }

        open() {

            // this.set('dataarray,' [["", "","","","","","","", ""]])
            this.set('dataarray', [])
            this.set('$.idver.checked', true)
            this.set('$.searchQuery.value', '')
            this.generateSearch(false, false, true)
        }

        generateSearch(e, pass, retrieveAll) {

            console.log("this.$.searchQuery.value", this.$.searchQuery.value)

            console.log('gen s called', retrieveAll)
            let query
            if (e) {
                if (this.$.searchQuery.value === "") {
                    retrieveAll = true;

                } else if (e.keyCode !== 13 && e.type == "keyup") {
                    return
                }
            }
             query = this.$.searchQuery.value.trim();


            if (retrieveAll) {
                console.log("inside retrieveAll for some reason")
                query = ""
                this.searchoption = 'idver'
            }

            let querypackage = {
                query: query.toString().toLowerCase(),
                option: this.searchoption
            }


            this.$.ajaxSearch.url = "/inventory/search/" + this.profileid
            this.$.ajaxSearch.body = JSON.stringify(querypackage)
            this.$.ajaxSearch.generateRequest();
        }






        receiveQueryResults(response) {
            this.dataarray = [];
            this.searched = response.detail.response.results
            this.set('inventory', this.searched)
            this.responselist(response.detail.response.results, true)
        }


        setSearchOption(e) {
            e.path[0].id === "all" ? this.generateSearch(e, undefined, 'mfgpn') : this.searchoption = e.path[0].id

            if (this.$.searchQuery.value) {
                this.generateSearch()
            }

        }

        statusChange() {
            var data = this.searched || this.model
            this.responselist(data, true)
        }

        responselist(request, fromquery) {

                if (request) {
                    let tempArray = [];
                    let tempArray2 = [];
                    let tempArray3 = [];

                    if (request.detail) {
                        var result = request.detail.response.results;
                        this.set("model", result)

                        tempArray = result;
                    } else if (fromquery) {
                        tempArray = request
                    } else {
                        tempArray = this.model;
                    }

                

                    if (this.filter) {

                        tempArray = tempArray.filter(function(item, ind) {
                            return item.type == this.filter
                        }.bind(this))
                    }

                    if (this.negfilter) {

                        tempArray = tempArray.filter(function(item, ind) {
                            return item.type != this.negfilter
                        }.bind(this))
                    }

                    this.showingModel = tempArray;


                    for (var i = 0; i < tempArray.length; i++) {
                        var element = tempArray[i];

                        tempArray2.push(element.mfgname); //0
                        tempArray2.push(element.idver); //1
                        tempArray2.push(element.mfgpn); //2
                        tempArray2.push(element.description); //3
                        tempArray2.push(element.model) // 4
                        tempArray2.push(element.category); //5
                        tempArray2.push(element.type); //type 6
                        tempArray2.push(element.averagecost)
                        tempArray2.push(element.tableiid); //8
                        tempArray2.push(i); // index 9


                        tempArray3.push(tempArray2);
                        tempArray2 = [];
                    }


                    this.set('dataarray', tempArray3);


                   setTimeout(()=> { this.$.list.dispatchEvent(new CustomEvent('iron-resize'), {
                        composed: true,
                        bubbles: true,
                    })
               }, 200)

                }

            }
            // mod(i) {
            //     console.log('got i', i)
            // }

        // widthSetter() {
        //     if (window.screen.width >= 1680) {
        //         this.mfgpnW = '35%';
        //         this.descriptionW = '65%';
        //     }
        //     if (window.screen.width < 1680) {
        //         this.mfgpnW = '100px';
        //         this.descriptionW = '188px';
        //     }
        // }

        close() {
            this.dispatchEvent(new CustomEvent('closePanel', {
                bubbles: true,
                composed: true
            }))
        }
        showme(list) {
            this.set('inventory', []);
            this.set('inventory', list.results);

            // this.inventory = list.results;

        }

        partSelector(e) {
            var part = e.model.item;
            this.fireInventoryEvent(part);
        }

        inventoryChoice(e) {
            console.log(e.model.index, this.inventory)
            let part = this.showingModel[e.model.index]
            var mfgname = part.mfgname;
            var year = part.year;
            var mfgpn = part.mfgpn;
            var type = part.type;

            console.log('part before fire', part)

                this.dispatchEvent(new CustomEvent('InventoryPartEvent', {

                    bubbles: true,
                    composed: true,
                    detail: {
                        mfgname: mfgname,
                        year: year,
                        mfgpn: mfgpn,
                        type: type,
                        routeData: part,
                    }
                }));
         
            //     this.dispatchEvent(new CustomEvent('InventoryBomEvent', {

            //         bubbles: true,
            //         composed: true,
            //         detail: {
            //             mfgname: mfgname,
            //             year: year,
            //             mfgpn: mfgpn,
            //             type: type,
            //             routeData: part,
            //         }
            //     }));
            // }
        }


    }

    customElements.define('part-list', PartList);

