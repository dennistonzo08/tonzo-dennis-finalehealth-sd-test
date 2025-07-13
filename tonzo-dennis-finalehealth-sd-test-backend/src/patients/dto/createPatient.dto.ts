import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateVisitsDto } from "src/visits/dto/createVisits.dto";

export class CreatePatientDto{
    
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    dob: Date;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    address: string;
}