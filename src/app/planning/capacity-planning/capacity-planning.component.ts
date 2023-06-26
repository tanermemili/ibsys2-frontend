import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapacityPlanningService} from "./capacity-planning.service";
import {
    CapacityPlanningArticle,
    CapacityPlanningOverview,
    CapacityPlanningProduction,
    CapacityPlanningResult
} from "./capacity-planning.model";
import {first, tap} from "rxjs";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DialogOverviewComponent} from "../shared/dialog-overview/dialog-overview.component";
import {DialogData} from "../shared/dialog-overview/dialog-overview.model";

@Component({
  selector: 'app-capacity-planning',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatTableModule, MatTabsModule, ReactiveFormsModule],
  providers: [CapacityPlanningService],
  templateUrl: './capacity-planning.component.html',
  styleUrls: ['./capacity-planning.component.css']
})
export class CapacityPlanningComponent {

  articles: CapacityPlanningArticle[] = []
  overviewResults: CapacityPlanningOverview[] = []

  displayedColumns = [
    'articleNumber',
    'auftragsmenge',
    '1',
    '2',
    '3',
    '4',
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
  displayedColumns2 = [
      'description',
      '1',
      '2',
      '3',
      '4',
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


  constructor(
    private readonly capacityPlanningService: CapacityPlanningService,
    private readonly dialog: MatDialog
  ) {}

  // ngOnInit(): void {
  //   this.search();
  // }

  openDialog(header: string, body: string): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      data: new DialogData(header, body)
    })
  }

  search() {
     this.capacityPlanningService.findProductions().pipe(
       first(),
       tap(result => {
         let productions: CapacityPlanningProduction[] = result;
         let articles: CapacityPlanningArticle[] = []
         let overviewResult: CapacityPlanningOverview[] = []
         if(productions.length == 0) {
           this.openDialog("Capacity Planning","Please proceed with the Disposition Eigenfertigung!")
         }
         productions.forEach(
           production => {
             articles.push(new CapacityPlanningArticle(production.article, production.quantity))
           }
         )
         this.articles = articles
         this.capacityPlanningService.postArticles(articles).subscribe(result2 => {
             let results: CapacityPlanningResult = result2;
             console.log(results)
             result2.workingTimePlan.forEach(element => {
                 articles.forEach(article => {
                   if(article.article == element.articleNumber) {
                     article.workstations.set(element.workstationNumber, element.workingTime)
                   }
                 })
             })
             overviewResult.push(new CapacityPlanningOverview("Kapazitätsbedarf"));
             overviewResult.push(new CapacityPlanningOverview("Rüstzeit"));
             overviewResult.push(new CapacityPlanningOverview("KapBed. (Rückstand)"));
             overviewResult.push(new CapacityPlanningOverview("Rüstzeit (Rückstand)"));
             overviewResult.push(new CapacityPlanningOverview("Gesamtkapazitätsbedarf"));
             overviewResult.push(new CapacityPlanningOverview("Überstunden"));
             overviewResult.push(new CapacityPlanningOverview("Schicht"));

             for (const [key, value] of Object.entries(results.capacityPlanningResult.newCapacity_reqs)) {
                 overviewResult[0].workstations.set(parseInt(key), value);
             }

             for (const [key, value] of Object.entries(results.capacityPlanningResult.newSetUpTime)) {
                 overviewResult[1].workstations.set(parseInt(key), value);
             }

             for (const [key, value] of Object.entries(results.capacityPlanningResult.behindScheduleCapacity)) {
                 overviewResult[2].workstations.set(parseInt(key), value);
             }

             for (const [key, value] of Object.entries(results.capacityPlanningResult.behindScheduleSetUpTime)) {
                 overviewResult[3].workstations.set(parseInt(key), value);
             }

             for (const [key, value] of Object.entries(results.capacityPlanningResult.totalCapacityRequirement)) {
                 overviewResult[4].workstations.set(parseInt(key), value);
             }

             for (const item of results.capacityPlanningResult.workstationsWithOverTime) {
                 const { station, shift, overtime } = item.workingtime;
                 overviewResult[5].workstations.set(station, overtime);
                 overviewResult[6].workstations.set(station, shift);
             }

             this.overviewResults = overviewResult;
             console.log(overviewResult)
         })
       })
     )
       .subscribe()
  }

}
