import { Body, Controller,Delete,Get,HttpException,Param,Put,Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { CreatePatientDto } from "./dto/createPatient.dto";
import { UpdatePatientDto } from "./dto/updatePatient.dto";

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


    @Put(':patientId')
    @UsePipes(new ValidationPipe({ transform: true }))
    updatePatientById(@Param('patientId') patientId:string, @Body() updatepatientdto: UpdatePatientDto){
        return this.patientService.updatePatient(patientId,updatepatientdto);
    }


    @Delete(':patientId')
    deleteUser(@Param('patientId') patientId:string){
        return this.patientService.deletePatient(patientId);
    }

    // @Get(':patientId/visits')
    // async getPatientsById(@Param('patientId') patientId:string){
    //     const findPatient = await this.patientService.getPatientById(patientId);
    //     if(findPatient.length <= 0){
    //         throw new HttpException('Patient Not Found!',404);
    //     }

    //     return findPatient;
    // }

    

    

}