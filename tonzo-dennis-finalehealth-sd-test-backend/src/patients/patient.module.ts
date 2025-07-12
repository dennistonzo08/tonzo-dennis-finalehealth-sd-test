import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Patient,PatientSchema } from 'src/schemas/Patient.schema';
import { PatientService } from "./patient.service";
import { PatientController } from "./patient.controller";
import { Visits, VisitsSchema } from "src/schemas/Visits.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Patient.name,
                schema: PatientSchema
            },
            {
                name: Visits.name,
                schema: VisitsSchema
            }
        ])
    ],
    providers: [
        PatientService
    ],
    controllers: [
        PatientController
    ]
})
export class PatientModule{

}