import React from 'react'
import 'aframe'
import { Entity, Scene } from 'aframe-react'
import styled from 'styled-components'

const HelloVR = () => (
  <Main>
    <Scene>
      <Entity geometry={{primitive: 'box'}} material={{color: 'palevioletred'}} position={{x: 0, y: 0, z: -5}}/>
      <Entity particle-system={{preset: 'snow'}}/>
      <Entity light={{type: 'point'}}/>
      <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
      <Entity text={{value: 'Hello, WebVR!'}}/>
    </Scene>
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

export default HelloVR