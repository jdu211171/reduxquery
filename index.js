/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

function ReduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(ReduxApp));
