import { 
    SAVE_WORKOUT, 
    OPEN_WORKOUT 
} from '../actions';

const initialState = {
    value: {},
    id: null
};

export default function editWorkout(state = initialState, action) {
    switch (action.type) {
        case SAVE_WORKOUT:
            return {
                ...state,
                value: action.data,
                id: action.id
            };
        case OPEN_WORKOUT:
            return {
                ...state,
                value: action.data,
                id: action.id
            };
        default:
            return state;
    }
}
