import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { MODAL_DATA } from '../../token/model-data.token';
import { VisitModalService } from '../../services/visit-modal.service';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'visit-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './visit-modal.html',
  styleUrl: './visit-modal.css'
})
export class VisitModal implements OnInit {

  private dialog = inject(Dialog);
  private visitmodalservice = inject(VisitModalService);
  visitsForm!:FormGroup;

  constructor(private fb:FormBuilder,@Inject(MODAL_DATA) public data:string){
    
  }

  ngOnInit(): void {
    this.visitsForm = this.fb.group({
      patientId: ['',Validators.required],
      visitDate: ['',Validators.required],
      notes: [''],
      visitType: ['',Validators.required]
    });
  }

  saveVisit(){
    // console.log(this.visitsForm);
    this.visitmodalservice.saveVisit(this.data,this.visitsForm);

    this.closeModal();
  }

  protected closeModal(){
    this.dialog?.closeAll();
  }

}
