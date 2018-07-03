import MainStack from '../stacks/MainStack';
import { 
    OPEN_ADDNEWEXERCISE, 
    OPEN_LISTEXERCISE, 
    OPEN_ADDWORKOUTSET,
    OPEN_LISTWORKOUT, 
    OPEN_EXERCISE, 
    OPEN_WORKOUT, 
    OPEN_LASTSESSION,
    OPEN_NEWSESSION,
    START_SESSION,
    OPEN_HISTORY,
    FINISH_SESSION,
    OPEN_SETTINGS_LANGUAGE,
    OPEN_SETTINGS_HISTORY,
    OPEN_SETTINGS_ABOUT
    } from '../actions';

const initialState = MainStack.router.getStateForAction(
    MainStack.router.getActionForPathAndParams('Session')
);

const goTo = (routeName, state) => {
    return MainStack.router.getStateForAction(
        MainStack.router.getActionForPathAndParams(routeName),
        state
    );
};

export default function navigation(state = initialState, action) {
    // const nextState = MainStack.router.getStateForAction(action, state);
    switch (action.type) {
        case OPEN_LASTSESSION:
            return goTo(action.routeName, state);
        case OPEN_NEWSESSION:
            return goTo(action.routeName, state);
        case START_SESSION:
            return goTo(action.routeName, state);
        case FINISH_SESSION:
            return goTo(action.routeName, state);
        case OPEN_ADDNEWEXERCISE:
            return goTo(action.routeName, state);
        case OPEN_LISTEXERCISE:
            return goTo(action.routeName, state);
        case OPEN_ADDWORKOUTSET:
            return goTo(action.routeName, state);
        case OPEN_LISTWORKOUT:
            return goTo(action.routeName, state);    
        case OPEN_EXERCISE:
            return goTo(action.routeName, state);
        case OPEN_WORKOUT:
            return goTo(action.routeName, state);
        case OPEN_HISTORY:
            return goTo(action.routeName, state);
        case OPEN_SETTINGS_LANGUAGE:
            return goTo(action.routeName, state); 
        case OPEN_SETTINGS_HISTORY:
            return goTo(action.routeName, state);
        case OPEN_SETTINGS_ABOUT:
            return goTo(action.routeName, state);
        default:
            // Return original state if nextState is null or undefined
            return MainStack.router.getStateForAction(action, state) || state;
    }    
}

