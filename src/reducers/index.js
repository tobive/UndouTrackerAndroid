import { combineReducers } from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import SaveNewExerciseReducer from './saveNewExercise';
import EditExerciseReducer from './editExercise';
import ListExerciseReducer from './listExercise';
import SaveNewWorkoutReducer from './saveNewWorkout';
import ListWorkoutReducer from './listWorkout';
import EditWorkoutReducer from './editWorkout';
import NavigationReducer from './navigation';
import TheSessionReducer from './theSession';
import ListSessionReducer from './listSession';
import SettingsReducer from './settings';
import LanguageReducer from './language';

const rootReducer = asyncInitialState.outerReducer(combineReducers({
    saveNewExercise: SaveNewExerciseReducer,
    editExercise: EditExerciseReducer,
    listExercise: ListExerciseReducer,
    saveNewWorkout: SaveNewWorkoutReducer,
    listWorkout: ListWorkoutReducer,
    editWorkout: EditWorkoutReducer,
    nav: NavigationReducer,
    asyncInitialState: asyncInitialState.innerReducer,
    theSession: TheSessionReducer,
    listSession: ListSessionReducer,
    settings: SettingsReducer,
    language: LanguageReducer,
}));

export default rootReducer;
