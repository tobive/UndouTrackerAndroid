import { 
    SAVE_NEW_WORKOUT, 
    OPEN_ADDWORKOUTSET 
} from '../actions';

const initialState = {
   data: {
    workoutName: '',
    exercises: [],
   }, 
};

export default function saveNewWorkout(state = initialState, action) {
    switch (action.type) {
        case OPEN_ADDWORKOUTSET:
            return {
                ...state,
            };
        case SAVE_NEW_WORKOUT:
            return {
                ...state,
                data: {
                    workoutName: '',
                    exercises: [],
                },
            };
        default:
            return state;
    }
}
