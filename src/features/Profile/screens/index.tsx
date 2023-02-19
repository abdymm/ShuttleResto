import React from 'react';
import {Text, Title, Wrapper} from '@Components';
import styles from './styles';
import {Image, View} from 'react-native';
import {ContentStyle, FlashList} from '@shopify/flash-list';
import {menus} from '@Assets/data/accountMenus';
import ProfileMenuItem from '@Profile/components/ProfileMenuItem';
import {ProfileMenu} from '@Types/Profile';

const ProfileScreen = () => {
  const onItemPress = (item: ProfileMenu) => {
    alert(item.label);
  };
  return (
    <Wrapper withHeader={false}>
      <View style={styles.listContainer} testID="profileScreen">
        <FlashList
          ListHeaderComponent={() => {
            return (
              <>
                <Title title="My Account" containerStyle={styles.title} />
                <View style={styles.profileContainer}>
                  <Image
                    source={require('@Assets/images/icons/person.png')}
                    style={styles.image}
                    resizeMode="cover"
                  />
                  <View style={styles.nameContainer}>
                    <Text style={styles.name} bold>
                      Abdy Malik Mulky
                    </Text>
                    <Text>abdymalikmulky@gmail.com</Text>
                  </View>
                </View>
              </>
            );
          }}
          data={menus}
          renderItem={({item}) => {
            return <ProfileMenuItem item={item} onPress={onItemPress} />;
          }}
          contentContainerStyle={styles.list as ContentStyle}
          keyExtractor={item => `${item.label}`}
        />
      </View>
    </Wrapper>
  );
};

export default ProfileScreen;
