import { Body, Controller,Delete,Get,HttpException,Param,Put,Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { CreatePatientDto } from "./dto/createPatient.dto";
import { UpdatePatientDto } from "./dto/updatePatient.dto";
import { CreateVisitsDto } from "src/visits/dto/createVisits.dto";

@Controller('patients')
export class PatientController{

    constructor(private patientService: PatientService){

    }

    @Get()
    getPatients(){
        return this.patientService.getPatient();
    }


    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    createPatient(@Body() createPatientDto: CreatePatientDto){
        return this.patientService.createPatient(createPatientDto);
    }


    @Put(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    updatePatientById(@Param('id') id:string, @Body() updatepatientdto: UpdatePatientDto){
        return this.patientService.updatePatient(id,updatepatientdto);
    }


    @Delete(':id')
    deleteUser(@Param('id') id:string){
        return this.patientService.deletePatient(id);
    }
    
    
    @Get(':id/visits')
    getVisits(@Param('id') patientId:string){
        return this.patientService.getVisits(patientId);
    }


    @Post(':id/visits')
    @UsePipes(new ValidationPipe({ transform: true }))
    createVisits(@Param('id') patientId:string,@Body() createvisitsdto:CreateVisitsDto){
        return this.patientService.createVisits(patientId,createvisitsdto);
    }

}