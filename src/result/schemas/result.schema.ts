import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ResultDocument = Result & Document;
@Schema()export class Result {
    @Prop({required: true, enum:['WEEK1', 'WEEK2', "WEEK3", 'WEEK4', 'WEEK5', 'WEEK6']})growthState: string;
    @Prop({required: true})accuracy: number;
}
export const ResultSchema = SchemaFactory.createForClass(Result);