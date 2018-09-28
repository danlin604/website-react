import { combineReducers } from 'redux'
import { LOAD_PROJECT, CLOSE_PROJECT } from '../actions'

const projectReducer = (
  state = {},
  action
) => {
  const { type, project } = action

  switch(type) {
    case LOAD_PROJECT: return { project, toggle: true }
    case CLOSE_PROJECT: return { toggle: false }
    default: return state
  }
}

export default combineReducers({
  projectReducer,
})