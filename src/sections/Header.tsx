import './fullPage.css';
import './Header.css';
import HeaderImage from '../assets/3d-casual-life-young-woman-at-work-with-laptop-writing.png';

export function Header() {
  return (
    <div className="fullPage">
      <div className="fullPageContainer">
        <div className="headerContent">
          <div className="title">
            <div className="name">Kathrin Eichinger</div>
            <div className="subtitle">Software Developer</div>
          </div>
          <div className="headerImageContainer">
            <img
              src={HeaderImage}
              className="headerImage"
              alt="woman at work with laptop writing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
