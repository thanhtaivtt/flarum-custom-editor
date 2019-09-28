import Component from "flarum/Component";
import icon from "flarum/helpers/icon";

export default class HelpButton extends Component {

  /**
   * Load the configured remote uploader service.
   */
  init() {
    // the service type handling uploads
    this.textAreaObj = null;

    // initial state of the button
    this.loading = false;
  }

  /**
   * Show the actual Upload Button.
   *
   * @returns {*}
   */
  view() {
    return m('a', {
      href: '/d/2-huong-dan-su-dung-editor-tren-forum',
      target: '_blank',
      style: 'color: #e7672e',
      class: 'Button Button--icon Button--help', title: 'View Help'
    }, [
      icon('fas fa-question', {className: 'Button-icon'}),
    ]);
  }
}
