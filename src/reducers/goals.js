import UUID from 'uuid-js';
import _ from 'lodash';
import { constants } from '../actions/goals';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_GOAL'):
      const newState = _.cloneDeep(state);
      const newGoal = {
          ...action.payload,
          completed: false
      }
      
      return [...newState, newGoal];
    case constants.get('GET_GOALS_DONE'):
      return action.payload;
    case constants.get('DELETE_GOAL'):
      {
        const newState = _.cloneDeep(state);
        _.remove(goal => goal.id===action.payload.goalID)
        return newState;
      }
      case constants.get('MODIFY_GOAL'):
      {
        const newState = _.cloneDeep(state);
        const updateGoal = {
          ...action.payload,
        }
        return [...newState, updateGoal];
      }
    default:
      return state;
  }
}