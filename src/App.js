import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Blog from './components/Blog'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Article } from './components/articles/Article';

class App extends Component {
  render() {
    return (
      <Router>
        <MainContainer>
          <Header />
          <Content>
            <Route exact path='/' component={Resume}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/why-clients-ought-encrypt-passwords' component={Article}/>
          </Content>
        </MainContainer>
      </Router>
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