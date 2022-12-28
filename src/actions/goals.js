import Constants from './constants'

export const constants = new Constants({
  CREATE_GOAL: 'CREATE_GOAL',
  GET_GOALS_DONE: 'GET_GOALS_DONE',
  TOGGLE_GOAL: 'TOGGLE_GOAL',
  DELETE_GOAL: 'DELETE_GOAL',
  MODIFY_GOAL: 'MODIFY_GOAL',
  GET_GOALS: 'GET_GOALS',
})

export const createGoal = (type, amount) => ({
  type: constants.get("CREATE_GOAL"),
  payload: {
    type,
    amount,
  }
})

export const getGoalsDone = () => ({
  type: constants.get('GET_GOALS_DONE'),
})

export const toggleGoal = (goal, goalID) => ({
  type: constants.get('TOGGLE_GOAL'),
  payload: {
    goal,
    goalID,
  }
})

export const deleteGoal = (goalID) => ({
  type: constants.get('DELETE_GOAL'),
  payload: {
    goalID,
  }
})

export const modifyGoal = (goalID) => ({
  type: constants.get('MODIFY_GOAL'),
  payload: {
    goal,
    goalID,
  }
})

export const getGoals = () => ({
  type: constants.get('GET_GOALS'),
})