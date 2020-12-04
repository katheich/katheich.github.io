import React from 'react'

import Transparency from '../../images/transparency.png'

const ProjectVacMan = () => {

  return (   <div className="tile is-ancestor">
    <div className="tile is-6 is-vertical">
      <div className="tile">
        <div className="tile is-parent">
          <div className="tile is-child box">           
            <figure className="image is-1by2 desktop-only" id="logo">
              <img src="https://i.imgur.com/8AB3XGU.png" />
            </figure>
            <figure className="image is-2by1 mobile-only" id="logo">
              <img src="https://i.imgur.com/7hofUMl.png" />
            </figure>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <div className="title is-size-5-desktop is-size-4-mobile">
              <span className="backslash">// </span>
              Vac-Man
            </div>
            <div className="links has-text-centered">
              <a href="https://github.com/katheich/vac-man" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
              <a href="https://kathrineichinger.com/vac-man/" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              First project at GA to build a grid-based game, to be completed individually in one week. 
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            I built a single-level version of Pac-Man using vanilla JavaScript, HTML and CSS. I also created the artwork.
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              <div className="tech has-text-centered">
                <i className="icon devicon-javascript-plain is-size-3"></i>
                <i className="icon devicon-html5-plain is-size-3"></i>
                <i className="icon devicon-css3-plain is-size-3"></i>
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

export default ProjectVacMan