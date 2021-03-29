import {
  AUTH,
  AUTH_FAIL,
  AUTH_SUCCESS,
  CREATE_ACC,
  CREATE_ACC_FAIL,
  CREATE_ACC_SUCCESS,
  SET_AUTH,
} from '../actions/actionTypes';

const initialState = {
  isAuth: null,
  loading: false,
  resUser: null,
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
      };
    case SET_AUTH: {
      return {
        ...state,
        isAuth: action.value,
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
    default:
      return state;
  }
};

export default reducer;
