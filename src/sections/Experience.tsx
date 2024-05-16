import './halfPage.css';
import WorkImage from '../assets/3d-casual-life-monitor-and-other-office-stuff.png';

export function Experience() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionImageContainer">
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
    </div>
  );
}
