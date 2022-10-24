import { Gender } from "../enums/genders.enum";

export interface Patient{

    id: number;
    name : string;
    gender : `${Gender.FEMALE}` | `${Gender.MALE}` |`${Gender.UNKNOWN}`;
    dateOfBirth: Date;
    
}