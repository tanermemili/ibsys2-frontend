import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-warehouse-stock',
  templateUrl: './warehouse-stock.component.html',
  styleUrls: ['./warehouse-stock.component.css']
})
export class WarehouseStockComponent {
  constructor(private location: Location) {}
  
  goBack(): void {
    this.location.back();
  }
}
