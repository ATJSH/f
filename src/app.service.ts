import { Inject, Injectable } from '@nestjs/common';
import { MyAxiosService } from './shared-axios/my-axios.axios';

@Injectable()
export class AppService {
  constructor(private myAxiosji: MyAxiosService) {}
  async getHello(): Promise<string> {
    await this.myAxiosji.httpService.get('/facts').toPromise();

    return 'Hello World!';
  }
}
