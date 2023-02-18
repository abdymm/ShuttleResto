import React, {useState} from 'react';
import {Text, Title, Wrapper} from '@Components';
import {NavigationProps, RouteNames} from '@Navigations/Routes';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {View} from 'react-native';
import {ContentStyle, FlashList} from '@shopify/flash-list';
import {Branch} from '@Types/Restaurant';
import RestaurantItem from '@Restaurant/components/RestaurantItem';

const BRANCHES_PAYLOAD = require('@Assets/data/branches.json');

const RestaurantScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [branches, setBranches] = useState<Branch[]>(BRANCHES_PAYLOAD.branches);

  const onItemPress = (item: Branch) => {
    navigation.navigate(RouteNames.RestaurantMenu, {branchId: item.BranchId});
  };

  return (
    <Wrapper>
      <Title title="All Cuisines" containerStyle={styles.title} />
      <View style={styles.container}>
        <FlashList
          data={branches}
          renderItem={({item}) => {
            return <RestaurantItem item={item} onPress={onItemPress} />;
          }}
          contentContainerStyle={styles.list as ContentStyle}
          keyExtractor={item => `${item.Id}`}
        />
      </View>
    </Wrapper>
  );
};

export default RestaurantScreen;
