import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { first, tap } from 'rxjs';
import { PredictionEntity, ProductionEntity, ProductionEntityPost } from "./prodprog-prod.model";
import { ProdprogProdService } from "./prodprog-prod.service";

@Component({
  selector: 'prodprog-prod',
  standalone: true,
  providers: [ProdprogProdService],
  imports: [CommonModule, HttpClientModule, MatCardModule, MatTableModule, MatTabsModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './prodprog-prod.component.html'
})
export class ProdprogComponent {

  entity: ProductionEntity[] = [];
  postEntity: ProductionEntityPost[] = [];
  predEntity: PredictionEntity[] = [];

  displayedColumns = [
    'articleNumber',
    'periodN',
    'periodNplusOne',
    'periodNplusTwo',
    'periodNplusThree'
  ]

  constructor(private readonly ProdprogProdService: ProdprogProdService) { }

  // ngOnInit(): void {
  //   this.search();
  //   this.search2();
  // }

  search() {
    this.ProdprogProdService.findAllCurrentProds()
      .pipe(
        first(),
        tap(result => {
          this.entity = result;
        })
      )
      .subscribe()
  }

  search2() {
    this.ProdprogProdService.findAllCurrentPreds()
      .pipe(
        first(),
        tap(result => {
          this.predEntity = result;
        })
      )
      .subscribe()
  }

  create(): void {

    this.entity.forEach(
      entity => this.postEntity.push(
        new ProductionEntityPost(entity.article, entity.periodNplusOne, entity.periodNplusTwo, entity.periodNplusThree)
      )
    )

    this.ProdprogProdService.post(this.postEntity).subscribe(
      result => this.search()
    );
  }

}
