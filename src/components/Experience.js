import React, { useState } from 'react'

import POPLogo from './logos/POPLogo'
import GALogo from './logos/GALogo'
import RBBLogo from './logos/RBBLogo'
import BocconiLogo from './logos/BocconiLogo'
import YorkLogo from './logos/YorkLogo'

const info = {
  pop: {
    company: 'We Got POP',
    dates: 'since April 2020',
    title: [{ position: 'Associate Software Developer', details: ''}],
    location: 'London, United Kingdom',
    link: 'https://www.wegotpop.com/'
  },
  ga: {
    company: 'General Assembly',
    dates: 'October 2019 - January 2020',
    title: [{ position: 'Software Engineering Immersive', details: '12-weeks coding bootcamp' }],
    location: 'London, United Kingdom',
    link: 'https://generalassemb.ly/education/software-engineering-immersive/london'
  },
  rbb: {
    company: 'RBB Economics',
    dates: 'July 2015 - June 2018',
    title: [{ position: 'Competition Economist', details: '' }],
    location: 'Brussels, Belgium & London, United Kingdom',
    link: 'http://www.rbbecon.com/'
  },
  bocconi: {
    company: 'Bocconi University',
    dates: '2013 - 2015',
    title: [{ position: 'Economic and Social Sciences', details: 'Master of Science' }],
    location: 'Milan, Italy',
    link: 'https://www.unibocconi.eu/wps/wcm/connect/Bocconi/SitoPubblico_EN/Navigation+Tree/Home/Programs/Master+of+Science/Economic+and+Social+Sciences/'
  },
  york: {
    company: 'University of York',
    dates: '2010 - 2013',
    title: [{ position: 'Economics and Philosophy', details: 'Bachelor of Arts' }],
    location: 'York, United Kingdom',
    link: 'https://www.york.ac.uk/study/undergraduate/courses/ba-economics-philosophy/'
  }
}

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