import { Component, OnInit } from '@angular/core';
import { SupplyChainInput } from './planend.model';
import { PlanendService } from './planend.service';
import { OutputService } from './output.service';

@Component({
  selector: 'app-planend',
  templateUrl: './planend.component.html',
  styleUrls: ['./planend.component.css']
})
export class PlanendComponent implements OnInit {
  planendData$ = this.planendDataState.getPlanendData()

  constructor(private planendDataState: PlanendService, private outputService: OutputService) { }

  ngOnInit(): void {
    this.outputService.getOutput().subscribe({
      next: (data) => {
        const originalString = (data as string);
        let result = JSON.parse(originalString);

        this.planendDataState.setPlanendData(result)
      },
    });

  }
}
