import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer style={footerContainer}>
        <aside>status: setup</aside>
        <a href="https://github.com/danlin604">github</a>
      </footer>
    )
  }
}

const footerContainer = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
}

