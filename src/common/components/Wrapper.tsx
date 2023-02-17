import {
  ImageBackground,
  ImageBackgroundProps,
  Platform,
  SafeAreaView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Header, {HeaderProps} from './Header';
import {Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '@Constants';

interface Props extends ImageBackgroundProps {
  withHeader?: boolean;
  header?: HeaderProps;
  style?: StyleProp<ViewStyle>;
}

const Wrapper = ({children, withHeader = true, header, style}: Props) => {
  return (
    <View style={[styles.wrapper, style]}>
      <View style={[styles.background, styles.imageBackground]}>
        {withHeader && <Header {...header} />}
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </View>
    </View>
  );
};
export default Wrapper;
const styles = ScaledSheet.create({
  wrapper: {},
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : Spacing.v.xl,
  },
  background: {
    backgroundColor: Colors.light,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
});
