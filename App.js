import React from 'react';
import {ScrollView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import Routes from './routes';

import authReducer from './src/reducers/authReducer';

const App = props => {
  StatusBar.setBackgroundColor("#56bcfc")
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

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
  },
});
export default App;
