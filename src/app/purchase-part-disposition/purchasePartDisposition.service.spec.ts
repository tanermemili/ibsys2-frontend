import { TestBed } from '@angular/core/testing';

import { PurchasePartDispositionService } from './purchasePartDisposition.service';

describe('PurchasePartDispositionService', () => {
  let service: PurchasePartDispositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchasePartDispositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
