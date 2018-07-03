import { DELETE_SESSION_HISTORY } from '../actions';

const initialState = {};

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_SESSION_HISTORY:
            return {
                ...state,
            };
        default:
            return state;
    }
}
