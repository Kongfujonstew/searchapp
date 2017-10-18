import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'



const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  results: []
}

export const actionTypes = {
  UPDATE_RESULTS: 'UPDATE_RESULTS',
  ADD: 'ADD',
  TICK: 'TICK'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS:
      return Object.assign({}, state, {results: action.results});
    case actionTypes.TICK:
      return Object.assign({}, state, {lastUpdate: action.ts, light: !!action.light });
    case actionTypes.ADD:
      return Object.assign({}, state, {count: state.count + 1});
    default: return state;
  }
}

// ACTIONS
export const updateResults = (results) => dispatch => {
  return dispatch({type: actionTypes.UPDATE_RESULTS, results: results});
}

export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 800)
}

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}

export const initStore = (initialState = exampleInitialState) => {
  console.log('init store working now');
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}


