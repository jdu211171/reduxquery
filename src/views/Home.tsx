import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks/use-theme.ts';

function Home() {
  const {themeTextStyle, themeContainerStyle} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: themeContainerStyle}]}>
      <Text
        style={{
          color: themeTextStyle,
        }}>
        Home Screen
      </Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
