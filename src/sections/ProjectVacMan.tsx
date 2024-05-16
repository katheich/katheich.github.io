import './halfPage.css';
import './Projects.css';
import GameImage from '../assets/casual-life-3d-old-game-controller.png';

export function ProjectVacMan() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionText">
          <div className="sectionTitle">Vac-Man</div>
          <div className="text">
            <p>
              Vac-Man was my first project of the software engineering bootcamp
              at General Assembly.
            </p>
            <p>
              The assignment was to create a grid-based game to be rendered in
              the browser, using only HTML, CSS and JavaScript. Vac-Man is a
              recreation of Pac-Man.
            </p>
            <p>
              The project was completed by myself within one week. You can still
              play it{' '}
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
  );
}
