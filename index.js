import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {onlineManager} from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';
import {ThemeContext} from './src/contexts/theme-context';

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected);
  });
});

function ReduxApp() {
  return (
    <Provider store={store}>
      <ThemeContext>
        <App />
      </ThemeContext>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(ReduxApp));
