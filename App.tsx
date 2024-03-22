import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {onlineManager} from '@tanstack/react-query';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ThemeProvider from './src/components/theme/theme-provider.tsx';

function App(): React.JSX.Element {
  const systemTheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const [theme, setTheme] = useState(systemTheme);
  const backgroundStyle = {
    backgroundColor: theme === 'dark' ? Colors.darker : Colors.lighter,
  };

  onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener(state => {
      setOnline(!!state.isConnected);
    });
  });

  const toggleTheme = () => {
    console.log('clicked');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeProvider mode={theme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              flex: 1,
              backgroundColor: theme === 'dark' ? Colors.black : Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: theme === 'dark' ? Colors.white : Colors.black,
              }}>
              Test
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: theme === 'dark' ? Colors.white : Colors.black,
                padding: 10,
                borderRadius: 5,
              }}
              onPress={toggleTheme}>
              <Text
                style={{
                  color: theme === 'dark' ? Colors.black : Colors.white,
                }}>
                Toggle Theme
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
