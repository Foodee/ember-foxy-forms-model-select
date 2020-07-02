import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormControlsFfMultiModelSelectComponent extends Component {
  @action
  handleChange(value) {
    if (this.args.onChange) {
      return this.args.onChange(value);
    }
  }

  @action
  handleCreate(value) {
    if (this.args.onCreate) {
      return this.args.onCreate(value);
    }
  }
}
