import { Alert } from 'react-native';
import { OPEN_LASTSESSION, OPEN_NEWSESSION, 
    START_SESSION, FINISH_SESSION } from './types';
import { strings } from '../../locales/i18n';

export function openLastSession() {
  return {
      type: OPEN_LASTSESSION,
      routeName: 'LastSession',
  };
}

export function openNewSession() {
  return {
      type: OPEN_NEWSESSION,
      routeName: 'NewSession',
  };
}

export function startSession(workoutId) {
  return storage.load({
      key: 'workout',
      id: workoutId
    }).then(ret => {
      const data = ret;
      return {
          type: START_SESSION,
          routeName: 'TheSession',
          data,
      };
    }).catch(err => {
      if (err.name === 'NotFoundError') {
        alert('Error Not FOund');
      } else {
        alert('application error! Please restart');
      }
      return false;
    });
}

export function finishSession(value) {
  const data = { ...value };
  const date = new window.Date();
  data.fullDate = date.toLocaleString();
  data.date = date.toISOString().split('T')[0];
  return storage.getIdsForKey('session').then(ids => {
      let highestId = 1;
      if (ids.length !== 0) {
        let arrIndex = ids.map(id => {
          return parseInt(id.replace('se-', ''));
        });
        highestId = Math.max(...arrIndex) + 1;
      }
      storage.save({
        key: 'session',
        id: `se-${highestId}`,
        data,
        expires: null
      });
      Alert.alert(strings('session.the.finish_title'), strings('session.the.finish_message'));
      return {
          type: FINISH_SESSION,
          routeName: 'Session',
          data,
          sessionDate: data.date,
          id: `se-${highestId}`,
      };
    }).catch(err => {
      if (err.name === 'NotFoundError') {
        storage.save({
          key: 'session',
          id: 'se-1',
          data,
          expires: null
        });
        return {
            type: FINISH_SESSION,
            routeName: 'Session',
            data,
            sessionDate: data.date,
            id: 'se-1'
        };
      } else {
        alert("Save error!");
        return false;
      }
    });
}
