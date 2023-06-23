import { Component, OnInit } from "@angular/core";
import { ProdprogProdService } from "./prodprog-prod.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ProdprogArticleResult, ProdprogResult } from "./prodprog-prod.model";
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { first, tap } from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'prodprog-prod',
  standalone: true,
  providers: [ProdprogProdService],
  imports: [CommonModule, HttpClientModule, MatCardModule, MatTableModule, MatTabsModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './prodprog-prod.component.html'
})
export class ProdprogComponent implements OnInit {

  ProdprogResult: ProdprogResult[] = [];
  ProdprogArticleResult: ProdprogArticleResult[] = []

  displayedColumns = [
      'articleNumber',
      'periodN',
      'periodNplusOne',
      'periodNplusTwo',
      'periodNplusThree'
  ]

  constructor(private readonly ProdprogProdService: ProdprogProdService) {}

  ngOnInit(): void {
      this.search();
  }

  search() {
      this.ProdprogProdService.findAll()
          .pipe(
              first(),
              tap(result => {
                  this.ProdprogResult = result
                  this.ProdprogArticleResult = this.ProdprogResult[0].articles;
              })
          )
          .subscribe()
          console.log(this.ProdprogResult)
  }

}