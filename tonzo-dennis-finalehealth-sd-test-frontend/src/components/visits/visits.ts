import { Component, inject, Injector, OnInit } from '@angular/core';
import { VisitModal } from '../visit-modal/visit-modal';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { VisitsService } from '../../services/visits.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'visits',
  imports: [CommonModule],
  templateUrl: './visits.html',
  styleUrl: './visits.css'
})
export class Visits implements OnInit {

  private visitsService = inject(VisitsService);
  visits$:any|null = [];
  name$:string = '';
  data:any = {};

  constructor(private sharedService:SharedService,private dialog:MatDialog){

  }

  ngOnInit(): void {
    this.sharedService.currentData.subscribe((updatedValue) => {
      this.data = updatedValue;
      this.visits$ = this.visitsService.getVisits(this.data.id);
      this.name$ = this.data.name;
    });
  }

  deleteVisit(id:string){
    if(confirm("Confirm To Delete This Visit?")){
      const deletedvisit = this.visitsService.deleteVisitById(id);
      deletedvisit.subscribe((res) => {
        console.log(res);
        alert("Deleted Successfully!");
      })
    }
  }
  
  protected openModal(){
    this.dialog.open(VisitModal,{
      data: {
        title: "Add New Visit",
        visit: null,
        patientId: this.data.id
      }
    });
  }

  protected editModal(id:string){

    this.visitsService.getVisitDetails(id).subscribe((res) => {
      const refdialog = this.dialog.open(VisitModal,{
        data: {
          title: "Edit Patient Visit",
          visit:{
            details: res
          }
        }
      });

      refdialog.afterClosed().subscribe((res) => {
        // console.log(res);
      });
    });
  }

}
