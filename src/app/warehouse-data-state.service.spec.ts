import { TestBed } from '@angular/core/testing';

import { WarehouseDataStateService } from './warehouse-data-state.service';

describe('WarehouseDataStateService', () => {
  let service: WarehouseDataStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseDataStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
