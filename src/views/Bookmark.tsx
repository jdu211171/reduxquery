import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Bookmark() {
  return (
    <View style={styles.container}>
      <Text>Bookmark Screen</Text>
    </View>
  );
}

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
