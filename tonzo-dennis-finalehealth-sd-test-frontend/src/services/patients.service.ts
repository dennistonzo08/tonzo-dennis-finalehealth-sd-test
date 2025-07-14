import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PatientService{

    constructor(private http:HttpClient){

    }

    getAllPatients(page:number=1,orderby:string ="asc",sortby:string="createdAt"){
        const api_url = `http://localhost:3000/patients?page=${page}&order=${orderby}&sortby=${sortby}`;
        return this.http.get<Patients>(api_url).pipe(retry(3),catchError(this.handleError));
    }

    getPatientById(id:string){
        const api_url = `http://localhost:3000/patients/${id}`;
        return this.http.get(api_url).pipe(retry(3),catchError(this.handleError));
    }

    deletePatientById(id:string){
        const api_url = `http://localhost:3000/patients/${id}`
        return this.http.delete(api_url).pipe(retry(3),catchError(this.handleError));
    }

    handleError(error:HttpErrorResponse){
        console.log(error.status);

        return throwError(() => {
            new Error('Error')
        });
    }

}

export interface Patients{
    data:[{
        _id:string,
        firstname:string,
        lastname:string,
        dob:Date,
        email:string,
        phoneNumber:string,
        address:string

    }];
    total:number;
    page:number;
    lastpage:number;
}