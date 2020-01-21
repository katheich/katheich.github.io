import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

const App = () => {
 
  return (<>
    <Hero />
    <About />
    <Skills />
  </>)
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)