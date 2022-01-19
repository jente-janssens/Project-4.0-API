import { Test, TestingModule } from '@nestjs/testing';
import { CameraBoxController } from './camera-box.controller';

describe('CameraBoxController', () => {
  let controller: CameraBoxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CameraBoxController],
    }).compile();

    controller = module.get<CameraBoxController>(CameraBoxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
