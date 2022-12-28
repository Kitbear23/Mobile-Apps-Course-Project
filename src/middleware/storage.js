
import AsyncStorage from '@react-native-community/async-storage';
import { constants } from '../actions/markers';

export default (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === constants.get('GET_MARKERS')) {
    AsyncStorage
      .getItem('@markers')
      .then((markersJson) => {
        let markers = [];
        if (markersJson) {
          markers = JSON.parse(markersJson);
        }
        store.dispatch({
          type: constants.get('GET_MARKERS_DONE'),
          payload: markers,
        });
      })
      .catch(console.log);
  } else if(action.type !== constants.get('GET_MARKERS_DONE')) {
    AsyncStorage
      .setItem('@markers', JSON.stringify(store.getState().markers))
      .catch(console.log)
  } else if (action.type === constants.get('GET_ADVENTURES')) {
    AsyncStorage
      .getItem('@adventures')
      .then((adventuresJson) => {
        let adventures = [];
        if (adventuresJson) {
            adventures = JSON.parse(adventuresJson);
        }
        store.dispatch({
          type: constants.get('GET_ADVENTURES_DONE'),
          payload: adventures,
        });
      })
      .catch(console.log);
  } else if(action.type !== constants.get('GET_ADVENTURES_DONE')) {
    AsyncStorage
      .setItem('@adventures', JSON.stringify(store.getState().adventures))
      .catch(console.log)
  } else if (action.type === constants.get('GET_GOALS')) {
    AsyncStorage
      .getItem('@goals')
      .then((goalsJson) => {
        let goals = [];
        if (goalsJson) {
            goals = JSON.parse(goalsJson);
        }
        store.dispatch({
          type: constants.get('GET_GOALS_DONE'),
          payload: goals,
        });
      })
      .catch(console.log);
  } else if(action.type !== constants.get('GET_GOALS_DONE')) {
    AsyncStorage
      .setItem('@goals', JSON.stringify(store.getState().goals))
      .catch(console.log)
  }
  return result;
}