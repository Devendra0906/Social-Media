/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import PatientList from './src/screens/PatientList/index';
import {name as appName} from './app.json';
import React, {Component, useEffect} from 'react';
// import redux components
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/__Redux/__reducers/rootReducer';
import KotlinVideoStream from './bridge';
import patientReducer from './src/__Redux/__reducers/patientReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const socialApp = () => {
  useEffect(() => {
    console.log(KotlinVideoStream);
    try {
      KotlinVideoStream.playVideoStream();
    } catch (error) {
      console.log('error is', error);
    }
  }, []);
  // console.log('store', store.getState(), PatientReducer);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => socialApp);
