import { Component, OnInit } from "@angular/core";
import { DispositionEigenfertigungService } from "./disposition-eigenfertigung.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { DispositionEigenfertigungArticleResult, DispositionEigenfertigungResult } from "./prodprog-prod.model";
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { first, tap } from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-prodprog-prod',
  templateUrl: './prodprog-prod.component.html',
  styleUrls: ['./prodprog-prod.component.css']
})
export class ProdprogProdComponent {

}
