import React from 'react'

import Transparency from '../../images/transparency.png'

const GeneralProject = ({ data }) => {
  return (<div className="tile is-ancestor">
    <div className="tile is-6 is-vertical">
      <div className="tile">
        <div className="tile is-parent">
          <div className={`tile is-child box ${data['desktop_images']['logo']['padding'] ? '' : 'is-paddingless'}`}>           
            <figure className="image desktop-only" id="logo">
              <img src={data['desktop_images']['logo']['url']} />
            </figure>
            <figure className="image is-2by1 mobile-only" id="logo">
              <img src={data['mobile_images']['logo']['url']} />
            </figure>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <div className="title is-size-5-desktop is-size-4-mobile">
              <span className="backslash">// </span>
              {data['title']}
            </div>
            <div className="links has-text-centered">
              <a 
                href={data['links']['github']} 
                className="github" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-github is-size-4"></i>
              </a>
              <a 
                href={data['links']['project']} 
                className="link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fas fa-link is-size-4"></i>
              </a>
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              {data['paragraph_1']}        
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              {data['paragraph_2']}                 
            </div>
            <br />
            <div className="text is-size-7-desktop is-size-6-mobile">
              <div className="tech has-text-centered">
                {data['tech_icons'].map((icon, index) => {
                  return <i className={icon} key={index}></i>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box is-paddingless">
          <figure className="image is-2by1 desktop-only">
            <img 
              className="screenshot" 
              src={Transparency} 
              style={
                { 
                  backgroundImage: `url(${data['desktop_images']['bottom']['url']})`, 
                  backgroundPosition: data['desktop_images']['bottom']['position'] 
                }
              }
            />
          </figure> 
          <figure className="image is-3by2 mobile-only">
            <img 
              className="screenshot" 
              src={Transparency} 
              style={
                { 
                  backgroundImage: `url(${data['mobile_images']['bottom']['url']})`, 
                  backgroundPosition: data['mobile_images']['bottom']['position'] 
                }
              } 
            />
          </figure> 
        </div>
      </div>

    </div>
    <div className="tile is-6 ">
      <div className="tile is-vertical">
        <div className="tile is-parent">
          <div className="tile is-child box is-paddingless">
            <figure className="image is-3by2">
              <img 
                className="screenshot" 
                src={Transparency} 
                style={
                  { 
                    backgroundImage: `url(${data['desktop_images']['main']['url']})`, 
                    backgroundPosition: data['desktop_images']['main']['position'] 
                  }
                } 
              />
            </figure> 
          </div>
        </div>
        <div className="tile">
          <div className="tile is-parent">
            <div className="tile is-child box is-paddingless">
              <figure className="image is-2by3 desktop-only">
                <img 
                  className="screenshot" 
                  src={Transparency} 
                  style={
                    { 
                      backgroundImage: `url(${data['desktop_images']['vertical_1']['url']})`, 
                      backgroundPosition: data['desktop_images']['vertical_1']['position'] 
                    }
                  } 
                />
              </figure>
              <figure className="image is-2by1 mobile-only">
                <img 
                  className="screenshot" 
                  src={Transparency} 
                  style={
                    { 
                      backgroundImage: `url(${data['mobile_images']['three_verticals']['url']})`, 
                      backgroundPosition: data['mobile_images']['three_verticals']['position'] 
                    }
                  } 
                />
              </figure>                   
            </div>
          </div>
          <div className="tile is-parent desktop-only">
            <div className="tile is-child box is-paddingless">
              <figure className="image is-2by3">
                <img 
                  className="screenshot" 
                  src={Transparency} 
                  style={
                    { 
                      backgroundImage: `url(${data['desktop_images']['vertical_2']['url']})`, 
                      backgroundPosition: data['desktop_images']['vertical_2']['position'] 
                    }
                  } 
                />
              </figure> 
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>)

}

export default GeneralProject