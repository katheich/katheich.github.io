import './halfPage.css';
import CatImage from '../assets/3d-casual-life-cat-lies-on-document.png';
import CatIcon from '../assets/icons/cat.svg';
import PandaIcon from '../assets/icons/panda.svg';
import PythonIcon from '../assets/icons/python.svg';

export function Volunteering() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionText">
          <div className="sectionTitle">Volunteering</div>
          <div className="text">
            <div className="textLine">
              Some of the causes I have supported are animal welfare,
              environmental protection and female representation in tech.
            </div>
            <div className="textLine">
              <div className="icon">
                {' '}
                <img className="iconImg" src={CatIcon} alt="" />
              </div>
              <div>
                Cat Foster Carer at{' '}
                <a
                  href="https://www.battersea.org.uk/support-us/fostering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Battersea Dogs & Cats Home
                </a>
              </div>
            </div>
            <div className="textLine">
              <div className="icon">
                {' '}
                <img className="iconImg" src={PandaIcon} alt="" />
              </div>
              <div>
                Team Panda Runner at London Landmarks Half Marathon for{' '}
                <a
                  href="https://www.wwf.org.uk/events/running"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WWF
                </a>
              </div>
            </div>
            <div className="textLine">
              <div className="icon">
                {' '}
                <img className="iconImg" src={PythonIcon} alt="" />
              </div>
              <div>
                Volunteer Python Instructor at{' '}
                <a
                  href="https://codefirstgirls.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code First Girls
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sectionImageContainer right">
          <img
            src={CatImage}
            className="sectionImage"
            alt="cat lies on documents"
          />
        </div>
      </div>
    </div>
  );
}
