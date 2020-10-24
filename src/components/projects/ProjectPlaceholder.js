import React from 'react'

import Transparency from '../../images/projects/transparency.png'
import Place from '../../images/projects/placeholder.png'
import PlaceVert from '../../images/projects/placeholder-vert.png'

const ProjectPlaceholder = () => {

  return (    <div className="tile is-ancestor">
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
            <div className="title is-size-5-desktop is-size-4-mobile">
              <span className="backslash">// </span>
              Placeholder
            </div>
            <div className="links has-text-centered">
              <a href="https://github.com/katheich/placeholder" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
              <a href="https://ga-placeholder.herokuapp.com/" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            Third project at GA, tasked to create a full-stack application in a team of three and within one week.             
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            Built a React app that allows users to store favourite locations (e.g. restaurants, pubs, shops) in a MongoDB database hosted via Express.js, and displaying them using Mapbox. We also included a 'circles' feature, which allows users to add other users to their Cirlce and subsequently share their locations with them.                  
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              <div className="tech has-text-centered">
                <i className="icon devicon-react-original is-size-3"></i>
                <i className="icon devicon-express-original is-size-3"></i>
                <i className="icon devicon-nodejs-plain is-size-3"></i>
                <i className="icon devicon-mongodb-plain is-size-3"></i>
              </div>
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

export default ProjectPlaceholder