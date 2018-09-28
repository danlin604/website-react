export const LOAD_PROJECT = 'LOAD_PROJECT'
export const CLOSE_PROJECT = 'CLOSE_PROJECT'

export const loadProject = project => ({
  type: LOAD_PROJECT,
  project,
})

export const closeProject = () => ({
  type: CLOSE_PROJECT,
})