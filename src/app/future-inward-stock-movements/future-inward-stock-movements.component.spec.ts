import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureInwardStockMovementsComponent } from './future-inward-stock-movements.component';

describe('FutureInwardStockMovementsComponent', () => {
  let component: FutureInwardStockMovementsComponent;
  let fixture: ComponentFixture<FutureInwardStockMovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureInwardStockMovementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureInwardStockMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
