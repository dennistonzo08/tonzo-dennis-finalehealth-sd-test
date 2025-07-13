import { Dialog } from '@angular/cdk/dialog';
import { Component, inject, Injector, OnInit } from '@angular/core';
import { VisitModal } from '../visit-modal/visit-modal';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { VisitsService } from '../../services/visits.service';
import { MODAL_DATA } from '../../token/model-data.token';

@Component({
  selector: 'visits',
  imports: [CommonModule],
  templateUrl: './visits.html',
  styleUrl: './visits.css'
})
export class Visits implements OnInit {

  private dialog = inject(Dialog);
  private visitsService = inject(VisitsService);
  visits$:any|null = [];
  name$:string = '';
  data:any = {};

  constructor(private sharedService:SharedService,private injector:Injector){

  }

  ngOnInit(): void {
    this.sharedService.currentData.subscribe((updatedValue) => {
      this.data = updatedValue;
      this.visits$ = this.visitsService.getVisits(this.data.id);
      this.name$ = this.data.name;
    });
  }
  
  protected openModal(){
    const injector = this.createInjector(this.data.id,this.injector);
    this.dialog.open(VisitModal,{ injector });
  }

  private createInjector(data: string, parentInjector: Injector): Injector {
    return Injector.create({
      providers: [
        { provide: MODAL_DATA, useValue: data }
      ],
      parent: parentInjector
    });
  }

}
