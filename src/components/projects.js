import React, { Component } from 'react'
import styled from 'styled-components'
import uuidv4 from 'uuid/v4'
import P5Wrapper from 'react-p5-wrapper'
import projectList from './projectList'
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

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
        <ItemContainer key={uuidv4()}>
          <header>
            {/* {name} */}
            {/* <p>{description}</p> */}
          </header>
          <P5Wrapper sketch={sketch} />
        </ItemContainer>
      )
    })
    return listProjects || null
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
const ItemContainer = styled.article`
  position: relative;
  height: ${TILE_SIZE}px;
  width: ${TILE_SIZE}px;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  border-radius: 32px;
  overflow: hidden;

  div {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: ${TILE_SIZE}px;
    width: ${TILE_SIZE}px;
    border-radius: 32px;
    overflow: hidden;
  }

  canvas {
    flex: 1;
    background-color: rgba(138,43,226,1);
  }

  header {
    justify-content: flex-start;
    align-items: flex-start;
    height: ${TILE_SIZE - 32}px;
    width: ${TILE_SIZE - 32}px;
    background-color: rgba(0,0,0,0.1);
    padding: 16px;
    color: rgb(255,255,255);
    z-index: 1;
  }
`

function sketch (p) {

  const star = () => {
    const x = p.random(-TILE_SIZE/2 + 16, TILE_SIZE/2 + 16)
    const y = p.random(-TILE_SIZE/2 + 16, TILE_SIZE/2 + 16)
    const z = p.random(TILE_SIZE)
    return { x, y, z }
  }

  const stars = new Array(128)
  
  p.setup = () => {
    p.createCanvas(TILE_SIZE, TILE_SIZE)

    for (let i = 0; i < stars.length; i++) {
      stars[i] = star()
    }
  }

  const update = (coord) => {
    const { z } = coord
    let newZ = z - 8
    if (newZ < 1) {
      newZ = p.random(TILE_SIZE)
    }
    return { ...coord, z: newZ }
  }

  const show = (coord) => {
    const { x, y, z } = coord
    p.fill(255)
    p.noStroke()

    const sx = p.map(x / z, 0, 1, 0, TILE_SIZE)
    const sy = p.map(y / z, 0, 1, 0, TILE_SIZE)

    const r = p.map(z, 0, TILE_SIZE, 4, 0)
    p.ellipse(sx, sy, r, r)
  }

  p.draw = () => {
    p.background(0)
    p.translate(TILE_SIZE/2, TILE_SIZE/2)
    for (let i = 0; i < stars.length; i++) {
      stars[i] = update(stars[i])
      show(stars[i])
    }
  }
}

