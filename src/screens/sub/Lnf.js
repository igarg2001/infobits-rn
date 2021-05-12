import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import BackIcon from '../../assets/svg/ArrowLeft';
import FilterIcon from '../../assets/svg/Filter';
import LnfItem from '../../assets/svg/LnfItem';
import axios from '../../apis/axiosInstance';
import {objtoarr} from '../../utils/objtoarr';
import {set} from 'react-native-reanimated';
import {connect} from 'react-redux';

const Lnf = props => {
  const user = props.resUser;
  const username = user.userId;
  const password = user.password;
  console.log(username, password)
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`apis/get_all_items.php?username=${username}&password=${password}`)
      .then(res => {
        console.log(res.data)
        setItems(objtoarr(res.data.data).reverse());
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const itemsList = loaded ? (
    <FlatList
      style={{width: '100%', display: 'flex', marginBottom: '8%'}}
      data={items}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View
          key={item.id}
          style={{width: '100%', marginBottom: '8%', marginLeft: '7.5%'}}>
          <LnfItem
            date={item.date}
            item={item.particulars}
            brand={item.brand}
            place={item.time}
          />
        </View>
      )}
    />
  ) : (
    <Text style={{marginTop: '32%', fontSize: 18, fontWeight: '600'}}>
      Fetching items....
    </Text>
  );

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
          <Text style={{fontSize: 18, fontWeight: '700'}}>Lost and Found</Text>
          <TouchableOpacity>
            <FilterIcon color="#000" fill="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.listCont}>
          {itemsList}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContent: {
    marginTop: '10%',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  listCont: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10%',
    justifyContent: 'center',
    width: '100%',
  },
});

const mapStatetoProps = state => ({
  resUser: state.auth.resUser,
});

export default connect(mapStatetoProps)(Lnf);
