import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-lazy',
  template: `lazy`
})
export class LazyComponent {
  title = moment();
}
