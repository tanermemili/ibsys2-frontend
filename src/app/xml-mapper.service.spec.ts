import { TestBed } from '@angular/core/testing';

import { XmlMapperService } from './xml-mapper.service';

describe('XmlMapperService', () => {
  let service: XmlMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
