import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './doctype/user/user.service';
import { EmployeeService } from './doctype/employee/employee.service';

@Controller('hris-integration')
export class HrisIntegrationController {
  constructor(
    private readonly userService: UserService,
    private readonly employeeService: EmployeeService) {}
    
  @MessagePattern('data:user:get_user_data')
  async handleUpsertUserData(@Payload() data: string){
    return this.userService.handleUpsertUserData(data);
  }
  @MessagePattern('data:user:get_employee_data')
  async handleUpsertEmployeeData(@Payload() data: string){
    return this.employeeService.handleUpsertEmployeeData(data)
  }
}
