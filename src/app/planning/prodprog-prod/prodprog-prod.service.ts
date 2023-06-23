import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, first, throwError } from "rxjs";
import {ProductionEntity, ProductionEntityPost, PredictionEntity} from "./prodprog-prod.model";

@Injectable({
  providedIn: 'root'
})
export class ProdprogProdService {
  readonly #baseUrl = "http://localhost:8080/api/productionplan/production/all"
  readonly #baseUrl2: string = "http://localhost:8080/api/productionplan/production/new"
  readonly #baseUrl3: string = "http://localhost:8080/api/productionplan/forecast"

  constructor(private readonly httpClient: HttpClient) {
      console.log('Prodprog.start')
  }

  findAllCurrentProds(): Observable<ProductionEntity[]> {
      return (
          this.httpClient
          .get<ProductionEntity[]>(this.#baseUrl)
          .pipe(
              catchError(this.handleError),
              first()
          )
      )
  }

  findAllCurrentPreds(): Observable<PredictionEntity[]> {
    return (
        this.httpClient
        .get<PredictionEntity[]>(this.#baseUrl3)
        .pipe(
            catchError(this.handleError),
            first()
        )
    )
}

  post(input: ProductionEntityPost[]) {
    return (
      this.httpClient.post(this.#baseUrl2, input, {})
    );
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
