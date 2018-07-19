import React from 'react';
import { TabBarBottom, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SessionStack from './SessionStack';
import ExerciseStack from './ExerciseStack';
import ProgressStack from './ProgressStack';
import SettingsStack from './SettingsStack';

import { strings } from '../../locales/i18n';

// const navfunc = ({ navigation }) => ({
//   tabBarIcon: ({ focused, tintColor }) => {
//     const { routeName } = navigation.state;
//     let iconName;
//     if (routeName === 'Session') {
//        iconName = `ios-walk${focused ? '' : '-outline'}`;
//      // iconName = 'md-walk';
//     } else if (routeName === 'Exercise') {
//        iconName = `ios-bicycle${focused ? '' : '-outline'}`;
//      // iconName = 'md-bicycle';
//     } else if (routeName === 'Progress') {
//        iconName = `ios-calendar${focused ? '' : '-outline'}`;
//      // iconName = 'md-calendar';
//     } else if (routeName === 'Settings') {
//        iconName = `ios-settings${focused ? '' : '-outline'}`;
//      // iconName = 'md-settings';
//     }

//     return <Ionicons name={iconName} size={20} color={tintColor} />;
//   }
// });

const MainStack = TabNavigator(
  {
    Session: {
      screen: SessionStack,
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
    Exercise: {
      screen: ExerciseStack,
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
    Progress: {
      screen: ProgressStack,
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Session') {
          //  iconName = `ios-walk${focused ? '' : '-outline'}`;
         iconName = 'md-walk';
        } else if (routeName === 'Exercise') {
          //  iconName = `ios-bicycle${focused ? '' : '-outline'}`;
         iconName = 'md-bicycle';
        } else if (routeName === 'Progress') {
          //  iconName = `ios-calendar${focused ? '' : '-outline'}`;
         iconName = 'md-calendar';
        } else if (routeName === 'Settings') {
          //  iconName = `ios-settings${focused ? '' : '-outline'}`;
         iconName = 'md-settings';
        }

        return <Ionicons name={iconName} size={23} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      // bottomNavigationOptions: {
      //   labelColor: 'white',
      //   backgroundColor: '#37474F',
      //   rippleColor: 'white',
      //   // shifting: false,
      //   tabs: {
      //     Session: {
      //       barBackgroundColor: '#37474F',
      //       labelColor: 'white',
      //       iconColor: 'white'
      //     },
      //     Exercise: {
      //       barBackgroundColor: '#37474F',
      //       labelColor: 'white'
      //     },
      //     Progress: {
      //       barBackgroundColor: '#37474F',
      //       labelColor: 'white'
      //     },
      //     Settings: {
      //       barBackgroundColor: '#37474F',
      //       labelColor: 'white'
      //     }
      //   }
      // }
      style: {
        backgroundColor: '#37474F',
        flex: 0,
      },
      labelStyle: {
        fontSize: 9,
        margin: 0,
        padding: 0,        
      },
      showIcon: true,
      showLabel: true,
    },
    // tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default MainStack;
