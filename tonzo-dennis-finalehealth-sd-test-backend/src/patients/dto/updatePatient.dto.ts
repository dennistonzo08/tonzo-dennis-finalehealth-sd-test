import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdatePatientDto{
    @IsOptional()
    @IsString()
    firstname: string;

    @IsOptional()
    @IsString()
    lastname: string;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    dob: Date;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    phoneNumber: string;

    @IsOptional()
    @IsString()
    address: string;
}