import './halfPage.css';
import TechImage from '../assets/3d-casual-life-windows-with-developer-code-symbols.png';
import { TechSkills } from '../components/TechSkills.tsx';

export function Tech() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="sectionImageContainer">
          {' '}
          <img
            src={TechImage}
            className="sectionImage"
            alt="windows with developer code symbols"
          />
        </div>
        <div className="sectionText right">
          <div className="sectionTitle">Tech Stack</div>
          <TechSkills />
        </div>
      </div>
    </div>
  );
}
