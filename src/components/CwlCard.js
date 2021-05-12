import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import InputField from './InputField2';

const CwlCard = props => {
  const changeInput = (dispatch, payload) => {
    return dispatch({
      type: 'CHANGE_INPUT',
      payload: payload,
    });
  };

  console.log(props.currentRadio);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>{props.heading}</Text>
      <View style={styles.inputCont}>
        <FlatList
          data={props.radios}
          keyExtractor={radio => radio.id}
          renderItem={({item}) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <RadioButton
                color="#56bcfc"
                value="hey"
                status={
                  props.currentRadio === item.id ? 'checked' : 'unchecked'
                }
                onPress={() => props.setRadio(item.id)}></RadioButton>
              <TouchableOpacity onPress={() => props.setRadio(item.id)}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <FlatList
          data={props.inputs}
          keyExtractor={input => input.id}
          renderItem={({item}) => {
            if (item.display === 'singleLine' || item.display === 'multiLine')
              return (
                <View
                  style={{marginTop: item.display === 'singleLine' ? -16 : 0}}>
                  <InputField
                    setFocus={props.setFocus}
                    setBlur={props.setBlur}
                    dispatch={props.dispatch}
                    id={item.id}
                    multiline={item.display === 'multiLine'}
                    name={item.name}
                    placeholder={item.config.placeholder}
                    type={item.config.type}
                    change={text =>
                      changeInput(props.dispatch, {
                        targetInput: item.name,
                        value: text,
                      })
                    }
                  />
                </View>
              );
          }}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 'auto',
    shadowColor: 'rgba(0,0,0,0.15)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: '10%',
    paddingHorizontal: '4%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#575981',
  },
});

export default CwlCard;
