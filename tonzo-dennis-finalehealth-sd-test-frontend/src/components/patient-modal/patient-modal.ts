import { Dialog } from '@angular/cdk/dialog';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'patient-modal',
  imports: [],
  templateUrl: './patient-modal.html',
  styleUrl: './patient-modal.css'
})
export class PatientModal {

  private dialog = inject(Dialog);
  protected closeModal(){
    this.dialog?.closeAll();
  }

}
