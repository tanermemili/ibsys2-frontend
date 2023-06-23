import { TestBed } from '@angular/core/testing';

import { ProdprogProdService } from './prodprog-prod.service';

describe('ProdprogProdService', () => {
  let service: ProdprogProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdprogProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
