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
              },
              onSorted: {
                type: String,
                reflectToAttribute: true,
              }
          }
      }

      static get observers() {
          return []
      }

      constructor() {
          super()
          this.showTitle ={}
          this.onSorted = "";
      }

      open(model, index, showTitle, onSorted="sorted", engineering) {

          if (showTitle) {
              this.showTitle.tableTitle = showTitle.tableTitle;
              this.showTitle.display0 = "hidden";
              this.showTitle.display1 = "block";
          }

          this.onSorted = onSorted;

          const titletypes = datatitle => {

              return html `
                    <div class="title-rightpaneldraw" style="display: ${datatitle.display0}">Sort Item </div>
                    <div class="title-rightpaneldraw" style="display: ${datatitle.display1}"> ${datatitle.tableTitle}</div>
                  `
          }


          render(titletypes(this.showTitle), this.shadowRoot.querySelector('#tabletitle'))


          this.model = model
          let procedure = false
          this.skip = false

          let lineitems
          if (this.model.lineitems && !engineering) {
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
          } else if (this.model[0] && this.model[0].procedures) {
              this.list = this.model
              lineitems = JSON.parse(JSON.stringify(model))
              lineitems[index].highlight = "selected";
              procedure = true;
          } else if (engineering){

                var count = 0
                for(var i=0 ; i<this.model.lineitems.length; i++) {
                    if (count === index) {
                        this.index = i
                        break
                    }

                    if (this.model.lineitems[i].items) {
                        count = count + this.model.lineitems[i].items.length + 1
                    } else {
                        ++count
                    }
                }

                this.list = this.model.lineitems
                lineitems = JSON.parse(JSON.stringify(model.lineitems))

                lineitems[this.index].highlight = "selected"

                this.current = this.index

                this.skip = true
          }


          if (!this.skip){
            procedure ? this.current = index : this.current = index - 1;
          }
          this.data = lineitems

          this.data.forEach(function(item, idx) {
              item.idx = idx + 1;
          });

          const types = data => {

              return html `
              <div class="container">
                  <div class="unit">
                      <div class="layout horizontal">
                          <div class="left">
                              <div class="title">Above</div>
                          </div>
                          <div class="middle"></div>
                          <div class="right">
                              <div class="title"> Below</div>
                          </div>
                      </div>
                  </div>
              </div>
            ${repeat (
                 data,
                 item => item.idx,
                 item => html`
                            <div class="container">
                                <div id$="${item.idx}" data-selected$="${item.highlight}" class="unit">
                                    <div class="layout horizontal">
                                        <div class="left">
                                            <paper-icon-button on-tap="${() =>this.moveabove(item)}" class="direction-icon" icon="editor:vertical-align-top"></paper-icon-button>
                                        </div>
                                        <div class="middle"> <div class="middletext">${item.idx}</div> </div>
                                        <div class="right">
                                            <paper-icon-button on-tap="${() =>this.movebelow(item)}" class="direction-icon" icon="editor:vertical-align-bottom"></paper-icon-button>
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


      movebelow(item) {

          let index = item.idx;
          let li = this.list[this.current];

          this.next = index;

          if (this.next > this.current) {
              this.list.splice(this.next, 0, li);
              this.list.splice(this.current, 1);
          } else if (this.current > this.next) {
              let l = this.list.splice(this.current, 1);
              this.list.splice(this.next, 0, l[0]);
          } else {
              this.close();
              return;
          }

          this.dispatchEvent(new CustomEvent(this.onSorted, {
              bubbles: true,
              composed: true,
              detail: {
                  model: this.model
              }
          }));

          this.close();
      }



      moveabove(item) {

          let index = item.idx;
          let li = this.list[this.current];

          this.next = index - 1;

          if (this.next > this.current) {
              this.list.splice(this.next, 0, li);
              this.list.splice(this.current, 1);
          } else if (this.current > this.next) {
              let l = this.list.splice(this.current, 1);
              this.list.splice(this.next, 0, l[0]);
          } else {
              this.close();
              return;
          }

          this.dispatchEvent(new CustomEvent(this.onSorted, {
              bubbles: true,
              composed: true,
              detail: {
                  model: this.model
              }
          }));
          
          this.close();
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

      render({ showTitle, data, model }) {
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

        .middletext {
            display: inline-block;
            width: 40px;
            height: 31px;
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