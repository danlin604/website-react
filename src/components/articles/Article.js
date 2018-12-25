import React, { Component } from 'react'
import Prism from 'prismjs'
import './prism.css'

export class Article extends Component {
  
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <section>
        <p>Hello World!</p>
        { Highlight(snippet, `language-javascript`) }
      </section>
    )
  }
}

const Highlight = (snippet, language) => {
  return (
    <pre>
      <code className={ language }>
        { snippet }
      </code>
    </pre>
  )
}

const snippet = `
onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'Facebook'
    };
}
`