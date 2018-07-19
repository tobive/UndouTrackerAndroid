import { LocaleConfig } from 'react-native-calendars';
import I18n from '../../locales/i18n';
import lang from '../../locales/lang';

const loadStorageLanguage = (currentState) => {
    return new Promise(resolve => {
        // Default language
        const resultState = { current: 'en', languages: lang['en'] };
        try {
            storage.load({ key: 'language' }).then(resData => {
                resultState.current = resData;
                resultState.languages = lang[resData];
                // Set as local language
                I18n.locale = resData;
                LocaleConfig.defaultLocale = I18n.locale;
                resolve({
                    ...currentState,
                    language: resultState
                });
            }).catch(err => {
                // alert("FAIL LOAD LANGUAGE");
                resolve({
                    ...currentState,
                    language: resultState
                });
            });
        } catch (err) {
            alert(err);
            resolve({
                ...currentState,
                language: resultState
            });
        }
    });
}

export default loadStorageLanguage;
