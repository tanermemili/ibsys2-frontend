import { Component, OnInit } from '@angular/core';
import log from 'loglevel';
import { InputService } from './input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'ibsys-angular';

 isExpanded: boolean = true;


  constructor(private inputService: InputService) {
    log.debug('AppComponent.constructor()');
  }

  ngOnInit() {
    log.enableAll();
  }
}
