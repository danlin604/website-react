import React, { Component } from 'react'
import './App.css'
import Header from './components/header'

class App extends Component {

  render() {
    return (
      <main style={mainContainer}>
        <Header />
        <section style={contentContainer}>
          
        </section>

        <footer style={footerContainer}>
            <aside>status: setup</aside>
            <a href="https://github.com/danlin604">github</a>
        </footer>
      </main>
    )
  }
}

const mainContainer = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#dedede',
  color: '#4c4c4c',
}

const contentContainer = {
  flex: 1,
  display: 'flex',
}

const footerContainer = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
}

export default App
