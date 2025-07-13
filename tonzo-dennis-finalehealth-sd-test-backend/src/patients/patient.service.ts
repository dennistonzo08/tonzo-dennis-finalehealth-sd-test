import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Patient } from "src/schemas/Patient.schema";
import { CreatePatientDto } from "./dto/createPatient.dto";
import { UpdatePatientDto } from "./dto/updatePatient.dto";
import { Visits } from "src/schemas/Visits.schema";
import { CreateVisitsDto } from "src/visits/dto/createVisits.dto";

@Injectable()
export class PatientService{
    constructor(@InjectModel(Patient.name) private patientModel: Model<Patient>,@InjectModel(Visits.name) private visitsModel: Model<Visits>){
        
    }

    createPatient(createPatientDto: CreatePatientDto){
        const newPatient = new this.patientModel(createPatientDto);
        return newPatient.save();
    }

    getPatient(){
        return this.patientModel.find();
    }

    updatePatient(id:string, updatepatientdto:UpdatePatientDto){
        return this.patientModel.findByIdAndUpdate(id,updatepatientdto);
    }

    deletePatient(id:string){
        return this.patientModel.findByIdAndDelete(id);
    }

    createVisits(patientId:string,createvisitsdto:CreateVisitsDto){
        const newVisits = new this.visitsModel({...createvisitsdto,patientId});
        return newVisits.save();
    }

    getVisits(id:string){
        return this.visitsModel.find({ patientId:id });
    }
}