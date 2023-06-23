import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdprogProdComponent } from './prodprog-prod.component';

describe('ProdprogProdComponent', () => {
  let component: ProdprogProdComponent;
  let fixture: ComponentFixture<ProdprogProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdprogProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdprogProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
