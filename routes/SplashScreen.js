import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';

const SplashScreen = props => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80%',
      }}>
      <View
        style={{
          padding: 8,
          borderTopLeftRadius: 12,
          backgroundColor: 'white',
          borderBottomRightRadius: 12,
        }}>
        <Image
          source={require('../src/assets/images/infobits.png')}
          style={{width: 64, height: 64}}
        />
      </View>
      <ActivityIndicator
        size="large"
        color="white"
        style={{marginTop: '25%'}}
      />
    </View>
  );
};

export default SplashScreen;
