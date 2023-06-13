import { Component } from '@angular/core';
import log from 'loglevel';
import { PurchasePart, PurchasePartDispositionService } from './purchasePartDisposition.service';

@Component({
  selector: 'app-purchase-part-disposition',
  templateUrl: './purchase-part-disposition.component.html',
  styleUrls: ['./purchase-part-disposition.component.css']
})
export class PurchasePartDispositionComponent {
  purchaseparts: PurchasePart[] | undefined;

  constructor(private purchasePartDispositionService: PurchasePartDispositionService) {}

  ngOnInit() {
    this.getPurchaseParts();
  } 

  getPurchaseParts() {
    this.purchasePartDispositionService.getPurchaseParts().subscribe(data => {
      this.purchaseparts = data;
    });
  }
}
