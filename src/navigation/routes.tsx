import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../views/Home.tsx';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../views/Welcome.tsx';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
