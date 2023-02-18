import React from 'react';

import {View} from 'react-native';
import {Menu} from '@Types/Restaurant';
import {ScaledSheet} from 'react-native-size-matters';
import {Text} from '@Components';
import {Fonts, Spacing} from '@Constants/Metrics';
import {ContentStyle, FlashList} from '@shopify/flash-list';
import RestaurantMenuItem from './RestaurantMenuItem';

interface Props {
  menu: Menu;
}

const RestaurantMenu = ({menu}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.menu} bold>
        {menu.Name}
      </Text>
      <View>
        <FlashList
          data={menu.Items}
          renderItem={({item}) => {
            return <RestaurantMenuItem item={item} />;
          }}
          scrollEnabled={false}
          contentContainerStyle={styles.list as ContentStyle}
          keyExtractor={item => `${item.Id}`}
        />
      </View>
    </View>
  );
};

export default RestaurantMenu;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginTop: Spacing.v.lg,
    paddingHorizontal: Spacing.h.lg,
  },
  menu: {
    fontSize: Fonts.title3,
  },
  list: {},
});
