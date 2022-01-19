import { Module } from '@nestjs/common';
import { UserCameraBoxController } from './user-camera-box.controller';
import { UserCameraBoxService } from './user-camera-box.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserCameraBox, UserCameraBoxSchema} from "./schema/user-camera-box.schema";

@Module({
  controllers: [UserCameraBoxController],
  providers: [UserCameraBoxService],
  imports: [
    MongooseModule.forFeature([{name: UserCameraBox.name, schema: UserCameraBoxSchema}]),
  ]
})
export class UserCameraBoxModule {}
