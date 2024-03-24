import React from 'react';
import {Text, View} from 'react-native';
import Button from '../components/Button.tsx';

export function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>Home Screen</Text>
      <Button onPress={() => console.log('butt')} title={'Press me'} />
    </View>
  );
}
