import React, { Component } from 'react'
import styled from 'styled-components'
// import uuidv4 from 'uuid/v4'
import TileHOC from './TileHOC'
import CarlTile from './projects/CarlTile'
import Carl from './projects/Carl'

const Tile = TileHOC(CarlTile)
const Placeholder = TileHOC()

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false,
      carl: false,
    }
  }

  expand = (state) => {
    console.log(state)
    if (!state) return
    this.setState(state)
  }

  render() {
    return (
      <Main>
        {
          this.state.expand &&
          <ProjectOverlay
            onClick={() => {
              this.setState({ expand: false })
            }}
          >
            {
              this.state.carl &&
              <Carl />
            }
          </ProjectOverlay>
        }

        <ListContainer>
          <Tile
            name={'pale blue dot'}
            description={'a tribute to carl sagan'}
            expand={this.expand}
          />
          <Placeholder />
          <Placeholder />
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
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  background-color: rgba(0,0,0,0);
  animation: fadein 2s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`