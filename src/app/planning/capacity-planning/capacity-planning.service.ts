import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  CapacityPlanningArticle,
  CapacityPlanningInput,
  CapacityPlanningProduction,
  CapacityPlanningResult
} from "./capacity-planning.model";
import {DispositionEigenfertigungResult} from "../disposition-eigenfertigung/disposition-eigenfertigung.model";
import {Overlay} from "@angular/cdk/overlay";

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

  get(): CapacityPlanningArticle[] {

    let productions: CapacityPlanningProduction[] = []
    let articles: CapacityPlanningArticle[] = []

    this.findProductions().subscribe(result => {
      productions.forEach(
        production => {
          articles.push(new CapacityPlanningArticle(production.article, production.quantity))
        }
      )
      this.postArticles(articles).subscribe(result => {
        console.log(result)
        result.workingTimePlan.forEach(element => {
          articles.forEach(article => {
            if(article.article == element.articleNumber) {
              article.workstations.set(element.workstationNumber, element.workingTime)
            }
          })
        })
      })
      console.log(articles)
    })

    return articles;
  }

}
