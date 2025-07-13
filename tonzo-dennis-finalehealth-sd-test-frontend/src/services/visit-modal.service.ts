import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VisitModalService{

    constructor(private http:HttpClient){

    }

    saveVisit(id:string,visitsForm:FormGroup<any>){
        if(id){
            const api_url = "http://localhost:3000/patients/"+ id +"/visits";
            this.http.post(api_url,visitsForm.value).pipe(catchError((error:HttpErrorResponse) => { 
            console.log(error.status);
            return throwError(() => { new Error('Error') })
            })).subscribe({
            next: (response) => { 
                console.log("Successfully Saved! ",response);
            },
            error: (err) => { console.log("error: ",err); console.log(visitsForm.value); }
            });
        }else{
            console.log("Invalid Id.");
        }
    }

}