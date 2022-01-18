import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { ResultService } from './result.service';

@Controller('results')
export class ResultController {
    constructor(private readonly service: ResultService){}

    @Get()
    async index(){
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string){
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createResultDto: CreateResultDto){
        return await this.service.create(createResultDto);
    }

    @Put(":id")
    async update(@Param("id") id: string, @Body() updateResultDto: UpdateResultDto ){
        return await this.service.update(id, updateResultDto);
    }

    @Delete(":id")
    async delete(@Param("id") id:string) {
        return await this.service.delete(id);
    }
}
