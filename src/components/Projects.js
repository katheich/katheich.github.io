import React, { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'

import ProjectVacMan from './ProjectVacMan'
import ProjectSkystalker from './ProjectSkystalker'
import ProjectMetropolists from './ProjectMetropolists'
import ProjectPlaceholder from './ProjectPlaceholder'
import ProjectTripBit from './ProjectTripBit'
import ProjectJogLog from './ProjectJogLog'

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

      
      <div {...handlers} className={'slide ' + `${page === 2 ? 'selected' : ''}`} id="tripbit">
        <ProjectTripBit />
      </div>


      <div {...handlers} className={'slide ' + `${page === 3 ? 'selected' : ''}`} id="placeholder">
        <ProjectPlaceholder />
      </div>

      <div {...handlers} className={'slide ' + `${page === 4 ? 'selected' : ''}`} id="metropolists">
        <ProjectMetropolists />
      </div>

      <div {...handlers} className={'slide ' + `${page === 5 ? 'selected' : ''}`} id="skystalker">
        <ProjectSkystalker />
      </div>


      <div {...handlers} className={'slide ' + `${page === 6 ? 'selected' : ''}`} id="vacman">
        <ProjectVacMan />
      </div>

      <div {...handlers} className={'slide ' + `${page === 1 ? 'selected' : ''}`} id="joglog">
        <ProjectJogLog />
      </div>
     
      

      
    </div>
  </section>)

}

export default Projects