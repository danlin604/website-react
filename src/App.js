import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Resume from './components/resume'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      content: 'resume'
    }
  }

  _replaceContent = (content) => {
    console.log(content)
    if (!content) return
    this.setState({ content })
  }

  _content = (content) => {
    switch(content) {
      case 'resume':
        return (
          <Resume />
        )
      case 'projects':
        return (
          <h1>projects</h1>
        )
      default: {
        <h1>content does not exist</h1>
      }
    }
  }

  render() {
    const { content } = this.state

    return (
      <main style={mainContainer}>
        <Header _replaceContent={this._replaceContent} />
        <section style={contentContainer}>
          {this._content(content)}
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