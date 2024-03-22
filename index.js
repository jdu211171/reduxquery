/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';

function ReduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReduxApp.propTypes = {
  store: PropTypes.object.isRequired,
};

AppRegistry.registerComponent(appName, ReduxApp);
