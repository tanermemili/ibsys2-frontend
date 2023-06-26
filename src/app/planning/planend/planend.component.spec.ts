import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanendComponent } from './planend.component';

describe('PlanendComponent', () => {
  let component: PlanendComponent;
  let fixture: ComponentFixture<PlanendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanendComponent]
    });
    fixture = TestBed.createComponent(PlanendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
