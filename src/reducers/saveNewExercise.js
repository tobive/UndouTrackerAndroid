import { 
    SAVE_NEW_EXERCISE, 
    ADD_ANOTHER_COUNTER, 
    OPEN_ADDNEWEXERCISE 
} from '../actions';

const initialState = {
    exerciseName: '',
    reps: false,
    sets: false,
};

export default function saveNewExercise(state = initialState, action) {
    switch (action.type) {
        case OPEN_ADDNEWEXERCISE:
            return initialState;
        case SAVE_NEW_EXERCISE:
            return {
                ...state,
                exerciseName: '',
                reps: false,
                sets: false
            };
        case ADD_ANOTHER_COUNTER:
            return {
                ...action.data,
            };
        default:
            return state;
    }
}
