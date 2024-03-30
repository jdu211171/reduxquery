import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './tabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../views/Welcome.tsx';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
