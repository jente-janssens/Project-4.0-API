import { Test, TestingModule } from '@nestjs/testing';
import { CameraBoxService } from './camera-box.service';

describe('CameraBoxService', () => {
  let service: CameraBoxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CameraBoxService],
    }).compile();

    service = module.get<CameraBoxService>(CameraBoxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
