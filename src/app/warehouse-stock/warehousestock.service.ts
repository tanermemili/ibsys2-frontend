import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import log from 'loglevel';


export interface WarehouseStock {
  "id": number;
  "amount": number;
  "startamount": number;
  "pct": string;
  "price": string;
  "stockvalue": string;
  "period": number;
  "geplanterSicherheitsbestand": number;
  "stuecklistenGruppe": string;
  "warteschlange": number;
}

@Injectable({
  providedIn: 'root'
})
export class WarehouseStockService {
  private url: string = '/api/datainfo/articles'; 

  constructor(private http: HttpClient) {
    log.debug('WarehouseStockService.constructor()');
  }

  public getWarehouseStocks(): Observable<WarehouseStock[]> {
    return this.http
      .get<WarehouseStock[]>(this.url)
      .pipe(tap(result => log.debug('finished GET /api/datainfo/articles, result:', result)));
  }
}