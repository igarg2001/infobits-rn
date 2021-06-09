import React, {useReducer} from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {auth, login, setError} from '../actions/actionCreators/auth';
import PageHeading from '../components/PageHeading';
import Frame from '../assets/svg/Frame';
//import {in} from 'react-native/Libraries/Animated/Easing';
import InputField from '../components/InputField';
import {formValidators} from '../utils/formValidators';
import CustomButton from '../components/customButton';
import LoadingModal from '../components/LoadingModal';
import {Provider, Portal, Dialog, Button, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';

const LoginScreen = props => {
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
          <Pressable onPress={() => props.navigation.navigate('ForgotPass')}>
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
          <CustomButton
            disabled={!state.formIsValid}
            title="LOGIN"
            press={() =>
              props.auth(
                state.inputs[0].value,
                state.inputs[1].value,
                props.navigation.navigate,
              )
            }
          />
          {/* <CustomButton
            title="SIGNUP"
            wrapperStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#56bcfc',
            }}
            textStyle={{color: '#56bcfc'}}
            press={() => props.navigation.navigate('SignUp')}
          /> */}
        </View>
        <LoadingModal message="Logging You In" visible={props.loading} />
        <Provider>
          <Portal>
            <Dialog
            theme={PaperDefaultTheme}
              visible={props.error.value}
              onDismiss={() => props.setError(false, '')}
              style={{
                paddingVertical: '5%',
                elevation: 5,
                borderRadius: 5,
              }}>
              <Dialog.Content>
                <Text>{props.error.message}</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => props.setError(false, '')}>OK</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </Provider>
      </View>
    </>
  );
};

const mapStatetoProps = state => {
  return {
    loading: state.auth.loading,
    resUser: state.auth.resUser,
    error: state.auth.error,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    auth: (username, password, navigate) =>
      dispatch(login(username, password, navigate)),
    setError: (value, message) => dispatch(setError(value, message)),
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

export default connect(mapStatetoProps, mapDispatchtoProps)(LoginScreen);
