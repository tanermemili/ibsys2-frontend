import { Component, OnInit } from '@angular/core';
import { Production, SellDirectField, SellDirectItem, SupplyChainInput } from './planend.model';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { PlanendService } from './planend.service';
import { OutputService } from './output.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-planend',
  templateUrl: './planend.component.html',
  styleUrls: ['./planend.component.css']
})
export class PlanendComponent implements OnInit {
  sellDirectFormGroups: FormGroup[] = []
  productionList: Production[] = []
  planendData$ = this.planendDataState.getPlanendDataSubject()

  constructor(
    public planendDataState: PlanendService,
    private outputService: OutputService
  ) { }

  ngOnInit(): void {
    this.outputService.getOutput().subscribe({
      next: (data) => {
        const originalString = (data as string);
        let result: SupplyChainInput = JSON.parse(originalString);

        this.planendDataState.setPlanendData(result)
        this.productionList = result.input.productionlist
      },
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.productionList) {
      moveItemInArray(this.productionList, event.previousIndex, event.currentIndex);
    }
  }

  updateSellDirect(event: any, article: number, field: SellDirectField) {
    this.planendDataState.updateSellDirect(article, field, event.target.value)
  }
}
