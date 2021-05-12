import React, {useReducer, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CwlCard from '../../../components/CwlCard';
import BackIcon from '../../../assets/svg/ArrowLeft';
import {formValidators} from '../../../utils/formValidators';
import CustomButton from '../../../components/customButton';
import axios from '../../../apis/axiosInstance';

const Si = props => {
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
          placeholder: 'Describe the issue (max 25 words)',
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
      name: 'Text Book Counter',
      id: 'Text Book Counter',
    },
    {
      name: 'Help Desk',
      id: 'Help Desk',
    },
    {
      name: 'Photocopy Service',
      id: 'Photocopy Service',
    },
    {
      name: 'Brainstorm Room',
      id: 'Brainstorm Room',
    },
    {
      name: 'Group Discussion Room',
      id: 'Group Discussion Room',
    },
    {
      name: 'Gate Keeping',
      id: 'Gate Keeping',
    },
    {
      name: 'Research Zone',
      id: 'Research Zone',
    },
    {
      name: 'Innovation Zone and MakerSpace',
      id: 'Innovation Zone and MakerSpace',
    },
    {
      name: 'Information Counter',
      id: 'Information Counter',
    },
    {
      name: 'Reference Service',
      id: 'Reference Service',
    },
  ];

  const submitData = (radio, data) => {
    let submitArr = [];
    submitArr.push(radio);
    for (let i of data) submitArr.push(i.value);
    axios
      .post('administrator/newConv.php', {
        cat: 'grieve',
        inputArray: submitArr,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '700'}}>Service Issues</Text>
        <View></View>
      </View>
      <ScrollView style={{marginTop: '6%', width: '96%', marginLeft: '2%'}}>
        <CwlCard
          heading="Please fill in the details: "
          radios={radioElements}
          currentRadio={radio}
          setRadio={setRadio}
          inputs={state.inputs}
          dispatch={dispatch}
        />
      </ScrollView>
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
        <CustomButton
          title="SUBMIT"
          press={() => submitData(radio, state.inputs)}
        />
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
export default Si;
