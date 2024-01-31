import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Redis } from 'ioredis';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { isArray } from 'class-validator';

@Injectable()
export class EmployeeService {
  private readonly redis: Redis;
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ){
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT),
      db: parseInt(process.env.REDIS_DB),
    });

    this.subscribeToKey(process.env.GET_EMPLOYEE_DATA_KEY, (data) => {
      const parsedData = this.parseData(data);
      this.upsertEmployee(parsedData)
    })
  }

  private parseData(data: string): CreateEmployeeDto {
    const dataObject: any = JSON.parse(data)
    const datas: CreateEmployeeDto = {
      ...dataObject,
    };

    return datas
  }

  async upsertEmployee(createEmployeeDto: CreateEmployeeDto){
    const isExist = this.viewEmployee(createEmployeeDto.name);
    if (isExist){
      return await this.updateEmployee(createEmployeeDto.name, createEmployeeDto)
    }

    return await this.create(createEmployeeDto)
  }

  private async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return await this.employeeRepository.save(createEmployeeDto)
  }

  private viewEmployee(name: string): Promise<Employee> {
    return this.employeeRepository.findOneBy({name:name})
  }

  private async updateEmployee(name: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>{
    const employee:Employee = await this.viewEmployee(name)
    return this.employeeRepository.save({...employee, ...updateEmployeeDto})
  }

  private async subscribeToKey(key:string, callback: (data:string) => void){
    await this.redis.subscribe(key);
    this.redis.on("message", (channel, data) => {
      if (channel == key){
        callback(data)
      }
    })
  }
}
