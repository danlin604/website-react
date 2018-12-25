import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default class Resume extends Component {
  render() {
    return (
      <BlogContainer>
        { this.article({
          title: 'Why clients ought encrypt passwords',
          detail: 'December 22, 2018 • 💀',
          summary: `Client? Server? Why not both?`,
          target: '/why-clients-ought-encrypt-passwords'
        }) }
      </BlogContainer>
    )
  }

  article = ({ title, detail, summary, target }) => {
    return (
      <article>
        { this.articleHeader({ title, detail, target }) }
        { this.articleSummary(summary) }
      </article>
    )
  }

  articleHeader = ({ title, detail, target }) => {
    return (
      <header>
        <NavLink
          exact
          to={ target }
          activeStyle={{ textDecoration: 'underline' }}>
          { title }
        </NavLink>
        <small>{ detail }</small>
      </header>
    )
  }

  articleSummary = (summary) => {
    return <content>{ summary }</content>
  }
}

const BlogContainer = styled.section`
  padding: 32px;

  /* Article header */
  article header a {
    color: royalblue;
    font-size: 22px;
    font-weight: 900;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    padding-bottom: 8px;
    display: block;
  }

  /* Article date */
  article header small {
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 16px;
    text-rendering: optimizeLegibility;
    display: block;
  }

  article content {
    font-size: 16px;
    font-weight: 400;
    display: block;
    text-rendering: optimizeLegibility;
  }
`

