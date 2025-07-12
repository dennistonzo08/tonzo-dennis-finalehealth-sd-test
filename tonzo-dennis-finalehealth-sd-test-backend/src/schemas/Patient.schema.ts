import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps:true })
export class Patient{

    @Prop({ unique:true, required:true })
    patientId: string;

    @Prop({ required:true })
    firstname: string;

    @Prop({ required:true })
    lastname: string;

    @Prop({ required:true })
    dob: Date;

    @Prop({ required:true })
    email: string;

    @Prop({ required:true })
    phoneNumber: string;

    @Prop({ required:true })
    address: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);