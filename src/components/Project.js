import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const TILE_SIZE = 200

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      module: null,
      hover: false,
    }
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
    return <Component size={this.state.size} />
  }

  _itemHover = () => {
    this.setState({ hover: true })
  }

  render() {
    const { name, description, expand } = this.props

    console.log(this.props)
    
    return (
      
      <ItemContainer
        onMouseEnter={() => {
          this.setState({ hover: true })
        }}
        onMouseLeave={() => {
          this.setState({ hover: false })
        }}
        onClick={() => {
          expand()
        }}
        hover={this.state.hover}
      >
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
  /* static styles */
  position: relative;
  height: ${TILE_SIZE}px;
  width: ${TILE_SIZE}px;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  border-radius: 32px;
  overflow: hidden;
  cursor: pointer;

  ${ props => props.hover ?
    css`
      transform: scale(1.1);
    `
  : null}

  div {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: ${TILE_SIZE}px;
    width: ${TILE_SIZE}px;
    border-radius: 32px;
    background-color: paleturquoise;
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