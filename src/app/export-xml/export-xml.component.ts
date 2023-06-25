import { Component } from '@angular/core';
import { XmlMapperService } from '../xml-mapper.service';
import { PlanendService } from '../planning/planend/planend.service';
import * as XmlJs from 'xml-js';

@Component({
  selector: 'app-export-xml',
  templateUrl: './export-xml.component.html',
  styleUrls: ['./export-xml.component.css']
})
export class ExportXmlComponent {
  constructor(
    private xmlMapperService: XmlMapperService,
    private planendDataState: PlanendService,
  ) {}

  downloadFile() {
    const planendData = this.planendDataState.getPlanedData()
    if (planendData) {
      const options = { compact: true, ignoreComment: true, spaces: 4 };
      const result = XmlJs.js2xml(this.xmlMapperService.mapSupplyChainInputToXmlRdyJson(planendData), options);

      console.log('---------------ExportXmlComponent', result)
      const blob = new Blob([result], { type: 'application/xml' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'export.xml';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }
  }
}
