import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { WarehouseStock, WarehouseStockService } from './warehousestock.service';

@Component({
  selector: 'app-warehouse-stock',
  templateUrl: './warehouse-stock.component.html',
  styleUrls: ['./warehouse-stock.component.css']
})
export class WarehouseStockComponent {
  warehousestocks: WarehouseStock[] | undefined;

  constructor(private warehouseStockService: WarehouseStockService, private location: Location) {}
  
  ngOnInit() {
    this.getWarehouseStocks();
  } 

  getWarehouseStocks() {
    this.warehouseStockService.getWarehouseStocks().subscribe(data => {
      this.warehousestocks = data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}