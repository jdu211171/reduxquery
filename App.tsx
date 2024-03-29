import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {Colors} from './src/constants/index';

import {StatusBar} from 'expo-status-bar';

function App(): React.JSX.Element {
  const systemTheme = useColorScheme() === 'dark' ? 'dark' : 'light';

  return (
    <>
      <StatusBar />
      <View
        style={{
          flex: 1,
          backgroundColor:
            systemTheme === 'dark'
              ? Colors.dark.background
              : Colors.light.background,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color:
              systemTheme === 'dark' ? Colors.dark.text : Colors.light.text,
          }}>
          Toggle Theme
        </Text>
      </View>
    </>
  );
}

export default App;
