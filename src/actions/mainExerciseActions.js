import {
    OPEN_ADDNEWEXERCISE,
    OPEN_ADDWORKOUTSET,
    OPEN_LISTEXERCISE,
    OPEN_LISTWORKOUT
} from './types';

export function openAddNewExercise() {
    return {
        type: OPEN_ADDNEWEXERCISE,
        routeName: 'AddNewExercise'
    };
}

export function openAddWorkoutSet() {
    return {
        type: OPEN_ADDWORKOUTSET,
        routeName: 'AddWorkoutSet',
    };
}

export function openListExercise() {
    return {
        type: OPEN_LISTEXERCISE,
        routeName: 'ListExercise'
    };
}

export function openListWorkout() {
    return {
        type: OPEN_LISTWORKOUT,
        routeName: 'ListWorkout'
    };
}
