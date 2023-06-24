import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  CapacityPlanningArticle,
  CapacityPlanningInput,
  CapacityPlanningProduction,
  CapacityPlanningResult
} from "./capacity-planning.model";

@Injectable({
  providedIn: 'root'
})
export class CapacityPlanningService {

  readonly #productionUrl = "http://localhost:8080/api/disposition-eigenfertigung/productions"
  readonly #postUrl= "http://localhost:8080/api/capacity-planning"

  constructor(readonly httpClient: HttpClient) {}

  findProductions(): Observable<CapacityPlanningProduction[]> {
    return (this.httpClient.get<CapacityPlanningProduction[]>(this.#productionUrl));
  }

  postArticles(articlesInput: CapacityPlanningArticle[]): Observable<CapacityPlanningResult>{
    let articles: CapacityPlanningInput[] = [];
    articlesInput.forEach(article => articles.push(new CapacityPlanningInput(article.article, article.produktionsmenge)))
    return(this.httpClient.post<CapacityPlanningResult>(this.#postUrl, articles, {}))
  }

}
