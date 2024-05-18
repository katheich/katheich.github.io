import './halfPage.css';
import './Projects.css';
import CookingImage from '../assets/casual-life-3d-avocado-and-orange-slices-on-cutting-board.png';
import CFGWinners from '../assets/logos/cfgwinners.png';

export function ProjectWNWN() {
  return (
    <div className="section">
      <div className="sectionContainer right">
        <div className="sectionImageContainer">
          <img
            src={CookingImage}
            className="sectionImage"
            alt="avocado and orange slices on cutting board"
          />
        </div>
        <div className="sectionText">
          <div className="titleWithIcon wnwn">
            <img className="winner" src={CFGWinners} alt="" />
            <div className="sectionTitle">WasteNotWantNot</div>
          </div>
          <div className="text">
            <p>
              WasteNotWantNot is a recipe and food sharing platform. The project
              was chosen as the winning submission for the{' '}
              <a
                href="https://www.linkedin.com/events/codefirstgirls-hackfromhome/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code First Girls: Hack From Home
              </a>{' '}
              hackathon in May 2020.
            </p>
            <p>Created in a team of four over the course of one month.</p>
            <p>
              Find out more on{' '}
              <a
                href="https://github.com/ajames14/cfg-hackathon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
