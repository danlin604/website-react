import React, { Component } from 'react'
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
          style={navItem}
          id='contact'
          href={_href}>
          {email}
        </a>
      )
    }

    return (
      <a
        style={navItem}
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
      <header style={headerContainer}>
        <nav style={navContainer}>
          <a
            style={navItem}
            href=''
            onClick={(e) => {
              e.preventDefault()
              this.props._replaceContent('resume')
            }}>
            résumé
          </a>
          <a
            style={navItem}
            href=''
            onClick={(e) => {
              e.preventDefault()
              this.props._replaceContent('projects')
            }}>
            projects
          </a>
          {this._contact()}
        </nav>
      </header>
    )
  }
}

const headerContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  //backgroundColor: 'rgba(0,0,0,0.8)'
}

const navContainer = {
  display: 'flex',
  flex: 1,
}

const navItem = {
  padding: 8,
  fontSize: 16,
  color: 'rgba(0,0,0,0.8)',
  textDecoration: 'none',
  cursor: 'hand',
}