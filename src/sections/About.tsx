import './halfPage.css';
import TypewriterImage from '../assets/casual-life-3d-green-typewriter.png';

export function About() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionText">
          <div className="sectionTitle">About Me</div>
          <div className="text">
            <div className="textLine">
              I am a software developer based in London, UK.
            </div>
          </div>
        </div>
        <div className="sectionImageContainer right">
          <img
            src={TypewriterImage}
            className="sectionImage"
            alt="green typewriter"
          />
        </div>
      </div>
    </div>
  );
}
