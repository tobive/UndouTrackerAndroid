import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainExerciseContainer from '../containers/MainExerciseContainer';
import AddNewWorkoutContainer from '../containers/AddNewWorkoutContainer';
import ListWorkoutContainer from '../containers/ListWorkoutContainer';
import EditWorkoutContainer from '../containers/EditWorkoutContainer';
import ListExerciseContainer from '../containers/ListExerciseContainer';
import EditExerciseContainer from '../containers/EditExerciseContainer';
import AddNewExerciseContainer from '../containers/AddNewExerciseContainer';

const ExerciseStack = StackNavigator(
  {
    MainExercise: { 
      screen: MainExerciseContainer,
      navigationOptions: {
        headerBackTitle: ' ',
      }, 
    },

    // Workout Stack
    AddWorkoutSet: { 
      screen: AddNewWorkoutContainer,
      navigationOptions: {
        headerBackTitle: ' ',
      }, 
    },
    ListWorkout: { 
      screen: ListWorkoutContainer,
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
    EditWorkout: { 
      screen: EditWorkoutContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },

    // Exercises Stack
    AddNewExercise: { 
      screen: AddNewExerciseContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
    ListExercise: { 
      screen: ListExerciseContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
    EditExercise: { 
      screen: EditExerciseContainer, 
      navigationOptions: {
        headerBackTitle: ' ',
      },
    },
  },
  {
    initialRouteName: 'MainExercise',
    
  }
);

export default ExerciseStack;
