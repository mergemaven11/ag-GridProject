import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-app';

  columnDefs = [
    { headerName: "Make", field: "make" },
    { },
    {}
  ]
}
