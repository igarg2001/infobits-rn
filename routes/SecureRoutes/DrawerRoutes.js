import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../src/screens/HomeScreen';
import DrawerContent from '../DrawerContent';
import DailyNews from '../../src/screens/sub/DailyNews';
import Lnf from '../../src/screens/sub/Lnf';
import Services from '../../src/screens/navs/Services';
import Spaces from '../../src/screens/navs/Spaces';
import Resources from '../../src/screens/navs/Resources';
const Drawer = createDrawerNavigator();

const DrawerRoutes = props => (
  <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props} />}
    drawerStyle={{width: '90%'}}
    screenOptions={{headerShown: false}}>
    <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
    <Drawer.Screen name="News" component={DailyNews}></Drawer.Screen>
    <Drawer.Screen name="lnf" component={Lnf}></Drawer.Screen>
    <Drawer.Screen name="Spaces" component={Spaces}></Drawer.Screen>
    <Drawer.Screen name="Services" component={Services}></Drawer.Screen>
    <Drawer.Screen name="Resources" component={Resources}></Drawer.Screen>
  </Drawer.Navigator>
);

export default DrawerRoutes;
