import React from 'react';
import {Text, Wrapper} from '@Components';
import {NavigationProps} from '@Navigations/Routes';
import {useNavigation} from '@react-navigation/native';

const RestaurantScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Wrapper>
      <Text>Restaurant</Text>
    </Wrapper>
  );
};

export default RestaurantScreen;
