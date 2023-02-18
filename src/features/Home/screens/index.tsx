import React, {useState} from 'react';
import {Text, Title, Wrapper} from '@Components';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, RouteNames} from '@Navigations/Routes';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import styles from './styles';
import {Colors} from '@Constants';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onSearch = () => {
    navigation.navigate(RouteNames.Restaurant);
  };

  return (
    <Wrapper withHeader={false}>
      <Title title="Search" containerStyle={styles.title} />
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Searchbar
            placeholder="What do you want to eat..."
            onChangeText={onChangeSearch}
            onSubmitEditing={onSearch}
            value={searchQuery}
            iconColor={Colors.primary}
            placeholderTextColor={Colors.gray}
            style={styles.search}
            inputStyle={styles.searchInput}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default HomeScreen;
