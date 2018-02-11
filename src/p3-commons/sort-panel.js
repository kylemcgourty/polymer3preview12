  import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js'


  import { repeat } from '../../node_modules/lit-html/lib/repeat.js'

  import { render } from '../../node_modules/lit-html/lib/lit-extended.js';

  export class SortPanel extends LitElement {
      static get properties() {
          return {
              showTitle: {
                  type: Object,
                  reflectToAttribute: true,
                  notify: true,
                  value: function() {
                      return {
                          display0: "block",
                          display1: "hidden",
                          tableTitle: "",
                      }
                  }
              },
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
              model: {
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

      constructor() {
          super()
          this.showTitle ={}

      }

      open(model, index, showTitle) {

          if (showTitle) {
              this.showTitle.tableTitle = showTitle.tableTitle;
              this.showTitle.display0 = "hidden";
              this.showTitle.display1 = "block";
          }

          const titletypes = datatitle => {

              return html `
                    <div class="title-rightpaneldraw" style="display: ${datatitle.display0}">Sort Item </div>
                    <div class="title-rightpaneldraw" style="display: ${datatitle.display1}"> ${datatitle.tableTitle}</div>
                  `
          }


          render(titletypes(this.showTitle), this.shadowRoot.querySelector('#tabletitle'))


          this.model = model
          let procedure = false

          let lineitems
          if (this.model.lineitems) {
              this.list = this.model.lineitems
              lineitems = JSON.parse(JSON.stringify(model.lineitems))
              lineitems[index - 1].highlight = "selected"
          } else if (this.model.transportapps) {
              this.list = this.model.transportapps
              lineitems = JSON.parse(JSON.stringify(model.transportapps))
              lineitems[index - 1].highlight = "selected"
          } else if (this.model.productgrouping) {
              this.list = this.model.productgrouping[0].items;
              lineitems = JSON.parse(JSON.stringify(model.productgrouping[0].items))
              lineitems[index - 1].highlight = "selected"

          } else if (this.model[0].procedures) {
              this.list = this.model
              lineitems = JSON.parse(JSON.stringify(model))
              lineitems[index].highlight = "selected";
              procedure = true;
          }

          procedure ? this.current = index : this.current = index - 1;
          this.data = lineitems

          this.data.unshift({
              // 0: "and here",
              above: "Above",
              below: "Below",
              index: "here",
          })

          console.log("This data", this.data);

          const types = data => {

              return html `
            ${repeat (
                 data,
                 item => item.id,
                 item => html`
                            <div class="container">
                                <div id$="${item.id}" data-selected$="${item.highlight}" class="unit">
                                    <div class="layout horizontal">
                                        <div class="left">
                                            <div class="title"> ${item.above}</div>
                                            <paper-icon-button on-tap="${(e) =>this.moveabove(e)}" class="direction-icon" icon="editor:vertical-align-top"></paper-icon-button>
                                        </div>
                                        <div class="middle"> ${index} </div>
                                        <div class="right">
                                            <div class="title">${item.below}</div>
                                            <paper-icon-button on-tap="${(e) =>this.movebelow(e)}" class="direction-icon" icon="editor:vertical-align-bottom"></paper-icon-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          `
                 )}
           `;
          }


          render(types(this.data), this.shadowRoot.querySelector('#table'))
      }


      movebelow(e) {

          let index = e.model.index;
          let li = this.list[this.current]

          this.next = index;

          if (this.next > this.current) {
              this.splice('list', this.next, 0, li)
              this.splice('list', this.current, 1)
          } else if (this.current > this.next) {
              let l = this.splice('list', this.current, 1)
              this.splice('list', this.next, 0, l[0])
          } else {
              this.close()
              return;
          }

          if (this.showTitle) {

              if (this.showTitle.tableTitle === "Sort Service Location") {

                  this.dispatchEvent(new CustomEvent('sortedServices', {
                      bubbles: true,
                      composed: true,
                      detail: {
                          model: this.model
                      }
                  }))
              }
          } else {
              this.dispatchEvent(new CustomEvent('sorted', {
                  bubbles: true,
                  composed: true,
                  detail: {
                      model: this.model
                  }
              }))
          }
          this.close()
      }



      moveabove(e) {

          let index = e.model.index;
          let li = this.list[this.current]
          this.next = index - 1;

          if (this.next > this.current) {
              this.splice('list', this.next, 0, li)
              this.splice('list', this.current, 1)
          } else if (this.current > this.next) {
              let l = this.splice('list', this.current, 1)
              this.splice('list', this.next, 0, l[0])
          } else {
              this.close()
              return;
          }

          if (this.showTitle) {

              if (this.showTitle.tableTitle === "Sort Service Location") {

                  this.dispatchEvent(new CustomEvent('sortedServices', {
                      bubbles: true,
                      composed: true,
                      detail: {
                          model: this.model
                      }
                  }))
              }
          } else {

              this.dispatchEvent(new CustomEvent('sorted', {
                  bubbles: true,
                  composed: true,
                  detail: {
                      model: this.model
                  }
              }))
          }
          this.close()
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

      render({ showTitle, history, data, model }) {
          return html ` <style include="shared-styles iron-flex iron-flex-alignment">
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

        .container:nth-child(1) .middle {
            visibility: hidden;
        }

        .container:nth-child(1) .direction-icon {
            display: none;
        }

        .title {
            display: none;
        }

        .container:nth-child(1) .title {
            display: block;
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

        [data-selected="selected"] {
            background-color: #b5cdf4;
        }

        .direction-icon {
            margin-top: -10px;
        }

        .left {
            width: 33%;
            margin-top: 8px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            flex-grow: 1;
            text-align: center;
            display: inline-block;
        }

        .middle {
            width: 33%;
            margin-top: 8px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            flex-grow: 1;
            text-align: center;
            display: inline-block;
        }

        .right {
            margin-top: 8px;
            width: 33%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            flex-grow: 1;
            text-align: center;
            display: inline-block;
        }
        </style>
        <div class="page">
            <div id="top"></div>
            <div id="tabletitle">
            </div>
            <div style="background-color: #e6e6e6;">
                <div class="close-interface">
                    <span on-tap="${() =>this.close()}">Close</span>
                    <iron-icon icon="close" on-tap="${() =>this.close()}"></iron-icon>
                </div>
            </div>
            <div class="table-padding">
                <div id="parts" class="results-container layout vertical">
                   <div id="table">
                   </div>
                </div>
            </div>`
      }
  }

  customElements.define('sort-panel', SortPanel);