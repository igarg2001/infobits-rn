import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.press}
      style={{
        ...styles.wrapper,
        ...props.wrapperStyle,
        backgroundColor: props.disabled ? "rgba(86,188,252, 0.5)" : "rgba(86,188,252, 1)"
      }}>
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
