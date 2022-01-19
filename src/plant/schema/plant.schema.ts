import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type PlantDocument = Plant & Document;
@Schema()
export class Plant {
    @Prop({required: true})
    userId: string;

    @Prop()
    resultId?: string;

    @Prop()
    cameraBoxId?: string;
    @Prop({required: true})
    fotoPath: string;
    @Prop({required: true})
    location: string;
    @Prop()
    completedAt?: Date;
    @Prop()
    createdAt?: Date;
    @Prop()
    deletedAt?: Date;
}
export const PlantSchema = SchemaFactory.createForClass(Plant);