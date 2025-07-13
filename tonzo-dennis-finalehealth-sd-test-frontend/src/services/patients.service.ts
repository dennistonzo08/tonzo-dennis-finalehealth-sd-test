import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PatientService{

    constructor(private http:HttpClient){

    }

    getAllPatients(){
        const api_url = "http://localhost:3000/patients";
        return this.http.get<Patients[]>(api_url).pipe(retry(3),catchError(this.handleError));
    }

    handleError(error:HttpErrorResponse){
        console.log(error.status);

        return throwError(() => {
            new Error('Error')
        });
    }

}

export interface Patients{
    _id:string;
    firstname:string;
    lastname:string;
    dob:Date;
    email:string;
    phoneNumber:string;
    address:string;
}