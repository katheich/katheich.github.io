import React from 'react'

import Transparency from '../../images/projects/transparency.png'
import WNWN from '../../images/projects/wnwn.png'
import WNWNVert from '../../images/projects/wnwn-vert.png'

const ProjectWNWN = () => {
  return (<div className="tile is-ancestor">
    <div className="tile is-6 is-vertical">
      <div className="tile">
        <div className="tile is-parent">
          <div className="tile is-child box">           
            <figure className="image desktop-only" id="logo">
              <img src={WNWNVert} />
            </figure>
            <figure className="image is-2by1 mobile-only" id="logo">
              <img src={WNWN} />
            </figure>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <div className="title is-size-5-desktop is-size-4-mobile">
              <span className="backslash">// </span>
              WASTE<span className="has-text-weight-light">NOT</span>WANT<span className="has-text-weight-light">NOT</span>
            </div>
            <div className="links has-text-centered">
              <a href="https://github.com/ajames14/cfg-hackathon" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
              <a href="https://waste-not-want-not.herokuapp.com" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            Project created in a team of four for the <span className="is-italic">Code First: Girls Hack From Home</span> hackathon over the month of April 2020.        
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            In order battle food waste and shortages during the Covid-19 lockdown, we built a Django app with a React front-end that allows users to search recipes based on the ingredients they have at home. It also allows user to connect to others nearby based on their postcode to discuss exchanging ingredients (while respecting social distancing guidelines).                  
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              <span className="has-text-weight-bold	">Tech used:</span> Django <span className="backslash">//</span> React.js <span className="backslash">//</span> Heroku <span className="backslash">//</span> PostgreSQL <span className="backslash">//</span> Spoonacular Food API  <span className="backslash">//</span> FileStack API <span className="backslash">//</span> SCSS <span className="backslash">//</span> Bulma                 
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

export default ProjectWNWN