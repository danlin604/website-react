import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './components/header'
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
      <MainContainer>
        <Header replaceContent={this._replaceContent} />
        <Content>
          {this._content(content)}
        </Content>
      </MainContainer>
    )
  }
}

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Content = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
`

export default App
