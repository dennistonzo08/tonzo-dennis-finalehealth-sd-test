import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateVisitsDto{
    
    patientId:string;
    
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    visitDate:Date;

    @IsOptional()
    @IsString()
    notes:string;

    @IsNotEmpty()
    @IsString()
    visitType:string;
}