import Constants from './constants'

export const constants = new Constants({
  CREATE_ADVENTURE: 'CREATE_ADVENTURE',
  GET_ADVENTURES: 'GET_ADVENTURES',
  GET_ADVENTURES_DONE: 'GET_ADVENTURES_DONE',
  DELETE_ADVENTURE: 'DELETE_ADVENTURE',
  MODIFY_ADVENTURE: 'MODIFY_ADVENTURE',
})

export const createAdventure = (adventure) => ({
  type: constants.get("CREATE_ADVENTURE"),
  payload: {
    adventure,
  }
});

export const getAdventures = () => ({
  type: constants.get('GET_ADVENTURES'),
})

export const deleteAdventure = (adventureID) => ({
  type: constants.get('DELETE_ADVENTURE'),
  payload: {
    adventureID,
  }
})

export const modifyAdventure = (adventureID, adventure) => ({
  type: constants.get('MODIFY_ADVENTURE'),
  payload: {
    adventureID,
    adventure,
  }
})
