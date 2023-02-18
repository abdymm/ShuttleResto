import React from 'react';
import {Text, Wrapper} from '@Components';
import {RouteNames, RouteProps} from '@Navigations/Routes';
import {useRoute} from '@react-navigation/native';
import {Image, View} from 'react-native';
import styles from './styles';
import {placeholder} from '@Constants/Images';
import {ContentStyle, FlashList} from '@shopify/flash-list';
import {MainMenu} from '@Types/Restaurant';
import RestaurantMenu from '@Restaurant/components/RestaurantMenu';

const MENUS_PAYLOAD = require('@Assets/data/menus.json');

const RestaurantMenuScreen = () => {
  const {branchId, branchName} =
    useRoute<RouteProps<RouteNames.RestaurantMenu>>().params;
  const restaurant: MainMenu = MENUS_PAYLOAD.menus.find(
    (item: MainMenu) => item.BranchId === branchId,
  );

  return (
    <Wrapper>
      <View style={styles.menuContainer}>
        <FlashList
          ListHeaderComponent={() => {
            return (
              <View style={styles.headerContainer}>
                <View style={styles.coverContainer}>
                  <Image
                    source={placeholder}
                    style={styles.cover}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.profileContainer}>
                  <Image
                    source={placeholder}
                    style={styles.profile}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.name} bold>
                    {branchName}
                  </Text>
                </View>
              </View>
            );
          }}
          data={restaurant.Menu}
          renderItem={({item}) => {
            return <RestaurantMenu menu={item} />;
          }}
          contentContainerStyle={styles.list as ContentStyle}
          keyExtractor={item => `${item.Id}`}
        />
      </View>
    </Wrapper>
  );
};

export default RestaurantMenuScreen;
