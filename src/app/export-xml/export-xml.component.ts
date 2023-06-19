import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { XMLParser } from 'fast-xml-parser';

@Component({
  selector: 'app-export-xml',
  templateUrl: './export-xml.component.html',
  styleUrls: ['./export-xml.component.css']
})
export class ExportXmlComponent {

  constructor(private http: HttpClient) {}

  // fetchData() {
  //   this.http.get('api/output').subscribe(data => {
  //     console.log(data);
  //     this.jObj = data;
  //   });
  //   console.log(this.jObj);
    
  //   return this.jObj;
  // }

  fetchData() {
    this.http.get('api/output',{responseType:'text'}).subscribe(data => {
      const originalString = (data as string);
      let replacedString = originalString.replace('workstations', 'workingtimelist');
      replacedString = replacedString.replace('productions', 'productionlist');
      replacedString = replacedString.replace('orderItems', 'orderlist');
      replacedString = replacedString.replace('sellDirects', 'selldirect');
      replacedString = replacedString.replace('sellWishes', 'sellwish');
      replacedString = replacedString.replace('qualityControl', 'qualitycontrol');
      var convert = require('xml-js');
      var options = {compact: true, ignoreComment: true, spaces: 4};
      let test = JSON.parse(replacedString);
      let test2 = { 'input' : test };

      var result = convert.js2xml(test2, options);
      console.log(result);
      // console.log(test2);
      // console.log(replacedString);
      // console.log(data);

      
    });
  }
}
