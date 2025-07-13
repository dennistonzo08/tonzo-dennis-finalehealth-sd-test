import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { PatientModal } from '../patient-modal/patient-modal';
import { CommonModule } from '@angular/common';
import { Patients, PatientService } from '../../services/patients.service';
import { VisitsService } from '../../services/visits.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'patients-list',
  imports: [CommonModule],
  templateUrl: './patients-list.html',
  styleUrl: './patients-list.css'
})

export class PatientsList {

  private dialog = inject(Dialog);
  private patientService = inject(PatientService);
  patients$ = this.patientService.getAllPatients();
  patientVisits:any|null;
  isActive = false;
  selectedIndex:number|null = null;

  constructor(private sharedService: SharedService){

  }

  sendId(id:string,name:string){
    this.sharedService.updateId(id,name);
  }

  selectPatient(index:number,patient:Patients){
    this.selectedIndex=index;
    this.sendId(patient._id,patient.firstname + " " + patient.lastname);
  }

  protected openModal() {
    this.dialog.open(PatientModal);

    this.dialog.afterAllClosed.subscribe(() => {
      this.patients$ = this.patientService.getAllPatients();
    });
  }

}
