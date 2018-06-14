import React, { Component } from 'react'
import styled from 'styled-components'

const TILE_SIZE = 200

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { module: null }
  }

  componentDidMount() {
    const { path } = this.props
    switch(path) {
      case 'Carl':
        import(`./projects/${path}`)
          .then(module => {
            this.setState({ module: module.default })
          })
        break
      default: return
    }
  }

  componentWillUnmount() {
    this.setState({ unmount: true })
  }

  _component = () => {
    const { module: Component } = this.state
    if (!Component) return <div></div>
    return <Component />
  }

  render() {
    const { name, description } = this.props
    
    return (
      <ItemContainer>
        <header>
          {name || 'placeholder'}
          <p>{description || 'Lorem ipsum dolor sit amet'}</p>
        </header>
        {this._component()}
      </ItemContainer>
    )
  }
}

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
    background-color: blueviolet;
    overflow: hidden;
  }

  canvas {
    flex: 1;
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