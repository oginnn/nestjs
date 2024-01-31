import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HrisIntegrationService {
  constructor(private readonly httpService: HttpService) {}

  // public async handleUpsertData(data: any){
  // const userData = await firstValueFrom(this.httpService.post('http://hdesk.localhost:8006/api/method/hris_integration.hris_integration.overrides.user.CustomUser.upsert_user_data',{
  //   doc: data
  // }));
  // }
  // public async handleUpsertData(data: any){
    
  //   const userData = await firstValueFrom(this.httpService.post('http://hdesk.localhost:8006/api/resource/User',{
  //     ...data
  //   },{
  //     headers: {
  //       Authorization: 'token 16181fb1fbf1067:3374634a49bc92e'
  //     }
  //   }));
  //   console.log(userData)
  //   }
}
