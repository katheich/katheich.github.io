import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

const App = () => {
 
  return (<>
    <Hero />
    <div className="columns section">
      <div className="column is-half-desktop">
        <About />
      </div>
      <div className="column is-half-desktop">
        <Skills />
      </div>
    </div>
    <Projects />
    <Experience />
    <Contact />
  </>)
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)