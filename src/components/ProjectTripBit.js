import React from 'react'

import Transparency from '../images/projects/transparency.png'
import Tripbit from '../images/projects/tripbit.png'
import TripbitVert from '../images/projects/tripbit-vert.png'

const ProjectTripBit = () => {

  return (      <div className="tile is-ancestor">
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
            <div className="title is-size-5-desktop is-size-4-mobile">
              <span className="backslash">// </span>
              TripBit
            </div>
            <div className="links has-text-centered">
              <a href="https://github.com/katheich/tripbit" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
              <a href="https://tripbit.herokuapp.com" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            Task: Create a full-stack application individually or in teams within one week.                  
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            In a team of four, we built a Django app with a React front-end and PostgreSQL database, where users select cities they have travelled to, earning badges for achieving certain conditions. Users can also create and join groups, where they can see how their scores and travel locations compare. 	                  
            </div>   
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              <span className="has-text-weight-bold	">Tech used:</span> HTML <span className="backslash">//</span> SCSS <span className="backslash">//</span> JavaScript <span className="backslash">//</span> Python <span className="backslash">//</span> Django <span className="backslash">//</span> React.js <span className="backslash">//</span> Heroku <span className="backslash">//</span> React Map GL (Mapbox) <span className="backslash">//</span> PostgreSQL <span className="backslash">//</span> FileStack API <span className="backslash">//</span>  React Toastify <span className="backslash">//</span> Webpack <span className="backslash">//</span> Git and GitHub <span className="backslash">//</span> Dotenv <span className="backslash">//</span> Bulma <span className="backslash">//</span> Google Fonts <span className="backslash">//</span> Font Awesome <span className="backslash">//</span> Adobe Photoshop Elements                  
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
              <figure className="image is-2by1 mobile-only">
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
  </div>)

}

export default ProjectTripBit