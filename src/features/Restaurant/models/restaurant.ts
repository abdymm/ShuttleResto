import {createModel} from '@rematch/core';
import Restaurant from '@Services/Restaurant';
import {RootModel} from '@Stores/models';
import {ModelState} from '@Types/ModelState';
import {Branch} from '@Types/Restaurant';

interface RestaurantState extends ModelState {
  data: Branch[] | null | [];
}

const initialState = {
  data: null,
  loading: false,
  error: null,
};
const restaurant = createModel<RootModel>()({
  state: initialState as unknown as RestaurantState,
  reducers: {
    request(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    success(state, data: Branch[]) {
      return {
        ...state,
        data: data,
        loading: false,
        error: null,
      };
    },
    failure(state, errorMessage: string) {
      return {
        ...state,
        data: null,
        loading: false,
        error: errorMessage,
      };
    },
    clearState() {
      return initialState;
    },
  },
  effects: () => ({
    async fetch(query: string) {
      this.request();
      try {
        const res = await Restaurant.fetch(query);
        this.success(res);
      } catch (error) {
        this.failure(error?.toString());
      }
    },
  }),
});
export default restaurant;
