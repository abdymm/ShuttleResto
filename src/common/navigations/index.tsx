import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@Constants';
import {RouteNames} from './Routes';
import {ScaledSheet} from 'react-native-size-matters';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@Home/screens';
import ProfileScreen from '@Profile/screens';
import RestaurantScreen from '@Restaurant/screens';
import RestaurantMenuScreen from '@Restaurant/screens/RestaurantMenu';
import {View} from 'react-native';

const TAB_ICON_SIZE = 24;
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = ({
  focused,
  iconName,
}: {
  focused: boolean;
  iconName: string;
}) => {
  return (
    <View
      style={[
        styles.tab,
        {
          borderTopColor: focused ? Colors.primary : Colors.darkBorder,
        },
      ]}>
      <Ionicons
        name={`${iconName}${focused ? '' : '-outline'}`}
        color={focused ? Colors.primary : Colors.subTitle}
        size={TAB_ICON_SIZE}
      />
    </View>
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName={RouteNames.Home}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 84,
          backgroundColor: Colors.pageBackground,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={RouteNames.Home}
        component={HomeScreen}
        options={{
          tabBarTestID: 'tabHome',
          tabBarIcon: ({focused}) => {
            return <TabBarIcon iconName="ios-home" focused={focused}  />;
          },
        }}
      />
      <Tab.Screen
        name={RouteNames.Profile}
        component={ProfileScreen}
        options={{
          tabBarTestID: 'tabProfile',
          tabBarIcon: ({focused}) => {
            return <TabBarIcon iconName="person-circle" focused={focused} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigationContainer = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'transparent',
        },
      }}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}>
        <Stack.Screen
          name={RouteNames.Root}
          component={Main}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={RouteNames.Restaurant}
          component={RestaurantScreen}
          options={{
            headerTitle: 'Restaurant',
          }}
        />
        <Stack.Screen
          name={RouteNames.RestaurantMenu}
          component={RestaurantMenuScreen}
          options={{
            headerTitle: 'Restaurant',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;

const styles = ScaledSheet.create({
  tab: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
  },
});
