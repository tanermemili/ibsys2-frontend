import { Component, OnInit } from '@angular/core';
import log from 'loglevel';
import { InputService } from './input.service';
import {AuthService} from "./auth/AuthService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'ibsys-angular';

 isExpanded: boolean = true;
 isAuth: boolean = false;


  constructor(private inputService: InputService, private authServie: AuthService) {
    log.debug('AppComponent.constructor()');
  }

  ngOnInit() {
    log.enableAll();
    this.isAuth = this.authServie.isAuthenticated()
  }
}
