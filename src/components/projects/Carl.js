import React, { Component } from 'react'
import P5Wrapper from '../../lib/P5Wrapper'

const TILE_SIZE = 200

export default class Carl extends Component {

  render() {
    const starfield = (p) => {
      const star = () => {
        const x = p.random(-TILE_SIZE/2, TILE_SIZE/2)
        const y = p.random(-TILE_SIZE/2, TILE_SIZE/2)
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
        let newZ = z - 4
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

    return <P5Wrapper sketch={starfield} /> 
  }
}

