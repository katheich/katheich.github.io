import './fullPage.css';
import './Links.css';
import ContactImage from '../assets/3d-casual-life-student-girl-with-magnifying-glass.png';
import LinkedinLogo from '../assets/contact/linkedin.png';
import GithubLogo from '../assets/contact/github.png';
import XINGLogo from '../assets/contact/xing.png';

export function Links() {
  return (
    <div className="fullPage">
      <div className="linksContainer">
        <div className="linksSection">
          <div className="linksText">
            Explore my full experience and projects on Linkedin, Github or XING
            (German):
            <div className="contactLinks">
              <a
                className="social"
                href="https://www.linkedin.com/in/kathrineichinger"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinLogo} alt="" />
              </a>
              <a
                className="social"
                href="https://github.com/katheich"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GithubLogo} alt="" />
              </a>
              <a
                className="social"
                href="https://www.xing.com/profile/Kathrin_Eichinger3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={XINGLogo} alt="" />
              </a>
            </div>
          </div>
          <div className="linksImageContainer">
            <img
              src={ContactImage}
              className="linksImage"
              alt="woman with magnifying glass"
            />
          </div>
        </div>
        <div className="footer">
          © 2024 Kathrin Eichinger | Illustrations & icons by{' '}
          <a
            href="https://icons8.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons8
          </a>
        </div>
      </div>
    </div>
  );
}
