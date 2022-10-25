import { Component, OnInit } from '@angular/core';
import { Patient } from '../interfaces/patient.interface';
import { PatientsService } from '../services/patients.service';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  private static readonly SERVER_RESPONSE_TIME : number = 4000;
  patientList: Patient[] = [];
  filteredPatientList: Patient[] = [];
  loading : boolean = true;

  constructor(private patientService: PatientsService) { }

  ngOnInit(): void {

    this.loading = true;
    this.loadPatientList();
   
  }

  searchForResultsInTheTable($event: string) {

    this.filteredPatientList = [];
    this.patientList.forEach(patient => {
      if (patient.name.includes($event)) {
        this.filteredPatientList.push(patient);
      }
    });

    console.log(this.filteredPatientList);
    
  }

  async loadPatientList(){
    
    await setTimeout(() => {
      this.patientList = this.patientService.getPatientList();
      this.filteredPatientList = this.patientService.getPatientList();
      console.log(this.patientList);
      this.loading = false;
    }, PatientListComponent.SERVER_RESPONSE_TIME);
   
  }

 

}
