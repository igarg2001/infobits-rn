import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Hamburger from '../../assets/svg/ArrowLeft';
import NavCard from '../../components/NavCard';
const Resources = props => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.lightHeader}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Hamburger />
            </TouchableOpacity>
            <Text style={{fontWeight: '700', fontSize: 18}}>
              Library Resources
            </Text>
            <View style={{flex: 0.3}}></View>
          </View>
        </View>
        <View style={{marginTop: '5%'}}></View>
        <View>
          <NavCard
            title="Online Catalogue"
            about="Provide book recommendations maybe in two lines"
          />
          <NavCard
            title="Online Dtabases"
            about="Provide book recommendations maybe in two lines"
          />
          <NavCard
            title="Question Papers"
            about="Provide book recommendations maybe in two lines"
          />
          <NavCard
            title="Instituitional Repository"
            about="Provide book recommendations maybe in two lines"
          />
          <NavCard
            title="e-Books"
            about="Provide book recommendations maybe in two lines"
          />
           <NavCard
            title="National Library"
            about="Provide book recommendations maybe in two lines"
          />
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

export default Resources;
