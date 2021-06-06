import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../DrawerContent';
import DailyNews from '../../src/screens/sub/DailyNews';
import Lnf from '../../src/screens/sub/Lnf';
import Profile from '../../src/screens/sub/Profile';
import CwlStack from './stacks/CwlStack';
import HomeStack from './stacks/HomeStack';
const Drawer = createDrawerNavigator();

const DrawerRoutes = props => (
  <Drawer.Navigator
    drawerContent={props => (
      <DrawerContent {...props} resUser={props.resUser} />
    )}
    drawerStyle={{width: '90%'}}
    screenOptions={{
      headerShown: false,
    }}>
    <Drawer.Screen name="Home" component={HomeStack}></Drawer.Screen>
    <Drawer.Screen name="News" component={DailyNews}></Drawer.Screen>
    <Drawer.Screen name="lnf" component={Lnf}></Drawer.Screen>
    <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
   
    <Drawer.Screen name="cwl" component={CwlStack}></Drawer.Screen>
  </Drawer.Navigator>
);

export default DrawerRoutes;
