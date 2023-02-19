import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export enum RouteNames {
  Root = 'Root',
  Home = 'Home',
  Profile = 'Profile',
  Restaurant = 'Restaurant',
  RestaurantMenu = 'RestaurantMenu',
}
export interface Routes extends ParamListBase {
  [RouteNames.Home]: undefined;
  [RouteNames.Profile]: undefined;
  [RouteNames.Restaurant]: {query: string};
  [RouteNames.RestaurantMenu]: {branchId: number; branchName: string};
}

export type NavigationProps = NavigationProp<Routes>;

export type RouteProps<R extends keyof Routes> = RouteProp<Routes, R>;
