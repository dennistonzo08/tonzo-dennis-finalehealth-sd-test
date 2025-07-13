import { Body, Controller, Delete, Param, Put } from "@nestjs/common";
import { VisitsService } from "./visits.service";
import { CreateVisitsDto } from "./dto/createVisits.dto";

@Controller('visits')
export class VisitsController{
    
    constructor(private visitsService:VisitsService){
        
    }

    @Put(':id')
    updateVisits(@Param('id') id:string, @Body() createvisitdto:CreateVisitsDto){
        return this.visitsService.updateVisits(id,createvisitdto);
    }

    @Delete(':id')
    deleteVisits(@Param('id') id:string){
        return this.visitsService.deleteVisits(id);
    }

}