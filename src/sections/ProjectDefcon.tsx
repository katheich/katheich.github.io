import './halfPage.css';
import './Projects.css';
import ErrorImage from '../assets/3d-casual-life-error-warning-on-laptop-background.png';
import RooLogo from '../assets/deliveroo-logo.svg';

export function ProjectDefcon() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionText">
          <div className="titleWithIcon defcon">
            <div className="sectionTitle">DEFCON</div>
            <img className="roo" src={RooLogo} alt="" />
          </div>
          <div className="text">
            <p>
              While I cannot share my work done during employments, I wrote a
              public blog post about one of my main projects at Deliveroo.
            </p>
            <p>
              DEFCON is Deliveroo's incident management toolkit, which the SRE
              Team started working on to replace the existing maintenance mode
              tooling.
            </p>
            <p>
              You can read about our main considerations and lessons learned on
              the{' '}
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
            src={ErrorImage}
            className="sectionImage"
            alt="error warning on laptop background"
          />
        </div>
      </div>
    </div>
  );
}
