import { TestBed } from '@angular/core/testing';

import { PlanendService } from './planend.service';

describe('PlanendService', () => {
  let service: PlanendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
