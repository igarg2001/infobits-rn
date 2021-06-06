import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import Hamburger from '../assets/svg/Hamburger';
import Profile from '../assets/svg/Profile';
import HomeCards from '../components/HomeCards';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import axios from '../apis/axiosInstance';
import {objtoarr} from '../utils/objtoarr';
import Carousel from 'react-native-snap-carousel';
import {Link} from '@react-navigation/native';

const HomeScreen = props => {
  const SLIDER_WIDTH = Dimensions.get('screen').width + 80;
  const ITEM_WIDTH = SLIDER_WIDTH * 0.7;
  const isCarousel = useRef(null);
  //props.navigation.navigate('Services');
  const [imagesData, setImagesData] = useState(null);
  let noticeEl = null;
  const noticeImageUrl =
    'http://library.bits-pilani.ac.in/uploads/notices/images/';
  const botwUrl = 'http://library.bits-pilani.ac.in/uploads/book_of_the_month/';
  const renderImageItem = ({item, index}) => {
    return (
      <Pressable
        onPress={item.link ? () => Linking.openURL(item.link) : null}
        style={{
          height: Dimensions.get('screen').height * 0.285,
          backgroundColor: 'white',
          borderRadius: 12,
          width: '94%',
          marginLeft: "-9.5%",
          paddingHorizontal: "2.5%",
          paddingVertical: "2.5%",
          elevation: 2,
          marginBottom: "3%"
        }}>
        {({pressed}) => (
          <Image
            source={{
              uri:
                item.type === 'notice'
                  ? noticeImageUrl + item.image
                  : botwUrl + item.image,
            }}
            style={{height: '100%', opacity: pressed ? 0.5 : 1}}
          />
        )}
      </Pressable>
    );
  };
  if (!imagesData) {
    noticeEl = (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: "100%",
        }}>
        <ActivityIndicator size="large" color="#339cde"/>
        <Text style={{marginTop: '2%', fontSize: 18}}>Getting notices...</Text>
      </View>
    );
  } else {
    noticeEl = (
      <Carousel
        layout="default"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        layoutCardOffset={2}
        ref={isCarousel}
        data={imagesData}
        keyExtractor={item => item.id}
        renderItem={renderImageItem}
        style={{marginBottom: "4%"}}
      />
    );
  }
  useEffect(() => {
    axios
      .get('apis/notices.php')
      .then(res => {
        //console.log(res.data.data);
        setImagesData(objtoarr(res.data.data));
      })
      .catch(err => console.log(err));
  }, []);
  console.log(noticeEl);
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
                style={{height: 42, width: 42}}
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
          <View style={{marginTop: '6%', marginHorizontal: '8%'}}>
            <Text style={{textAlign: 'right'}}>
              “Quote is a good way to fill spaces that can’t be used otherwise”
            </Text>
            <Text style={{textAlign: 'right', fontWeight: 'bold'}}>
              -Harshit
            </Text>
          </View>
        </View>
        <View style={{marginTop: '5%', width: '90%'}}>
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
              <Image
                source={require('../assets/images/resources.jpg')}
                style={{width: 52, height: 43}}
              />
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
              <Image
                source={require('../assets/images/services.jpg')}
                style={{width: 52, height: 43}}
              />
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
          style={{marginTop: '6%', width: "100%"}}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 22,
              textAlign: 'left',
              alignSelf: 'flex-start',
              marginLeft: "5%",
              marginBottom: "1%"
            }}>
            Notifications
          </Text>
            {noticeEl}
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
    height: '20%',
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
