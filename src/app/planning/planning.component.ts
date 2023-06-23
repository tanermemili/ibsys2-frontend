import { Component, ViewChild } from '@angular/core';
import log from 'loglevel';
import { PlanningService } from './planning.service';
import { PurchasePartDispositionComponent } from './purchase-part-disposition/purchase-part-disposition.component';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent {
  @ViewChild(PurchasePartDispositionComponent) purchasePartDispositionComponent!: any;
  tableData: any[] = [
    { artikel: 'P1', dieseWoche: 0, periode1: 0, periode2: 0, periode3: 0,},
    { artikel: 'P2', dieseWoche: 0, periode1: 0, periode2: 0, periode3: 0,},
    { artikel: 'P3', dieseWoche: 0, periode1: 0, periode2: 0, periode3: 0,}
  ];

  constructor(public planningService: PlanningService) {}

  calculateSum(item: any): number {
    return item.p1 + item.p2 + item.p3;
  }

  calculateColumnSum(columnName: string): number {
    return this.tableData.reduce((sum, item) => sum + item[columnName], 0);
  }

  selectionChange(event: any) {
    let selectedIndex = event.selectedIndex;
    // event.selectedIndex: Which step is selected:
    // selectedIndex = 0: Prognose
    // selectedIndex = 1: Disposition Eigenfertigung
    // selectedIndex = 2: Kapazitätsbedarf
    // selectedIndex = 3: Kaufteildisposition Teil 1
    // selectedIndex = 4: Kaufteildisposition Teil 2
    log.debug('Selection changed, step:', event.selectedIndex);
    switch (selectedIndex) {
      case 0: {
        // Prognose
        log.debug('Prognose selected');
        break;
      }
      case 1: {
        // Disposition Eigenfertigung
        log.debug('Disposition Eigenfertigung selected');
        break;
      }
      case 2: {
        // Kapazitätsbedarf
        log.debug('Kapazitätsbedarf selected');
        break;
      }
      case 3: {
        // Kaufteildisposition Teil 1
        log.debug('Kaufteildisposition Teil 1 selected');
        break;
      }
      case 4: {
        // Kaufteildisposition Teil 2
        log.debug('Kaufteildisposition Teil 2 selected');
        this.purchasePartDispositionComponent.getPurchaseParts();
        break;
      }
      default: {
        log.debug('No step selected');
        break;
      }
    }
  } 

  clickNextPurchasePartDisposition(_: any) {
    this.purchasePartDispositionComponent.savePurchaseParts();
  }
}
