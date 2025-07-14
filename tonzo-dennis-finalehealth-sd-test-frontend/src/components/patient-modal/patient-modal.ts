import { Dialog } from '@angular/cdk/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'patient-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './patient-modal.html',
  styleUrl: './patient-modal.css'
})
export class PatientModal implements OnInit {

  patientForm!:FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient,@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<PatientModal>){

  }

  ngOnInit(): void {
    if(this.data.patient){
      this.patientForm = this.fb.group({
        firstname: [this.data.patient.firstname,Validators.required],
        lastname: [this.data.patient.lastname,Validators.required],
        dob: [new Date(this.data.patient.dob).toISOString().substring(0,10),Validators.required],
        email: [this.data.patient.email,[Validators.required,Validators.email]],
        phoneNumber: [this.data.patient.phoneNumber, Validators.required],
        address: [this.data.patient.address,Validators.required]
      });
    }else{
      this.patientForm = this.fb.group({
        firstname: ['',Validators.required],
        lastname: ['',Validators.required],
        dob: ['',Validators.required],
        email: ['',[Validators.required,Validators.email]],
        phoneNumber: ['', Validators.required],
        address: ['',Validators.required]
      });
    }
  }

  formatDate(input:string):string{
    const date = new Date(input);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  onSubmit(){
    if(this.data.patient){
      this.patientForm.value.dob = this.formatDate(this.patientForm.value.dob);

      const api_url = `http://localhost:3000/patients/${this.data.patient._id}`;
      this.http.put(api_url,this.patientForm.value).pipe(catchError((error:HttpErrorResponse) => { 
        console.log(error.status);
        return throwError(() => { new Error('Error') })
      })).subscribe({
        next: (response) => { 
          console.log("Successfully Saved! ",response);
          this.closeModal();
        },
        error: (err) => { console.log("error: ",err); console.log(this.patientForm.value); }
      });
    }else{
      const api_url = "http://localhost:3000/patients"
      this.http.post(api_url,this.patientForm.value).pipe(catchError((error:HttpErrorResponse) => { 
        console.log(error.status);
        return throwError(() => { new Error('Error') })
      })).subscribe({
        next: (response) => { 
          console.log("Successfully Saved! ",response);
          this.closeModal();
        },
        error: (err) => { console.log("error: ",err); console.log(this.patientForm.value); }
      });
    }
  };

  closeModal(){
    this.dialogRef.close();
  }

}
