import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { VisitType } from "src/constants/VisitTypes.enum";
import { Patient } from "./Patient.schema";
import mongoose from "mongoose";

@Schema({ timestamps:true })
export class Visits{

    @Prop({ type:mongoose.Schema.Types.ObjectId, ref:'Patient' })
    patientId:Patient

    @Prop({ required:true })
    visitDate: Date;

    @Prop({ required:false })
    notes:string;

    @Prop({ required:true,type:String,enum:VisitType,default:VisitType.Home })
    visitType:string;
    
}

export const VisitsSchema = SchemaFactory.createForClass(Visits);