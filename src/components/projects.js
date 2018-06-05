import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import projectList from './projectList'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: (projectList || {}).projects || {}
    }
  }

  _list = () => {
    const { projects } = this.state
    const listProjects = projects.map((project) => {
      const { name, description } = project
      return (
        <article 
          key={uuidv4()}
          style={projectContainer}
        >
          <header>{name}</header>
          <p>{description}</p>
        </article>
      )
    })
    return listProjects || null
  }

  render() {
    return (
      <nav style={mainContainer}>

        <section>
          <article>
            <p>Hey again,</p>
            <p>Here are some of my projects. You can find more over at Github!</p>
          </article>
        </section>

        <section style={projectListContainer}>
          {this._list()}
        </section>
      </nav>
    )
  }
}

const mainContainer = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}

const projectListContainer = {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'pink',
}

const projectContainer = {
  height: 100,
  width: 100,
  backgroundColor: 'teal',
}