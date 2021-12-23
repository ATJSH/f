import {
  Injectable,
  HttpService,
  OnModuleInit,
  LoggerService,
  Logger,
} from '@nestjs/common';

@Injectable()
export class MyAxiosService implements OnModuleInit {
  constructor(public httpService: HttpService) {}

  onModuleInit() {
    this.httpService.axiosRef.interceptors.request.use((config) => {
      const { data, headers, params, url } = config;
      console.log({
        data,
        headers,
        params,
        url,
      });

      return config;
    });

    this.httpService.axiosRef.interceptors.response.use((response) => {
      const { data, status } = response;

      console.log({
        data,
        status,
      });

      return response;
    });
  }
}
