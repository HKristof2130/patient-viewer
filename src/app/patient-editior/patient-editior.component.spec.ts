import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditiorComponent } from './patient-editior.component';

describe('PatientEditiorComponent', () => {
  let component: PatientEditiorComponent;
  let fixture: ComponentFixture<PatientEditiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEditiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientEditiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
