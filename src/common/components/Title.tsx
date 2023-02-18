import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';

import Text from './Text';
import {Fonts} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '@Constants';

interface Props {
  title: string;
  subTitle?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const Title = ({title = 'Title', subTitle, containerStyle}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      {!!subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
};
export default Title;
const styles = ScaledSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: Fonts.largeTitle,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: Fonts.body,
    fontWeight: '500',
    color: Colors.subTitle,
    marginTop: -5,
  },
});
