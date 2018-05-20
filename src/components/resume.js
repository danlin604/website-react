import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <section style={mainContainer}>
        <section>
          <article>
            <header><span>dan</span></header>
            <p>Hey there,</p>
            <p>My name is Dan and I am a software developer. JavaScript is my latest passion. There is little else that I enjoy more than to sit down, and grok new ideas. Be sure to checkout some of my projects.</p>
            </article>
        </section>

        <section>
          <h2>skills</h2>
        </section>

        <section>
          <article>
            <p>
              <strong>Working Knowledge:</strong><br />
              JavaScript, PostgreSQL, React Native, Android, CSS3, Git, HTML5, Java, T-SQL, Node.js
            </p>
          </article>
          <article>
            <header>
              <span>Skills</span>
            </header>
              <p>
                <strong>Basic Knowledge:</strong><br />
                Agile, Angular, C, C++, C#, Code Igniter, JIRA, jQuery, Linux, MySQL, PHP, React, SVN, Mocha, Jasmine, JUnit
              </p> 
          </article>
        </section>

        <section>
          <h2>education</h2>
        </section>

        <section>
          <article>
            <p>
              <strong>British Columbia Institute of Technology</strong><br />
              Diploma - Computer Systems Technology<br />
              Graduated with Distinction<br />
              2014 – 2016<br />
            </p>
          </article>
          <article>
            <p>
              <strong>Simon Fraser University</strong><br />
              Bachelor of Arts - English<br /> 
              2008 – 2012<br />
            </p>
          </article>
        </section>
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
