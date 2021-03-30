import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PageHeading = props => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default PageHeading;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#339cde',
  },
});
