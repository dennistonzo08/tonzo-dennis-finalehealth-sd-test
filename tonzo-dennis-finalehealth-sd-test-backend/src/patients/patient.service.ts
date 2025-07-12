import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Patient } from "src/schemas/Patient.schema";
import { CreatePatientDto } from "./dto/createPatient.dto";
import { UpdatePatientDto } from "./dto/updatePatient.dto";
import { arrayNotEmpty } from "class-validator";

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

    updatePatient(patientId:string, updatepatientdto:UpdatePatientDto){
        return this.patientModel.find().find({ 'patientId':patientId }).updateOne(updatepatientdto);
    }

    deletePatient(patientId:string){
        return this.patientModel.find().deleteOne({ 'patientId':patientId });
    }

    // getPatientById(patientId:string){
    //     return this.patientModel.find().find({ 'patientId':patientId });
    // }
}