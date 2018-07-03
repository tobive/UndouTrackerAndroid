import { CHANGE_LANGUAGE } from '../actions';
import lang from '../../locales/lang';

const initialState = {
    current: 'en',
    languages: lang,
};

export default function language(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                current: action.currLang
            };
        default:
            return state;
    }
}
