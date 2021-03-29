import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useState} from 'react';
import LoginRoutes from './LoginRoutes';
import SecureRoutes from './SecureRoutes';
import {auth} from '../src/actions/actionCreators/auth';
import {connect} from 'react-redux';

const Routes = props => {
  let token = null;
  const [loaded, setLoaded] = useState(false);
  AsyncStorage.getItem('token')
    .then(res => {
      token = res;
      //props.auth(!!token);
      setTimeout(() => setLoaded(true), 1000);
    })
    .catch(err => console.log(err));
  const navCont = props.isAuth ? <SecureRoutes /> : <LoginRoutes />;
  return navCont;
};

const mapStatetoProps = state => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchtoProps = dispatch => {
  return {
    auth: value => dispatch(auth(value)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Routes);
