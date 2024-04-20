import React from 'react';
import {StatusBar} from 'expo-status-bar';
import StackNavigator from './src/navigation/stackNavigation.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <StackNavigator />
    </SafeAreaProvider>
  );
}

export default App;
