import { Component } from '@angular/core';
import { labelConstants } from './text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testpeoject';
  pageTitle: string = labelConstants.pagetitle;
}
