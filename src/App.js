import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      content: null
    }
  }

  _content = (content) => {
    switch(content) {
      case 'resume':
        return (
          <h1>resume</h1>
        )
      case 'projects':
        return (
          <h1>projects</h1>
        )
    }
  }

  render() {
    return (
      <main style={mainContainer}>
        <Header />
        <section style={contentContainer}>
        </section>
        <Footer />
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

export default App
