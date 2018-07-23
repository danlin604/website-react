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
    }
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
        />
      )
    })
    return list || null
  }

  render() {
    return (
      <Main>
        <ListContainer>
          {this._list()}
        </ListContainer>
      </Main>
    )
  }
}

const Main = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ListContainer = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`