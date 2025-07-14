import { Component, Inject, inject, OnInit } from '@angular/core';
import { VisitModalService } from '../../services/visit-modal.service';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatientModal } from '../patient-modal/patient-modal';

@Component({
  selector: 'visit-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './visit-modal.html',
  styleUrl: './visit-modal.css'
})
export class VisitModal implements OnInit {

  private visitmodalservice = inject(VisitModalService);
  visitsForm!:FormGroup;

  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<PatientModal>){
    
  }

  ngOnInit(): void {
    if(this.data.visit){
      this.visitsForm = this.fb.group({
        visitDate: [this.formatDateTime(this.data.visit.details.visitDate),Validators.required],
        notes: [this.data.visit.details.notes],
        visitType: [this.data.visit.details.visitType,Validators.required]
      });
    }else{
      this.visitsForm = this.fb.group({
        visitDate: ['',Validators.required],
        notes: [''],
        visitType: ['',Validators.required]
      });
    }    
  }

  formatDateTime(dateStr: string): string {
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 0-based
    const day = String(date.getDate()).padStart(2, '0');

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  saveVisit(){
    if(this.data.visit){
      this.visitmodalservice.editVisit(this.data.visit.details._id,this.visitsForm);
    }else{
      if(this.data.patientId){
        console.log(this.data);
        this.visitmodalservice.saveVisit(this.data.patientId,this.visitsForm);
      }
    }

    this.closeModal();

    // console.log(this.visitsForm);
    // this.visitmodalservice.saveVisit(this.data,this.visitsForm);

    // this.closeModal();
  }

  protected closeModal(){
    this.dialogRef.close();
  }

}
