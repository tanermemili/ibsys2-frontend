import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import log from 'loglevel';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private url: string = '/api/input';
  private httpOptions = {
    headers: new HttpHeaders({
      'responseType': 'text',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    log.debug('InputService.constructor()');
  }

  public initializeInput() {
    this.readFile('/assets/input.json').subscribe(input => {
      log.debug('Content Input.json: ', input);
      this.setInput(input).subscribe();
    });
  }

  private readFile(path: string): Observable<string> {
    return this.http.get<string>(path);
  }

  private setInput(input: Object): Observable<Object> {
    return this.http
      .post<Object>(this.url, input, this.httpOptions)
      .pipe(tap(_ => log.debug('finished POST /api/input')));
  }
}
