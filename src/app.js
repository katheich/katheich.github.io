import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
 
  return (<>
    <Hero />
    <div className="section">
      <div className="container columns is-desktop">
        <div className="column is-5-desktop">
          <About />
        </div>
        <div className="column is-1-desktop"></div>
        <div className="column is-6-desktop">
          <Skills />
        </div>
      </div>
    </div>
    <Projects />
    <Contact />
  </>)
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)