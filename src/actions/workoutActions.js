import { Alert } from 'react-native';
import { SAVE_NEW_WORKOUT, SAVE_WORKOUT,
        OPEN_WORKOUT, DELETE_WORKOUT } from './index';
import { strings } from '../../locales/i18n';

export function saveNewWorkoutSetData(data) {
  return storage.getIdsForKey('workout').then(ids => {
    let highestId = 1;
    if (ids.length !== 0) {
      let arrIndex = ids.map(id => {
        return parseInt(id.replace('wo-', ''));
      });
      highestId = Math.max(...arrIndex) + 1;
    }
    storage.save({
      key: 'workout',
      id: `wo-${highestId}`,
      data,
      expires: null
    });
    Alert.alert(
      strings('exercise.add_wo.alert_success'), 
      strings('exercise.add_wo.alert_success_info')
    );
    return {
        type: SAVE_NEW_WORKOUT,
        data,
        id: `wo-${highestId}`,
    };
  }).catch(err => {
    if (err.name === 'NotFoundError') {
      storage.save({
        key: 'workout',
        id: 'wo-1',
        data,
        expires: null
      });
      return {
          type: SAVE_NEW_WORKOUT,
          data,
          id: 'wo-1'
      };
    } else {
      alert(strings('exercise.add_wo.alert_save_fail'));
      return false;
    }
  });
}

export function saveWorkoutData(data, id) {
  storage.save({
    key: 'workout',
    data,
    id,
    expires: null
  });
  Alert.alert(
    strings('exercise.list_wo.alert_success'), 
    strings('exercise.list_wo.alert_save_success')
  );
  return {
    type: SAVE_WORKOUT,
    data,
    id
  };
}

export function openWorkout(id) {
  return storage.load({
    key: 'workout',
    id
  }).then(ret => {
    const data = ret;
    return {
      type: OPEN_WORKOUT,
      routeName: 'EditWorkout',
      data,
      id,
    };
  }).catch(err => {
    if (err.name === 'NotFoundError') {
      alert('Error Not FOund');
    } else {
      alert("application error! Please restart");
    }
    return {
      routeName: 'EditWorkout',
      type: OPEN_WORKOUT,
      id,
    };
  });
}

export function deleteWorkout(id) {
  storage.remove({
    key: 'workout',
    id
  }).catch(err => {
    if (err.name === 'NotFoundError') {
      alert('Error Not FOund');
    } else {
      alert('Errror deleting why !!!');
    }
  });
  return {
    type: DELETE_WORKOUT,
    id
  };
}
