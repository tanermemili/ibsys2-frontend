import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ForecastDataType {
  id: number;
  article: number;
  periodN: number;
  periodNplusOne: number;
  periodNplusTwo: number; 
  periodNplusThree: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  stepperDuration: string = '1000';
  private forecastGetUrl: string = '/api/productionplan/forecast';

  constructor(private http: HttpClient) { }

  // 
  // HTTP requests
  // 

  getForecast(): Observable<Object> {
    return this.http.get<ForecastDataType[]>(this.forecastGetUrl);
  }

}
