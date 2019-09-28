import Component from "flarum/Component";
import icon from "flarum/helpers/icon";

export default class TableButton extends Component {

  /**
   * Load the configured remote uploader service.
   */
  init() {
    // the service type handling uploads
    this.textAreaObj = null;
  }

  /**
   * Show the actual Upload Button.
   *
   * @returns {*}
   */
  view() {
    return m('button#aaa', {
      className: 'Button Button--icon Button--table',
      style: 'background: #ffffff',
      title: 'Insert table',
      onclick: this.insertTable.bind(this)
    }, [
      icon('fas fa-table', {className: 'tdc_table'}),
    ]);
  }

  insertTable(e) {
    console.log(e);
    console.log(this.textAreaObj);
    this.textAreaObj.insertAtCursor(`|Column|Column|Column|Column|
|---|---|---|---|
| row  |  row | row | row  |` + '\n');
  }
}
