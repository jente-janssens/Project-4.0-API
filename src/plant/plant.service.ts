import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { Plant, PlantDocument } from './schema/plant.schema';

@Injectable()
export class PlantService {
    constructor (@InjectModel(Plant.name) 
    private readonly model: Model<PlantDocument>){}

    async findAll(): Promise<Plant[]>{
        return await this.model.find()
    }

    async findOne(id: string): Promise<Plant>{
        return await this.model.findById(id).exec();
    }

    async create(createPlantDto: CreatePlantDto): Promise<Plant>{
        return await new this.model({
            ...createPlantDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updatePlantDto: UpdatePlantDto): Promise<Plant>{
        return await this.model.findByIdAndUpdate(id, updatePlantDto).exec();
    }

    async delete(id: string): Promise<Plant>{
        return await this.model.findByIdAndDelete(id).exec();
    }
}
