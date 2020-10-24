import React from 'react'

import Experience from './Experience'

const About = () => {

  return (<section className="" id="about">
    <div className="container">
      <div className="title">
        <span className="backslash">// </span>
        About
      </div>

      <div className="text is-size-6">
        I am a software developer based in London, UK.
        <br/><br/>
        A keen learner with a background in economic consulting, I have experience in web development and data-processing, mainly in Python and JavaScript. Thriving in a collaborative environment and bringing with me an incessant need to understand “why”, I always look for opportunities to learn from and share my knowledge with others.        
        <br/><br/>
        On this page you may find further information on my experience and skills, as well as explore my projects.
        <br/><br/>

        <Experience />

      </div>
    </div>
  </section>)

}

export default About