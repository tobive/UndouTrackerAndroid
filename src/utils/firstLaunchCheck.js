import { AsyncStorage } from 'react-native';

const HAS_LAUNCHED = 'hasLaunched';

function setAppLaunched() {
    AsyncStorage.setItem(HAS_LAUNCHED, 'true');    
}

export default async function firstLaunchCheck() {
    try {
        const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
        if (hasLaunched === null) {
            setAppLaunched();
            return false;
        }
        return true;
    } catch (err) {
        return false;
    }
}
