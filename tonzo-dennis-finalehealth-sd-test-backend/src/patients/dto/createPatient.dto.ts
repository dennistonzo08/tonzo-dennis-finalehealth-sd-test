import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePatientDto{
    
    @IsNotEmpty()
    @IsString()
    patientId: string;

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

    @IsDate()
    @IsOptional()
    dateCreate?: Date;

    @IsDate()
    @IsOptional()
    dateUpdated?: Date;
}