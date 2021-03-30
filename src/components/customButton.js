import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity
      onPress={props.press}
      style={{...styles.wrapper, ...props.wrapperStyle}}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Text style={{...styles.text, ...props.textStyle}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#56bcfc',
    borderRadius: 5,
    width: '40%',
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default CustomButton;
