import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

const LnfItem = props => {
  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: props.claimed ? '#EEEDF2' : '#F9F8FD',
      }}>
      <Text style={styles.date}>{props.date}</Text>
      <Text style={styles.details}>Item: {props.item}</Text>
      <Text style={styles.details}>Brand: {props.brand}</Text>
      <Text style={styles.details}>
        Time Found: {props.place.substring(0, 5)}
      </Text>
      <Pressable
        android_ripple={{color: '#bcbcbc'}}
        disabled={props.claimed}
        style={{
          ...styles.button,
          backgroundColor: props.claimed ? '#9e9e9e' : '#56bcfc',
        }}>
        <Text style={{color: 'white'}}>
          {props.claimed ? 'CLAIMED' : 'CLAIM'}
        </Text>
      </Pressable>
    </View>
  );
};

export default LnfItem;

const styles = StyleSheet.create({
  wrapper: {
    width: '85%',
    height: 'auto',
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    display: 'flex',
    borderRadius: 8,
  },
  date: {
    fontSize: 13,
    color: '#575981',
    fontWeight: '400',
    alignSelf: 'flex-end',
  },
  details: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
  },
  button: {
    width: '50%',
    alignSelf: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 32,
    marginTop: 8,
  },
});
