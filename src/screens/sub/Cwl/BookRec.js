import React, {useReducer, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  SectionList,
} from 'react-native';
import CwlCard from '../../../components/CwlCard';
import BackIcon from '../../../assets/svg/ArrowLeft';
import {formValidators} from '../../../utils/formValidators';
import TrashIcon from '../../../assets/svg/Trash';
import PlusIcon from '../../../assets/svg/Plus';
import TickIcon from '../../../assets/svg/Tick';
import {act} from 'react-test-renderer';
import axios from '../../../apis/axiosInstance';

const BookRec = props => {
  const [actRow, setActRow] = useState(0);
  const activeRow = ip => {
    for (let i = 0; i < ip.length; ++i) {
      if (ip[i].active) return +(i / 5);
      //return -1;
    }
    return -1;
  };
  const generateRow = count => {
    let arr = [];
    const arr2 = arr.concat([
      {
        name: 'Title',
        id: `Input #${count + 1}`,
        config: {
          type: 'text',
          placeholder: 'Title',
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
        active: false,
      },
      {
        name: 'Author',
        id: `Input #${count + 2}`,
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
        active: false,
      },
      {
        name: 'Edition',
        id: `Input #${count + 3}`,
        config: {
          type: 'text',
          placeholder: 'Edition',
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
        active: false,
      },

      {
        name: 'Publisher',
        id: `Input #${count + 4}`,
        config: {
          type: 'text',
          placeholder: 'Publisher',
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
        active: false,
      },
      {
        name: 'Year',
        id: `Input #${count + 5}`,
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
        active: false,
      },
    ]);

    return arr2;
  };

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
      case 'ADD_ROW':
        let newInputs = [...state.inputs, ...generateRow(state.inputs.length)];
        formIsValid = true;
        newInputs.map(i => {
          formIsValid = i.valid && formIsValid;
        });
        return {...state, inputs: newInputs, formIsValid: formIsValid};
      case 'DELETE_ROW':
        let oldInputs = [...state.inputs];
        const targetRow = Math.floor(activeRow(oldInputs));
        console.log(targetRow);
        if (targetRow === -1) return {...state};
        oldInputs.splice(targetRow, 5);
        return {...state, inputs: oldInputs};
      case 'FOCUS':
        oldInputs = [...state.inputs];
        let targetInput2 = action.payload.targetInput;
        let targetIndex2 = oldInputs.findIndex(
          input => input.id === targetInput2,
        );
        oldInputs[targetIndex2].active = true;
        return {...state, inputs: oldInputs};
      case 'BLUR':
        oldInputs = [...state.inputs];
        targetInput2 = action.payload.targetInput;
        targetIndex2 = oldInputs.findIndex(input => input.id === targetInput2);
        oldInputs[targetIndex2].active = false;
        return {...state, inputs: oldInputs};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    inputs: [
      {
        name: 'Title',
        id: 'Input #1',
        config: {
          type: 'text',
          placeholder: 'Title',
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
        active: false,
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
        active: false,
      },
      {
        name: 'Edition',
        id: 'Input #3',
        config: {
          type: 'text',
          placeholder: 'Edition',
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
        active: false,
      },

      {
        name: 'Publisher',
        id: 'Input #4',
        config: {
          type: 'text',
          placeholder: 'Publisher',
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
        active: false,
      },
      {
        name: 'Year',
        id: 'Input #5',
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
        active: false,
      },
    ],
    formIsValid: false,
  });

  const addRow = dispatch => {
    return dispatch({
      type: 'ADD_ROW',
    });
  };

  const deleteRow = dispatch => {
    return dispatch({
      type: 'DELETE_ROW',
    });
  };

  const setFocus = (dispatch, payload) => {
    console.log('hey');
    return dispatch({
      type: 'FOCUS',
      payload: payload,
    });
  };
  const setBlur = (dispatch, payload) => {
    console.log('hey');
    return dispatch({
      type: 'BLUR',
      payload: payload,
    });
  };

  let cards = [];

  for (let i = 0; i < state.inputs.length; i += 5) {
    const temp = [...state.inputs];
    const data = temp.slice(i, i + 5);

    cards.push(
      <View style={{marginTop: i === 0 ? 0 : '4%'}}>
        <CwlCard
          heading={'Book Recommendation ' + (i / 5 + 1)}
          inputs={data}
          dispatch={dispatch}
          setFocus={setFocus}
          setBlur={setBlur}
        />
      </View>,
    );
  }

  const submitData = data => {
    let submitData = [];
    for (let i of data) submitData.push(i.value);
    console.log(submitData);
    axios
      .post('administrator/newConv.php', {
        cat: 'breco',
        inputArray: submitData,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContent}>
        <Pressable
          android_ripple={{color: '#bcbcbc'}}
          onPress={() => props.navigation.goBack()}>
          <BackIcon />
        </Pressable>
        <Text style={{fontSize: 18, fontWeight: '700'}}>
          Book Recommendation
        </Text>
        <View></View>
      </View>
      <ScrollView
        style={{
          marginTop: '6%',
          width: '96%',
          marginLeft: '2%',
          marginBottom: '20%',
        }}>
        {cards.map(card => card)}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'white',
          height: '10%',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          elevation: 3,
        }}>
        <Pressable
          android_ripple={{color: '#bcbcbc'}}
          onPress={() => deleteRow(dispatch)}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '50%',
            justifyContent: 'space-between',
          }}>
          <TrashIcon />
          <Text style={styles.bottomBarIconText}>Delete</Text>
        </Pressable>
        <Pressable
          android_ripple={{color: '#bcbcbc'}}
          onPress={() => addRow(dispatch)}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '50%',
            justifyContent: 'space-between',
          }}>
          <PlusIcon />
          <Text style={styles.bottomBarIconText}>Add new</Text>
        </Pressable>
        <Pressable
          android_ripple={{color: '#bcbcbc'}}
          onPress={() => submitData(state.inputs)}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '50%',
            justifyContent: 'space-between',
          }}>
          <TickIcon />
          <Text style={styles.bottomBarIconText}>Submit</Text>
        </Pressable>
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
  bottomBarIconText: {
    fontSize: 12,
    color: '#339cde',
    fontWeight: '500',
    marginTop: 3,
  },
});
export default BookRec;
