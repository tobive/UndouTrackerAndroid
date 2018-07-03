import { 
    DELETE_SESSION_HISTORY, 
    CHANGE_LANGUAGE, 
    OPEN_SETTINGS_LANGUAGE, 
    OPEN_SETTINGS_HISTORY,
    OPEN_SETTINGS_ABOUT
} from './types';
import { strings } from '../../locales/i18n';

export function openSettingsLanguage() {
    return {
        type: OPEN_SETTINGS_LANGUAGE,
        routeName: 'LanguageSettings',
    };
}

export function openSettingsHistory() {
    return {
        type: OPEN_SETTINGS_HISTORY,
        routeName: 'HistorySettings',
    };
}

export function openSettingsAbout() {
    return {
        type: OPEN_SETTINGS_ABOUT,
        routeName: 'AboutSettings',
    };
}

export function changeLanguage(lang) {
    storage.save({
        key: 'language',
        data: lang,
        expires: null
    });
    alert(strings('settings.language.alert_restart'));
    return {
        type: CHANGE_LANGUAGE,
        currLang: lang,
    };
}

export function deleteSessionHistory() {
    storage.clearMapForKey('session');
    alert('HISTORY HAS BEEN DELETED');
    return {
        type: DELETE_SESSION_HISTORY,        
    };
}
