import React, {useEffect} from 'react';
import {StatusBar, LogBox} from 'react-native';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '@Constants';
import AppNavigationContainer from '@Navigations';

import {Provider as StoreProvider} from 'react-redux';
import {store} from '@Stores';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(Fonts),
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    secondary: Colors.secondary,
    background: Colors.light,
  },
};

const App = () => {
  useEffect(() => {
    MaterialCommunityIcons.loadFont();
    Ionicons.loadFont();
  }, []);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle={'light-content'} />
        <AppNavigationContainer />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
