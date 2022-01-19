import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlantController } from './plant.controller';
import { PlantService } from './plant.service';
import { Plant, PlantSchema} from './schema/plant.schema';

@Module({
  controllers: [PlantController],
  providers: [PlantService],
  imports: [
    MongooseModule.forFeature([{name: Plant.name, schema: PlantSchema}])
  ]
})
export class PlantModule {}
