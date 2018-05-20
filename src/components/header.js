import React, { Component } from 'react'
import env from './env'

export default class Header extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <header style={headerContainer}>
        <nav style={navContainer}>
          <a
            style={navItem}
            href=''
            onClick={(e) => {
              e.preventDefault()
              console.log('resume')
              this.props._replaceContent('resume')
            }}>
            résumé
          </a>
          <a
            style={navItem}
            href=''
            onClick={(e) => {
              e.preventDefault()
              console.log('projects')
              this.props._replaceContent('projects')
            }}>
            projects
          </a>
          <a
            style={navItem}
            id='contact'
            href=''
            onClick={(e) => {
              e.preventDefault()
              console.log('email')
            }}>
            contact
          </a>
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