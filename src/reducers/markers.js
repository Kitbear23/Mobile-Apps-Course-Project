import _ from 'lodash';
import { constants } from '../actions/markers';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_MARKER'):
        const newState = _.cloneDeep(state);
        const newMarker = {
            ...action.payload,
        }
        newState.push(newMarker);
        return newState;
    case constants.get('GET_MARKERS_DONE'):
        return action.payload;
    case constants.get('DELETE_MARKER'):
      {
        const newState = _.cloneDeep(state);
        _.remove(newState, marker => marker.id===action.payload.markerID)
        return newState;
      }
    default:
      return state;
  }
}