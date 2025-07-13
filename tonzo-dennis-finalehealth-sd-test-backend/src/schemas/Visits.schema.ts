import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { VisitType } from "src/constants/VisitTypes.enum";
import mongoose, { ObjectId } from "mongoose";

@Schema({ timestamps:true })
export class Visits{

    @Prop({ required:true,type:mongoose.Schema.Types.ObjectId, ref:'Patient' })
    patientId:string;

    @Prop({ required:true })
    visitDate: Date;

    @Prop({ required:false })
    notes:string;

    @Prop({ required:true,type:String,enum:VisitType,default:VisitType.Home })
    visitType:string;
    
}

export const VisitsSchema = SchemaFactory.createForClass(Visits);