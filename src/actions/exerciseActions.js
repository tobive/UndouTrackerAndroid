import { Alert } from 'react-native';
import { SAVE_NEW_EXERCISE, ADD_ANOTHER_COUNTER, SAVE_EXERCISE,
        OPEN_EXERCISE, DELETE_EXERCISE } from './types';
import { strings } from '../../locales/i18n';

export function saveNewExerciseData(data) {
  return storage.getIdsForKey('exercise').then(ids => {
      const backupData = Object.assign({}, data);
      let highestId = 1;
      if (ids.length !== 0) {
        const arrIndex = ids.map(id => {
          return parseInt(id.replace('ex-', ''));
        });
        highestId = Math.max(...arrIndex) + 1;
      }
      storage.save({
        key: 'exercise',
        id: `ex-${highestId}`,
        data,
        expires: null
      });
      Alert.alert(
        strings('exercise.add_ex.alert_success'), 
        strings('exercise.add_ex.alert_success_info')
      );
      return {
        type: SAVE_NEW_EXERCISE,
        payload: backupData,
        id: `ex-${highestId}`
      };
    }).catch(err => {
      if (err.name === 'NotFoundError') {
        storage.save({
          key: 'exercise',
          id: 'ex-1',
          data,
          expires: null
        });
        return {
          type: SAVE_NEW_EXERCISE,
          payload: data,
          id: 'ex-1'
        };
      } else {
        alert(strings('exercise.add_ex.alert_save_fail'));
        return false;
      }
    });
}
  
export function addAnotherCounter(data) {
  return {
    type: ADD_ANOTHER_COUNTER,
    data,
  };
}

export function saveExerciseData(data, id) {
  storage.save({
    key: 'exercise',
    data,
    id,
    expires: null
  });
  Alert.alert(
    strings('exercise.list_ex.alert_success'), 
    strings('exercise.list_ex.alert_save_success')
  );
  return {
    type: SAVE_EXERCISE,
    data,
    id
  };
}

export function openExercise(id) {
  return storage.load({
    key: 'exercise',
    id
  }).then(ret => {
    const data = ret;
    return {
      type: OPEN_EXERCISE,
      routeName: 'EditExercise',
      data,
      id,
    };
  }).catch(err => {
    if (err.name === 'NotFoundError') {
      alert('Error Not FOund');
    } else {
      alert('application error! Please restart');
    }
    return {
      routeName: 'EditExercise',
      type: OPEN_EXERCISE,
      id,
    };
  });
}

export function deleteExercise(id) {
  storage.remove({
    key: 'exercise',
    id
  }).catch(err => {
    if (err.name === 'NotFoundError') {
      alert('Error Not FOund');
    } else {
      alert('Errror deleting why !!!');
    }
  });
  return {
    type: DELETE_EXERCISE,
    id
  };
}
