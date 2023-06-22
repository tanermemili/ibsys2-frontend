import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private forecastPostUrl: string = '/api/productionplan/forecast/new';
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

}
