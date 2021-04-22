import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
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
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}
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
            </TouchableOpacity>
          </View>
          <View style={{marginTop: '12%', marginHorizontal: '8%'}}>
            <Text style={{textAlign: 'right'}}>
              “Quote is a good way to fill spaces that can’t be used otherwise”
            </Text>
            <Text style={{textAlign: 'right', fontWeight: 'bold'}}>
              -Harshit
            </Text>
          </View>
        </View>
        <View style={{marginTop: '8%', width: '90%'}}>
          <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Spaces')}
              style={{
                height: 135,
                width: '47.5%',
                backgroundColor: 'white',
                borderRadius: 6,
                marginRight: '5%',
                paddingTop: '4%',
                paddingLeft: '5%',
              }}>
              <Image source={require('../assets/images/spaces.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: '5%'}}>
                Library Spaces
              </Text>
              <Text style={{fontSize: 12, color: '#818181'}}>About here</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Resources')}
              style={{
                height: 135,
                width: '47.5%',
                backgroundColor: 'white',
                borderRadius: 6,
                paddingTop: '4%',
                paddingLeft: '5%',
              }}>
              <Image source={require('../assets/images/spaces.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: '5%'}}>
                Library Resources
              </Text>
              <Text style={{fontSize: 12, color: '#818181'}}>About here</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              marginTop: '4%',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Services')}
              style={{
                height: 135,
                width: '47.5%',
                backgroundColor: 'white',
                borderRadius: 6,
                marginRight: '5%',
                paddingTop: '4%',
                paddingLeft: '5%',
              }}>
              <Image source={require('../assets/images/spaces.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: '5%'}}>
                Library Services
              </Text>
              <Text style={{fontSize: 12, color: '#818181'}}>About here</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 135,
                width: '47.5%',
                backgroundColor: 'white',
                borderRadius: 6,
                paddingTop: '4%',
                paddingLeft: '5%',
                paddingBottom: "4%"
              }}>
              <Image source={require('../assets/images/spaces.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: '5%'}}>
                Shibboleth Remote Access
              </Text>
              <Text style={{fontSize: 12, color: '#818181'}}>About here</Text>
            </TouchableOpacity>
          </View>
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
    height: '23.5%',
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

const mapStatetoProps = state => {
  return {
    resUser: state.auth.resUser,
  };
};

const mapDispatchtoProps = dispatch => {
  return {};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeScreen);
