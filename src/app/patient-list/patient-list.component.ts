import { Component, OnInit } from '@angular/core';
import { Patient } from '../interfaces/patient.interface';
import { PatientsService } from '../services/patients.service';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patientList: Patient[] = [];
  filteredPatientList: Patient[] = [];

  constructor(private patientService: PatientsService) { }

  ngOnInit(): void {

    let waiting = true;
    setTimeout(() => {
      this.patientList = this.patientService.getPatientList();
      this.filteredPatientList = this.patientService.getPatientList();
    }, 3000);
    

    console.log("Got Data From server");
    console.log(this.patientList);
 
   
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

 

}
