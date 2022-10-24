import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-patient-searcher',
  templateUrl: './patient-searcher.component.html',
  styleUrls: ['./patient-searcher.component.scss']
})
export class PatientSearcherComponent implements OnInit {

  @Output() stringForSearchInPatientList: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  startSearching(value: string) {
    
    console.log(value);
    this.stringForSearchInPatientList.emit(value);
  }

}
