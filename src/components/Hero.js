import React, { useState, useEffect } from 'react'

const Hero = () => {

  return (<section className="hero is-fullheight" id="hero">

    <div className="hero-body">
      <div className="container columns">

        <div className="column is-4-desktop" id="title-column">
          <h1 className="title text-js" on>
            <span className="backslash">// </span>
            Kathrin Eichinger
          </h1>
          <h2 className="subtitle">
            Software Developer
          </h2>
        </div>

        <div className="column is-8-desktop desktop-only">
        </div>
   
      </div>

    </div>

    <div className="hero-foot">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects </a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>)

}

export default Hero