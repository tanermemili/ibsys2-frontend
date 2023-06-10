import { Component } from '@angular/core';
import { PurchasePart, PurchasePartDispositionService } from './purchasePartDisposition.service';

@Component({
  selector: 'app-purchase-part-disposition',
  templateUrl: './purchase-part-disposition.component.html',
  styleUrls: ['./purchase-part-disposition.component.css']
})
export class PurchasePartDispositionComponent {
  purchaseparts: PurchasePart[] | undefined;

  constructor(private connectionService: PurchasePartDispositionService) {}

  ngOnInit() {
    this.getPurchaseParts();
  } 

  getPurchaseParts() {
    this.connectionService.getPurchaseParts().subscribe(data => {
      this.purchaseparts = data;
    });
  }
}
