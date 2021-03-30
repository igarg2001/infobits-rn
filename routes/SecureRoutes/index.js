import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerRoutes from './DrawerRoutes';

const SecureNavigator = createStackNavigator();
const SecureRoutes = props => {
  return (
    <NavigationContainer>
      <SecureNavigator.Navigator screenOptions={{headerShown: false}}>
        <SecureNavigator.Screen name="SecureScreens">
          {() => <DrawerRoutes />}
        </SecureNavigator.Screen>
      </SecureNavigator.Navigator>
    </NavigationContainer>
  );
};

export default SecureRoutes;
