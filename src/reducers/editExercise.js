import { 
    SAVE_EXERCISE, 
    OPEN_EXERCISE, 
    ADD_ANOTHER_COUNTER 
} from '../actions';

const initialState = {
    value: {},
    id: null
};

export default function editExercise(state = initialState, action) {
    switch (action.type) {
        case SAVE_EXERCISE:
            return {
                ...state,
                value: action.data,
                id: action.id
            };
        case ADD_ANOTHER_COUNTER:
            return {
                ...state,
                value: action.data,
            };
        case OPEN_EXERCISE:
            return {
                ...state,
                value: action.data,
                id: action.id
            };
        default:
            return state;
    }
}
