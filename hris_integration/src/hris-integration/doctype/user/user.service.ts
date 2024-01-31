import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { firstValueFrom } from 'rxjs';
import { delete_data } from 'src/hris-integration/utils';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  public async handleUpsertUserData(data: any){
    const checkUserRequest = await this.checkUser(data);
    if (checkUserRequest === 404) {
        await this.createUserData(data)
    }
    if (checkUserRequest === 200) {
        await this.updateUserData(data)
    }
}

private async checkUser(data: any) : Promise<number>{
    try {
        const checkUserData = await firstValueFrom(this.httpService.get(`${process.env.BASE_URL_API}/User/${data['name']}`,{
          headers: {
            Authorization: process.env.TOKEN
          }
        }));
        return checkUserData.status;

    }
    catch(error){
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 404) {
              return 404;
            } 

            return 500;
        }
    }
}

private async createUserData(data: any){
    await firstValueFrom(this.httpService.post(`${process.env.BASE_URL_API}/User`, {
        ...data
    }, {
        headers: {
            Authorization: process.env.TOKEN
        }
    }));
}

private async updateUserData(data: any){
    delete_data(data, true);
    await firstValueFrom(this.httpService.put(`${process.env.BASE_URL_API}/User/${data['name']}`, {
        ...data
    }, {
        headers: {
            Authorization: process.env.TOKEN
        }
    }))
}
}