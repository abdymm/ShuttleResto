import React from 'react';
import {Text} from '@Components';

import {Image, TouchableOpacity, View} from 'react-native';
import {Branch} from '@Types/Restaurant';
import {mvs, ScaledSheet} from 'react-native-size-matters';
import {Fonts, Spacing} from '@Constants/Metrics';
import {Colors} from '@Constants';
import {arrayToString} from '@Utils/String';
import {mToKm, roundedOneDecimal, toMoneyFormat} from '@Utils/Math';
import {placeholder} from '@Constants/Images';

interface Props {
  item: Branch;
  onPress: (item: Branch) => void;
}

const RestaurantItem = ({item, onPress}: Props) => {
  let showRealFee = true;
  if (
    item.MinimumDiscountFoodValue !== null &&
    item.MinimumDiscountFoodValue !== 0 &&
    item.DeliveryFeeDiscounted !== null &&
    item.DeliveryFeeDiscounted !== 0
  ) {
    showRealFee = false;
  }

  return (
    <TouchableOpacity
      testID="restaurantItem"
      style={styles.container}
      onPress={() => {
        onPress(item);
      }}>
      <View style={styles.imageContainer}>
        <Image source={placeholder} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.itemInfo}>
        <View style={styles.itemNameContainer}>
          {item.IsNew && (
            <Text style={styles.itemInfoNew} bold>
              New
            </Text>
          )}
          <Text style={styles.itemName}>{item.Name}</Text>
          <View style={styles.itemRatingContainer}>
            <Image source={require('@Assets/images/icons/star.png')} />
            <Text style={styles.itemRatingText}>
              {roundedOneDecimal(item.RatingAverage)}
            </Text>
          </View>
        </View>
        <View style={styles.itemLabelContainer}>
          <Text style={styles.itemLabelText}>
            {arrayToString(item.CuisinesLabels, 'Label', ', ')}・
            {arrayToString(item.TagsLabels, 'Label', ', ')}
          </Text>
        </View>
        <View style={styles.itemAddressContainer}>
          <View style={styles.itemAddress}>
            <Image source={require('@Assets/images/icons/distance-pin.png')} />
            <Text style={styles.addressText}>
              {roundedOneDecimal(mToKm(item.DistanceToDestination))}km
            </Text>
          </View>
          <Text style={styles.itemLabelText}>・</Text>
          <View style={styles.itemPrice}>
            <Text style={styles.priceText}>Delivery</Text>
            <Text style={[styles.priceText, styles.priceRealText]}>
              {showRealFee
                ? toMoneyFormat(item.DeliveryFeeReal)
                : toMoneyFormat(item.DeliveryFeeDiscounted ?? 0)}
            </Text>
            {!showRealFee && (
              <Text style={styles.priceText}>
                For orders {toMoneyFormat(item.MinimumDiscountFoodValue)}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginBottom: Spacing.v.xxxl,
  },
  imageContainer: {
    width: '100%',
    height: mvs(160),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  itemInfo: {
    flex: 1,
  },
  itemNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.v.rg,
  },
  itemRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemInfoNew: {
    color: Colors.primary,
    marginRight: Spacing.h.rg,
    alignSelf: 'flex-start',
  },
  itemName: {
    fontSize: Fonts.body,
    marginRight: Spacing.h.rg,
  },
  itemRatingText: {
    marginLeft: Spacing.h.tn,
    fontSize: Fonts.caption1,
  },
  itemLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLabelText: {
    fontSize: Fonts.footnote,
    color: Colors.subTitle,
    marginRight: Spacing.h.tn,
  },
  itemAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.v.sm,
  },
  itemAddress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    fontSize: Fonts.footnote,
    marginHorizontal: Spacing.h.sm,
  },
  priceText: {
    fontSize: Fonts.footnote,
    marginRight: Spacing.h.tn,
  },
  priceRealText: {
    color: Colors.primary,
  },
});
