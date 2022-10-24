import { Injectable } from '@angular/core';
import data from 'src/assets/patients.json';
import { Gender } from '../enums/genders.enum';
import { Patient } from '../interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  patients : Patient[] = [] ;

  constructor() {
   this.patients =  this.mapJsonToPatientArray() ;
  }

  getPatientList() : Patient[]{
    return this.patients;
  }

  private mapJsonToPatientArray() : Patient[]{

    let patinetsToMap : Patient[] = [] ;
    
    data.forEach( element => {
      const dataId: number = element.id;
      const dataName: string = element.name;
      const dataGender: Gender = this.getGender(element.gender);
      const dataBirthDate : Date = new Date(element.dateOfBirth);

      const tmpPatient : Patient = {
        id : dataId,
        name : dataName,
        gender : dataGender,
        dateOfBirth : dataBirthDate
      }

      patinetsToMap.push(tmpPatient);
 
    });

    console.log("finished with mapping");
    return patinetsToMap;
  }

  private getGender(gender: string): Gender {
    switch (gender) {
      case "male":
        return Gender.MALE;

      case "female":
        return Gender.FEMALE;

      default:
        return Gender.UNKNOWN;

    }
  }
}
