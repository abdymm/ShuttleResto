import {ENDPOINT_RESTAURANT} from '@Constants/API';
import {APIResponse} from '@Types/APIResponse';
import {Restaurant} from '@Types/Restaurant';
import {API} from './API';

export interface RestaurantResponse extends APIResponse {
  restaurants: Restaurant[];
}

class RestaurantService {
  api = new API();
  async getAll() {
    return await this.api.apiRequest.get<RestaurantResponse>(
      ENDPOINT_RESTAURANT,
    );
  }
}

export default new RestaurantService();
