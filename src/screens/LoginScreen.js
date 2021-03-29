import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {auth} from '../actions/actionCreators/auth';

const LoginScreen = props => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')}
        style={{backgroundColor: 'red', width: '50%'}}>
        <View>
          <Text>SIGNUP</Text>
        </View>
      </TouchableOpacity>
      <Button title="AUTH" onPress={() => props.auth(true)}></Button>
    </View>
  );
};

const mapStatetoProps = state => {
  return {
    loading: state.auth.loading,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    auth: (value) => dispatch(auth(value)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(LoginScreen);
