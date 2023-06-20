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
      var convert = require('xml-js');
      var options = {compact: true, ignoreComment: true, spaces: 4};
        let test = JSON.parse(originalString);
        var result = convert.js2xml(this.xmlMapperService.mapJsontoXmlrdyJson(test), options);
        console.log(result);
        this.result = result;

    });
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
// {
//   "input": {
//       "qualitycontrol": {
//           "_attributes": {
//               "type": "no",
//               "losequantity": "0",
//               "delay": "0"
//           }
//       },
//       "sellwish": {
//           "item": [
//               {
//                   "_attributes": {
//                       "article": "1",
//                       "quantity": "150"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "2",
//                       "quantity": "250"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "3",
//                       "quantity": "100"
//                   }
//               }
//           ]
//       },
//       "selldirect": {
//           "item": [
//               {
//                   "_attributes": {
//                       "article": "1",
//                       "quantity": "0",
//                       "price": "0.0",
//                       "penalty": "0.0"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "2",
//                       "quantity": "0",
//                       "price": "0.0",
//                       "penalty": "0.0"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "3",
//                       "quantity": "0",
//                       "price": "0.0",
//                       "penalty": "0.0"
//                   }
//               }
//           ]
//       },
//       "orderlist": {
//           "order": [
//               {
//                   "_attributes": {
//                       "article": "22",
//                       "quantity": "300",
//                       "modus": "3"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "27",
//                       "quantity": "1800",
//                       "modus": "5"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "28",
//                       "quantity": "1000",
//                       "modus": "5"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "32",
//                       "quantity": "1500",
//                       "modus": "3"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "33",
//                       "quantity": "400",
//                       "modus": "3"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "38",
//                       "quantity": "520",
//                       "modus": "3"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "39",
//                       "quantity": "550",
//                       "modus": "5"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "40",
//                       "quantity": "450",
//                       "modus": "5"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "41",
//                       "quantity": "650",
//                       "modus": "3"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "42",
//                       "quantity": "900",
//                       "modus": "5"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "44",
//                       "quantity": "2500",
//                       "modus": "3"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "45",
//                       "quantity": "250",
//                       "modus": "5"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "46",
//                       "quantity": "250",
//                       "modus": "5"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "57",
//                       "quantity": "630",
//                       "modus": "3"
//                   }
//               },
//               {
//                   "_attributes": {
//                       "article": "58",
//                       "quantity": "12500",
//                       "modus": "3"
//                   }
//               }
//           ]
//       },
//       "productionlist": {

