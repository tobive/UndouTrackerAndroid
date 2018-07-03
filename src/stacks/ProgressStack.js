import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainProgressContainer from '../containers/MainProgressContainer';
import HistoryContainer from '../containers/HistoryContainer';

const ProgressStack = StackNavigator(
  {
    MainProgress: { 
      screen: MainProgressContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
    History: { 
      screen: HistoryContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
  },
  {
    initialRouteName: 'MainProgress',
    
  }
);

export default ProgressStack;
