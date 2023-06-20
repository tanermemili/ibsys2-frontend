import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { XMLParser } from 'fast-xml-parser';
import { fileURLToPath } from 'url';
import { XmlMapperService } from '../xml-mapper.service';

@Component({
  selector: 'app-export-xml',
  templateUrl: './export-xml.component.html',
  styleUrls: ['./export-xml.component.css']
})
export class ExportXmlComponent {

  constructor(private http: HttpClient, private xmlMapperService: XmlMapperService) {}
  
  fetchData() {
    this.http.get('api/output',{responseType:'text'}).subscribe(data => {
      const originalString = (data as string);
      var convert = require('xml-js');
      var options = {compact: true, ignoreComment: true, spaces: 4};
        let test = JSON.parse(originalString);
        var result = convert.js2xml(this.xmlMapperService.mapJsontoXmlrdyJson(test), options);
        console.log(result);
        this.result = result;
    });
    const blob = new Blob([this.result], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export.xml';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  result: string = '';

  downloadFile() {
    const blob = new Blob([this.result], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export.xml';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}