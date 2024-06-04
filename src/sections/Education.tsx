import './halfPage.css';
import EducationImage from '../assets/casual-life-3d-books-graduation-hat-and-diploma-scroll.png';
import CSIcon from '../assets/icons/binary.svg';
import CodeIcon from '../assets/icons/code.svg';
import EconIcon from '../assets/icons/curve.svg';
import IdeaIcon from '../assets/icons/idea.svg';

export function Education() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionText">
          <div className="sectionTitle">Education</div>
          <div className="text">
            <div className="textLine">
              <div className="icon">
                {' '}
                <img className="iconImg" src={CSIcon} alt="" />
              </div>
              <div>
                Master of Science in Computer Science from{' '}
                <a
                  href="https://online.york.ac.uk/study-online/msc-computer-science-online/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of York
                </a>{' '}
                (in progress)
              </div>
            </div>
            <div className="textLine">
              <div className="icon">
                {' '}
                <img className="iconImg" src={CodeIcon} alt="" />
              </div>
              <div>
                Software Engineering Immersive bootcamp at{' '}
                <a
                  href="https://generalassemb.ly/education/software-engineering-immersive/london"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  General Assembly
                </a>
              </div>
            </div>
            <div className="textLine">
              <div className="icon">
                {' '}
                <img className="iconImg" src={EconIcon} alt="" />
              </div>
              <div>
                Master of Science in Economic and Social Sciences from{' '}
                <a
                  href="https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/home/programs/master+of+science/economic+and+social+sciences/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bocconi University
                </a>
              </div>
            </div>
            <div className="textLine">
              <div className="icon">
                {' '}
                <img className="iconImg" src={IdeaIcon} alt="" />
              </div>
              <div>
                Bachelor of Arts in Economics and Philosophy from{' '}
                <a
                  href="https://www.york.ac.uk/study/undergraduate/courses/bsc-economics-philosophy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of York
                </a>
              </div>
            </div>
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
  );
}
