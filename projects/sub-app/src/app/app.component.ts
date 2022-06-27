import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sub-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'subApp';
}
