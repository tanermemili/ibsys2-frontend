import { Component } from '@angular/core';
import log from 'loglevel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibsys-angular';

  ngOnInit() {
    log.enableAll();
  }
}
