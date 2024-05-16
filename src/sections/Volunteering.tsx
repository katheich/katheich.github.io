import './halfPage.css';
import CatImage from '../assets/3d-casual-life-cat-lies-on-document.png';

export function Volunteering() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionText">
          <div className="sectionTitle">Volunteering</div>
          <div className="text">
            <p>
              Some of the causes I have supported are animal welfare,
              environmental protection and female representation in tech.
            </p>
            <p>
              Cat Foster Carer at{' '}
              <a
                href="https://www.battersea.org.uk/support-us/fostering"
                target="_blank"
                rel="noopener noreferrer"
              >
                Battersea Dogs & Cats Home
              </a>
            </p>
            <p>
              Team Panda Runner at London Landmarks Half Marathon for{' '}
              <a
                href="https://www.wwf.org.uk/events/running"
                target="_blank"
                rel="noopener noreferrer"
              >
                WWF
              </a>
            </p>
            <p>
              Volunteer Python Instructor at{' '}
              <a
                href="https://codefirstgirls.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code First Girls
              </a>
            </p>
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
