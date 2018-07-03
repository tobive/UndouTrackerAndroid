import { 
    FINISH_SESSION, 
    DELETE_SESSION_HISTORY 
} from '../actions';

const initialState = {

};

export default function listSession(state = initialState, action) {
    switch (action.type) {
        case FINISH_SESSION:
            return {
                ...state,
                listSessions: state.listSessions.concat(action.data),
                listDates: state.listDates.concat(action.sessionDate),
            };
        case DELETE_SESSION_HISTORY:
            return {
                ...state,
                listSessions: [],
                listDates: [],
            };
        default:
            return state;
    }
}
