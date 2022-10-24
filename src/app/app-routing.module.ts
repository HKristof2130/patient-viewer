import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditiorComponent } from './patient-editior/patient-editior.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  {path : "patient-list", component : PatientListComponent},
  {path : "patient-editior", component : PatientEditiorComponent},
  {path : "patient-details", component : PatientDetailsComponent},
  {path : "**", redirectTo : "patient-list"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
