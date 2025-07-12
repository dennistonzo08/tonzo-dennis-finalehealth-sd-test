import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Patient,PatientSchema } from 'src/schemas/Patient.schema';
import { PatientService } from "./patient.service";
import { PatientController } from "./patient.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Patient.name,
                schema: PatientSchema
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