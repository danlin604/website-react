import { combineReducers } from 'redux'
import { LOAD_PROJECT, CLOSE_PROJECT } from '../actions'

const projectReducer = (
  previousState = {},
  action
) => {
  const { type, project } = action

  // console.log('[reducer state]', previousState)

  switch(type) {
  case LOAD_PROJECT: return {
    ...previousState,
    project,
    toggle: true
  }
  case CLOSE_PROJECT: return {
    ...previousState,
    toggle: false
  }
  default: return previousState
  }
}

export default combineReducers({
  projectReducer,
})