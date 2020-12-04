import React from 'react'

import Transparency from '../../images/projects/transparency.png'

const ProjectWNWN = () => {
  return (<div className="tile is-ancestor">
    <div className="tile is-6 is-vertical">
      <div className="tile">
        <div className="tile is-parent">
          <div className="tile is-child box">           
            <figure className="image desktop-only" id="logo">
              <img src="https://i.imgur.com/xAXXk2v.png" />
            </figure>
            <figure className="image is-2by1 mobile-only" id="logo">
              <img src="https://i.imgur.com/QZF6wuG.png" />
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
            Project chosen as the winning submission for the <a href="https://www.linkedin.com/events/codefirstgirls-hackfromhome/" className="textlink" target="_blank" rel="noopener noreferrer"><span className="is-italic">Code First: Girls Hack From Home</span></a> hackathon. Created in a team of four over the month of April 2020.        
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            Combatting food waste and shortages during the Covid-19 lockdown, we built a fullstack app that allows users to search recipes based on the ingredients they have at home, using the Spoonacular API. User can also connect to others nearby to arrange the exchange of ingredients (while respecting social distancing guidelines).                  
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              <div className="tech has-text-centered">
                <i className="icon devicon-react-original is-size-3"></i>
                <i className="icon devicon-django-plain is-size-2"></i>
                <i className="icon devicon-postgresql-plain is-size-3"></i>
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

export default ProjectWNWN