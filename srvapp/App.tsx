import 'react-native-gesture-handler';
import Navigation from '@navigation/Navigation';
import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigation />
    </GestureHandlerRootView>
  );
};

export default App;
