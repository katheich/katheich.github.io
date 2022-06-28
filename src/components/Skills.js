import styles from "./Sections.module.css";

import ArcGISLogo from "./SVGs/ArcGIS";
import StataLogo from "./SVGs/Stata";

function Skills() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>Tech I've worked with</div>
      <div className={styles.skillsContainer}>
        {/* Python */}
        <div className={`${styles.singleSkillContainer} ${styles.greenSkill}`}>
          <div className={styles.skillName}>Python</div>
          <i className={`devicon-python-plain ${styles.skill}`}></i>
        </div>

        {/* JavaScript */}
        <div className={`${styles.singleSkillContainer} ${styles.orangeSkill}`}>
          <div className={styles.skillName}>JavaScript</div>
          <i className={`devicon-javascript-plain ${styles.skill}`}></i>
        </div>

        {/* React */}
        <div className={`${styles.singleSkillContainer} ${styles.blueSkill}`}>
          <div className={styles.skillName}>React</div>
          <i className={`devicon-react-original ${styles.skill}`}></i>
        </div>

        {/* TypeScript */}
        <div className={`${styles.singleSkillContainer} ${styles.greenSkill}`}>
          <div className={styles.skillName}>TypeScript</div>
          <i className={`devicon-typescript-plain ${styles.skill}`}></i>
        </div>

        {/* Docker */}
        <div className={`${styles.singleSkillContainer} ${styles.orangeSkill}`}>
          <div className={styles.skillName}>Docker</div>
          <i className={`devicon-docker-plain ${styles.skill}`}></i>
        </div>

        {/* PostgreSQL */}
        <div className={`${styles.singleSkillContainer} ${styles.blueSkill}`}>
          <div className={styles.skillName}>Postgre&shy;SQL</div>
          <i className={`devicon-postgresql-plain ${styles.skill}`}></i>
        </div>

        {/* AWS */}
        <div className={`${styles.singleSkillContainer} ${styles.greenSkill}`}>
          <div className={styles.skillName}>AWS</div>
          <i className={`fa-brands fa-aws ${styles.skill}`}></i>
        </div>

        {/* Terraform */}
        <div className={`${styles.singleSkillContainer} ${styles.orangeSkill}`}>
          <div className={styles.skillName}>Terraform</div>
          <i className={`devicon-terraform-plain ${styles.skill}`}></i>
        </div>

        {/* Node */}
        <div className={`${styles.singleSkillContainer} ${styles.blueSkill}`}>
          <div className={styles.skillName}>Node.js</div>
          <i className={`devicon-nodejs-plain ${styles.skill}`}></i>
        </div>

        {/* Django */}
        <div className={`${styles.singleSkillContainer} ${styles.greenSkill}`}>
          <div className={styles.skillName}>Django</div>
          <i className={`devicon-django-plain ${styles.skill}`}></i>
        </div>

        {/* SASS */}
        <div className={`${styles.singleSkillContainer} ${styles.orangeSkill}`}>
          <div className={styles.skillName}>Sass</div>
          <i className={`devicon-sass-original ${styles.skill}`}></i>
        </div>

        {/* Bootstrap */}
        <div className={`${styles.singleSkillContainer} ${styles.blueSkill}`}>
          <div className={styles.skillName}>Bootstrap</div>
          <i className={`devicon-bootstrap-plain ${styles.skill}`}></i>
        </div>

        {/* SQLAlchemy */}
        <div className={`${styles.singleSkillContainer} ${styles.greenSkill}`}>
          <div className={styles.skillName}>SQL&shy;Alchemy</div>
          <i className={`devicon-sqlalchemy-plain ${styles.skill}`}></i>
        </div>

        {/* SQLite */}
        <div className={`${styles.singleSkillContainer} ${styles.orangeSkill}`}>
          <div className={styles.skillName}>SQLite</div>
          <i className={`devicon-sqlite-plain ${styles.skill}`}></i>
        </div>

        {/* MongoDB */}
        <div className={`${styles.singleSkillContainer} ${styles.blueSkill}`}>
          <div className={styles.skillName}>MongoDB</div>
          <i className={`devicon-mongodb-plain ${styles.skill}`}></i>
        </div>

        {/* Jupyter */}
        <div className={`${styles.singleSkillContainer} ${styles.greenSkill}`}>
          <div className={styles.skillName}>Jupyter</div>
          <i className={`devicon-jupyter-plain ${styles.skill}`}></i>
        </div>

        {/* Stata */}
        <div className={`${styles.singleSkillContainer} ${styles.orangeSkill}`}>
          <div className={styles.skillName}>Stata</div>
          <figure className={`${styles.logoSVG} ${styles.skill}`}>
            <StataLogo />
          </figure>
        </div>

        {/* ArcGIS Pro */}
        <div className={`${styles.singleSkillContainer} ${styles.blueSkill}`}>
          <div className={styles.skillName}>ArcGIS Pro</div>
          <figure className={`${styles.logoSVG} ${styles.skill}`}>
            <ArcGISLogo />
          </figure>
        </div>

        {/* LaTeX */}
        <div className={`${styles.singleSkillContainer} ${styles.greenSkill}`}>
          <div className={styles.skillName}>Latex</div>
          <i className={`devicon-latex-original ${styles.skill}`}></i>
        </div>

        {/* Matlab */}
        <div className={`${styles.singleSkillContainer} ${styles.orangeSkill}`}>
          <div className={styles.skillName}>Matlab</div>
          <i className={`devicon-matlab-plain ${styles.skill}`}></i>
        </div>
      </div>
    </div>
  );
}

export default Skills;
