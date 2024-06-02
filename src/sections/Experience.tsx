import './halfPage.css';
import WorkImage from '../assets/3d-casual-life-monitor-and-other-office-stuff.png';
import FoodIcon from '../assets/icons/delivery.svg';
import MovieIcon from '../assets/icons/movie.svg';
import LawIcon from '../assets/icons/law.svg';

export function Experience() {
  return (
    <div className="section">
      <div className="sectionContainer right">
        <div className="sectionImageContainer">
          <img
            src={WorkImage}
            className="sectionImage"
            alt="life monitor and other office stuff"
          />
        </div>
        <div className="sectionText">
          <div className="sectionTitle">Experience</div>
          <div className="text">
            <div className="textLine">
              <div>
                Site Reliability Engineer (SRE) at{' '}
                <a
                  href="https://careers.deliveroo.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deliveroo
                </a>{' '}
                (current)
              </div>
              <div className="icon">
                {' '}
                <img className="iconImg" src={FoodIcon} alt="" />
              </div>
            </div>
            <div className="textLine">
              <div>
                Full-Stack Developer at{' '}
                <a
                  href="https://www.ep.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entertainment Partners
                </a>
              </div>
              <div className="icon">
                {' '}
                <img className="iconImg" src={MovieIcon} alt="" />
              </div>
            </div>
            <div className="textLine">
              <div>
                Economic Consultant at{' '}
                <a
                  href="https://www.rbbecon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RBB Economics
                </a>
              </div>
              <div className="icon">
                {' '}
                <img className="iconImg" src={LawIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
