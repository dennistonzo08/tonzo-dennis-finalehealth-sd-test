import { Component } from '@angular/core';
import { PatientsList } from "../patients-list/patients-list"
import { Visits } from "../visits/visits"

@Component({
  selector: 'patients-page',
  imports: [PatientsList,Visits],
  templateUrl: './patients-page.html',
  styleUrl: './patients-page.css'
})

export class PatientsPage {

}
