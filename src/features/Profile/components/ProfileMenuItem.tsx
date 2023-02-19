import React from 'react';

import {View, Image, TouchableOpacity} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {Text} from '@Components';
import {ProfileMenu} from '@Types/Profile';
import {Fonts, Spacing} from '@Constants/Metrics';
import {Colors} from '@Constants';

interface Props {
  item: ProfileMenu;
  onPress: (item: ProfileMenu) => void;
}

const ProfileMenuItem = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity
      testID="profileMenuItem"
      style={styles.container}
      onPress={() => {
        onPress(item);
      }}>
      <Image source={item.icon} style={styles.image} resizeMode="contain" />
      <Text style={styles.label} testID="profileMenuItemText">
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.v.lg,
    borderTopWidth: 1,
    borderTopColor: Colors.darkBorder,
  },
  image: {
    width: ms(24),
    height: ms(20),
    marginRight: Spacing.h.lg,
  },
  label: {
    fontSize: Fonts.callout,
  },
});
