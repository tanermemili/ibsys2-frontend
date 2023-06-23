import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ForecastDataType {
  id: number;
  article: number;
  periodN: number;
  periodNplusOne: number;
  periodNplusTwo: number; 
  periodNplusThree: number;
}
export interface PurchasePartDataType {
  "id": number;
  "itemNumber": number;
  "deliveryTimeWithDeviation": number;
  "deliveryTimeFast": number;
  "deliveryTimeJITwithDeviation": number;
  "discountQuantity": number;
  "initialStock": number;
  "requirementN": number;
  "requirementNplusOne": number;
  "requirementNplusTwo": number;
  "requirementNplusThree": number;
  "futurePeriodArrival": number;
  "futurePeriodAmount": number;
  "orderQuantity": number;
  "orderType": number;
  "orderColor": string;
}

export interface PurchasePartOutputDataType {
  "article": number;
  "quantity": number;
  "modus": number;
}

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  stepperDuration: string = '1000';
  private forecastGetUrl: string = '/api/productionplan/forecast';
  private forecastPostUrl: string = '/api/productionplan/forecast/new';
  private purchasePartDispostionGetUrl: string = '/api/purchasepartdisposition';
  private purchasePartDispostionPostUrl: string = '/api/purchasepartdisposition/output';
  private httpOptions = {
    headers: new HttpHeaders({
      'responseType': 'text',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // 
  // HTTP requests
  // 

  getForecast(): Observable<Object> {
    return this.http.get<ForecastDataType[]>(this.forecastGetUrl);
  }

  saveForecast(input: any): Observable<Object> {
    return this.http.post<Object>(this.forecastPostUrl, input, this.httpOptions);
  }

  getPurchaseParts(): Observable<Object> {
    return this.http.get<PurchasePartDataType[]>(this.purchasePartDispostionGetUrl);
  }

  savePurchaseParts(input: any): Observable<Object> {
    return this.http.post<Object>(this.purchasePartDispostionPostUrl, input, this.httpOptions);
  }

}
