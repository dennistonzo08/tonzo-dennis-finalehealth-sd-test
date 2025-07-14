import { Dialog } from '@angular/cdk/dialog';
import { Component, inject, OnInit } from '@angular/core';
import { PatientModal } from '../patient-modal/patient-modal';
import { CommonModule } from '@angular/common';
import { Patients, PatientService } from '../../services/patients.service';
import { VisitsService } from '../../services/visits.service';
import { SharedService } from '../../services/shared.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'patients-list',
  imports: [CommonModule],
  templateUrl: './patients-list.html',
  styleUrl: './patients-list.css'
})

export class PatientsList implements OnInit {

  private patientService = inject(PatientService);
  patients$:any;
  patientVisits:any|null;
  isActive = false;
  selectedIndex:number|null = null;
  page=1;
  totalPages=1;
  totalPatients=0;
  totalPage=1;
  sortby="createdAt";
  orderby="asc";

  constructor(private sharedService: SharedService,private dialog:MatDialog){
    
  }
  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe((res) => {
      this.patients$ = res.data;
      this.totalPatients = res.total;
      this.totalPage=res.lastpage;
    });
  }

  getFilteredPatients(event:any){
    const value_split = String(event.target.value).split('-');
    this.sortby = value_split[0];
    this.orderby = value_split[1];

    this.patientService.getAllPatients(this.page,this.orderby,this.sortby).subscribe((res) => {
      this.patients$ = res.data;
      this.totalPatients = res.total;
      this.totalPage = res.lastpage;
    });
  }

  sendId(id:string,name:string){
    this.sharedService.updateId(id,name);
  }

  selectPatient(index:number,patient:any){
    this.selectedIndex=index;
    this.sendId(patient._id,patient.firstname + " " + patient.lastname);
  }

  deletePatient(id:string){
    if(confirm("Confirm To Delete This Patient?")){
      this.patientService.deletePatientById(id).subscribe((res) => {
        this.patientService.getAllPatients(this.page,this.orderby,this.sortby).subscribe((res) => {
          this.patients$ = res.data;
          this.totalPatients = res.total;
          this.totalPage=res.lastpage;
        });
        
        alert("Successfully Deleted!");
      });
    }
  }

  protected openModal() {
    this.dialog.open(PatientModal,{ 
      data: {
        title: "Add New Patient",
        patient: null
      }
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.patientService.getAllPatients(this.page,this.orderby,this.sortby).subscribe((res) => {
        this.patients$ = res.data;
        this.totalPatients = res.total;
        this.totalPage=res.lastpage;
      });
    });
  }

  protected editModal(id:string){
    this.patientService.getPatientById(id).subscribe((response) => {
      const dialogRef = this.dialog.open(PatientModal,{
        data:{
          title: "Edit Modal",
          patient: response
        }
      });

      dialogRef.afterClosed().subscribe((res) => {
        // console.log(res);
      });
    });
  }

  nextPage(){
    this.page += 1;
    this.page = this.page > this.totalPage ? 1 : this.page;

    this.patientService.getAllPatients(this.page,this.orderby,this.sortby).subscribe((res) => {
      this.patients$ = res.data;
    });
  }

  prevPage(){
    this.page -= 1;
    this.page = this.page <= 0 ? this.totalPage : this.page;

    this.patientService.getAllPatients(this.page,this.orderby,this.sortby).subscribe((res) => {
      this.patients$ = res.data;
    });
  }

}
