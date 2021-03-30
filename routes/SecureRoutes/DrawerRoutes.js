import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../src/screens/HomeScreen';
import DrawerContent from '../DrawerContent';
import DailyNews from '../../src/screens/DailyNews';
const Drawer = createDrawerNavigator();

const DrawerRoutes = props => (
  <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props} />}
    drawerStyle={{width: '90%'}}
    screenOptions={{headerShown: false}}>
    <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
    <Drawer.Screen name="News" component={DailyNews}></Drawer.Screen>
  </Drawer.Navigator>
);

export default DrawerRoutes;
