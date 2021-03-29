import {AUTH, AUTH_FAIL, AUTH_SUCCESS, SET_AUTH} from '../actionTypes';

export const authStart = () => {
  return {
    type: AUTH,
  };
};

export const authSuccess = userDetails => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      resUser: userDetails,
    },
  };
};

export const authFailed = () => {
  return {
    type: AUTH_FAIL,
  };
};
export const auth = value => {
  console.log('auth');
  return {
    type: SET_AUTH,
    value: value,
  };
};
