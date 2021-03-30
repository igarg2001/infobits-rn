import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const NavCard = props => {
  return (
    <View style={styles.wrapper}>
      <View style={{flex: 0.8}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.about}>{props.about}</Text>
      </View>
      <View>
        <Image source={require('../assets/images/books.png')}></Image>
      </View>
    </View>
  );
};

export default NavCard;

const styles = StyleSheet.create({
  wrapper: {
    width: '75%',
    height: 86,
    backgroundColor: '#f7f7f7',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingLeft: "5%",
    marginTop: "3%"
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  about: {
    fontSize: 12,
  },
});
