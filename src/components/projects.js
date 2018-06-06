import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import P5Wrapper from 'react-p5-wrapper'
import projectList from './projectList'
import './projects.css'

const TILE_SIZE = 200

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
          <header style={header}>
            {name}
            <p>{description}</p>
          </header>
          <P5Wrapper sketch={sketch} />
        </article>
      )
    })
    return listProjects || null
  }

  render() {
    return (
      <nav style={mainContainer}>
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
  justifyContent: 'center',
}

const projectListContainer = {
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

const projectContainer = {
  position: 'relative',
  height: TILE_SIZE,
  width: TILE_SIZE,
  marginTop: 32,
  marginLeft: 32,
  marginRight: 32,
  borderRadius: 32,
  backgroundColor: 'rgba(1,1,1, 0)',
  overflow: 'hidden',
}

const header = {
  // display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: TILE_SIZE - 32,
  width: TILE_SIZE - 32,
  backgroundColor: 'rgba(0,0,0,0)',
  padding: 16,
  color: 'rgb(255,255,255)',
  zIndex: 1,
}

function sketch (p) {
  p.setup = () => {
    p.createCanvas(TILE_SIZE, TILE_SIZE, p.WEBGL)
  }
}