import React, { Component } from 'react'
import Header from './components/header'
// import Footer from './components/footer'
import Resume from './components/resume'
import Projects from './components/projects'


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      content: 'resume'
    }
  }

  _replaceContent = (content) => {
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
          <Projects />
        )
      default: {
        console.log('no content')
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
        {/* <Footer /> */}
      </main>
    )
  }
}

const mainContainer = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const contentContainer = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
}

export default App
