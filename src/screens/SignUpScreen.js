import React, {useReducer} from 'react';
import {
  View,
  Text,
  Button,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {auth} from '../actions/actionCreators/auth';
import PageHeading from '../components/PageHeading';
import Frame from '../assets/svg/Frame';
//import {in} from 'react-native/Libraries/Animated/Easing';
import InputField from '../components/InputField';
import {formValidators} from '../utils/formValidators';
import CustomButton from '../components/customButton';

const SignUpScreen = props => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_INPUT':
        const targetInput = action.payload.targetInput;
        let inputs = [...state.inputs];
        const targetIndex = inputs.findIndex(
          input => input.name === targetInput,
        );
        inputs[targetIndex].value = action.payload.value;
        inputs[targetIndex].touched = true;
        const [valid, errorMsg] = formValidators(
          action.payload.value,
          inputs[targetIndex].validation,
        );
        inputs[targetIndex].valid = valid;
        inputs[targetIndex].errorMsg = errorMsg;

        let formIsValid = true;
        inputs.map(i => {
          formIsValid = i.valid && formIsValid;
        });
        return {...state, inputs: inputs, formIsValid: formIsValid};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    inputs: [
      {
        name: 'User Id',
        id: 'Input #1',
        config: {
          type: 'text',
          placeholder: 'User Id',
          //icon: userIcon,
        },
        value: '',
        validation: {
          required: true,
        },
        errorMsg: '',
        valid: false,
        touched: false,
      },
      {
        name: 'Password',
        id: 'Input #2',
        config: {
          type: 'password',
          placeholder: 'Password',
          //icon: padlockIcon,
        },
        value: '',
        validation: {
          required: true,
          isPassword: true,
        },
        errorMsg: '',
        valid: false,
        touched: false,
      },
    ],
    formIsValid: false,
  });
  const changeInput = (dispatch, payload) => {
    return dispatch({
      type: 'CHANGE_INPUT',
      payload: payload,
    });
  };

  state.inputs.map(el => {
    console.log(el.value);
  });

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <PageHeading title="LOGIN" />
        </View>
        <View style={{width: '75%'}}>
          <Frame width={'100%'} />
        </View>
        <View style={{width: '90%', marginTop: 16}}>
          <FlatList
            data={state.inputs}
            keyExtractor={input => input.id}
            renderItem={({item}) => (
              <InputField
                name={item.name}
                placeholder={item.config.placeholder}
                type={item.config.type}
                change={text =>
                  changeInput(dispatch, {
                    targetInput: item.name,
                    value: text,
                  })
                }
              />
            )}></FlatList>
        </View>
        <View
          style={{
            position: 'relative',
            right: 0,
            alignSelf: 'flex-end',
            marginRight: '5%',
            marginTop: '1%',
          }}>
          <Pressable
            android_ripple={{color: '#bcbcbc'}}
            onPress={() => props.navigation.navigate('ForgotPass')}>
            <Text style={{color: '#339cde'}}>Forgot Password?</Text>
          </Pressable>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-around',
            marginTop: '4%',
          }}>
          <CustomButton title="LOGIN" />
          <CustomButton
            title="SIGNUP"
            wrapperStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#56bcfc',
            }}
            textStyle={{color: '#56bcfc'}}
            press={() => props.navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </>
  );
};

const mapStatetoProps = state => {
  return {
    loading: state.auth.loading,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    auth: value => dispatch(auth(value)),
  };
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: '100%',
  },
  heading: {
    marginTop: '8%',
  },
});

export default connect(mapStatetoProps, mapDispatchtoProps)(SignUpScreen);
