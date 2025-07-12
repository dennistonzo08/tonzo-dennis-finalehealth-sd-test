import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'visit-modal',
  imports: [],
  templateUrl: './visit-modal.html',
  styleUrl: './visit-modal.css'
})
export class VisitModal {

  private dialog = inject(Dialog);
  protected closeModal(){
    this.dialog?.closeAll();
  }

}
