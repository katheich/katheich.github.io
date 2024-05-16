import './common.css';
import './Projects.css';
import ProjectsImage from '../assets/3d-casual-life-business-woman-working-on-laptop-while-sitting-on-floor.png';
import DefconImage from '../assets/3d-casual-life-error-warning-on-laptop-background.png';
import RooLogo from '../assets/deliveroo-logo.svg';

export function Projects1() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionContent">
          <div className="sectionHalf">
            {' '}
            <div className="sectionImageContainer">
              {' '}
              <img
                src={ProjectsImage}
                className="sectionImage"
                alt="woman working on laptop while sitting on floor"
              />
            </div>
            <div className="projectsTitle">Selected Projects</div>
          </div>
          <div className="sectionHalf">
            {' '}
            <div className="sectionText">
              <div className="titleWithIcon defcon">
                <div className="sectionTitle">DEFCON</div>
                <img className="roo" src={RooLogo} alt="" />
              </div>
              <div className="text">
                <p>
                  While I cannot share my work done during employments, I wrote
                  a public blog post about one of my main projects at Deliveroo.
                </p>
                <p>
                  DEFCON is Deliveroo's incident management toolkit, which the
                  SRE Team started working on to replace the existing
                  maintenance mode tooling.
                </p>
                <p>
                  You can read about our main considerations and lessons learned
                  on the{' '}
                  <a
                    href="https://deliveroo.engineering/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deliveroo Engineering Blog
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="sectionImageContainer right">
              <img
                src={DefconImage}
                className="sectionImage"
                alt="error warning on laptop background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
