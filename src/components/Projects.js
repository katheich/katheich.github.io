import React, { useState, useEffect } from 'react'

import Transparency from '../images/projects/transparency.png'
import VacMan from '../images/projects/vac-man-vert.png'
import VacMan1 from '../images/projects/vac-man-gameplay.png'


const Projects = () => {

  const [page, setPage] = useState(5)

  function handlePrevious() {
    if (page !== 1) {
      setPage(page - 1)
    }
    return
  }

  function handleNext() {
    if (page !== 5) {
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
        <span className="backslash">/</span>
        <span className="backslash">/ </span>
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
          <a className={'arrow level-item is-centered is-size-5 ' + `${page === 5 ? '' : 'active'}`} onClick={handleNext}><i className="fas fa-angle-right"></i></a>
        </nav>
      </div>

      <div className={'slide ' + `${page === 1 ? 'selected' : ''}`} id="slide1">

        <div className="title is-size-4">Tripbit</div>

      </div>


      <div className={'slide ' + `${page === 2 ? 'selected' : ''}`} id="slide2">

        <div className="title is-size-4">Placeholder</div>

      </div>

      <div className={'slide ' + `${page === 3 ? 'selected' : ''}`} id="slide3">

        <div className="title is-size-4">Metropolists</div>

      </div>


      <div className={'slide ' + `${page === 4 ? 'selected' : ''}`} id="slide4">

        <div className="title is-size-4">Skystalker</div>

      </div>


      <div className={'slide ' + `${page === 5 ? 'selected' : ''}`} id="slide5">

        <div className="tile is-ancestor">
          <div className="tile is-6 is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child box">           
                  <figure className="image is-1by2" id="logo">
                    <img src={VacMan} />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <div className="title is-size-5">
                    <span className="backslash">// </span>
                    Vac-Man
                  </div>
                  <div className="links has-text-centered">
                    <a href="https://github.com/katheich/vac-man" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
                    <a href="http://kathrineichinger.com/vac-man/" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
                  </div>
                  <br />
                  <div className="text is-size-6">
                  Task: Make a grid-based game, as an individual project to be completed in one week 
                  </div>
                  <br />
                  <div className="text is-size-6">
                  Built a single-level version of Pac-Man using vanilla JavaScript, HTML and CSS
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box is-paddingless">
                <figure className="image is-2by1">
                  <img className="screenshot" src={Transparency} id='image4' />
                </figure> 
              </div>
            </div>
  
          </div>
          <div className="tile is-6 ">
            <div className="tile is-vertical">
              <div className="tile is-parent">
                <div className="tile is-child box is-paddingless">
                  <figure className="image is-3by2">
                    <img src={VacMan1} />
                  </figure>
                </div>
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <div className="tile is-child box is-paddingless">
                    <figure className="image is-2by3">
                      <img className="screenshot" src={Transparency} id='image2' />
                    </figure>                  
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <figure className="image is-2by3">
                      <img className="screenshot" src={Transparency} id='image3' />
                    </figure> 
                  </div>
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