import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

const NewsCard = props => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text>{props.date}</Text>
        <Text>{props.source}</Text>
      </View>
      <View>
        <Text>{props.heading}</Text>
        <Text>{props.content}</Text>
      </View>
      <Pressable></Pressable>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f9f8fd',
    borderRadius: 15,
    width: '100%',
    height: '100%',
  },
});
