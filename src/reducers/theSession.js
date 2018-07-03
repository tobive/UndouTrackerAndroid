import { 
    START_SESSION, 
    FINISH_SESSION 
} from '../actions';

const initialState = {
    data: null
};

export default function theSession(state = initialState, action) {
    switch (action.type) {
        case START_SESSION:
            return {
                ...state,
                data: action.data
            };
        case FINISH_SESSION:
            return {
                ...state,
            };
        default:
            return state;
    }
}
