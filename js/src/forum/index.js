import {extend} from "flarum/extend";
import TextEditor from "flarum/components/TextEditor";
import HelpButton from "./HelpButton";
import TableButton from "./TableButton";

app.initializers.add('tdc-help', app => {
  let helpButton;

  extend(TextEditor.prototype, 'controlItems', function (items) {
    helpButton = new HelpButton;
    helpButton.textAreaObj = this;
    items.add('tdc-help', helpButton, -1);
  });
});

app.initializers.add('tdc-table', app => {
  let tableButton;

  extend(TextEditor.prototype, 'controlItems', function (items) {
    tableButton = new TableButton;
    tableButton.textAreaObj = this;
    items.add('tdc-table', tableButton, -10);
  });
});
