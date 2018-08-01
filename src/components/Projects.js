import React, { Component } from 'react'
import styled from 'styled-components'
import uuidv4 from 'uuid/v4'
import Project from './Project'
import ProjectList from './projects/ProjectList'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: (ProjectList || {}).projects || {},
      expand: false,
    }
  }

  _expand = () => {
    this.setState({ expand: true })
  }

  _list = () => {
    const { projects } = this.state
    const list = projects.map((project) => {
      const { path, name, description } = project
      return (
        <Project
          key={uuidv4()}
          path={path}
          name={name}
          description={description}
          expand={this._expand}
        />
      )
    })

    return list || null
  }

  render() {
    return (
      <Main>
        { this.state.expand &&
          <ProjectOverlay
            onClick={() => this.setState({ expand: false })}
          />
        }
        <ListContainer>
          { this._list() }
        </ListContainer>
      </Main>
    )
  }
}

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
  background-color: rgba(0,0,0,0.8);
  animation: fadein 2s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`