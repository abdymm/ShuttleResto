import React from 'react';

import {Image, View} from 'react-native';
import {Item} from '@Types/Restaurant';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {Text} from '@Components';
import {Fonts, Radius, Spacing} from '@Constants/Metrics';
import {Colors} from '@Constants';
import {placeholder} from '@Constants/Images';
import {toMoneyFormat} from '@Utils/Math';

interface Props {
  item: Item;
}

const RestaurantMenuItem = ({item}: Props) => {
  const itemDescription = item.Description.replace(/<[^>]*>/g, '\n');
  return (
    <View style={styles.container}>
      <View style={styles.itemInfo}>
        <Text style={styles.name} bold>
          {item.Name}
        </Text>
        <Text numberOfLines={2}>{itemDescription}</Text>
        <Text style={styles.price} bold>
          {toMoneyFormat(item.DisplayPrice)}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={placeholder} style={styles.image} resizeMode="cover" />
      </View>
    </View>
  );
};

export default RestaurantMenuItem;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    borderBottomColor: Colors.darkBorder,
    borderBottomWidth: 1,
    paddingVertical: Spacing.v.xl,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    fontSize: Fonts.body,
  },
  itemInfo: {
    flex: 1,
    marginRight: Spacing.h.rg,
  },
  description: {
    color: Colors.text,
  },
  name: {
    fontSize: Fonts.callout,
    marginBottom: Spacing.v.rg,
  },
  imageContainer: {
    width: ms(110),
    height: ms(110),
    borderRadius: Radius.lg,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: Radius.lg,
  },
  price: {
    marginTop: Spacing.v.sm,
    fontSize: Fonts.callout,
  },
});
