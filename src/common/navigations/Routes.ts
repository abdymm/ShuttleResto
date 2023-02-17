import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export enum RouteNames {
  Root = 'Root',
  Home = 'Home',
  Profile = 'Profile',
}
export interface Routes extends ParamListBase {
  [RouteNames.Home]: undefined;
  [RouteNames.Profile]: undefined;
}

export type NavigationProps = NavigationProp<Routes>;

export type RouteProps<R extends keyof Routes> = RouteProp<Routes, R>;
