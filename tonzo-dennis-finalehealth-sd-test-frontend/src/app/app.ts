import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Patients } from '../patients/patients';
import { Visits } from '../visits/visits';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Patients,Visits,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tonzo-dennis-finalehealth-sd-test-frontend';
}
