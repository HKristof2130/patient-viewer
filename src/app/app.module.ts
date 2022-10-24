import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientEditiorComponent } from './patient-editior/patient-editior.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { PatientSearcherComponent } from './patient-searcher/patient-searcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientListComponent,
    PatientEditiorComponent,
    PatientDetailsComponent,
    PatientSearcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
