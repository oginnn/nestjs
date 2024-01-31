import { Module } from '@nestjs/common';
import { HrisIntegrationController } from './hris-integration.controller';
import { HttpModule } from '@nestjs/axios';
import { UserService } from './doctype/user/user.service';
import { EmployeeService } from './doctype/employee/employee.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [HrisIntegrationController],
  providers: [UserService, EmployeeService],
})
export class HrisIntegrationModule {}
