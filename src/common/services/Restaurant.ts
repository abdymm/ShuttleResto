import {ENDPOINT_RESTAURANT} from '@Constants/API';
import {APIResponse} from '@Types/APIResponse';
import {Branch} from '@Types/Restaurant';
import {API} from './API';

export interface RestaurantResponse extends APIResponse {
  restaurants: Branch[];
}
const BRANCHES_PAYLOAD = require('@Assets/data/branches.json');
class RestaurantService {
  api = new API();
  async fetch(query: string) {
    /* this code when we wwant to fetch the data from api, currently we are just using our mock data */
    // return await this.api.apiRequest.get<RestaurantResponse>(
    //   ENDPOINT_RESTAURANT,
    // );
    const branches: Branch[] = BRANCHES_PAYLOAD.branches;
    const filteredBranches =
      query === '' || query === null
        ? branches
        : branches.filter(branch =>
            branch.BranchName.toLocaleLowerCase().includes(
              query.toLocaleLowerCase(),
            ),
          );

    return filteredBranches;
  }
}

export default new RestaurantService();
