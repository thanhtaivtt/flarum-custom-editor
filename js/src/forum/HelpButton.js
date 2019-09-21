import Component from "flarum/Component";
import icon from "flarum/helpers/icon";

export default class UploadButton extends Component {

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
            style: 'color: #e7672e'
        }, [
            icon('fas fa-question', {className: 'Button-icon'}),
        ]);
    }
}
