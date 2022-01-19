import { Test, TestingModule } from '@nestjs/testing';
import { UserCameraBoxService } from './user-camera-box.service';

describe('UserCameraBoxService', () => {
  let service: UserCameraBoxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCameraBoxService],
    }).compile();

    service = module.get<UserCameraBoxService>(UserCameraBoxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
