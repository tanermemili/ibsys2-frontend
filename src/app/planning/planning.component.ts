import { Component } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent {
  tableData: any[] = [
    { artikel: 'P1', dieseWoche: 0, periode1: 0, periode2: 0, periode3: 0,},
    { artikel: 'P2', dieseWoche: 0, periode1: 0, periode2: 0, periode3: 0,},
    { artikel: 'P3', dieseWoche: 0, periode1: 0, periode2: 0, periode3: 0,}
  ];

  calculateSum(item: any): number {
    return item.p1 + item.p2 + item.p3;
  }

  calculateColumnSum(columnName: string): number {
    return this.tableData.reduce((sum, item) => sum + item[columnName], 0);
  }

}
