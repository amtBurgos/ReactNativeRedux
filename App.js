import React from 'react';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { Platform, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import getStore from './config/storeConfig';
import Main from './src/screens/main';
import Settings from './src/screens/settings';
import Maps from './src/screens/maps';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
// });

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
  },
});

// const store = getStore();
const { store, persistor } = getStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>LOADING</Text>} persistor={persistor}>
      <Router>
        <Tabs key="root" tabBarPosition="bottom" headerMode="none" tabBarStyle={styles.tabBar}>
          <Tabs key="maps" component={Maps} />
          <Tabs key="main" component={Main} initial />
          <Tabs key="settings" component={Settings} />
        </Tabs>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
