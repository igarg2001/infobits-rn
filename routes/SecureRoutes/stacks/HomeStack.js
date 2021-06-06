import React from 'react';
import {View, Text} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Spaces from '../../../src/screens/navs/Spaces';
import Services from '../../../src/screens/navs/Services';
import Resources from '../../../src/screens/navs/Resources';
import Profile from '../../../src/screens/sub/Profile';
import HomeScreen from '../../../src/screens/HomeScreen';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Spaces" component={Spaces}></Stack.Screen>
      <Stack.Screen name="Services" component={Services}></Stack.Screen>
      <Stack.Screen name="Resources" component={Resources}></Stack.Screen>
      <Stack.Screen name="ProfileStack" component={Profile}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
