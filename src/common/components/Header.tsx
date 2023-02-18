import {Platform, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

import {Colors} from '@Constants';
import {Appbar} from 'react-native-paper';
import {NavigationProps, RouteNames} from '@Navigations/Routes';
import {useNavigation} from '@react-navigation/native';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';
import {Fonts} from '@Constants/Metrics';
import {ms, ScaledSheet} from 'react-native-size-matters';
import Text from './Text';

export interface HeaderProps {
  title?: string;
  hideBackButton?: boolean;
  style?: StyleProp<ViewStyle>;
  arrowColor?: string;
}

const getReadableRouteName = (originalRouteName: string) => {
  switch (originalRouteName) {
    case RouteNames.Root:
      return 'Search';

    case RouteNames.Restaurant:
      return 'All Cuisines';

    default:
      break;
  }
};

const Header = ({
  title,
  hideBackButton = false,
  style,
  arrowColor = Colors.gray,
}: HeaderProps) => {
  const navigation = useNavigation<NavigationProps>();
  const index = navigation.getState().index;
  const prevRouteName = getReadableRouteName(
    navigation.getState().routeNames[index - 1],
  );

  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <Appbar.Header style={[styles.header, style]}>
      {!hideBackButton && (
        <Appbar.BackAction
          onPress={onGoBack}
          size={ms(22)}
          color={arrowColor}
        />
      )}
      <Text style={styles.prevRoute}>{prevRouteName}</Text>
      {!!title && <Appbar.Content title={title} titleStyle={styles.title} />}
    </Appbar.Header>
  );
};
export default Header;
const styles = ScaledSheet.create({
  header: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? -12 : 0,
  },
  title: {
    fontSize: Fonts.body,
    fontWeight: '500',
  },
  prevRoute: {
    color: Colors.subTitle,
  },
});
