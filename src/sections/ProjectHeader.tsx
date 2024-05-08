import './common.css';
import './ProjectHeader.css';
import ProjectHeaderImage from '../assets/3d-casual-life-business-woman-working-on-laptop-while-sitting-on-floor.png';

export function ProjectHeader() {
  return (
    <div className="section">
      <div className="sectionContainer">
        <div className="projectHeader">
          <div className="projectHeaderImageContainer">
            <img
              src={ProjectHeaderImage}
              className="projectHeaderImage"
              alt="woman working on laptop while sitting on floor"
            />
          </div>
          <div className="projectsTitle">Selected Projects</div>
        </div>
      </div>
    </div>
  );
}
