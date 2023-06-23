import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdprogComponent } from './prodprog-prod.component';

describe('ProdprogComponent', () => {
  let component: ProdprogComponent;
  let fixture: ComponentFixture<ProdprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdprogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
