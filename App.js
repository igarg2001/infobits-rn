import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import Routes from './routes';

import authReducer from './src/reducers/authReducer';


const App = props => {
  const reducer = combineReducers({
    auth: authReducer,
  });
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
