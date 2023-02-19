import React, {useEffect, useState} from 'react';
import {Text, Title, Wrapper} from '@Components';
import {NavigationProps, RouteNames, RouteProps} from '@Navigations/Routes';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {View} from 'react-native';
import {ContentStyle, FlashList} from '@shopify/flash-list';
import {Branch} from '@Types/Restaurant';
import RestaurantItem from '@Restaurant/components/RestaurantItem';
import {Dispatch, RootState} from '@Stores';
import {connect} from 'react-redux';

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const RestaurantScreen = ({restaurantState, fetch}: Props) => {
  const navigation = useNavigation<NavigationProps>();
  const {query} = useRoute<RouteProps<RouteNames.Restaurant>>().params;

  // state that store branches data that coming from API
  const {data: branches, loading, error} = restaurantState;

  // fetching branches
  useEffect(() => {
    fetch(query);
  }, [fetch, query]);

  const onItemPress = (item: Branch) => {
    navigation.navigate(RouteNames.RestaurantMenu, {
      branchId: item.BranchId,
      branchName: item.Name,
    });
  };

  return (
    <Wrapper>
      <Title title="All Cuisines" containerStyle={styles.title} />
      <View style={styles.container} testID="restaurantScreen">
        {branches?.length === 0 && !loading ? (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>Restaurant Not Found</Text>
          </View>
        ) : (
          <FlashList
            data={branches}
            renderItem={({item}) => {
              return <RestaurantItem item={item} onPress={onItemPress} />;
            }}
            contentContainerStyle={styles.list as ContentStyle}
            keyExtractor={item => `${item.Id}`}
          />
        )}
      </View>
    </Wrapper>
  );
};

const mapState = (state: RootState) => ({
  restaurantState: state.restaurant,
});
const mapDispatch = (dispatch: Dispatch) => ({
  fetch: (query: string) => dispatch.restaurant.fetch(query),
});
export default connect(mapState, mapDispatch)(RestaurantScreen);
