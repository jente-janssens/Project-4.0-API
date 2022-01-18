import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { Result, ResultDocument } from './schemas/result.schema';

@Injectable()
export class ResultService {
    constructor (@InjectModel(Result.name) 
    private readonly model: Model<ResultDocument>){}

    async findAll(): Promise<Result[]>{
        return await this.model.find()
    }

    async findOne(id: string): Promise<Result>{
        return await this.model.findById(id).exec();
    }

    async create(createResultDto: CreateResultDto): Promise<Result>{
        return await new this.model({
            ...createResultDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateResultDto: UpdateResultDto): Promise<Result>{
        return await this.model.findByIdAndUpdate(id, updateResultDto).exec();
    }

    async delete(id: string): Promise<Result>{
        return await this.model.findByIdAndDelete(id).exec();
    }
}
