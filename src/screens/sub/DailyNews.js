import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import axios from '../../apis/axiosInstance';
import {objtoarr} from '../../utils/objtoarr';
import BackIcon from '../../assets/svg/ArrowLeft';
import SearchIcon from '../../assets/svg/Search';
import NewsItem from '../../assets/svg/NewsItem';
import {connect} from 'react-redux';

const DailyNews = props => {
  const [loaded, setLoaded] = useState(false);
  const [newsItems, setNewsItems] = useState([
    {
      date: '12/12/2020',
      title: 'This is a news heading',
      newspaper: 'Times of India',
      url: 'https://m.timesofindia.com',
    },
  ]);
  console.log(newsItems[0]);
  useEffect(() => {
    axios
      .get(
        `apis/daily_news.php?username=${props.resUser.userId}&password=${props.resUser.password}&action=update`,
      )
      .then(res => {
        console.log('hi');
        const obj = res.data.data;
        console.log(res.data);
        setNewsItems(objtoarr(obj));
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);
  let newsList = null;
  if (!loaded)
    newsList = (
      <Text style={{marginTop: '32%', fontSize: 18, fontWeight: '600'}}>
        Fetching news...
      </Text>
    );
  if (loaded && newsItems.length === 0)
    newsList = (
      <Text style={{marginTop: '32%', fontSize: 18, fontWeight: '600'}}>
        No headlines found
      </Text>
    );
  if (loaded && newsItems.length !== 0)
    newsList = (
      <FlatList
        style={{width: '100%', display: 'flex', marginBottom: '8%'}}
        data={newsItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            key={item.id}
            style={{width: '100%', marginBottom: '8%', marginLeft: '7.5%'}}>
            <NewsItem
              date={item.date}
              title={item.title}
              newspaper={item.newspaper}
              url={item.url}
            />
          </View>
        )}
      />
    );

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.headerContent}>
          <Pressable
            android_ripple={{color: '#bcbcbc'}}
            onPress={() => props.navigation.goBack()}>
            <BackIcon />
          </Pressable>
          <Text style={{fontSize: 18, fontWeight: '700'}}>Daily News</Text>
          <Pressable>
            <SearchIcon color="#000" fill="#000" />
          </Pressable>
        </View>
        <View style={styles.listCont}>{newsList}</View>
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

const mapStatetoProps = state => {
  return {
    resUser: state.auth.resUser,
  };
};

const mapDispatchtoProps = dispatch => {
  return {};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(DailyNews);
