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
        A keen learner with a background in economic consulting, my interest in problem-solving perhaps inevitably led me to software engineering. Thriving in a collaborative environment and bringing with me an incessant need to understand “why”, I am happy to work on any interesting challenge, be it in a front-end, back-end or non-coding context.        
        <br/><br/>

        <Experience />

      </div>
    </div>
  </section>)

}

export default About