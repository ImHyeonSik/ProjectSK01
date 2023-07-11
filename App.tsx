/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './navigation/MainTab';

const App = () => {
  return (
    <NavigationContainer>
      {/*<LoginStack />*/}
      <MainTab />
      {/*<MainNavigation/>*/}
    </NavigationContainer>
  );
};

export default App;
