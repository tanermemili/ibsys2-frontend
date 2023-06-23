import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {CapacatiyPlanningArticle} from "./capacity-planning.model";

@Component({
  selector: 'app-capacity-planning',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatTableModule, MatTabsModule],
  templateUrl: './capacity-planning.component.html',
  styleUrls: ['./capacity-planning.component.css']
})
export class CapacityPlanningComponent {
  capacatiyPlanningArticle: CapacatiyPlanningArticle[] = [];

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

}
