import React from 'react';
import {View, Text} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Nav from '../../../src/screens/sub/Cwl/Nav';
import BookRec from '../../../src/screens/sub/Cwl/BookRec';
import BokkRev from '../../../src/screens/sub/Cwl/BokkRev';
import Dnf from '../../../src/screens/sub/Cwl/dnf';
import Id from '../../../src/screens/sub/Cwl/Id';
import Feedback from '../../../src/screens/sub/Cwl/Feedback';
import Si from '../../../src/screens/sub/Cwl/Si';

const CwlStack = props => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Nav" component={Nav}></Stack.Screen>
      <Stack.Screen name="BookRec" component={BookRec}></Stack.Screen>
      <Stack.Screen name="BookRev" component={BokkRev}></Stack.Screen>
      <Stack.Screen name="Dnf" component={Dnf}></Stack.Screen>
      <Stack.Screen name="Id" component={Id}></Stack.Screen>
      <Stack.Screen name="Feedback" component={Feedback}></Stack.Screen>
      <Stack.Screen name="Si" component={Si}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CwlStack;
