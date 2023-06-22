import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, first, throwError } from "rxjs";
import { DispositionEigenfertigungArticleInput, DispositionEigenfertigungResult } from "./disposition-eigenfertigung.model";
import { MatDialog } from "@angular/material/dialog";
import { DialogOverviewComponent } from "../shared/dialog-overview/dialog-overview.component";

@Injectable({
    providedIn: 'root'
})
export class DispositionEigenfertigungService {
    readonly #baseUrl = "http://localhost:8080/api/disposition-eigenfertigung"

    constructor(
        private readonly httpClient: HttpClient, 
    ) {
        console.log('DispositionEigenfertigungService.start')
    }

    findAll(): Observable<DispositionEigenfertigungResult[]> {
        return (
            this.httpClient
            .get<DispositionEigenfertigungResult[]>(this.#baseUrl)
            .pipe(
                catchError(this.handleError),
                first()
            )
        )
    }

    plan(dispositionInput: DispositionEigenfertigungArticleInput): Observable<DispositionEigenfertigungResult> {
        return this.httpClient
            .post<DispositionEigenfertigungResult>(this.#baseUrl, dispositionInput, {})
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