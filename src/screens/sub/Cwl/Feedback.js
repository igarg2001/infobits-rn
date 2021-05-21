import React, {useReducer, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import CwlCard from '../../../components/CwlCard';
import BackIcon from '../../../assets/svg/ArrowLeft';
import {formValidators} from '../../../utils/formValidators';
import CustomButton from '../../../components/customButton';

const Feedback = props => {
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
        name: 'Review',
        id: 'Input #1',
        config: {
          type: 'text',
          placeholder: 'Feedback (max 25 words)',
          //icon: padlockIcon,
        },
        value: '',
        validation: {
          required: true,
        },
        errorMsg: '',
        valid: false,
        touched: false,
        display: 'multiLine',
      },
    ],
    formIsValid: false,
  });

  const [radio, setRadio] = useState('textbookcounter');

  const radioElements = [
    {
      name: 'Suggestions',
      id: 'suggestions',
    },
    {
      name: 'Complaints',
      id: 'complaints',
    },
    {
      name: 'Compliments',
      id: 'compliments',
    },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContent}>
        <Pressable
          android_ripple={{color: '#bcbcbc'}}
          onPress={() => props.navigation.goBack()}>
          <BackIcon />
        </Pressable>
        <Text style={{fontSize: 18, fontWeight: '700'}}>Feedback Form</Text>
        <View></View>
      </View>
      <View style={{marginTop: '6%', width: '96%', marginLeft: '2%'}}>
        <CwlCard
          heading="Please fill in the details: "
          radios={radioElements}
          currentRadio={radio}
          setRadio={setRadio}
          inputs={state.inputs}
          dispatch={dispatch}
        />
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
export default Feedback;
