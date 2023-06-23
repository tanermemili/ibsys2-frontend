import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, first, throwError } from "rxjs";
import { ProdprogArticleInput, ProdprogResult } from "./prodprog-prod.model";

@Injectable({
  providedIn: 'root'
})
export class ProdprogProdService {
  readonly #baseUrl = "http://localhost:8080/api/productionplan/production"

  constructor(private readonly httpClient: HttpClient) {
      console.log('Prodprog.start')
  }

  findAll(): Observable<ProdprogResult[]> {
      return (
          this.httpClient
          .get<ProdprogResult[]>(this.#baseUrl)
          .pipe(
              catchError(this.handleError),
              first()
          )
      )
  }

  plan(prodprogInput: ProdprogArticleInput): Observable<ProdprogArticleInput> {
      return this.httpClient
          .post<ProdprogArticleInput>(this.#baseUrl, prodprogInput, {})
  }

  private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        console.error('An error occurred:', error.error);
      } else {
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }

}
