import React from 'react';
import {View, Text} from 'react-native';
import Header from '../assets/svg/Header';

const CustomHeader = () => {
  return (
    <View style={{position: 'relative'}}>
      <Header width="100%" height="100%" />
    </View>
  );
};

export default CustomHeader;
