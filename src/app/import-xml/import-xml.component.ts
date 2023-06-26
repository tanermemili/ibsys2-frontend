import { Component } from '@angular/core';
import { Router } from "@angular/router";
import * as log from 'loglevel';
import { InputService } from '../input.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-import-xml',
  templateUrl: './import-xml.component.html',
  styleUrls: ['./import-xml.component.css']
})
export class ImportXmlComponent {

  constructor(private inputService: InputService, private router: Router) { }

  onChangeUpload(e: any) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (evt) => {
      const xmlData: string = (evt as any).target.result;
      log.debug('xmldata:', xmlData);
      this.inputService.initializeInput(xmlData);
      this.router.navigate(['/planning'])
    };
  }
}
