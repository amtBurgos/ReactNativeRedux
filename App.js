/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import { Platform, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import getStore from './config/storeConfig';
import Main from './src/screens/main';
import Settings from './src/screens/settings';
import Maps from './src/screens/maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

// const store = getStore();
const { store, persistor } = getStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>LOADING</Text>} persistor={persistor}>
      <Router>
        <Scene key="root">
          <Tabs
            key="tabbar"
            tabs
            tabBarPosition="bottom"
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          >
            <Tabs key="maps" component={Maps} />
            <Tabs key="main" component={Main} initial />
            <Tabs key="settings" component={Settings} />
          </Tabs>
        </Scene>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native! Hello World
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
