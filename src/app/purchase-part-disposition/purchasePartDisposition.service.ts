import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import log from 'loglevel';

export interface PurchasePart {
  "id": number;
  "itemNumber": number;
  "deliveryTime": number;
  "discountQuantity": number;
  "initialStock": number;
  "requirementN": number;
  "requirementNplusOne": number;
  "requirementNplusTwo": number;
  "requirementNplusThree": number;
  "orderQuantity": number;
  "orderType": number;
  "orderColor": string;
}

@Injectable({
  providedIn: 'root'
})
export class PurchasePartDispositionService {
  private url: string = '/api/purchasepartdisposition'; 

  constructor(private http: HttpClient) {
    log.debug('PurchasePartDispositionService.constructor()');
  }

  public getPurchaseParts(): Observable<PurchasePart[]> {
    log.debug('PurchasePartDispositionService.purchasepartdisposition');
    return this.http.get<PurchasePart[]>(this.url);
  }
}
