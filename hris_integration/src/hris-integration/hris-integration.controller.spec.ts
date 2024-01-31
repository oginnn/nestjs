import { Test, TestingModule } from '@nestjs/testing';
import { HrisIntegrationController } from './hris-integration.controller';
import { HrisIntegrationService } from './hris-integration.service';

describe('HrisIntegrationController', () => {
  let controller: HrisIntegrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HrisIntegrationController],
      providers: [HrisIntegrationService],
    }).compile();

    controller = module.get<HrisIntegrationController>(HrisIntegrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
