import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Hamburger from '../assets/svg/Hamburger';
import Profile from '../assets/svg/Profile';
import HomeCards from '../components/HomeCards';

const HomeScreen = props => {
  //props.navigation.navigate('Services');
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.lightHeader}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Hamburger />
            </TouchableOpacity>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{fontSize: 18}}>info</Text>
              <Text style={{fontWeight: '700', fontSize: 18}}>BITS</Text>
            </View>
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 32,
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Profile />
            </View>
          </View>
          <View style={{marginTop: '12%'}}>
            <Text style={{textAlign: 'right'}}>
              “Quote is a good way to fill spaces that can’t be used otherwise”
            </Text>
            <Text style={{textAlign: 'right', fontWeight: 'bold'}}>
              -Harshit
            </Text>
          </View>
        </View>
        <View style={{marginTop: '8%', width: '90%'}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Spaces')}
            style={{
              width: '100%',
              borderRadius: 12,
              backgroundColor: 'white',
              height: 64,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              Library Spaces
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Resources')}
            style={{
              width: '100%',
              borderRadius: 12,
              backgroundColor: 'white',
              height: 64,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2%',
            }}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              Library Resources
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Services')}
            style={{
              width: '100%',
              borderRadius: 12,
              backgroundColor: 'white',
              height: 64,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2%',
            }}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              Library Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Services')}
            style={{
              width: '100%',
              borderRadius: 12,
              backgroundColor: 'white',
              height: 64,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2%',
            }}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              Shibboleth Remote Access
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{alignSelf: 'flex-start', marginTop: '8%', marginLeft: '5%'}}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 22,
              textAlign: 'left',
              alignSelf: 'flex-start',
            }}>
            Notice Board
          </Text>
        </View>
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
    height: '25%',
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

export default HomeScreen;
