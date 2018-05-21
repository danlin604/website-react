import React, { Component } from 'react'

export default class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section style={mainContainer}>

        <article>project 1</article>
        <article>project 2</article>

      </section>
      
    )
  }
}

const mainContainer = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  //backgroundColor: 'red',
}
