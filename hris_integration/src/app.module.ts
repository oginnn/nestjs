import { Module } from '@nestjs/common';
import { HrisIntegrationModule } from './hris-integration/hris-integration.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),
    HrisIntegrationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
