import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useState} from 'react';
import LoginRoutes from './LoginRoutes';
import SecureRoutes from './SecureRoutes';
import {auth} from '../src/actions/actionCreators/auth';
import {connect} from 'react-redux';
import AnimatedSplash from 'react-native-animated-splash-screen';
import SplashScreen from './SplashScreen';

const Routes = props => {
  let token = null;
  const [loaded, setLoaded] = useState(false);
  AsyncStorage.getItem('userDetails')
    .then(res => {
      token = res ? JSON.parse(res) : null;
      props.auth(!!token, token);
      setTimeout(() => setLoaded(true), 450);
      // setLoaded(true);
    })
    .catch(err => console.log(err));
  const navCont = props.isAuth ? <SecureRoutes /> : <LoginRoutes />;
  return (
    <AnimatedSplash
      isLoaded={loaded}
      backgroundColor="#56bcfc"
      translucent={false}
      customComponent={<SplashScreen />}>
      {navCont}
    </AnimatedSplash>
  );
};

const mapStatetoProps = state => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchtoProps = dispatch => {
  return {
    auth: (value, user) => dispatch(auth(value, user)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Routes);
