import {extend} from "flarum/extend";
import TextEditor from "flarum/components/TextEditor";
import HelpButton from "./helpButton";

app.initializers.add('tdc-help', app => {
    let helpButton;

    extend(TextEditor.prototype, 'controlItems', function (items) {
        helpButton = new HelpButton;
        helpButton.textAreaObj = this;
        items.add('tdc-help', helpButton, -1);
    });
});
