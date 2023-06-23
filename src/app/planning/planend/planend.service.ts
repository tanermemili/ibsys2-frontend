import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SupplyChainInput } from './planend.model';


@Injectable({
  providedIn: 'root'
})
export class PlanendService {
  private planendData = new Subject<SupplyChainInput>();

  setPlanendData(data: SupplyChainInput) {
    this.planendData.next(data);
  }

  getPlanendData() {
    return this.planendData.asObservable();
  }
}