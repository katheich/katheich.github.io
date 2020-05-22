import React from 'react'

import Transparency from '../../images/projects/transparency.png'
import Metro from '../../images/projects/metropolists copy.png'
import MetroVert from '../../images/projects/metropolists-vert.png'

const ProjectMetropolists = () => {

  return ( <div className="tile is-ancestor">
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
            <div className="title is-size-5-desktop is-size-4-mobile">
              <span className="backslash">// </span>
              Metropolists
            </div>
            <div className="links has-text-centered">
              <a href="https://github.com/katheich/metropolists" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
              <a href="https://kathrineichinger.com/metropolists/" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            Second project at GA, as a mini hackathon to build a React application consuming a public API. to be completed in pair-programming within 48 hours. 
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            Created a front-end React app for the Teleport API, which provides standard-of-living statistics for numerous cities around the world, allowing users to get details on individual cities or comparing two cities side-by-side
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              <span className="has-text-weight-bold">Tech used:</span> React.js <span className="backslash">//</span> Teleport API <span className="backslash">//</span> React Map GL (Mapbox) <span className="backslash">//</span> Webpack <span className="backslash">//</span> Git and GitHub <span className="backslash">//</span> SCSS <span className="backslash">//</span> Bulma               
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
  </div>)

}

export default ProjectMetropolists