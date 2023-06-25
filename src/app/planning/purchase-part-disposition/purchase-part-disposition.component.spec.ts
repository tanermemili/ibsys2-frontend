import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePartDispositionComponent } from './purchase-part-disposition.component';

describe('PurchasePartDispositionComponent', () => {
  let component: PurchasePartDispositionComponent;
  let fixture: ComponentFixture<PurchasePartDispositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasePartDispositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasePartDispositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
