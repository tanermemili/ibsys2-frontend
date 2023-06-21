import { Component, OnInit } from '@angular/core';
import { SupplyChainInput } from '../modules/SupplyChainInput';
import { WarehouseDataStateService } from '../warehouse-data-state.service';
import { OutputService } from '../output.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  warehouseData$ = this.warehouseDataState.getWarehouseData()

  constructor(private warehouseDataState: WarehouseDataStateService, private outputService: OutputService) { }

  ngOnInit(): void {
    this.outputService.getOutput().subscribe({
      next: (data) => {
        const originalString = (data as string);
        let result = JSON.parse(originalString);

        this.warehouseDataState.setWarehouseData(result)
      },
    });

  }
}