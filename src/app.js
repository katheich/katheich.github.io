import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

const App = () => {
 
  return (<section className="section">
    <div className="container">
      <div className="title">Hallo, Welt.</div>
    </div>
  </section>
  )
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)