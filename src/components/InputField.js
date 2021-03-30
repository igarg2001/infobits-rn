import React, {useState} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
//import { MaterialCommunityIcons } from '@expo/vector-icons';

import Eye from '../assets/svg/eye';
import EyeCross from '../assets/svg/eye-close';

const InputField = props => {
  let showPassword = null;
  const [showPasswordState, toggleState] = useState(false);
  if (props.type === 'password') {
    showPassword = showPasswordState ? (
      <Eye color="#000000" />
    ) : (
      <EyeCross color="#000000" />
    );
  }
  console.log(showPassword);
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
      <View style={styles.viewStyles}>
        <TextInput
          style={styles.placeholderStyles}
          placeholder={props.placeholder}
          autoCapitalize="none"
          autoCorrect={false}
          value={props.value}
          onChangeText={props.change}
          keyboardType={keyboardType}
          secureTextEntry={
            props.type === 'password' && !showPasswordState ? true : false
          }
        />
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={() => toggleState(!showPasswordState)}>
          {showPassword}
        </TouchableOpacity>
      </View>
      {errorView}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#339cde',
    borderRadius: 10,
    marginTop: 16,
    backgroundColor: "#f9f8fd"
  },
  iconStyles: {
    justifyContent: 'center',
    marginLeft: 16,
  },
  placeholderStyles: {
    flex: 1,
    fontSize: 18,
    marginHorizontal: 28,
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

export default InputField;
