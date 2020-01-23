import React, { useState, useEffect } from 'react'

import Transparency from '../images/projects/transparency.png'
import VacManVert from '../images/projects/vac-man-vert.png'
import VacMan from '../images/projects/vac-man.png'
import SkystalkerVert from '../images/projects/skystalker-vert.png'
import Skystalker from '../images/projects/skystalker.png'
import Metro from '../images/projects/metropolists copy.png'
import MetroVert from '../images/projects/metropolists-vert.png'
import Place from '../images/projects/placeholder.png'
import PlaceVert from '../images/projects/placeholder-vert.png'
import Tripbit from '../images/projects/tripbit.png'
import TripbitVert from '../images/projects/tripbit-vert.png'



const Projects = () => {

  const [page, setPage] = useState(1)

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

        <div className="tile is-ancestor">
          <div className="tile is-6 is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child box is-paddingless">           
                  <figure className="image desktop-only" id="logo">
                    <img src={TripbitVert} />
                  </figure>
                  <figure className="image is-2by1 mobile-only" id="logo">
                    <img src={Tripbit} />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <div className="title is-size-5">
                    <span className="backslash">// </span>
                    Tripbit
                  </div>
                  <div className="links has-text-centered">
                    <a href="https://github.com/katheich/tripbit" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
                    <a href="https://tripbit.herokuapp.com/#/profile/1" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
                  </div>
                  <br />
                  <div className="text is-size-7">
                  Task: Create a full-stack application individually or in teams within one week                  
                  </div>
                  <br />
                  <div className="text is-size-7">
                  In a team of four, we built a Django app with a React front-end and PostgreSQL database, which allows users to select cities they have travelled to,  earning badges for achieving certain conditions and being able to visualise them using Mapbox	                  
                  </div>             
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box is-paddingless">
                <figure className="image is-2by1 desktop-only">
                  <img className="screenshot" src={Transparency} id='image4' />
                </figure> 
                <figure className="image is-3by2 mobile-only">
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
                    <img className="screenshot" src={Transparency} id='image1' />
                  </figure> 
                </div>
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <div className="tile is-child box is-paddingless">
                    <figure className="image is-2by3 desktop-only">
                      <img className="screenshot" src={Transparency} id='image2' />
                    </figure>
                    <figure className="image is-3by2 mobile-only">
                      <img className="screenshot" src={Transparency} id='image2a' />
                    </figure>                   
                  </div>
                </div>
                <div className="tile is-parent desktop-only">
                  <div className="tile is-child box is-paddingless">
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


      <div className={'slide ' + `${page === 2 ? 'selected' : ''}`} id="slide2">

        <div className="tile is-ancestor">
          <div className="tile is-6 is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child box">           
                  <figure className="image desktop-only" id="logo">
                    <img src={PlaceVert} />
                  </figure>
                  <figure className="image is-2by1 mobile-only" id="logo">
                    <img src={Place} />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <div className="title is-size-5">
                    <span className="backslash">// </span>
                    Placeholder
                  </div>
                  <div className="links has-text-centered">
                    <a href="https://github.com/katheich/placeholder" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
                    <a href="https://ga-placeholder.herokuapp.com/" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
                  </div>
                  <br />
                  <div className="text is-size-7">
                  Built a React app that allows users to store favourite locations (e.g. restaurants, pubs, shops) in a MongoDB database hosted via Express.js, and displaying them using Mapbox                   
                  </div>
                  <br />
                  <div className="text is-size-7">
                  Took the lead on the ‘circle’ feature on both back-end and front-end, where users can add friends so that they can access each other’s locations                 
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box is-paddingless">
                <figure className="image is-2by1 desktop-only">
                  <img className="screenshot" src={Transparency} id='image4' />
                </figure> 
                <figure className="image is-3by2 mobile-only">
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
                    <img className="screenshot" src={Transparency} id='image1' />
                  </figure> 
                </div>
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <div className="tile is-child box is-paddingless">
                    <figure className="image is-2by3 desktop-only">
                      <img className="screenshot" src={Transparency} id='image2' />
                    </figure>
                    <figure className="image is-3by2 mobile-only">
                      <img className="screenshot" src={Transparency} id='image2a' />
                    </figure>                   
                  </div>
                </div>
                <div className="tile is-parent desktop-only">
                  <div className="tile is-child box is-paddingless">
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

      <div className={'slide ' + `${page === 3 ? 'selected' : ''}`} id="slide3">

        <div className="tile is-ancestor">
          <div className="tile is-6 is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child box">           
                  <figure className="image is-1by2 desktop-only" id="logo">
                    <img src={MetroVert} />
                  </figure>
                  <figure className="image is-2by1 mobile-only" id="logo">
                    <img src={Metro} />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <div className="title is-size-5">
                    <span className="backslash">// </span>
                    Metropolists
                  </div>
                  <div className="links has-text-centered">
                    <a href="https://github.com/katheich/metropolists" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
                    <a href="https://kathrineichinger.com/metropolists/" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
                  </div>
                  <br />
                  <div className="text is-size-7">
                  Mini hackathon to build a React application consuming a public API. to be completed in pair-programming within 48 hours 
                  </div>
                  <br />
                  <div className="text is-size-7">
                  Created a front-end React app for the Teleport API, which provides standard-of-living statistics for numerous cities around the world, allowing users to get details on individual cities or comparing two cities side-by-side
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box is-paddingless">
                <figure className="image is-2by1 desktop-only">
                  <img className="screenshot" src={Transparency} id='image4' />
                </figure> 
                <figure className="image is-3by2 mobile-only">
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
                    <img className="screenshot" src={Transparency} id='image1' />
                  </figure> 
                </div>
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <div className="tile is-child box is-paddingless">
                    <figure className="image is-2by3 desktop-only">
                      <img className="screenshot" src={Transparency} id='image2' />
                    </figure>
                    <figure className="image is-3by2 mobile-only">
                      <img className="screenshot" src={Transparency} id='image2' />
                    </figure>                   
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box is-paddingless">
                    <figure className="image is-2by3 desktop-only">
                      <img className="screenshot" src={Transparency} id='image3' />
                    </figure> 
                    <figure className="image is-3by2 mobile-only">
                      <img className="screenshot" src={Transparency} id='image3' />
                    </figure> 
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>


      <div className={'slide ' + `${page === 4 ? 'selected' : ''}`} id="slide4">

        <div className="tile is-ancestor">
          <div className="tile is-6 is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child box is-paddingless">           
                  <figure className="image desktop-only" id="logo">
                    <img src={SkystalkerVert} />
                  </figure>
                  <figure className="image is-2by1 mobile-only" id="logo">
                    <img src={Skystalker} />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <div className="title is-size-5">
                    <span className="backslash">// </span>
                    Skystalker
                  </div>
                  <div className="links has-text-centered">
                    <a href="https://github.com/katheich/skystalker" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
                    <a href="https://kathrineichinger.com/skystalker/" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
                  </div>
                  <br />
                  <div className="text is-size-7">
                  Extra-curricular project to create a React app using data from any API of our choice, to be completed individually over one weekend
                  </div>
                  <br />
                  <div className="text is-size-7">
                  On the basis of the OpenSky API, built a React app that shows the current number of planes in the sky above London and comparing that number to the total number of planes above entire countries	                  
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box is-paddingless">
                <figure className="image is-2by1 desktop-only">
                  <img className="screenshot" src={Transparency} id='image4' />
                </figure> 
                <figure className="image is-3by2 mobile-only">
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
                    <img className="screenshot" src={Transparency} id='image1' />
                  </figure> 
                </div>
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <div className="tile is-child box is-paddingless">
                    <figure className="image is-2by3 desktop-only">
                      <img className="screenshot" src={Transparency} id='image2' />
                    </figure>
                    <figure className="image is-3by2 mobile-only">
                      <img className="screenshot" src={Transparency} id='image2a' />
                    </figure>                   
                  </div>
                </div>
                <div className="tile is-parent desktop-only">
                  <div className="tile is-child box is-paddingless">
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


      <div className={'slide ' + `${page === 5 ? 'selected' : ''}`} id="slide5">

        <div className="tile is-ancestor">
          <div className="tile is-6 is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child box">           
                  <figure className="image is-1by2 desktop-only" id="logo">
                    <img src={VacManVert} />
                  </figure>
                  <figure className="image is-2by1 mobile-only" id="logo">
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
                    <a href="https://kathrineichinger.com/vac-man/" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
                  </div>
                  <br />
                  <div className="text is-size-7">
                  Task: Make a grid-based game, as an individual project to be completed in one week 
                  </div>
                  <br />
                  <div className="text is-size-7">
                  Built a single-level version of Pac-Man using vanilla JavaScript, HTML and CSS
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box is-paddingless">
                <figure className="image is-2by1 desktop-only">
                  <img className="screenshot" src={Transparency} id='image4' />
                </figure> 
                <figure className="image is-3by2 mobile-only">
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
                    <img className="screenshot" src={Transparency} id='image1' />
                  </figure> 
                </div>
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <div className="tile is-child box is-paddingless">
                    <figure className="image is-2by3 desktop-only">
                      <img className="screenshot" src={Transparency} id='image2' />
                    </figure>
                    <figure className="image is-3by2 mobile-only">
                      <img className="screenshot" src={Transparency} id='image2' />
                    </figure>                   
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box is-paddingless">
                    <figure className="image is-2by3 desktop-only">
                      <img className="screenshot" src={Transparency} id='image3' />
                    </figure> 
                    <figure className="image is-3by2 mobile-only">
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