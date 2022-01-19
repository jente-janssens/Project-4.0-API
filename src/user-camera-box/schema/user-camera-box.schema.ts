import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserCameraBoxDocument = UserCameraBox & Document;


@Schema()
export class UserCameraBox {

    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    cameraBoxId: string;

    @Prop()
    completedAt?: Date;

    @Prop({ required: true })
    createdAt: Date;

    @Prop()
    deletedAt?: Date;
}

export const UserCameraBoxSchema = SchemaFactory.createForClass(UserCameraBox);
