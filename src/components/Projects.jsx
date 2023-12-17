import sectionStyles from "./Sections.module.css";
import projectsStyles from "./Projects.module.css";
import WNWNLogo from "../images/wnwn-logo-winners.png";
import VMLogo from "../images/vm-logo.png";

export function Projects() {
  return (
    <div className={projectsStyles.projectsSection}>
      <div className={sectionStyles.sectionHeader}>Selected projects</div>
      <div className={projectsStyles.allProjectsContainer}>
        <div className={projectsStyles.projectContainer}>
          <img
            src={WNWNLogo}
            alt="WasteNotWantNot Logo"
            className={projectsStyles.projectLogo}
          />
          <div className={projectsStyles.techStack}>
            <i className="devicon-react-original"></i>
            <i className="devicon-django-plain"></i>
            <i className="devicon-postgresql-plain"></i>
          </div>
          <div className={sectionStyles.sectionText}>
            <p>
              WasteNotWantNot is a recipe and food sharing platform. The project
              was chosen as the winning submission for the{" "}
              <a
                href="https://www.linkedin.com/events/codefirstgirls-hackfromhome/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code First Girls: Hack From Home
              </a>{" "}
              hackathon in May 2020.
            </p>
            <p>
              The hackathon focused on building something to help people during
              the first lockdown due to Covid-19 in the UK. Our aim was to help
              users avoid the supermarkets, allow local communities to support
              each other in times of need and reduce food waste in the process.
            </p>
            <p>Created in a team of four over the course of one month.</p>
            <p className={projectsStyles.github}>
              Find out more on Github:{" "}
              <a
                className={projectsStyles.techStack}
                href="https://github.com/ajames14/cfg-hackathon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </p>
          </div>
        </div>
        <div className={projectsStyles.projectContainer}>
          <img
            src={VMLogo}
            alt="Vac-Man Logo"
            className={projectsStyles.projectLogo}
          />
          <div className={projectsStyles.techStack}>
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-css3-plain-wordmark"></i>
            <i className="devicon-javascript-plain"></i>
          </div>
          <div className={sectionStyles.sectionText}>
            <p>
              Vac-Man was my first project of the software engineering immersive
              course at General Assembly London.
            </p>
            <p>
              The assignment was to create a grid-based game to be rendered in
              the browser, using only HTML, CSS and JavaScript. Vac-Man is a
              recreation of Pac-Man, featuring a roomba and adverserial cats.
            </p>
            <p>
              The project was completed by myself within one week. You can still
              play it{" "}
              <a
                href="https://kathrineichinger.com/vac-man/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <p className={projectsStyles.github}>
              Find out more on Github:{" "}
              <a
                className={projectsStyles.techStack}
                href="https://github.com/katheich/vac-man"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
