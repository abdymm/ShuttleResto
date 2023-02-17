import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@Constants';
import {RouteNames} from './Routes';
import {ScaledSheet} from 'react-native-size-matters';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from '@Components';
import {Fonts, Spacing} from '@Constants/Metrics';
import HomeScreen from '@Home/screens';
import ProfileScreen from '@Profile/screens';
import RestaurantScreen from '@Restaurant/screens/Restaurant';
import RestaurantMenuScreen from '@Restaurant/screens/RestaurantMenu';

const TAB_ICON_SIZE = 24;
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarLabel = ({focused, label}: {focused: boolean; label: string}) => {
  return (
    <Text
      style={[
        styles.tabLabel,
        {color: focused ? Colors.primary : Colors.subTitle},
      ]}>
      {label}
    </Text>
  );
};

const TabBarIcon = ({
  focused,
  iconName,
}: {
  focused: boolean;
  iconName: string;
}) => {
  return (
    <Ionicons
      name={`${iconName}${focused ? '' : '-outline'}`}
      color={focused ? Colors.primary : Colors.subTitle}
      size={TAB_ICON_SIZE}
    />
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
        },
      }}>
      <Tab.Screen
        name={RouteNames.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => {
            return <TabBarLabel focused={focused} label={RouteNames.Home} />;
          },
          tabBarIcon: ({focused}) => {
            return <TabBarIcon iconName="ios-home" focused={focused} />;
          },
        }}
      />
      <Tab.Screen
        name={RouteNames.Profile}
        component={ProfileScreen}
        options={{
          tabBarLabel: ({focused}) => {
            return <TabBarLabel focused={focused} label={'Profile'} />;
          },
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
        screenOptions={{headerBackTitleVisible: false, headerShown: false}}>
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
  drawerItemLabel: {
    fontFamily: 'Poppins-Regular',
  },
  bar: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: Colors.border,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 86,
    paddingBottom: Spacing.v.lg,
  },
  tabContent: {
    flexDirection: 'row',
    borderRadius: 100,
    paddingVertical: Spacing.v.rg,
    paddingHorizontal: Spacing.v.lg,
  },
  tabLabel: {
    fontSize: Fonts.caption1,
    fontWeight: '500',
  },
});
