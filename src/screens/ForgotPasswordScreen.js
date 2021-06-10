import React, {useReducer, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CustomButton from '../components/customButton';
import InputField from '../components/InputField';
import {formValidators} from '../utils/formValidators';
import axios from 'axios';
import FormData from 'form-data';
import LoadingModal from '../components/LoadingModal';
import {
  Button,
  DefaultTheme as PaperDefaultTheme,
  Dialog,
  Portal,
  Provider,
} from 'react-native-paper';

const ForgotPasswordScreen = props => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    value: false,
    message: '',
  });
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
        name: 'BITS Email',
        id: 'Input #1',
        config: {
          type: 'text',
          placeholder: 'BITS Email',
          //icon: userIcon,
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
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

  const submitRequest = (email, submit) => {
    setLoading(true);
    let data = new FormData();
    data.append('bemail', email);
    data.append('submit', 'Reset Password');

    var config = {
      method: 'post',
      url: 'http://library.bits-pilani.ac.in/account/forgot.php',
      headers: {
        token: 'testToken',
      },
      data: data,
    };
    axios(config)
      .then(res => {
        setLoading(false);
        setSuccess(true);
      })
      .catch(err => {
        setError({
          value: true,
          message: 'An error occurred when sending the ',
        });
      });
  };

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <Text style={{color: '#339cde'}}>Forgot Password</Text>
        </View>
        <View style={styles.main}>
          <Text
            style={{
              color: '#339cde',
              fontWeight: '700',
              fontSize: 30,
              textAlign: 'center',
            }}>
            Forgot Password?
          </Text>
          <Text
            style={{color: '#8b8b99', textAlign: 'center', marginTop: '4%'}}>
            Enter your BITS Email Id below and a new password will be sent to
            you.
          </Text>
        </View>
        <View style={{width: '90%', marginTop: '16%'}}>
          <FlatList
            data={state.inputs}
            keyExtractor={input => input.id}
            renderItem={({item}) => (
              <InputField
                name={item.name}
                placeholder={item.config.placeholder}
                touched={item.touched}
                valid={item.valid}
                errorMsg={'is invalid'}
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
            position: 'absolute',
            width: '90%',
            bottom: 0,
            marginBottom: '5%',
          }}>
          <CustomButton
            wrapperStyle={{width: '100%'}}
            title="RESET PASSWORD"
            disabled={!state.formIsValid}
            press={() => submitRequest(state.inputs[0].value, 'Reset Password')}
          />
        </View>
        <LoadingModal message="Sending request" visible={loading} />
        <Provider>
          <Portal>
            <Dialog
              theme={PaperDefaultTheme}
              visible={success}
              onDismiss={() => setSuccess(false)}
              style={{
                paddingVertical: '5%',
                elevation: 5,
                borderRadius: 5,
              }}>
              <Dialog.Content>
                <Text>Password has been sent to your BITS Email</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => props.navigation.goBack()}>LOGIN</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </Provider>
      </View>
    </>
  );
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
  main: {
    marginTop: '24%',
    width: '90%',
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;
