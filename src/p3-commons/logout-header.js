import {Element as PolymerElement}
  from '../../node_modules/@polymer/polymer/polymer-element.js'

       
  export class LogoutHeader extends PolymerElement {
        static get template() {
        return ` <style>
        #paperToggle {
            min-height: 40px;
            min-width: 40px;
        }

         :host {
            display: block;
            margin-left: 30px;
            position: absolute;
            right: 34px;
            display: block;
            width: 80px;
            line-height: 0;
        }



        .my-content {
            font-size: 14px;
            min-height: 24px;
            position: relative;
        }

        .title {
            position: relative;
        }

        .signout {
            right: 0;
            position: absolute;
        }

        .bottom {
            min-height: 24px;
        }

        .icon-head {
            right: -7px;
        }

        .right-icon {
            position: absolute;
            right: 0;
            bottom: 8px;
            z-index: 0;
        }

        .logout {
            padding-left: 83%;
        }

        @media (max-width: 767px) {
            .logout {
                padding-right: 0px;
            }
            :host {
                right:22px;
            }
        }
        </style>
        <div class="title" on-tap="logout">
            <div class="signout" style="font-size: 17px;">Sign Out</div>
        </div>
        <app-location route="{{route}}"></app-location>
        <app-route route="{{route}}"></app-route>
        <iron-ajax method="GET" id="ajaxlogout" url="/user/logout" handle-as="json" on-response="response" on-error="showError" content-type="application/json"></iron-ajax>`
    }
        static get properties() {
            return {
                model: {
                    type: String,
                    notify: true
                },
            }
        }

        constructor() {
            super();
            // Utils.apply(this);
        }

        hider(soid) {

            if (soid) {
                return false;
            } else {
                return true;
            }
        }
        showError(e) {
            var msg = e.detail.request.xhr.response.error;
            if (msg) document.querySelector('#toast').show(msg);
        }
        logout() {
            this.$.ajaxlogout.generateRequest();
            this.dispatchEvent(new CustomEvent('signoutGoogleLogin', {
                composed: true,
                bubbles: true,
            })) 
        }
        response(request) {
            console.log(request.detail.response)
            var result = request.detail.response;
            if (result.auth) {
                document.querySelector('#toast').text = result.error;
                document.querySelector('#toast').show();
            } else {
                this.dispatchEvent(new CustomEvent('logoutapp', {}));
                window.location.reload(false);
                this.set('route.path', '')
                sessionStorage.clear()
            }
        }
    }

 customElements.define('logout-header', LogoutHeader);
