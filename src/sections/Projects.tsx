import './common.css';
import './Projects.css';
import GroceryImage from '../assets/casual-life-3d-paper-bag-full-of-groceries.png';
import GameImage from '../assets/casual-life-3d-old-game-controller.png';
import CFGWinners from '../assets/cfgwinners.png';

export function Projects() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionContent">
          <div className="sectionHalf">
            {' '}
            <div className="sectionImageContainer">
              {' '}
              <img
                src={GroceryImage}
                className="sectionImage"
                alt="paper bag full of groceries"
              />
            </div>
            <div className="sectionText right">
              <div className="wnwnTitle">
                <img className="winner" src={CFGWinners} alt="" />
                <div className="sectionTitle">WasteNotWantNot</div>
              </div>
              <div className="text">
                <p>
                  WasteNotWantNot is a recipe and food sharing platform. The
                  project was chosen as the winning submission for the{' '}
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
          <div className="sectionHalf">
            {' '}
            <div className="sectionText">
              <div className="sectionTitle">Vac-Man</div>
              <div className="text">
                <p>
                  Vac-Man was my first project of the software engineering
                  bootcamp at General Assembly.
                </p>
                <p>
                  The assignment was to create a grid-based game to be rendered
                  in the browser, using only HTML, CSS and JavaScript. Vac-Man
                  is a recreation of Pac-Man.
                </p>
                <p>
                  The project was completed by myself within one week. You can
                  still play it{' '}
                  <a
                    href="https://kathrineichinger.com/vac-man/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
                <p>
                  Find out more on{' '}
                  <a
                    href="https://kathrineichinger.com/vac-man/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="sectionImageContainer right">
              <img
                src={GameImage}
                className="sectionImage"
                alt="old game controller"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
