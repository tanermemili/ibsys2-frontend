import { TestBed } from '@angular/core/testing';

import { ExportXmlService } from './export-xml.service';

describe('ExportXmlService', () => {
  let service: ExportXmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportXmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
