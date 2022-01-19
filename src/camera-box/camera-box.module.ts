import { Module } from '@nestjs/common';
import { CameraBoxController } from './camera-box.controller';
import { CameraBoxService } from './camera-box.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CameraBox, CameraBoxSchema} from "./schema/camera-box.schema";

@Module({
  controllers: [CameraBoxController],
  providers: [CameraBoxService],
  imports: [
    MongooseModule.forFeature([{name: CameraBox.name, schema: CameraBoxSchema}]),
  ]
})
export class CameraBoxModule {}
