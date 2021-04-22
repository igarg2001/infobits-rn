import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Hamburger from '../../assets/svg/ArrowLeft';
import NavCard from '../../components/NavCard';
const Resources = props => {
  const items = [
    {
      title: 'Online Catalogue',
      about: 'Provide book recommendations maybe in two lines',
    },
    {
      title: 'Online Databases',
      about: 'Provide book recommendations maybe in two lines',
    },
    {
      title: 'Question Papers',
      about: 'Provide book recommendations maybe in two lines',
    },
    {
      title: 'Institutional Repository',
      about: 'Provide book recommendations maybe in two lines',
    },
    {
      title: 'e-Books',
      about: 'Provide book recommendations maybe in two lines',
    },
    {
      title: 'National Library',
      about: 'Provide book recommendations maybe in two lines',
    },
  ];
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
export default Resources;
