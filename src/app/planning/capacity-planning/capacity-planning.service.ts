import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CapacityPlanningProduction} from "./capacity-planning.model";

@Injectable({
  providedIn: 'root'
})
export class CapacityPlanningService {

  readonly #productionUrl = "http://localhost:8080/api/disposition-eigenfertigung/productions"

  constructor(readonly httpClient: HttpClient) {}

  findProductions(): Observable<CapacityPlanningProduction[]> {
    return (this.httpClient.get<CapacityPlanningProduction[]>(this.#productionUrl));
  }

}
