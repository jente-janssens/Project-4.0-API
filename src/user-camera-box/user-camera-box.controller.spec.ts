import { Test, TestingModule } from '@nestjs/testing';
import { UserCameraBoxController } from './user-camera-box.controller';

describe('UserCameraBoxController', () => {
  let controller: UserCameraBoxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCameraBoxController],
    }).compile();

    controller = module.get<UserCameraBoxController>(UserCameraBoxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
