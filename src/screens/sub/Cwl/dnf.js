import React, {useReducer, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CwlCard from '../../../components/CwlCard';
import BackIcon from '../../../assets/svg/ArrowLeft';
import {formValidators} from '../../../utils/formValidators';
import CustomButton from '../../../components/customButton';

const Dnf = props => {
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

  const [radio, setRadio] = useState('Journals');
  let myInputs =
    radio === 'Books'
      ? [
          {
            name: 'Title',
            id: 'Input #1',
            config: {
              type: 'text',
              placeholder: 'Title',
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
            name: 'Author',
            id: 'Input #2',
            config: {
              type: 'text',
              placeholder: 'Author',
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
            name: 'Accession No. ',
            id: 'Input #1',
            config: {
              type: 'text',
              placeholder: 'Accession No. ',
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
        ]
      : [
          {
            name: 'Journal Name',
            id: 'Input #1',
            config: {
              type: 'text',
              placeholder: 'Journal Name',
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
            name: 'Month',
            id: 'Input #2',
            config: {
              type: 'text',
              placeholder: 'Month',
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
            name: 'Year',
            id: 'Input #3',
            config: {
              type: 'text',
              placeholder: 'Year',
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
        ];

  console.log(myInputs);

  const [state1, dispatch] = useReducer(reducer, {
    inputs: myInputs,
    formIsValid: false,
  });

  const radioElements = [
    {
      name: 'Journals',
      id: 'Journals',
    },
    {
      name: 'Books',
      id: 'Books',
    },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '700'}}>Document Not Found On Shelf</Text>
        <View></View>
      </View>
      <View style={{marginTop: '6%', width: '96%', marginLeft: '2%'}}>
        <CwlCard
          heading="Please fill in the details: "
          radios={radioElements}
          currentRadio={radio}
          setRadio={setRadio}
          inputs={state1.inputs}
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
    width: '100%',
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
export default Dnf;
