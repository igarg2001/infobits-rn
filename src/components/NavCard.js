import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const NavCard = props => {
  return (
    <Pressable
      style={styles.wrapper}
      onPress={props.press}
      android_ripple={{
        color: "#bcbcbc",
        borderless: false
      }}>
      <View style={{flex: 0.8}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.about}>{props.about}</Text>
      </View>
      <View>
        <Image source={require('../assets/images/books.png')}></Image>
      </View>
     
    </Pressable>
  );
};

export default NavCard;

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    height: 86,
    backgroundColor: '#f7f7f7',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginTop: '3%',
    marginLeft: "-5%",
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  about: {
    fontSize: 12,
    color: '#818181',
  },
});
