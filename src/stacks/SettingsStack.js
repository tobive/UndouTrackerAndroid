import React from 'react';
import { StackNavigator } from 'react-navigation';
import SettingsContainer from '../containers/SettingsContainer';
import LanguageSettingsContainer from '../containers/LanguageSettingsContainer';
import HistorySettingsContainer from '../containers/HistorySettingsContainer';
import AboutSettingsContainer from '../containers/AboutSettingsContainer';

const SettingsStack = StackNavigator(
  {
    MainSettings: { 
      screen: SettingsContainer,
      navigationOptions: {
        headerBackTitle: ' ',
      }, 
    },
    LanguageSettings: {
      screen: LanguageSettingsContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      }, 
    },
    HistorySettings: { 
      screen: HistorySettingsContainer,
      navigationOptions: {
        headerBackTitle: ' ',
      }, 
    },
    AboutSettings: { 
      screen: AboutSettingsContainer,
      navigationOptions: {
        headerBackTitle: ' ',
      },  
    },
  },
  {
    initialRouteName: 'MainSettings',    
  }
);

export default SettingsStack;
