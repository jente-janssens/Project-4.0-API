import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Result } from "src/result/schema/result.schema";
import { User } from "src/user/schema/user.schema";

export type PlantDocument = Plant & Document;
@Schema()export class Plant {
    @Prop({required: true})
    userID: string;
    @Prop()
    resultID?: string;
    @Prop()
    cameraBoxID?: string;
    @Prop({required: true})
    fotoPath: string;
    @Prop({required: true})
    locatie: string;
    @Prop()
    completedAt?: Date;
    @Prop()
    createdAt?: Date;
    @Prop()
    deletedAt?: Date;
}
export const PlantSchema = SchemaFactory.createForClass(Plant);