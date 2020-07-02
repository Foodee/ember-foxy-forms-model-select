import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class UsageController extends Controller {
  anModel = {
    @tracked single: null,
    @tracked multiple: A(),
  };
}
