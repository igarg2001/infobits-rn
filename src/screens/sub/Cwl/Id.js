import React, {useReducer} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CwlCard from '../../../components/CwlCard';
import BackIcon from '../../../assets/svg/ArrowLeft';
import {formValidators} from '../../../utils/formValidators';
import CustomButton from '../../../components/customButton';

const Id = (props) => {
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
        name: 'Database',
        id: 'Input #1',
        config: {
          type: 'text',
          placeholder: 'Database',
          //icon: userIcon,
        },
        value: '',
        validation: {
          required: true,
        },
        errorMsg: '',
        valid: false,
        touched: false,
        display: 'singleLine',
      },
      {
        name: 'Journal',
        id: 'Input #2',
        config: {
          type: 'text',
          placeholder: 'Journal',
          //icon: padlockIcon,
        },
        value: '',
        validation: {
          required: true,
        },
        errorMsg: '',
        valid: false,
        touched: false,
        display: 'singleLine',
      },
      {
        name: 'Location',
        id: 'Input #3',
        config: {
          type: 'text',
          placeholder: 'Location',
          //icon: padlockIcon,
        },
        value: '',
        validation: {
          required: true,
        },
        errorMsg: '',
        valid: false,
        touched: false,
        display: 'singleLine',
      },
    ],
    formIsValid: false,
  });
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '700'}}>
          Inaccessible Database
        </Text>
        <View></View>
      </View>
      <View style={{marginTop: '6%', width: '96%', marginLeft: '2%'}}>
        <CwlCard heading="Please fill in the details: " inputs={state.inputs} dispatch={dispatch} />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          marginBottom: '5%',
          width: '95%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: '2.5%',
        }}>
        <CustomButton
          title="CANCEL"
          wrapperStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#56bcfc',
          }}
          textStyle={{color: '#56bcfc'}}
        />
        <CustomButton title="SUBMIT" />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContent: {
    marginTop: '10%',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
});
export default Id;