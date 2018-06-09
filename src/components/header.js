import React, { Component } from 'react'
import styled from 'styled-components'
import env from '../env'

export default class Header extends Component {
  constructor(props) {
    super()
    this.state = {
      email: 'contact'
    }
  }

  _deobfuscate = (str) => {
    let cpy = str
    for (let i = 0; i < 8; i++) {
      cpy = cpy.replace(/[a-z]/gi, (char) => {
        return String.fromCharCode(char.charCodeAt() - 1)
      })
    }
    this.setState({ email: cpy })
  }

  _contact = () => {
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
          this._deobfuscate(env.EMAIL)
        }}>
        contact
      </a>
    )
  }

  render() {
    return (
      <HeaderContainer>
        <nav>
          <a
            href=''
            onClick={(e) => {
              e.preventDefault()
              this.props.replaceContent('resume')
            }}>
            résumé
          </a>
          <a
            href=''
            onClick={(e) => {
              e.preventDefault()
              this.props.replaceContent('projects')
            }}>
            projects
          </a>
          {this._contact()}
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