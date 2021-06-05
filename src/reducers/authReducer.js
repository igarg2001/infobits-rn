import {
  AUTH,
  AUTH_FAIL,
  AUTH_SUCCESS,
  CREATE_ACC,
  CREATE_ACC_FAIL,
  CREATE_ACC_SUCCESS,
  LOGOUT,
  SET_AUTH,
  SET_ERROR,
} from '../actions/actionTypes';

const initialState = {
  isAuth: null,
  loading: false,
  resUser: null,
  error: {
    value: false,
    message: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        resUser: action.payload.resUser,
      };
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        isAuth: false,
        resUser: null,
        error: {
          value: true,
          message: action.message,
        },
      };
    case SET_AUTH: {
      return {
        ...state,
        isAuth: action.value,
        resUser: action.user,
      };
    }
    case CREATE_ACC:
      // console.log('hey');
      return {
        ...state,
        loading: true,
      };
    case CREATE_ACC_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
      };
    case CREATE_ACC_FAIL:
      return {
        ...state,
        loading: false,
        isAuth: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        resUser: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          value: action.value,
          message: action.message,
        },
      };
    default:
      return state;
  }
};

export default reducer;
