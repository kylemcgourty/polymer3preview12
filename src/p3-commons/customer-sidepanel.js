 import {Element as PolymerElement}
    from '../../node_modules/@polymer/polymer/polymer-element.js'

 export class CustomerSidepanel extends PolymerElement {
        static get template() {
            return `
                 <style include="iron-flex iron-flex-alignment">
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }
        
        :host {
            display: block;
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
            height: 100vh
        }
 
        .inputA {
            /*min-height: 24px;*/
            text-align: initial;
            border: none;
            background-color: #eee;
            /*border-color: #eee;*/
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 100%;
        }
        
        .inputB {
            /*min-height: 24px;*/
            text-align: initial;
            border: none;
            background-color: #eee;
            /*border-color: #eee;*/
            /*border-bottom: 1px solid rgba(155, 155, 155, 0.5);*/
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 300%;
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
        
        .icon {
            margin-left: 14px;
            margin-right: 14px;
            margin: auto;
        }
        
        .rm-icon-mid {
            padding-left: 14px;
            padding-right: 0px;
            margin: auto;
        }
        
        .input1 {
            min-height: 24px;
            width: 100%;
            text-align: initial;
            border: none;
            background-color: white;
            border-bottom: 1px dotted #000;
            font-size: 16px;
        }
        
        #page {
            /*overflow-y: auto;*/
            overflow-y: auto;
            height: 100vh;
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
        
        .search {
            width: 100%;
        }
        
        .results-container {
            margin-top: 18px;
            height: 70vh;
            display: flex;
            flex-direction: column;
        }
        
        .status-container {
            width: 83px;
            margin-left: 5%;
        }
        
        .options {
            /*margin: auto;*/
            /*border-top: 1px solid black;*/
            /*border-left: 1px solid black;*/
            flex-shrink: none;
            /*width: 73px;*/
            /*  display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;*/
            background-color: #eee;
            margin-top: 6px;
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
        }
        
        .mobile-opts {
            display: none;
        }
        
        .layout-horizontal {
            /* display: -ms-flexbox;
            display: -webkit-flex;
            display: -webkit-flex;*/
            /*display: flex;*/
            /*border-top: 1px solid black;*/
            /*border-right: 1px solid black;*/
            /*justify-content: center;*/
            /*-webkit-flex-wrap: wrap;*/
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            background-color: #eee;
            margin-top: 4px;
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.4);
        }
        
        div[class^="group"] {
            /* display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;*/
            padding-left: 9px;
            /*align-items: center;*/
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            /*margin: auto;*/
        }
        
        div[class^="box"] {
            /*display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;*/
            /*align-items: center;*/
            height: 29px;
            /*         align-items: flex-start;
            flex-direction: column;*/
        }
        
        div[class^="bd"] {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            height: 35px;
            line-height: 2.5;
            padding-left: 3px;
        }
        
        div[class^="bd"]:first-child {
            width: 25%;
        }
        
        div[class="bd2-1"]:first-child {
            width: 100%!important;
        }
        
        div[class^="bd"]:nth-child(3),
        div[class^="bd"]:nth-child(2) {
            width: 37%;
        }
        
        div[class^="group"],
        div[class^="box"] {
            width: 100%
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
            /*display: none;*/
            visibility: collapse;
            width: 0px;
            height: 0px;
            min-width: 0px;
        }
        /**/
        
        .mobi-icon {
            height: 0px;
            padding: 0;
            width: 0px;
        }
        
        #list {
            flex: 1 1 auto;
            width: 100%;
        }
        
        .view {
            border: none;
            color: blue;
            background: #eee;
            font-size: 14px;
            width: 90%;
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
            margin-top: -8px;
            width: 100px;
        }
        
        paper-item.iron-selected {
            font-weight: bold;
            color: blue;
        }
        
        .searchcontainer {
            margin-top: 9px;
        }
        
        .s-container1 div,
        .s-container2 div {
            margin-top: 8px;
            /* margin-left: 20px; */
            width: 109px;
        }
        
        .ilrow {
            margin-top: 24px;
        }
        @media (max-width: 479px) {
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
            .ilrow {
                /*margin-top: 9px;*/
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
            .bd5-1 {
                width: 35vw;
                padding-left: 1vw;
            }
            .bd3-2,
            .bd4-2,
            .bd5-2 {
                width: 40vw;
            }
            /* .bd3-1 {
                width: 50%;
                max-width: 50%;
            }
            .bd4-1 {
                width: 50%;
                max-width: 50%;
            }
            .bd4-2 {
                width: 50%;
                max-width: 50%;
            }
            .bd5-1 {
                width: 50%;
                max-width: 50%;
            }
            .bd5-2 {
                width: 50%;
                max-width: 50%;
            }*/
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
                /*padding-top: 15px;*/
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
                /*        display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;*/
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
        }
        </style>
        <div id="page">
            <div class="title-rightpaneldraw">Search Customers</div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="close">Close</span>
                    <iron-icon icon="close" on-tap="close"></iron-icon>
                </div>
            </div>
            <div id="container" class="table-padding layout vertical">
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
                                    <input checked on-change="setSearchOption" on-keypress="setSearchOption" id="keyword" value="Active" name="searchoptions" class="listoptions" type="radio">Keyword
                                </div> -->
                                <div>
                                    <input on-change="setSearchOption" on-keypress="setSearchOption" id="idver" value="Active" name="searchoptions" class="listoptions" type="radio" checked>Customer id
                                </div>
                                <div>
                                    <input on-change="setSearchOption" on-keypress="setSearchOption" id="b_name_l" value="Void" name="searchoptions" class="listoptions" type="radio">Company
                                </div>
                                <div>
                                    <input on-change="setSearchOption" on-keypress="setSearchOption" id="f_address_l" value="Active" name="searchoptions" class="listoptions" type="radio">Address
                                </div>
                                <div>
                                    <input on-change="setSearchOption" on-keypress="setSearchOption" id="f_contact_l" value="Active" name="searchoptions" class="listoptions" type="radio"> Contact
                                </div>
                            </div>
                            <div class="s-container2 layout horizontal">
<!--                                 <div>
                                    <input on-change="setSearchOption" on-keypress="setSearchOption" id="acctm_l" value="Active" name="searchoptions" class="listoptions" type="radio">Acct. Mgr
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="results-container fit">
                    <iron-list id="list" items="[[data]]" scroll-target="results-container" selection-enabled multi-selection>
                        <template>
                            <div on-tap="selectCustomer">
                                <div class="ilrow layout vertical">
                                    <div class="my-content" >
                                        <div class="col-xs-3">Customer:</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.billing.name}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Customer id:</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.idver}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Street:</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.billing.street}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">City</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.billing.city}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">State</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.billing.state}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Zip Code:</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.billing.zip}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Phone:</div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.billing.phone}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Admin: </div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.contact.name}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Admin email: </div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.contact.email}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                     <div class="my-content" >
                                        <div class="col-xs-3">Sales: </div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.accountmanager.name}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>
                                    <div class="my-content" >
                                        <div class="col-xs-3">Sales email: </div>
                                        <div class="text-right">
                                            <iron-input class="col-xs-9" bind-value="{{item.info.email}}">
                                                <input disabled class="input">
                                            </iron-input>
                                        </div>
                                    </div>


                                    </div>
                                    <!-- </div> -->
                                </div>
                                <!-- <div style="clear: both";></div> -->
                                <!-- <div class="group-header" hidden$="[[!_hasGroup(index)]]">[[item.state]]</div>
                                                            <div class="group-item">
                                                                <iron-image class="avatar" sizing="contain" src="[[item.image]]"></iron-image>
                                                                <div class="pad">
                                                                    <span class="primary">[[item.name]]</span> <span class="secondary">[[item.shortText]]</span>
                                                                </div>
                                                            </div> -->
                            </div>
                        </template>
                    </iron-list>
                </div>
                <!--             <iron-data-table details-enabled id="partGrid" selection-enabled items="{{customers}}">
                <data-table-column name="Company" flex="0" width="[[companyW]]" filter-by="companyname">
                    <template>
                        <div class="nooverflow" on-tap="partSelector">[[item.companyname]]</div>
                    </template>
                </data-table-column>
                <data-table-column name="Address" flex="0" width="[[addressW]]" filter-by="address">
                    <template>
                        <div on-tap="partSelector" class="nooverflow">
                            [[item.address]]
                        </div>
                    </template>
                </data-table-column>
            </iron-data-table> -->
            </div>
        </div>
        <iron-ajax id="ajaxSearch" method="POST" handle-as="json" on-response="receiveQueryResults" content-type="application/json"></iron-ajax>
            `
        }
        static get properties() {
            return {
              
                status: {
                    type: Boolean,
                    value: true
                },
                searchoption: {
                    type: String,
                    value: "idver"
                },
                     profileid: {
                    type: String,
                    reflectToAttribute: true,
                }



            }
        }

        static get observers() {
            return [
                "statusChange(status)"

            ]
        }

        constructor() {
            super()
           
        }




        selectCustomer(e) {
            console.log('here is e', e);
            var customer = e.model.item;
            var company = customer.companyname;
            var customerid = customer.id;
            this.dispatchEvent(new CustomEvent('CustomerEvent', {
                composed: true,
                bubbles: true,
                detail: {
                    id: customerid,
                    company: company,
                    routeData: customer
                }
            }));
            // this.set('data',[])
        }

        close() {
            this.dispatchEvent(new CustomEvent('closePanel', {
                bubbles: true,
                composed: true
            }))
        }
        open() {


            console.log("this.$ inside open", this.$)
            console.log("this.$.idver inside open", this.$.idver)
            this.set('$.idver.checked', true)

            console.log("this.$.searchQuery.value", this.$.searchQuery.value)
            this.set('$.searchQuery.value', '')
            console.log("this.$.searchQuery.value", this.$.searchQuery.value)


            this.generateSearch(false, false, true)
            // let querypackage = {
            //     query: "",
            //     option: "idver"
            // }
            // this.$.ajaxSearch.body = JSON.stringify(querypackage)
            // this.$.ajaxSearch.generateRequest();
        }

        // generateSearch(e) {
        //     if (e.keyCode === 13) {
        //         let query = this.$.searchQuery.value;

        //         let querypackage = {
        //             query: query.toString(),
        //             option: this.searchoption
        //         }

        //         console.log("the qp", querypackage)

        //         this.$.ajaxSearch.body = JSON.stringify(querypackage)
        //         this.$.ajaxSearch.generateRequest();

        //     }
        // }

        generateSearch(e, pass, retrieveAll) {
            let query

            console.log("this.searcheoption", this.searchoption)

            if (e) {
                if (this.$.searchQuery.value === "") {
                    retrieveAll = true;

                } else if (e.keyCode !== 13 && e.type == "keyup") {
                    return
                }
            }
            query = this.$.searchQuery.value.trim();
            if (retrieveAll) {
                console.log("inside retriveall")
                query = ""
                this.searchoption = 'idver'
            }

            let querypackage = {
                query: query.toString().toLowerCase(),
                option: this.searchoption
            }
            this.$.ajaxSearch.url = "/customer/search/" + this.profileid
            this.$.ajaxSearch.body = JSON.stringify(querypackage)
            this.$.ajaxSearch.generateRequest();
        }

        receiveQueryResults(response) {
            this.dataarray = [];
            this.searched = response.detail.response.results
            this.responselist(response.detail.response.results, true)
        }


        setSearchOption(e) {
            console.log('option', e.path[0].id)
            console.log('option', e)
            e.path[0].id === "all" ? this.generateSearch(e, undefined, 'mfgpn') : this.searchoption = e.path[0].id

             if (this.$.searchQuery.value) {
                this.generateSearch()
            }
        }

        statusChange() {
            var data = this.searched || this.model
            this.responselist(data, true)
        }

        responselist(data, fromquery) {
            if (fromquery) {
                this.data = data

                       setTimeout(()=> { this.$.list.dispatchEvent(new CustomEvent('iron-resize'), {
                        composed: true,
                        bubbles: true,
                    })
               }, 5)


            }
        }

    }
    customElements.define('customer-sidepanel', CustomerSidepanel);

