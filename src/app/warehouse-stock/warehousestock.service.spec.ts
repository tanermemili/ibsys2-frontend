import { TestBed } from '@angular/core/testing';

import { WarehouseStockService } from './warehousestock.service';

describe('WarehouseStockService', () => {
  let service: WarehouseStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});