import React from 'react'
import 'aframe'
import { Entity, Scene } from 'aframe-react'
import styled from 'styled-components'

const HelloVR = ({close}) => (
  <Main onClick={() => close && close()}>
    <Window
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}>
      <Scene embedded>
        <Entity geometry={{primitive: 'box'}} material={{color: 'palevioletred'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
      </Scene>
    </Window>
  </Main>
)

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, .9);
`

const Window = styled.div`
  background-color: rgba(0, 0, 0, 1);
  position: relative;
  margin: 32px auto;
  height: 320px;
  width: 80%;
  z-index: 0;
  overflow: hidden;

  min-height: 320px;
  max-width: 760px;

  box-sizing: border-box;
  border-radius: 16px;

  box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.5);
`

export default HelloVR