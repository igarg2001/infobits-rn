import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NewsItem = props => {
  const openUrl = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) Linking.openURL(url);
        else console.log('Unsupported URL');
      })
      .catch(err => console.log('Cant open URL', err));
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.date}>{props.date}</Text>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.date}>{props.newspaper}</Text>
      <TouchableOpacity onPress={() => openUrl(props.url)}>
        <Text style={styles.readMore}>Read More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  wrapper: {
    width: '85%',
    height: 'auto',
    paddingVertical: '7.5%',
    paddingHorizontal: '4%',
    display: 'flex',
    borderRadius: 8,
    backgroundColor: '#f9f8fd',
  },
  date: {
    fontSize: 13,
    color: '#575981',
    fontWeight: '400',
    marginTop: 8,
    //alignSelf: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  readMore: {
    fontSize: 16,
    fontWeight: '500',
    color: '#339cde',
    marginTop: 20,
  },
});
