import { Dialog } from '@angular/cdk/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'patient-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './patient-modal.html',
  styleUrl: './patient-modal.css'
})
export class PatientModal implements OnInit {

  patientForm!:FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient){

  }

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      dob: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['',Validators.required]
    });
  }

  private dialog = inject(Dialog);
  protected closeModal(){
    this.dialog?.closeAll();
  }

  onSubmit(){
    const api_url = "http://localhost:3000/patients"
    this.http.post(api_url,this.patientForm.value).pipe(catchError((error:HttpErrorResponse) => { 
      console.log(error.status);
      return throwError(() => { new Error('Error') })
    })).subscribe({
      next: (response) => { 
        console.log("Successfully Saved! ",response);
        this.dialog?.closeAll();
      },
      error: (err) => { console.log("error: ",err); console.log(this.patientForm.value); }
    });
  }

}
