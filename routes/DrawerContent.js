import AsyncStorage from '@react-native-community/async-storage';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import AvatarIcon from '../src/assets/svg/Avatar';

const DrawerContent = props => {
  console.log(props.resUser);
  const [user, getUser] = useState({
    name: 'name',
    email: 'email',
  });
  const [dp, setDp] = useState('dp');
  useEffect(() => {
    AsyncStorage.getItem('userDetails').then(res => {
      const json = JSON.parse(res);
      getUser({
        name: json.name,
        email: json.email,
      });
    });
  }, []);

  console.log(AvatarIcon);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <View
        style={{width: '100%', height: '100%', position: 'absolute', top: 0}}>
        <Pressable
          android_ripple={{color: '#cee8f0'}}
          style={style.profileWrapper}
          onPress={() => props.navigation.navigate('Profile')}>
          <View style={style.avatar}>
            <View style={{position: 'absolute', top: 0}}>
              <AvatarIcon width="100%" />
            </View>
          </View>
          <View style={style.details}>
            <Text style={{fontSize: 22, fontWeight: '500'}}>{user.name}</Text>
            <Text>{user.email}</Text>
          </View>
        </Pressable>
        <DrawerItem
          onPress={() => props.navigation.navigate('News')}
          label="Daily News"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: 4}}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('lnf')}
          label="Lost and Found"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: -4}}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('afa')}
          label="Ask for Articles"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: -4}}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('pf')}
          label="Periodical Finder"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: -4}}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('cwl')}
          label="Connect with Library"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: -4}}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('sra')}
          label="Shibboleth Remote Access"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: -4}}
        />
        <View style={style.lineBreak}></View>
        <DrawerItem
          onPress={() => props.navigation.navigate('ebooks')}
          label="e-Books"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: -4}}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('opac')}
          label="WEB OPAC"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: -4}}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('ir')}
          label="Institutional Repository"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: -4}}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('qp')}
          label="Question Papers"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: -4}}
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('od')}
          label="Online Databases"
          labelStyle={{fontSize: 18, color: '#34354d'}}
          icon={() => <View style={style.drawerIcon}></View>}
          style={{marginTop: -4}}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '12%',
            position: 'relative',
            bottom: 0,
            marginTop: '2%',
          }}>
          <View style={{width: '33%', backgroundColor: '#75c3e8'}}></View>
          <View style={{width: '33%', backgroundColor: '#ed1c24'}}></View>
          <View style={{width: '34%', backgroundColor: '#faca2c'}}></View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  profileWrapper: {
    width: '100%',
    backgroundColor: '#80ceff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: '8%',
    paddingBottom: '4%',
    paddingHorizontal: '4%',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 52,
    backgroundColor: '#f2f2f2',
  },
  drawerIcon: {
    width: 32,
    height: 32,
    borderRadius: 3,
    backgroundColor: '#c4c4c4',
  },
  lineBreak: {
    height: 0,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.25)',
    width: '100%',
    marginVertical: 8,
  },
});

export default DrawerContent;
