import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { PlantService } from './plant.service';

@Controller('plants')
export class PlantController {
    constructor(private readonly service: PlantService){}

    @Get()
    async index(){
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string){
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createPlantDto: CreatePlantDto){
        return await this.service.create(createPlantDto);
    }

    @Put(":id")
    async update(@Param("id") id: string, @Body() updatePlantDto: UpdatePlantDto ){
        return await this.service.update(id, updatePlantDto);
    }

    @Delete(":id")
    async delete(@Param("id") id:string) {
        return await this.service.delete(id);
    }
}
