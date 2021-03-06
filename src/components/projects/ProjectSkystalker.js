import React from 'react'

import Transparency from '../../images/transparency.png'

const ProjectSkystalker = () => {

  return (<div className="tile is-ancestor">
    <div className="tile is-6 is-vertical">
      <div className="tile">
        <div className="tile is-parent">
          <div className="tile is-child box is-paddingless">           
            <figure className="image desktop-only" id="logo">
              <img src="https://i.imgur.com/yOU9T6j.png" />
            </figure>
            <figure className="image is-2by1 mobile-only" id="logo">
              <img src="https://i.imgur.com/xuURSM3.png" />
            </figure>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <div className="title is-size-5-desktop is-size-4-mobile">
              <span className="backslash">// </span>
              Skystalker
            </div>
            <div className="links has-text-centered">
              <a href="https://github.com/katheich/skystalker" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github is-size-4"></i></a>
              <a href="https://kathrineichinger.com/skystalker/" className="link" target="_blank" rel="noopener noreferrer"><i className="fas fa-link is-size-4"></i></a>
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            Extra-curricular project at GA to create a React app using data from any API of our choice, to be completed individually over one weekend.
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
            On the basis of the OpenSky API, built a React app that shows the current number of planes in the sky above London and comparing that number to the total number of planes above entire countries.	                  
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              <span className="has-text-weight-bold">Tech used:</span> React.js <span className="backslash">//</span> OpenSky API <span className="backslash">//</span> Anime.js <span className="backslash">//</span> Webpack <span className="backslash">//</span> Bulma <span className="backslash">//</span> SCSS <span className="backslash">//</span> BoundingBox
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

export default ProjectSkystalker