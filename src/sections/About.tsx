import './common.css';
import WorkImage from '../assets/3d-casual-life-monitor-and-other-office-stuff.png';
import EducationImage from '../assets/casual-life-3d-books-graduation-hat-and-diploma-scroll.png';

export function About() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionContent">
          <div className="sectionHalf">
            {' '}
            <div className="sectionImageContainer">
              {' '}
              <img
                src={WorkImage}
                className="sectionImage fullHeight"
                alt="life monitor and other office stuff"
              />
            </div>
            <div className="sectionText right">
              <div className="sectionTitle">Experience</div>
              <div className="text">
                <p>
                  Site Reliability Engineer (SRE) at{' '}
                  <a
                    href="https://careers.deliveroo.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deliveroo
                  </a>{' '}
                  (current)
                </p>
                <p>
                  Full-Stack Developer at{' '}
                  <a
                    href="https://www.ep.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entertainment Partners
                  </a>
                </p>
                <p>
                  Economic Consultant at{' '}
                  <a
                    href="https://www.rbbecon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RBB Economics
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="sectionHalf">
            {' '}
            <div className="sectionText">
              <div className="sectionTitle">Education</div>
              <div className="text">
                <p>
                  Master of Science in Computer Science from{' '}
                  <a
                    href="https://online.york.ac.uk/study-online/msc-computer-science-online/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of York
                  </a>{' '}
                  (in progress)
                </p>
                <p>
                  Software Engineering Immersive bootcamp at{' '}
                  <a
                    href="https://generalassemb.ly/education/software-engineering-immersive/london"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    General Assembly
                  </a>
                </p>
                <p>
                  Master of Science in Economic and Social Sciences from{' '}
                  <a
                    href="https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/home/programs/master+of+science/economic+and+social+sciences/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bocconi University
                  </a>
                </p>
                <p>
                  Bachelor of Arts in Economics and Philosophy from{' '}
                  <a
                    href="https://www.york.ac.uk/study/undergraduate/courses/bsc-economics-philosophy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of York
                  </a>
                </p>
              </div>
            </div>
            <div className="sectionImageContainer right">
              <img
                src={EducationImage}
                className="sectionImage"
                alt="books graduation hat and diploma scroll"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
