import { Component } from '@angular/core';
import log from 'loglevel';
import { InputService } from './input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibsys-angular';

  constructor(private inputService: InputService) {
    log.debug('AppComponent.constructor()');
  }

  ngOnInit() {
    log.enableAll();
    this.inputService.initializeInput();
  }
}
