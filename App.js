import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import configureStore from './src/store';
import MainStackContainer from './src/containers/MainStackContainer';

const store = configureStore();

export default class App extends Component {

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
    // SplashScreen.hide();
  }

  render() {
    return (      
      <Provider store={store}>
        <MainStackContainer />
      </Provider>
    );
  }
}
