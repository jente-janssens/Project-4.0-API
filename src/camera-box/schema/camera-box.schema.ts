import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CameraBoxDocument = CameraBox & Document;


@Schema()
export class CameraBox {

    @Prop({ required: true })
    qrCode: string;

    @Prop()
    completedAt?: Date;

    @Prop({ required: true })
    createdAt: Date;

    @Prop()
    deletedAt?: Date;
}

export const CameraBoxSchema = SchemaFactory.createForClass(CameraBox);
