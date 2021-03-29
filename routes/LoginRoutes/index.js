import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../../src/screens/LoginScreen';
import SignUpScreen from '../../src/screens/SignUpScreen';

const LoginNavigator = createStackNavigator();
const LoginRoutes = props => {
  return (
    <NavigationContainer>
      <LoginNavigator.Navigator>
        <LoginNavigator.Screen name="Login" component={LoginScreen} />
        <LoginNavigator.Screen name="SignUp" component={SignUpScreen} />
      </LoginNavigator.Navigator>
    </NavigationContainer>
  );
};

export default LoginRoutes;
