import { Body, Controller,Get,Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { CreatePatientDto } from "./dto/createPatient.dto";

@Controller('patients')
export class PatientController{

    constructor(private patientService: PatientService){

    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    createPatient(@Body() createPatientDto: CreatePatientDto){
        console.log(createPatientDto);
        return this.patientService.createPatient(createPatientDto);
    }

    @Get()
    getPatients(){
        return this.patientService.getPatient();
    }

}