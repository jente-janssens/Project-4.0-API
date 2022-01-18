import { Module } from '@nestjs/common';
import { ResultService } from './result.service';
import { ResultController } from './result.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Result, ResultSchema } from './schemas/result.schema';

@Module({
  providers: [ResultService],
  controllers: [ResultController],
  imports:[
    MongooseModule.forFeature([{name: Result.name, schema: ResultSchema}])
  ]
})
export class ResultModule {}
