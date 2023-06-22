import { Component, OnInit } from "@angular/core";
import { DispositionEigenfertigungService } from "./disposition-eigenfertigung.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { DispositionEigenfertigungArticleInput, DispositionEigenfertigungArticleResult, DispositionEigenfertigungResult } from "./disposition-eigenfertigung.model";
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { first, tap } from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewComponent } from "../shared/dialog-overview/dialog-overview.component";
import { MatButtonModule } from "@angular/material/button";


@Component({
    selector: 'disposition-eigenfertigung',
    standalone: true,
    providers: [DispositionEigenfertigungService],
    imports: [
        CommonModule, 
        HttpClientModule, 
        MatCardModule, 
        MatTableModule, 
        MatTabsModule, 
        MatInputModule, 
        MatFormFieldModule, 
        FormsModule,
        MatDialogModule,
        MatButtonModule
    ],
    templateUrl: './disposition-eigenfertigung.component.html',
    styleUrls: ['disposition-eigenfertigung.component.scss']
})
export class DispositionEigenfertigungComponent implements OnInit {

    dispositionEigenfertigungResult: DispositionEigenfertigungResult[] = [];
    dispositionEigenfertigungArticlesP1: DispositionEigenfertigungArticleResult[] = []
    dispositionEigenfertigungArticlesP2: DispositionEigenfertigungArticleResult[] = [];
    dispositionEigenfertigungArticlesP3: DispositionEigenfertigungArticleResult[] = [];
    geplanterSicherheitsbestand: Map<number, number> = new Map<number, number>;
    zusaetzlicheProduktionauftraege: Map<number, number> = new Map<number, number>;

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

    constructor(
        private readonly dispositionEigenfertigungService: DispositionEigenfertigungService,
        private readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.search();
    }

    openDialog(text: string): void {
        const dialogRef = this.dialog.open(DialogOverviewComponent,{
            data: text
        })
    }

    search() {
        this.dispositionEigenfertigungService.findAll()
            .pipe(
                first(),
                tap(result => {
                    this.dispositionEigenfertigungResult = result;
                    this.dispositionEigenfertigungArticlesP1 = this.dispositionEigenfertigungResult[0].articles;
                    this.dispositionEigenfertigungArticlesP2 = this.dispositionEigenfertigungResult[1].articles;
                    this.dispositionEigenfertigungArticlesP3 = this.dispositionEigenfertigungResult[2].articles;

                    if(
                        this.dispositionEigenfertigungArticlesP1.length == 0 ||
                        this.dispositionEigenfertigungArticlesP2.length == 0 ||
                        this.dispositionEigenfertigungArticlesP3.length == 0) {
                            this.openDialog("Please insert first the input.xml");
                    }

                })
            )
            .subscribe()
    }

    setProperties(input: DispositionEigenfertigungArticleResult[]) {
        input.forEach(element => {
            if(
                element.geplanterSicherheitsbestand === null ||
                element.zusaetzlicheProduktionsauftraege === null
            ) {
                this.openDialog("Please set first all values!")
                throw new Error("Please set first all values!");
            }
            if(this.geplanterSicherheitsbestand.has(element.articleNumber)) {
                let currentGelanterSicherheitsbestand: number = this.geplanterSicherheitsbestand.get(element.articleNumber)!
                this.geplanterSicherheitsbestand.set(element.articleNumber, element.geplanterSicherheitsbestand + currentGelanterSicherheitsbestand)    
            } else {
                this.geplanterSicherheitsbestand.set(element.articleNumber, element.geplanterSicherheitsbestand)
            }

            if(this.zusaetzlicheProduktionauftraege.has(element.articleNumber)) {
                let currentZusaetzlicheProduktionsauftraege: number = this.zusaetzlicheProduktionauftraege.get(element.articleNumber)!
                this.zusaetzlicheProduktionauftraege.set(element.articleNumber, element.zusaetzlicheProduktionsauftraege + currentZusaetzlicheProduktionsauftraege)    
            } else {
                this.zusaetzlicheProduktionauftraege.set(element.articleNumber, element.zusaetzlicheProduktionsauftraege);
            }

        })
    }

    create() {

        if(
            this.dispositionEigenfertigungArticlesP1.length == 0 ||
            this.dispositionEigenfertigungArticlesP2.length == 0 ||
            this.dispositionEigenfertigungArticlesP3.length == 0) {
                this.openDialog("Please insert first the input.xml");
        }

        this.setProperties(this.dispositionEigenfertigungArticlesP1);
        this.setProperties(this.dispositionEigenfertigungArticlesP2);
        this.setProperties(this.dispositionEigenfertigungArticlesP3);

        let geplanterSicherheitsbestand = Object.fromEntries(this.geplanterSicherheitsbestand);
        let zuesaetzlicheProduktionsauftraege = Object.fromEntries(this.zusaetzlicheProduktionauftraege)

        let dispositionEigenfertigungArticleResult: DispositionEigenfertigungArticleInput = new DispositionEigenfertigungArticleInput(geplanterSicherheitsbestand, zuesaetzlicheProduktionsauftraege);  
        console.log(dispositionEigenfertigungArticleResult)

        this.dispositionEigenfertigungService.plan(dispositionEigenfertigungArticleResult).subscribe(result => this.search());

        this.geplanterSicherheitsbestand.clear();
        this.zusaetzlicheProduktionauftraege.clear();

    }

}