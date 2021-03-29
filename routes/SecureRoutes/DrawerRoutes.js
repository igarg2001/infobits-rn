import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../src/screens/HomeScreen';
const Drawer = createDrawerNavigator();

const DrawerRoutes = props => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
  </Drawer.Navigator>
);

export default DrawerRoutes;
