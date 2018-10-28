import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  draft = true;
  title = 'Java Developer';
  name = 'Joel Ross';
  city = 'Mason';
  state = 'Ohio';

}
