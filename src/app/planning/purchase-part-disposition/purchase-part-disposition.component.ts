import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import log from 'loglevel';
import { PlanningService, PurchasePartDataType, PurchasePartOutputDataType, QuantityNeedDataType } from '../planning.service';
import { DialogOverviewComponent } from '../shared/dialog-overview/dialog-overview.component';
import { DialogData } from '../shared/dialog-overview/dialog-overview.model';

@Component({
  selector: 'app-purchase-part-disposition',
  templateUrl: './purchase-part-disposition.component.html',
  styleUrls: ['./purchase-part-disposition.component.css']
})
export class PurchasePartDispositionComponent {
  purchaseParts: PurchasePartDataType[] = [];
  purchasePartsOutput: PurchasePartOutputDataType[] = [];
  quantityNeed: QuantityNeedDataType[] = [];
  mergedPurchasePartsQuantityNeed: PurchasePartDataType[] = [];
  displayedColumns = [
    'article',
    'initialStock',
    'quantityNeedP1',
    'quantityNeedP2',
    'quantityNeedP3',
    'deliveryTimeFast',
    'deliveryTimeWithDeviation',
    'requirementN',
    'requirementNplusOne',
    'requirementNplusTwo',
    'requirementNplusThree',
    'discountQuantity',
    'orderQuantity',
    'orderType',
    'orderColor'
  ];

  constructor(private planningService: PlanningService, private readonly dialog: MatDialog) { }

  // ngOnInit() {
  //   this.getPurchasePartsAndQuantityNeed();
  // }

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

  public getPurchasePartsAndQuantityNeed() {
    this.planningService.getPurchaseParts().subscribe({
      next: (purchasePartsData) => {
        this.purchaseParts = purchasePartsData as PurchasePartDataType[];
        this.planningService.getQuantityNeed().subscribe({
          next: (quantityNeedData) => {
            this.quantityNeed = quantityNeedData as QuantityNeedDataType[];
            this.mergePurchasePartsAndQuantityNeed();
          }
        })
        this.purchaseParts.sort((a, b) => a.itemNumber - b.itemNumber);
        log.debug('/api/purchasepartdisposition:', this.purchaseParts);
      },
      error: (e) => log.debug('/api/purchasepartdisposition Error', e),
      complete: () => log.debug('/api/purchasepartdisposition completed')
    });
  }

  private mergePurchasePartsAndQuantityNeed() {
    this.mergedPurchasePartsQuantityNeed = [];
    this.purchaseParts.forEach((item, i) => {
      this.mergedPurchasePartsQuantityNeed.push({
        ...item,
        ...(this.quantityNeed.find((val) => val.itemNumber === item.itemNumber))
      });
    });
    log.debug('Merged JSON:', this.mergedPurchasePartsQuantityNeed);
  }

  public savePurchaseParts() {
    this.buildJsonOutput();
    this.planningService.savePurchaseParts(this.purchasePartsOutput).subscribe({
      error: (e) => log.debug(e),
      complete: () => {
        log.debug('/api/purchasepartdisposition/output completed');
      }
    });
  }

  private buildJsonOutput() {
    this.purchasePartsOutput = [];
    this.purchaseParts.forEach((purchasePart: any, index: any) => {
      if (purchasePart.orderType != null) {
        this.purchasePartsOutput.push({
          article: purchasePart.itemNumber,
          quantity: purchasePart.orderQuantity,
          modus: purchasePart.orderType
        })
      }
    });
    log.debug('purchasePartsOutput:', this.purchasePartsOutput);
  }

  openDialog(header: string, body: string): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      data: new DialogData(header, body)
    })
  }
}
