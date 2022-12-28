import { createStore, combineReducers, applyMiddleware } from 'redux';
import markers from '../reducers/markers';
import adventures from '../reducers/adventures';
import goals from '../reducers/goals';
import idAssigner from '../middleware/id_assigner';
import storage from '../middleware/storage';

export default createStore(
  combineReducers({
    markers,
    adventures,
    goals,
  }),
  applyMiddleware(
    idAssigner,
    storage,
  ),
);