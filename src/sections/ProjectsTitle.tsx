import './halfPage.css';
import './Projects.css';
import ProjectsImage from '../assets/3d-casual-life-business-woman-working-on-laptop-while-sitting-on-floor.png';

export function ProjectsTitle() {
  return (
    <div className="section">
      <div className="sectionContainer titleSection">
        <div className="projectsTitle">Selected Projects</div>
        <div className="sectionImageContainer">
          <img
            src={ProjectsImage}
            className="sectionImage"
            alt="woman working on laptop while sitting on floor"
          />
        </div>
      </div>
    </div>
  );
}
