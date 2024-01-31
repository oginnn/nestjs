import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import axios from "axios";
import { firstValueFrom } from "rxjs";
import { delete_data } from "src/hris-integration/utils";

@Injectable()
export class EmployeeService {
    constructor(private readonly httpService: HttpService) {}

    public async handleUpsertEmployeeData(data: any){
        const checkEmployeeRequest = await this.checkEmployee(data)
        if (checkEmployeeRequest === 404){
            await this.createEmployee(data)
        }
        if (checkEmployeeRequest === 200){
            await this.updateEmployee(data)
        }
    }

private async checkEmployee(data: any) : Promise<number>{
    try {
        const checkEmployeeData = await firstValueFrom(this.httpService.get(`${process.env.BASE_URL_API}/Employee/${data['name']}`, {
            headers: {
                Authorization: process.env.TOKEN
            }
        }));
        return checkEmployeeData.status;
    }
    catch(error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 404){
                return 404;
            }

            return 500;
        }
    }
}

private async createEmployee(data: any){
    await firstValueFrom(this.httpService.post(`${process.env.BASE_URL_API}/Employee`, {
        ...data
    }, {
        headers: {
            Authorization: process.env.TOKEN
        }
    }))
}

private async updateEmployee(data: any){
    delete_data(data)
    await firstValueFrom(this.httpService.put(`${process.env.BASE_URL_API}/Employee/${data['name']}`, {
        ...data
    }, {
        headers: {
            Authorization: process.env.TOKEN
        }
    }))
}
}