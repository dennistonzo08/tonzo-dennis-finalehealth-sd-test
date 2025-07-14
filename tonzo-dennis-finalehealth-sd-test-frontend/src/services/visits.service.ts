import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, min, Observable, retry, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VisitsService{

    visits$:any|null = null;

    constructor(private http:HttpClient){

    }

    getVisits(id:string){
        if(id){
            const api_url = "http://localhost:3000/patients/"+id+"/visits";
            return this.http.get<Visits[]>(api_url).pipe(retry(3),catchError(this.handleError));
        }

        return null;
    }

    getVisitDetails(visitId:string){
        const api_url = `http://localhost:3000/visits/${visitId}`;
        return this.http.get(api_url).pipe(retry(3),catchError(this.handleError));
    }

    deleteVisitById(visitId:string){
        const api_url = `http://localhost:3000/visits/${visitId}`;
        return this.http.delete(api_url).pipe(retry(3),catchError(this.handleError));
    }

    handleError(error:HttpErrorResponse){
    console.log(error.status);

    return throwError(() => {
        new Error('Error')
    });
    }

}

export interface Visits{
    _id: string;
    patientId:string;
    visitDate: Date;
    notes: string;
    visitType: string;
}