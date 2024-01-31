import { Test, TestingModule } from '@nestjs/testing';
import { HrisIntegrationService } from './hris-integration.service';

describe('HrisIntegrationService', () => {
  let service: HrisIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HrisIntegrationService],
    }).compile();

    service = module.get<HrisIntegrationService>(HrisIntegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
