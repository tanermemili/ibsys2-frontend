import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SupplyChainInput } from './modules/SupplyChainInput';


@Injectable({
  providedIn: 'root'
})
export class WarehouseDataStateService {
  private warehouseData = new Subject<SupplyChainInput>();

  setWarehouseData(data: SupplyChainInput) {
    this.warehouseData.next(data);
  }

  getWarehouseData() {
    return this.warehouseData.asObservable();
  }
}