import styles from "./Sections.module.css";

function Skills() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>Tech I've worked with</div>
      <div className={styles.sectionText}>
        <i className={`devicon-python-plain ${styles.skill}`}></i>
        <i className={`devicon-javascript-plain ${styles.skill}`}></i>
        <i className={`devicon-react-original ${styles.skill}`}></i>
        <i className={`devicon-docker-plain ${styles.skill}`}></i>
        <i className={`devicon-postgresql-plain ${styles.skill}`}></i>
        <i className={`devicon-sqlalchemy-plain ${styles.skill}`}></i>
      </div>
    </div>
  );
}

export default Skills;
