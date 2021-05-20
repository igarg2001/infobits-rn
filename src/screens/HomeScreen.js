import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Hamburger from '../assets/svg/Hamburger';
import Profile from '../assets/svg/Profile';
import HomeCards from '../components/HomeCards';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const HomeScreen = props => {
  //props.navigation.navigate('Services');
  const notices = [
    {
      id: 1,
      // url: require('../assets/images/notices/1.jpg'),
    },

    {
      id: 2,
      // url: require('../assets/images/notices/2.jpg'),
    },
    {
      id: 3,
      // url: require('../assets/images/notices/3.jpg'),
    },
    {
      id: 4,
      // url: require('../assets/images/notices/4.jpg'),
    },
    {
      id: 5,
      // url: require('../assets/images/notices/5.jpg'),
    },
    {
      id: 6,
      // url: require('../assets/images/notices/6.jpg'),
    },
  ];
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.lightHeader}>
          <View style={styles.headerContent}>
            <Pressable
              android_ripple={{color: '#bcbcbc'}}
              onPress={() => props.navigation.toggleDrawer()}>
              <Hamburger />
            </Pressable>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/images/infobits.png')}
                style={{height: 56, width: 56}}
              />
            </View>
            <Pressable
              android_ripple={{color: '#bcbcbc'}}
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
            </Pressable>
          </View>
          <View style={{marginTop: '8%', marginHorizontal: '8%'}}>
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
            <Pressable
              android_ripple={{color: '#bcbcbc'}}
              onPress={() => props.navigation.navigate('Spaces')}
              style={{
                height: 135,
                width: '47.5%',
                backgroundColor: 'white',
                borderRadius: 6,
                marginRight: '5%',
                paddingTop: '4%',
                paddingLeft: '5%',
                elevation: 8,
              }}>
              <Image source={require('../assets/images/spaces.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: '5%'}}>
                Library Spaces
              </Text>
              <Text style={{fontSize: 12, color: '#818181'}}>About here</Text>
            </Pressable>
            <Pressable
              android_ripple={{color: '#bcbcbc'}}
              onPress={() => props.navigation.navigate('Resources')}
              style={{
                height: 135,
                width: '47.5%',
                backgroundColor: 'white',
                borderRadius: 6,
                paddingTop: '4%',
                paddingLeft: '5%',
                elevation: 8,
              }}>
              <Image source={require('../assets/images/spaces.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: '5%'}}>
                Library Resources
              </Text>
              <Text style={{fontSize: 12, color: '#818181'}}>About here</Text>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              marginTop: '4%',
            }}>
            <Pressable
              android_ripple={{color: '#bcbcbc'}}
              onPress={() => props.navigation.navigate('Services')}
              style={{
                height: 135,
                width: '47.5%',
                backgroundColor: 'white',
                borderRadius: 6,
                marginRight: '5%',
                paddingTop: '4%',
                paddingLeft: '5%',
                elevation: 8,
              }}>
              <Image source={require('../assets/images/spaces.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: '5%'}}>
                Library Services
              </Text>
              <Text style={{fontSize: 12, color: '#818181'}}>About here</Text>
            </Pressable>
            <Pressable
              android_ripple={{color: '#bcbcbc'}}
              style={{
                height: 135,
                width: '47.5%',
                backgroundColor: 'white',
                borderRadius: 6,
                paddingTop: '4%',
                paddingLeft: '5%',
                paddingBottom: '4%',
                elevation: 8,
              }}>
              <Image source={require('../assets/images/spaces.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: '5%'}}>
                Shibboleth Remote Access
              </Text>
              <Text style={{fontSize: 12, color: '#818181'}}>About here</Text>
            </Pressable>
          </View>
        </View>
        <ScrollView
          style={{alignSelf: 'flex-start', marginTop: '8%', marginLeft: '5%'}}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 22,
              textAlign: 'left',
              alignSelf: 'flex-start',
            }}>
            Notifications
          </Text>
          <View style={{flex: 1}}>
            <FlatList
              horizontal
              data={notices}
              keyExtractor={i => i.id}
              renderItem={({item}) => (
                <View style={{width: '90%', backgroundColor: 'white'}}></View>
              )}
            />
          </View>
        </ScrollView>
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
