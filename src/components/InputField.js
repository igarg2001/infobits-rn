import React, {useState} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
//import {act} from 'react-test-renderer';
//import { MaterialCommunityIcons } from '@expo/vector-icons';

import Eye from '../assets/svg/eye';
import EyeCross from '../assets/svg/eye-close';
import PencilIcon from '../assets/svg/Pencil';

const InputField = props => {
  let showPassword = null;
  const [showPasswordState, toggleState] = useState(false);
  const [active, setActive] = useState(false);
  console.log(active);

  if (props.type === 'password') {
    showPassword = showPasswordState ? (
      <Eye color="#000000" />
    ) : (
      <EyeCross color="#000000" />
    );
  }
  const pencilIcon = props.editIcon ? <PencilIcon /> : null;
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
      <View
        style={{
          ...styles.viewStyles,
          borderColor: active && !props.disabled ? '#339cde' : 'transparent',
          elevation: props.modalOpen ? 0 : 2,
        }}>
        <TextInput
          style={styles.placeholderStyles}
          placeholder={props.placeholder}
          autoCapitalize="none"
          autoCorrect={false}
          value={props.value}
          onChangeText={props.change}
          keyboardType={keyboardType}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          editable={!props.disabled}
          selectTextOnFocus={!props.disabled}
          secureTextEntry={
            props.type === 'password' && !showPasswordState ? true : false
          }
        />
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={() => {
            if (props.type === 'password') toggleState(!showPasswordState);
            if (props.editIcon) {
              console.log('hi');
              props.onEdit();
              setActive(true);
            }
          }}>
          {showPassword}
          {pencilIcon}
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
    borderRadius: 10,
    marginTop: 16,
    backgroundColor: '#f9f8fd',
    borderColor: 'transparent',
    //  elevation: 2,
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3%',
  },
  errorTextStyle: {
    color: 'red',
    marginTop: 6,
    marginLeft: 4,
  },
});

export default InputField;
