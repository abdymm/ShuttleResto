import React from 'react';
import {Text, Wrapper} from '@Components';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@Navigations/Routes';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Wrapper withHeader={false}>
      <Text>Home</Text>
    </Wrapper>
  );
};

export default HomeScreen;
