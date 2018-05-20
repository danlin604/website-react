import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super()
  }

  render() {
    console.log('props ===>', this.props)

    return (
      <header style={headerContainer}>
        <nav style={navContainer}>
          <a
            style={navItem}
            href='javascript:;'
            onClick={() => {
              console.log('resume')
              this.props._replaceContent('resume')
            }}>
            résumé
          </a>
          <a
            style={navItem}
            href='javascript:;'
            onClick={() => {
              console.log('projects')
              this.props._replaceContent('projects')
            }}>
            projects
          </a>
          <a
            style={navItem}
            id='contact'
            href='javascript:;'>
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