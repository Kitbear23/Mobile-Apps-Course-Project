import Constants from './constants'

export const constants = new Constants({
  CREATE_MARKER: 'CREATE_MARKER',
  GET_MARKERS: 'GET_MARKERS',
  GET_MARKERS_DONE: 'GET_MARKERS_DONE',
  DELETE_MARKER: 'DELETE_MARKER',
})

export const createMarker = (coordinate) => ({
  type: constants.get("CREATE_MARKER"),
  payload: {
    coordinate,
  }
});

export const getMarkers = () => ({
  type: constants.get('GET_MARKERS'),
})

export const deleteMarker = (markerID) => ({
  type: constants.get('DELETE_MARKER'),
  payload: {
    markerID,
  }
})