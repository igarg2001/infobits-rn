import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HomeCards = props => {
  return (
    <View style={style.wrapper}>
      <Image source={props.image}></Image>
      <Text style={style.title}>{props.title}</Text>
      <Text style={style.about}>{props.about}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    width: '50%',
    height: '100%',
    paddingLeft: '2%',
    paddingTop: '2%',
  },
  title: {
    fontWeight: '700',

    fontSize: 16,
  },
  about: {
    color: '#818181',
    fontSize: 12,
  },
});

export default HomeCards;
