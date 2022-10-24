import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSearcherComponent } from './patient-searcher.component';

describe('PatientSearcherComponent', () => {
  let component: PatientSearcherComponent;
  let fixture: ComponentFixture<PatientSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
