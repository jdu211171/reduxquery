import React from 'react';
import {StatusBar} from 'expo-status-bar';
import StackNavigator from './src/navigation/stackNavigation.tsx';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar />
      <StackNavigator />
    </>
  );
}

export default App;
