import React, {useReducer} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CustomButton from '../components/customButton';
import InputField from '../components/InputField';
import {formValidators} from '../utils/formValidators';

const ForgotPasswordScreen = props => {
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
        name: 'BITS ID/PSRM Number',
        id: 'Input #1',
        config: {
          type: 'text',
          placeholder: 'BITS ID/PSRM Number',
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
        name: 'BITS Email ID',
        id: 'Input #2',
        config: {
          type: 'email',
          placeholder: 'BITS Email ID',
          //icon: padlockIcon,
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
          <Text style={{color: '#8b8b99', textAlign: 'center'}}>
            Lorem Ipsum Doler Sita Amen is this Latin Ipsum Dolor?
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
        <View style={{position: "absolute", width: "90%", bottom: 0, marginBottom: "5%"}}>
          <CustomButton wrapperStyle={{width: '100%'}} title="RESET PASSWORD" />
        </View>
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
