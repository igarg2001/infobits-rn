import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import React from 'react';
import ForgotPasswordScreen from '../../src/screens/ForgotPasswordScreen';
import LoginScreen from '../../src/screens/LoginScreen';
import SignUpScreen from '../../src/screens/SignUpScreen';

const LoginNavigator = createStackNavigator();
const LoginRoutes = props => {
  return (
    <NavigationContainer>
      <LoginNavigator.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
        <LoginNavigator.Screen name="Login" component={LoginScreen} />
        <LoginNavigator.Screen name="SignUp" component={SignUpScreen} />
        <LoginNavigator.Screen
          name="ForgotPass"
          component={ForgotPasswordScreen}
        />
      </LoginNavigator.Navigator>
    </NavigationContainer>
  );
};

export default LoginRoutes;
