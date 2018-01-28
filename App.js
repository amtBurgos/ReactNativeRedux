import React from 'react';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { Platform, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

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

const TabIcon = ({
  focused, activeTintColor, inactiveTintColor, title,
}) => {
  let tabIcon = '';
  switch (title) {
    case 'maps':
      tabIcon = (
        <IconMaterial
          name="google-maps"
          size={24}
          color={focused ? activeTintColor : inactiveTintColor}
        />
      );
      break;
    case 'main':
      tabIcon = (
        <IconMaterial name="home" size={26} color={focused ? activeTintColor : inactiveTintColor} />
      );
      break;
    case 'settings':
      tabIcon = (
        <IconFontAwesome
          name="gear"
          size={24}
          color={focused ? activeTintColor : inactiveTintColor}
        />
      );
      break;
    default:
      break;
  }
  return tabIcon;
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>LOADING</Text>} persistor={persistor}>
      <Router>
        <Tabs
          key="root"
          tabBarPosition="bottom"
          headerMode="none"
          tabBarStyle={styles.tabBar}
          showLabel={false}
          activeTintColor={store.getState().settings.itemTextColor}
          inactiveTintColor="#bcbcbc"
          lazy
        >
          <Tabs key="maps" title="maps" component={Maps} tabBarIcon={TabIcon} />
          <Tabs key="main" title="main" component={Main} initial tabBarIcon={TabIcon} />
          <Tabs key="settings" title="settings" component={Settings} tabBarIcon={TabIcon} />
        </Tabs>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
