import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Folder() {
  return (
    <View style={styles.container}>
      <Text>Folder Screen</Text>
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
