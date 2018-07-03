import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainSessionContainer from '../containers/MainSessionContainer';
import NewSessionContainer from '../containers/NewSessionContainer';
import LastSessionContainer from '../containers/LastSessionContainer';
import TheSessionContainer from '../containers/TheSessionContainer';

import { strings } from '../../locales/i18n';

const SessionStack = StackNavigator(
  {
    MainSession: { 
      screen: MainSessionContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
    NewSession: { 
      screen: NewSessionContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
    LastSession: { 
      screen: LastSessionContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
    TheSession: { 
      screen: TheSessionContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
  },
  {
    initialRouteName: 'MainSession',
  }
);

export default SessionStack;
