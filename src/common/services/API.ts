import {BASE_URL} from '@Constants/API';
import axios from 'axios';
export class API {
  readonly apiRequest = axios.create({
    baseURL: BASE_URL,
  });

  constructor() {
    this.apiRequest.interceptors.request.use(async config => {
      const timeout = 30000;
      config = {
        ...config,
        headers: {
          ...config.headers,
        },
        timeout,
      };
      return config;
    });
  }
}
