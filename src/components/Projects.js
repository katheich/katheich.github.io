import React, { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'

import Transparency from '../images/projects/transparency.png'
import Joglog from '../images/projects/joglog.png'
import JoglogVert from '../images/projects/joglog-vert.png'

import ProjectVacMan from './ProjectVacMan'
import ProjectSkystalker from './ProjectSkystalker'
import ProjectMetropolists from './ProjectMetropolists'
import ProjectPlaceholder from './ProjectPlaceholder'
import ProjectTripBit from './ProjectTripBit'

const config = {
  delta: 10,                             // min distance(px) before a swipe starts
  preventDefaultTouchmoveEvent: true,   // preventDefault on touchmove, *See Details*
  trackTouch: true,                      // track touch input
  trackMouse: false,                     // track mouse input
  rotationAngle: 0                      // set a rotation angle
}

const lastPage = 6

const Projects = () => {

  const [page, setPage] = useState(1)
  const handlers = useSwipeable({ onSwipedLeft: (eventData) => handlePrevious, onSwipedRight: (eventData) => handleNext, ...config })


  function handlePrevious() {
    if (page !== 1) {
      setPage(page - 1)
    }
    return
  }

  function handleNext() {
    if (page !== lastPage) {
      setPage(page + 1)
    }
    return
  }

  function handlePage(e) {
    setPage(parseInt(e.target.id))
  }

  return (<section className="section" id="projects">
    <div className="container">
      <div className="title">
        <span className="backslash">// </span>
        Projects
      </div>

      <div className="slidecontrol">
        <nav className="level is-centered is-mobile" role="navigation" aria-label="pagination">
          <a className={'arrow level-item is-centered is-size-5 ' + `${page === 1 ? '' : 'active'}`} onClick={handlePrevious}><i className="fas fa-angle-left"></i></a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 1 ? 'current' : ''}`} onClick={handlePage} id='1' aria-label="Goto page 1">1</a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 2 ? 'current' : ''}`} onClick={handlePage} id='2' aria-label="Goto page 2">2</a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 3 ? 'current' : ''}`} onClick={handlePage} id='3' aria-label="Goto page 3">3</a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 4 ? 'current' : ''}`} onClick={handlePage} id='4' aria-label="Goto page 4">4</a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 5 ? 'current' : ''}`} onClick={handlePage} id='5' aria-label="Goto page 5">5</a>
          <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 6 ? 'current' : ''}`} onClick={handlePage} id='6' aria-label="Goto page 6">6</a>
          <a className={'arrow level-item is-centered is-size-5 ' + `${page === lastPage ? '' : 'active'}`} onClick={handleNext}><i className="fas fa-angle-right"></i></a>
        </nav>
      </div>

      
      <div {...handlers} className={'slide ' + `${page === 1 ? 'selected' : ''}`} id="slide1">
        <ProjectTripBit />
      </div>


      <div {...handlers} className={'slide ' + `${page === 2 ? 'selected' : ''}`} id="slide2">
        <ProjectPlaceholder />
      </div>

      <div {...handlers} className={'slide ' + `${page === 3 ? 'selected' : ''}`} id="slide3">
        <ProjectMetropolists />
      </div>

      <div {...handlers} className={'slide ' + `${page === 4 ? 'selected' : ''}`} id="slide4">
        <ProjectSkystalker />
      </div>


      <div {...handlers} className={'slide ' + `${page === 5 ? 'selected' : ''}`} id="slide5">
        <ProjectVacMan />
      </div>

      <div {...handlers} className={'slide ' + `${page === 6 ? 'selected' : ''}`} id="slide6">

        <div className="tile is-ancestor">
          <div className="tile is-6 is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child box">           
                  <figure className="image is-1by2 desktop-only" id="logo">
                    <img src={JoglogVert} />
                  </figure>
                  <figure className="image is-2by1 mobile-only" id="logo">
                    <img src={Joglog} />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <div className="title is-size-5-desktop is-size-4-mobile">
                    <span className="backslash">// </span>
                    Jog Log
                  </div>
                  <div className="links has-text-centered">
                    <a className="github"><i className="fab fa-github is-size-4 has-text-grey-lighter"></i></a>
                    <a className="link"><i className="fas fa-link is-size-4 has-text-grey-lighter"></i></a>
                  </div>
                  <div className="text is-size-7-desktop is-size-6-mobile has-text-centered">
                  (work in progress)                  
                  </div>
                  <br />
                  <div className="text is-size-7-desktop is-size-6-mobile">
                  Side project to create a full stack app where users can create running plans and log actual runs, also keeping track of different types of run (endurance, interval, tempo, easy).
                  </div>
                  <br />
                  <div className="text is-size-7-desktop is-size-6-mobile">
                    <span className="has-text-weight-bold">Tech used:</span> Django <span className="backslash">//</span> PostgreSQL <span className="backslash">//</span> GraphQL <span className="backslash">//</span> Apollo <span className="backslash">//</span> React.js
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="tile is-6 ">
            <div className="tile is-vertical">
              <div className="tile is-parent">
                <div className="tile is-child box is-size-4" id="coming-soon">
                  Coming soon!
                </div>
              </div>

              
            </div>
          </div>
        </div>

      </div>
     
      

      
    </div>
  </section>)

}

export default Projects