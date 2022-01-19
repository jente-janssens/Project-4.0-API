import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {UserCameraBox, UserCameraBoxDocument} from "./schema/user-camera-box.schema";
import {Model} from "mongoose";
import {CreateUserCameraBoxDto} from "./dto/create-user-camera-box.dto";
import {UpdateUserCameraBoxDto} from "./dto/update-user-camera-box.dto";

@Injectable()
export class UserCameraBoxService {

    constructor (@InjectModel(UserCameraBox.name) private readonly model: Model <UserCameraBoxDocument>) {}

    async findAll(): Promise<UserCameraBox[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<UserCameraBox> {
        return await this.model.findById(id).exec();
    }

    async create(createUserCameraBoxDto: CreateUserCameraBoxDto): Promise<UserCameraBox> {
        return await new this.model({
            ...createUserCameraBoxDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateUserCameraBoxDto: UpdateUserCameraBoxDto): Promise<UserCameraBox> {
        return await this.model.findByIdAndUpdate(id, updateUserCameraBoxDto).exec();
    }

    async delete(id: string): Promise<UserCameraBox> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
