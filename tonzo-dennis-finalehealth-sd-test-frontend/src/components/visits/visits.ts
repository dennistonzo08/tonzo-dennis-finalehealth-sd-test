import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { VisitModal } from '../visit-modal/visit-modal';

@Component({
  selector: 'visits',
  imports: [],
  templateUrl: './visits.html',
  styleUrl: './visits.css'
})
export class Visits {
  
  private dialog = inject(Dialog);
  protected openModal(){
    this.dialog.open(VisitModal);
  }

}
