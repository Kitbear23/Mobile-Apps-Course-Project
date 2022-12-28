import UUID from 'uuid-js';
import _ from 'lodash';
import { constants } from '../actions/adventures';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_ADVENTURE'):
      const newList = {
        ...action.payload,
        listItems: [],
      }
      return [...state, newList];
    case constants.get('DELETE_ADVENTURE'):
      {
        const newState = _.cloneDeep(state);
        _.remove(newState, list => list.id===action.payload.listID)
        return newState;
      }
    case constants.get('MODIFY_ADVENTURE'):
      {
        const newState = _.cloneDeep(state);
        const updateList = {
          ...action.payload,
        }
        return [...newState, updateList];
      }
    default:
      return state;
  }
}