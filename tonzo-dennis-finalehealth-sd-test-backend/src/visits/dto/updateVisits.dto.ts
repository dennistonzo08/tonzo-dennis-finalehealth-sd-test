import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateVisitsDto{

    @IsOptional()
    @IsString()
    notes: string;

    @IsNotEmpty()
    @IsString()
    visitType: string;
    
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    visitDate: Date;
}