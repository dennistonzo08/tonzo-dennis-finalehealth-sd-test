import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Visits } from "src/schemas/Visits.schema";
import { CreateVisitsDto } from "./dto/createVisits.dto";
import { UpdateVisitsDto } from "./dto/updateVisits.dto";

@Injectable()
export class VisitsService{

    constructor(@InjectModel(Visits.name) private visitsModel: Model<Visits>){
        
    }

    getVisitById(id:string){
        return this.visitsModel.findById(id);
    }

    updateVisits(id:string,createvisitdto:UpdateVisitsDto){
        return this.visitsModel.findByIdAndUpdate(id,createvisitdto);
    }

    deleteVisits(id:string){
        return this.visitsModel.findByIdAndDelete(id);
    }

}