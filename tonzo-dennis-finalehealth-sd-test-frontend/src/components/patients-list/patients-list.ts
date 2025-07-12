import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { PatientModal } from '../patient-modal/patient-modal';

@Component({
  selector: 'patients-list',
  imports: [],
  templateUrl: './patients-list.html',
  styleUrl: './patients-list.css'
})

export class PatientsList {
  private dialog = inject(Dialog);

  protected openModal() {
    this.dialog.open(PatientModal);
  }
}
