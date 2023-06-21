import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutputService {

  constructor(private http: HttpClient) { }

  getOutput(): Observable<Object> {
    return this.http.get('api/output',{responseType:'text'});
  }
}
