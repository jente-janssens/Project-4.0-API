import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;


@Schema()
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    isAdmin: boolean;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    city: string;

    @Prop()
    completedAt?: Date;

    @Prop()
    createdAt?: Date;

    @Prop()
    deletedAt?: Date;
}
// Export UserSchema
export const UserSchema = SchemaFactory.createForClass(User);
