import sectionStyles from "./Sections.module.css";
import skillsStyles from "./Skills.module.css";

import ArcGISLogo from "./SVGs/ArcGIS";
import StataLogo from "./SVGs/Stata";
import DataDogLogo from "./SVGs/DataDog";

function Skills() {
  return (
    <div className={sectionStyles.sectionContainer}>
      <div className={sectionStyles.sectionHeader}>Tech I've worked with</div>
      <div className={skillsStyles.skillsContainer}>
        {/* Python */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.greenSkill}`}
        >
          <div className={skillsStyles.skillName}>Python</div>
          <i className={`devicon-python-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* JavaScript */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.orangeSkill}`}
        >
          <div className={skillsStyles.skillName}>JavaScript</div>
          <i className={`devicon-javascript-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* TypeScript */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.blueSkill}`}
        >
          <div className={skillsStyles.skillName}>TypeScript</div>
          <i className={`devicon-typescript-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* Ruby */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.greenSkill}`}
        >
          <div className={skillsStyles.skillName}>Ruby</div>
          <i className={`devicon-ruby-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* PostgreSQL */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.orangeSkill}`}
        >
          <div className={skillsStyles.skillName}>Postgre&shy;SQL</div>
          <i className={`devicon-postgresql-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* Docker */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.blueSkill}`}
        >
          <div className={skillsStyles.skillName}>Docker</div>
          <i className={`devicon-docker-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* AWS */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.greenSkill}`}
        >
          <div className={skillsStyles.skillName}>AWS</div>
          <i className={`fa-brands fa-aws ${skillsStyles.skill}`}></i>
        </div>

        {/* Terraform */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.orangeSkill}`}
        >
          <div className={skillsStyles.skillName}>Terraform</div>
          <i className={`devicon-terraform-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* DataDog */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.blueSkill}`}
        >
          <div className={skillsStyles.skillName}>DataDog</div>
          <figure className={`${skillsStyles.logoSVG} ${skillsStyles.skill}`}>
            <DataDogLogo />
          </figure>
        </div>

        {/* React */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.greenSkill}`}
        >
          <div className={skillsStyles.skillName}>React</div>
          <i className={`devicon-react-original ${skillsStyles.skill}`}></i>
        </div>

        {/* Node */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.orangeSkill}`}
        >
          <div className={skillsStyles.skillName}>Node.js</div>
          <i className={`devicon-nodejs-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* Django */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.blueSkill}`}
        >
          <div className={skillsStyles.skillName}>Django</div>
          <i className={`devicon-django-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* SASS */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.greenSkill}`}
        >
          <div className={skillsStyles.skillName}>Sass</div>
          <i className={`devicon-sass-original ${skillsStyles.skill}`}></i>
        </div>

        {/* Bootstrap */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.orangeSkill}`}
        >
          <div className={skillsStyles.skillName}>Bootstrap</div>
          <i className={`devicon-bootstrap-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* MongoDB */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.blueSkill}`}
        >
          <div className={skillsStyles.skillName}>MongoDB</div>
          <i className={`devicon-mongodb-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* Jupyter */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.greenSkill}`}
        >
          <div className={skillsStyles.skillName}>Jupyter</div>
          <i className={`devicon-jupyter-plain ${skillsStyles.skill}`}></i>
        </div>

        {/* Stata */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.orangeSkill}`}
        >
          <div className={skillsStyles.skillName}>Stata</div>
          <figure className={`${skillsStyles.logoSVG} ${skillsStyles.skill}`}>
            <StataLogo />
          </figure>
        </div>

        {/* ArcGIS Pro */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.blueSkill}`}
        >
          <div className={skillsStyles.skillName}>ArcGIS Pro</div>
          <figure className={`${skillsStyles.logoSVG} ${skillsStyles.skill}`}>
            <ArcGISLogo />
          </figure>
        </div>

        {/* LaTeX */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.greenSkill}`}
        >
          <div className={skillsStyles.skillName}>Latex</div>
          <i className={`devicon-latex-original ${skillsStyles.skill}`}></i>
        </div>

        {/* Matlab */}
        <div
          className={`${skillsStyles.singleSkillContainer} ${skillsStyles.orangeSkill}`}
        >
          <div className={skillsStyles.skillName}>Matlab</div>
          <i className={`devicon-matlab-plain ${skillsStyles.skill}`}></i>
        </div>
      </div>
    </div>
  );
}

export default Skills;
