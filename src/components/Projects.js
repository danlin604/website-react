import React, { Component } from 'react'
import styled from 'styled-components'
import TileHOC from './TileHOC'
import CarlTile from './projects/CarlTile'
import Carl from './projects/Carl'
import { connect } from 'react-redux'
import { loadProject, closeProject } from '../actions'

const Tile = TileHOC(CarlTile)
const Placeholder = TileHOC()

class Projects extends Component {
  render() {
    const {
      toggle,
      project,
      _loadProject,
      _closeProject,
    } = this.props
    return (
      <Main>
        {
          toggle &&
          <ProjectOverlay
            onClick={() => _closeProject()}
          >
            { project === 'CARL' &&
              <Carl />
            }
          </ProjectOverlay>
        }

        <ListContainer>
          <Tile
            name={'pale blue dot'}
            description={'a tribute to carl sagan'}
            load={_loadProject}
          />
          <Placeholder />
          <Placeholder />
        </ListContainer>
      </Main>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _loadProject: project => {
      dispatch(loadProject(project))
    },
    _closeProject: () => dispatch(closeProject())
  }
}

const mapStateToProps = (state) => {
  const { project, toggle } = (state || {}).projectReducer

  return {
    ...(project) && { project },
    toggle,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)


const Main = styled.nav`
  position: relative;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ListContainer = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ProjectOverlay = styled.section`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0);
  animation: fadein 2s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`