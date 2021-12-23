import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyAxiosService } from './shared-axios/my-axios.axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://www.naver.com',
      validateStatus: (status) => true,
    }),
  ],
  controllers: [AppController],
  providers: [MyAxiosService, AppService],
})
export class AppModule {}
