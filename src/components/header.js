import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header style={headerContainer}>
        <nav style={navContainer}>
          <a style={navItem} onClick={() => console.log('hello')}>résumé</a>
          <a style={navItem} href="">projects</a>
          <a style={navItem} id='contact' href="">contact</a>
        </nav>
      </header>
    )
  }
}

const headerContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  //backgroundColor: 'red',
}

const navContainer = {
  display: 'flex',
  flex: 1,
}

const navItem = {
  padding: 8,
  fontSize: 32,
  color: '#4c4c4c',
  textDecoration: 'none',
  cursor: 'hand',
  //backgroundColor: 'teal',
}