import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Patient } from "src/schemas/Patient.schema";
import { CreatePatientDto } from "./dto/createPatient.dto";

@Injectable()
export class PatientService{
    constructor(@InjectModel(Patient.name) private patientModel: Model<Patient>){
        
    }

    createPatient(createPatientDto: CreatePatientDto){
        const newPatient = new this.patientModel(createPatientDto);
        return newPatient.save();
    }

    getPatient(){
        return this.patientModel.find();
    }
}