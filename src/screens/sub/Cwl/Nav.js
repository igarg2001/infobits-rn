import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import Hamburger from '../../../assets/svg/ArrowLeft';
import NavCard from '../../../components/NavCard';
const Nav = props => {
  const items = [
    {
      title: 'Book Recommendation',
      about: 'Provide book recommendations maybe in two lines',
      press: () => props.navigation.navigate('BookRec'),
    },
    {
      title: 'I Just Read This Book ',
      about: 'Provide book recommendations maybe in two lines',
      press: () => props.navigation.navigate('BookRev'),
    },
    {
      title: 'Database Not Accessible',
      about: 'Provide book recommendations maybe in two lines',
      press: () => props.navigation.navigate('Id'),
    },
    {
      title: 'Not Happy With The Service',
      about: 'Provide book recommendations maybe in two lines',
      press: () => props.navigation.navigate('Si'),
    },
    {
      title: 'Document Not Found On The Shelf',
      about: 'Provide book recommendations maybe in two lines',
      press: () => props.navigation.navigate('Dnf'),
    },
    {
      title: 'Feedback Form',
      about: 'Provide book recommendations maybe in two lines',
      press: () => props.navigation.navigate('Feedback'),
    },
  ];
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.lightHeader}>
          <View style={styles.headerContent}>
            <Pressable
              android_ripple={{color: '#bcbcbc'}}
              onPress={() => props.navigation.goBack()}>
              <Hamburger />
            </Pressable>
            <Text style={{fontWeight: '700', fontSize: 18}}>
              Connect With Library
            </Text>
            <View style={{flex: 0.3}}></View>
          </View>
        </View>
        <View style={{marginTop: '10%'}}></View>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <View style={{width: '90%', display: 'flex', alignItems: 'center'}}>
              <NavCard
                title={item.title}
                about={item.about}
                press={item.press}
              />
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100%',
    backgroundColor: 'white',
  },
  lightHeader: {
    width: '100%',
    backgroundColor: 'rgb(86, 188, 252)',
    //transform: [{matrix: [-1, 0.04, 0.04, 1, 0, 0, 0, 0, 0]}],
    height: '8%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerContent: {
    marginTop: '4%',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Nav;
