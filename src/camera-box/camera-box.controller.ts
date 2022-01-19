import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CameraBoxService} from "./camera-box.service";
import {CreateCameraBoxDto} from "./dto/create-camera-box.dto";
import {UpdateCameraBoxDto} from "./dto/update-camera-box.dto";

@Controller('camera-boxes')
export class CameraBoxController {

    constructor (private readonly service: CameraBoxService) {}

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createCameraBoxDto: CreateCameraBoxDto) {
        return await this.service.create(createCameraBoxDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateCameraBoxDto: UpdateCameraBoxDto) {
        return await this.service.update(id, updateCameraBoxDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
