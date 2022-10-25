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
    this.patients = this.mapJsonToPatientArray(data1,data2,data3);
    /*
    this.maptToPatientArraySasiWay(data1,this.patients);
    this.maptToPatientArraySasiWay(data2,this.patients);
    this.maptToPatientArraySasiWay(data3,this.patients);
    */
  }


  getPatientList() : Patient[]{
    return this.patients;
  }

  private maptToPatientArrayWithSasiWay(json: any, target: Patient[]){
     
    target.push(...json.list);
  }

  
  private mapJsonToPatientArray(...datas : any) : Patient[]{

    let patinetsToMap : Patient[] = [] ;
    
    datas.forEach( (data : any) => {
      data.list.forEach( (element : Patient) => {

      
        const tmpPatient : Patient = {
          id : element.id,
          name : element.name,
          gender : this.getGender(element.gender),
          dateOfBirth : new Date(element.dateOfBirth),
        }
  
        patinetsToMap.push(tmpPatient);
   
      });
    });
    
   

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
