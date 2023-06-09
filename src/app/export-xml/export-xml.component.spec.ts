import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportXmlComponent } from './export-xml.component';

describe('ExportXmlComponent', () => {
  let component: ExportXmlComponent;
  let fixture: ComponentFixture<ExportXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportXmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
