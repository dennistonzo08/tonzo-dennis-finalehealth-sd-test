import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Visits, VisitsSchema } from "src/schemas/Visits.schema";
import { VisitsService } from "./visits.service";
import { VisitsController } from "./visits.controller";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: Visits.name,
                schema: VisitsSchema
            }
        ])
    ],
    providers:[
        VisitsService
    ],
    controllers:[
        VisitsController
    ]
})
export class VisitsModule{

}