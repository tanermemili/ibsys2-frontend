import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapacityPlanningService} from "./capacity-planning.service";
import {CapacityPlanningArticle, CapacityPlanningProduction} from "./capacity-planning.model";
import {first, map, tap} from "rxjs";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-capacity-planning',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatTableModule, MatTabsModule, ReactiveFormsModule],
  providers: [CapacityPlanningService],
  templateUrl: './capacity-planning.component.html',
  styleUrls: ['./capacity-planning.component.css']
})
export class CapacityPlanningComponent implements OnInit {

  articles: CapacityPlanningArticle[] = []

  displayedColumns = [
    'articleNumber',
    'auftragsmenge',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ]

  constructor(private readonly capacityPlanningService: CapacityPlanningService) {}

  ngOnInit(): void {
    this.search();
  }

  search() {
     this.capacityPlanningService.findProductions().pipe(
       first(),
       tap(result => {
         var productions: CapacityPlanningProduction[] = result;
         var articles: CapacityPlanningArticle[] = []
         productions.forEach(
           production => {
             articles.push(new CapacityPlanningArticle(production.article, production.quantity))
           }
         )
         this.articles = articles
         this.capacityPlanningService.postArticles(articles).subscribe(result => {
           console.log(result)
           result.workingTimePlan.forEach(element => {
             articles.forEach(article => {
               if(article.article == element.articleNumber) {
                 article.workstations.set(element.workstationNumber, 20)
               }
             })
           })
         })
         console.log(this.articles)
       })
     )
       .subscribe()
  }

}
