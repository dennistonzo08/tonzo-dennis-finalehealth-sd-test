import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";

@Schema()
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

    @Prop({ required:false, default: Date.now })
    dateCreated?: Date;

    @Prop({ required:false, default: Date.now })
    dateUpdated?: Date;

}

export const PatientSchema = SchemaFactory.createForClass(Patient);