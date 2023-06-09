import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-future-inward-stock-movements',
  templateUrl: './future-inward-stock-movements.component.html',
  styleUrls: ['./future-inward-stock-movements.component.css']
})
export class FutureInwardStockMovementsComponent {
  constructor(private location: Location) {}
  
  goBack(): void {
    this.location.back();
  }
}
