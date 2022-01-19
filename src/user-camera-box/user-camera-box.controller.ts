import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserCameraBoxService} from "./user-camera-box.service";
import {CreateUserCameraBoxDto} from "./dto/create-user-camera-box.dto";
import {UpdateUserCameraBoxDto} from "./dto/update-user-camera-box.dto";

@Controller('user-camera-boxes')
export class UserCameraBoxController {

    constructor (private readonly service: UserCameraBoxService) {}

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createUserCameraBoxDto: CreateUserCameraBoxDto) {
        return await this.service.create(createUserCameraBoxDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserCameraBoxDto: UpdateUserCameraBoxDto) {
        return await this.service.update(id, updateUserCameraBoxDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
