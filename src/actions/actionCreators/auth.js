import {AUTH, AUTH_FAIL, AUTH_SUCCESS, LOGOUT, SET_AUTH} from '../actionTypes';
import axios from '../../apis/axiosInstance';
import AsyncStorage from '@react-native-community/async-storage';

export const authStart = () => {
  return {
    type: AUTH,
  };
};

export const authSuccess = obj => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      resuser: obj,
    },
  };
};

export const authFailed = message => {
  return {
    type: AUTH_FAIL,
    message: message,
  };
};
export const auth = (value, user) => {
  return {
    type: SET_AUTH,
    value: value,
    user: user,
  };
};
export const login = (userId, password, navigate) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(`apis/login.php?username=${userId}&password=${password}`)
      .then(res => {
        console.log(res.data);
        if (res.data.success == 1 && res.data.data.length !== 0) {
          const obj = {
            userId: userId,
            password: password,
            email: res.data.data.email,
            name: res.data.data.name,
          };
          AsyncStorage.setItem('userDetails', JSON.stringify(obj))
            .then(res => {
              //navigate
              dispatch(authSuccess(obj));
            })
            .catch(err => console.log(err));
        } else {
          console.log(res.data.err_message);
          dispatch(authFailed(res.data.err_message));
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(authFailed('An error occurred while logging you in!'));
      });
  };
};

const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export const logout = () => {
  return dispatch => {
    AsyncStorage.removeItem('userDetails')
      .then(res => dispatch(logoutAction()))
      .catch(err => console.log(err));
  };
};
