import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule } from '@nestjs/mongoose';
import { ResultModule } from './result/result.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Admin:k2thmb64IwnKpiab@projectresultaten.aascr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), ResultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
