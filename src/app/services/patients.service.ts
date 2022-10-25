import { Injectable } from '@angular/core';
import data1 from 'src/assets/patients.json';
import data2 from 'src/assets/patients2.json';
import data3 from 'src/assets/patients3.json';
import { Gender } from '../enums/genders.enum';
import { Patient } from '../interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private static readonly WAITING_TIME_FOR_SERVER = 3000;

  patients : Patient[] = [] ;

  constructor() {
    this.mapJsonToPatientArray();
    /*
    this.maptToPatientArraySasiWay(data1,this.patients);
    this.maptToPatientArraySasiWay(data2,this.patients);
    this.maptToPatientArraySasiWay(data3,this.patients);
    */
  }


  getPatientList() : Patient[]{
    return this.patients;
  }

  private maptToPatientArraySasiWay(json: any, target: Patient[]){
     
    target.push(...json.list);
  }

  
  private mapJsonToPatientArray(){

    let patinetsToMap : Patient[] = [] ;
    
    
    data1.forEach( element => {

      
      const tmpPatient : Patient = {
        id : element.id,
        name : element.name,
        gender : this.getGender(element.gender),
        dateOfBirth : new Date(element.dateOfBirth),
      }

      patinetsToMap.push(tmpPatient);
 
    });

    data2.list.forEach( element => {

      const tmpPatient : Patient = {
        id : element.id,
        name : element.name,
        gender : this.getGender(element.gender),
        dateOfBirth : new Date(element.dateOfBirth),
      }

      patinetsToMap.push(tmpPatient);
 
    });

    data3.list.forEach( element => {

      const tmpPatient : Patient = {
        id : element.id,
        name : element.name,
        gender : this.getGender(element.gender),
        dateOfBirth : new Date(element.dateOfBirth),
      }

      patinetsToMap.push(tmpPatient);
 
    });

    console.log("finished with mapping");
    this.patients =  patinetsToMap;
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
