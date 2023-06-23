import { Component } from '@angular/core';
import log from 'loglevel';
import { PlanningService, PurchasePartDataType, PurchasePartOutputDataType } from '../planning.service';

@Component({
  selector: 'app-purchase-part-disposition',
  templateUrl: './purchase-part-disposition.component.html',
  styleUrls: ['./purchase-part-disposition.component.css']
})
export class PurchasePartDispositionComponent {
  purchaseParts: PurchasePartDataType[] = [];
  purchasePartsOutput: PurchasePartOutputDataType[] = [];
  constructor(private planningService: PlanningService) {}

  ngOnInit() {
    this.getPurchaseParts();
  }

  colorCircle(color: string): string {
    switch (color) {
      case 'green':
        return 'green_circle';
      case 'yellow':
        return 'yellow_circle'
      case 'red':
        return 'red_circle'
      default:
        return 'black_circle'
    }
  }

  public getPurchaseParts() {
    this.planningService.getPurchaseParts().subscribe({
      next: (data) => {
        this.purchaseParts = data as PurchasePartDataType[];
        this.purchaseParts.sort((a, b) => a.itemNumber - b.itemNumber);
        log.debug('/api/purchasepartdisposition:', this.purchaseParts);
      },
      error: (e) => log.debug('/api/purchasepartdisposition Error'),
      complete: () => log.debug('/api/purchasepartdisposition completed')
    });
  }

  public savePurchaseParts() {
    this.buildJson();
    this.planningService.savePurchaseParts(this.purchasePartsOutput).subscribe({
      error: (e) => log.debug(e),
      complete: () => {
        log.debug('/api/purchasepartdisposition/output completed');
      }
    });
  }

  private buildJson() {
    this.purchasePartsOutput = [];
    this.purchaseParts.forEach((purchasePart: any, index: any) => {
      if (purchasePart.orderType != null ) {
        this.purchasePartsOutput.push({
          article: purchasePart.itemNumber,
          quantity: purchasePart.orderQuantity,
          modus: purchasePart.orderType
        })
      }
    });
    log.debug('purchasePartsOutput:', this.purchasePartsOutput);
  }
}
