import { OPEN_HISTORY } from './types';

export function openHistory() {
    return {
        type: OPEN_HISTORY,
        routeName: 'History',
    };
}
