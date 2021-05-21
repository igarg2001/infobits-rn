import React, {useState} from 'react';
import {
  TextInput,
  View,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
//import { MaterialCommunityIcons } from '@expo/vector-icons';

import Eye from '../assets/svg/eye';
import EyeCross from '../assets/svg/eye-close';

const InputField2 = props => {
  let errorView = null;
  if (props.touched && !props.valid) {
    errorView = (
      <View style={styles.errorStyle}>
        <Text style={styles.errorTextStyle}>
          {props.name} {props.errorMsg}
        </Text>
      </View>
    );
  }

  const [focus, setFocus] = useState(false);

  let keyboardType = null;

  switch (props.type) {
    case 'email':
      keyboardType = 'email-address';
      break;
    case 'mobile':
      keyboardType = 'phone-pad';
      break;
    case 'number':
      keyboardType = 'numeric';
      break;

    default:
      keyboardType = null;
  }

  return (
    <View>
      {/* <Text>{props.name}</Text> */}
      <View
        style={{
          ...styles.viewStyles,
          borderColor: focus ? '#339cde' : '#bdbdbd',
          borderWidth: props.multiline ? 1.5 : 0,
          //height: props.multiline ? "100%" : "auto",
          height: props.multiline ? 120 : 60,
          borderRadius: props.multiline ? 4 : 0,
        }}>
        <TextInput
          multiline={props.multiline}
          textAlignVertical={props.multiline ? 'top' : 'auto'}
          style={styles.placeholderStyles}
          placeholder={props.placeholder}
          autoCapitalize="none"
          autoCorrect={false}
          value={props.value}
          onChangeText={props.change}
          onFocus={() => {
            setFocus(true);
            props.setFocus
              ? props.setFocus(props.dispatch, {targetInput: props.id})
              : null;
          }}
          onBlur={() => {
            setFocus(false);
            props.setBlur
              ? props.setBlur(props.dispatch, {targetInput: props.id})
              : null;
          }}
          keyboardType={keyboardType}
          secureTextEntry={
            props.type === 'password' && !showPasswordState ? true : false
          }
        />
      </View>
      {errorView}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 16,
    backgroundColor: 'transparent',
    borderBottomWidth: 1.5,
  },
  iconStyles: {
    justifyContent: 'center',
    marginLeft: 16,
  },
  placeholderStyles: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 10,
  },
  touchStyle: {
    // justifyContent: 'center',
    // marginHorizontal: 8,
  },
  errorTextStyle: {
    color: 'red',
    marginTop: 6,
    marginLeft: 4,
  },
});

export default InputField2;
