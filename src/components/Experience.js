import React, { useState } from 'react'

import POPLogo from './logos/POPLogo'
import GALogo from './logos/GALogo'
import RBBLogo from './logos/RBBLogo'
import BocconiLogo from './logos/BocconiLogo'
import YorkLogo from './logos/YorkLogo'

import info from './data/experience_info.json' 

const Experience = () => {

  const [hover, setHover] = useState('pop')

  function handleHover(e) {
    if (hover !== e.target.dataset.id) {
      setHover(e.target.dataset.id)
    }
  }

  return (<div id="experience">
    <div className="text is-size-6">
      Explore my experience:
      <br/><br/>
    </div>
    <div className="logo-container">
      <POPLogo size={50} id="pop" handleHover={handleHover} hover={hover} />
      <GALogo size={50} id="ga" handleHover={handleHover} hover={hover} />
      <RBBLogo size={50} id="rbb" handleHover={handleHover} hover={hover} />
      <BocconiLogo size={50} id="bocconi" handleHover={handleHover} hover={hover} />
      <YorkLogo size={50} id="york" handleHover={handleHover} hover={hover} />
    </div>
    {hover && <div className="infos">
      <div className="dates is-size-7">
        {info[hover].dates}
        <span className="backslash"> // </span>
        {info[hover].location}
      </div>
      <div className="company is-size-5">
        <a href={info[hover].link} target="_blank" rel="noopener noreferrer">{info[hover].company}</a>
      </div>
      

      {info[hover].title.map((title, i) => {
        return <div key={i} className="jobtitles is-size-6 has-text-weight-bold">
          {title.position} <span className="has-text-weight-light is-size-7">{title.details}</span>
        </div>
      })}
    </div>}
      

  </div>)

}

export default Experience