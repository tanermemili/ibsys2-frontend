import { Component, OnInit } from "@angular/core";
import { DispositionEigenfertigungService } from "./disposition-eigenfertigung.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { DispositionEigenfertigungArticleResult, DispositionEigenfertigungResult } from "./disposition-eigenfertigung.model";
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { first, tap } from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
    selector: 'disposition-eigenfertigung',
    standalone: true,
    providers: [DispositionEigenfertigungService],
    imports: [CommonModule, HttpClientModule, MatCardModule, MatTableModule, MatTabsModule, MatInputModule, MatFormFieldModule, FormsModule],
    templateUrl: './disposition-eigenfertigung.component.html'
})
export class DispositionEigenfertigungComponent implements OnInit {

    dispositionEigenfertigungResult: DispositionEigenfertigungResult[] = [];
    dispositionEigenfertigungArticlesP1: DispositionEigenfertigungArticleResult[] = []
    dispositionEigenfertigungArticlesP2: DispositionEigenfertigungArticleResult[] = [];
    dispositionEigenfertigungArticlesP3: DispositionEigenfertigungArticleResult[] = [];

    displayedColumns = [
        'articleNumber',
        'vertriebswunsch',
        'warteschlange',
        'geplanterSicherheitsbestand',
        'lagerbestandEndeVorperiode',
        'auftraegeInWarteschlange',
        'auftraegeInBearbeitung',
        'zusaetzlicheProduktionsauftraege',
        'produktionFuerKommendePeriode'
    ]

    constructor(private readonly dispositionEigenfertigungService: DispositionEigenfertigungService) {}

    ngOnInit(): void {
        this.search();
    }

    search() {
        this.dispositionEigenfertigungService.findAll()
            .pipe(
                first(),
                tap(result => {
                    this.dispositionEigenfertigungResult = result
                    this.dispositionEigenfertigungArticlesP1 = this.dispositionEigenfertigungResult[0].articles;
                    this.dispositionEigenfertigungArticlesP2 = this.dispositionEigenfertigungResult[1].articles;
                    this.dispositionEigenfertigungArticlesP3 = this.dispositionEigenfertigungResult[2].articles;
                })
            )
            .subscribe()
            console.log(this.dispositionEigenfertigungResult)
    }

}