
 import {Element as PolymerElement}
  from '../../node_modules/@polymer/polymer/polymer-element.js'

 export class AdminSignIn extends PolymerElement {
      

        static get template() {
        return `

        <style include="shared-styles iron-flex iron-flex-alignment">
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
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
            margin-top: 7px;
        }
        
       
        
        .col-xs-9 {
            position: relative;
            min-height: 1px;
            padding-left: 0px;
            padding-right: 0px;
            width: 71%
        }
        
        .text-right {
            text-align: right;
        }
        
        .my-content {
            display: block;
            position: relative;
            word-wrap: break-word;
            font-size: 14px;
            margin-top: 11px;
        }
        
        .right {
            margin-left: auto;
            line-height: 100% !important;
            /*width: 100px;*/
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
            /*margin-right: 15px;*/
        }
        
        .input {
            text-align: initial;
            border: none;
            background-color: #eee;
            box-shadow: 0 1px 0 rgba(155, 155, 155, 0.5);
            width: 94%;
            font-size: 13.3px;
                height: 17px;
             padding: 0px;
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
            padding-top: 7%;
            padding-bottom: 7%;
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
        
        .top-spacing {
            margin-top: 10px;
        }
        
        .top-spacing1 {
            margin-top: 30px;
        }
        
        .top-spacing2 {
            margin-top: 45px;
        }
        
        .side-padding {
            padding-left: 16px
        }
        
        .options {
            margin-top: 33px;
            padding-left: 38px;
            color: blue;
        }
        
        .table-padding {
            padding-left: 5%;
            padding-right: 5%;
            margin-top: 20px;
        }
        .submit {
            text-align: right;
            /*margin-top: 29px;*/
            margin-top: 17px;
        }
        </style>
        <div class="title-rightpaneldraw"> Admin Sign In </div>
        <div class="table-padding">
            <div class="my-content">
                <div class="col-xs-3">Email</div>
                <div class="text-right">
                    <iron-input class="col-xs-9" bind-value="{{email}}">
                        <input class="input">
                    </iron-input>
                </div>
            </div>
            <div>
                <div class="col-xs-3">Password</div>
                <div class="text-right">
                    <iron-input class="col-xs-9" bind-value="{{password}}">
                        <input type="password" class="input">
                    </iron-input>
                </div>
            </div>
            </section>
            <div>
                <!-- <div class="col-xs-12 col-md-11"></div> -->
                <!-- <div class="col-xs-12 col-md-11"> -->
                    <div class="submit my-content button-row">
                        <paper-button class="button main-button" on-tap="authenticate" raised>Submit</paper-button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <iron-ajax id="ajaxAdmin" method="POST" url="/user/checkadmin" on-response="authenticateResponse" on-error="errorResponse"></iron-ajax>
        `
    }

        static get properties() {
            return {
                admin: {
                    type: String,
                    reflectToAttribute: true,
                    notify: true
                }
            }
        }

        constructor() {

            super()
        }

        authenticate() {


            //auntheticate with adminUser backend

            let admin = {
                email: this.email,
                password: this.password
            }

            this.$.ajaxAdmin.body = JSON.stringify(admin)
            this.$.ajaxAdmin.generateRequest();


          
        }

        authenticateResponse(response) {


            console.log('this is response', response)

            let auth = response.detail.response.adminauth

            if (auth) {

                this.dispatchEvent(new CustomEvent('authorized', {
                    bubbles: true,
                    composed:true
                })) 
            } 

        }

        errorResponse() {

               document.querySelector('#toast').text = "Authentication failed.";
              document.querySelector('#toast').duration = 4000;
              document.querySelector('#toast').show();

        }

        open() {

            this.email = "";
            this.password = ""

        }



    }
    customElements.define('admin-signin', AdminSignIn);
   
