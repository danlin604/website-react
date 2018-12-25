import React, { Component } from 'react'
import styled from 'styled-components'
import env from '../env'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  state = { email: 'contact' }

  deobfuscate = (str) => {
    let cpy = str
    for (let i = 0; i < 8; i++) {
      cpy = cpy.replace(/[a-z]/gi, (char) => {
        return String.fromCharCode(char.charCodeAt() - 1)
      })
    }
    this.setState({ email: cpy })
  }

  contact = () => {
    const { email } = this.state
    if (email && email !== 'contact') {
      const _href = `mailto:${email}`
      return (
        <a
          id='contact'
          href={_href}>
          {email}
        </a>
      )
    }

    return (
      <a
        id='contact'
        href=''
        onClick={(e) => {
          e.preventDefault()
          this.deobfuscate(env.EMAIL)
        }}>
        contact
      </a>
    )
  }

  render() {
    return (
      <HeaderContainer>
        <nav>
          <NavLink
            exact
            to='/'
            activeStyle={{ textDecoration: 'underline' }}
          >
            résumé
          </NavLink>
          <NavLink
            to='/projects'
            activeStyle={{ textDecoration: 'underline' }}
          >
            projects
          </NavLink>
          <NavLink
            to='/blog'
            activeStyle={{ textDecoration: 'underline' }}
          >
            blog
          </NavLink>
          {this.contact()}
        </nav>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  nav {
    flex: 1;
    display: flex;
  }

  nav a {
    padding: 8px;
    font-size: 16px;
    color: rgba(0,0,0,0.8);
    text-decoration: none;
    cursor: hand;
  }
`