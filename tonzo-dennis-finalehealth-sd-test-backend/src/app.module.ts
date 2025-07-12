import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './patients/patient.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/finalehealth'),
    PatientModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
