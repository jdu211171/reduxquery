import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks/use-theme.ts';

function Folder() {
  const {themeTextStyle, themeContainerStyle} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: themeContainerStyle}]}>
      <Text
        style={{
          color: themeTextStyle,
        }}>
        Folder Screen
      </Text>
    </View>
  );
}

export default Folder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
