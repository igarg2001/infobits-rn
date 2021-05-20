import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import Hamburger from '../../assets/svg/ArrowLeft';
import NavCard from '../../components/NavCard';
const Spaces = props => {
  const items = [
    {
      title: 'Brainstorm Room',
      about: 'Provide book recommendations maybe in two lines',
    },
    {
      title: 'Group Discussion Room',
      about: 'Provide book recommendations maybe in two lines',
    },
    {
      title: 'Periodical Finder',
      about: 'Provide book recommendations maybe in two lines',
    },
    {
      title: 'Innovation Zone',
      about: 'Provide book recommendations maybe in two lines',
    },
    {
      title: 'Makerspace',
      about: 'Provide book recommendations maybe in two lines',
    },
    {
      title: 'MultiMedia Studio',
      about: 'Provide book recommendations maybe in two lines',
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
              Library Spaces
            </Text>
            <View style={{flex: 0.3}}></View>
          </View>
        </View>
        <View style={{marginTop: '5%'}}></View>
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

export default Spaces;
