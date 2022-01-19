import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {CameraBox, CameraBoxDocument} from "./schema/camera-box.schema";
import {Model} from "mongoose";
import {CreateCameraBoxDto} from "./dto/create-camera-box.dto";
import {UpdateCameraBoxDto} from "./dto/update-camera-box.dto";

@Injectable()
export class CameraBoxService {

    constructor (@InjectModel(CameraBox.name) private readonly model: Model <CameraBoxDocument>) {}

    async findAll(): Promise<CameraBox[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<CameraBox> {
        return await this.model.findById(id).exec();
    }

    async create(createCameraBoxDto: CreateCameraBoxDto): Promise<CameraBox> {
        return await new this.model({
            ...createCameraBoxDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateCameraBoxDto: UpdateCameraBoxDto): Promise<CameraBox> {
        return await this.model.findByIdAndUpdate(id, updateCameraBoxDto).exec();
    }

    async delete(id: string): Promise<CameraBox> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
