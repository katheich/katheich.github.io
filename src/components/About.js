import styles from "./Section.module.css";

function About() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>About me</div>
      <div className={styles.sectionText}>
        <p>
          I am a software developer based in London and working in FilmTech.
        </p>
        <p>
          I have experience in web development and data-processing, with a
          background in economic consulting. Thriving in a collaborative
          environment and bringing with me an incessant need to understand
          “why”, I always look for opportunities to learn from and share my
          knowledge with others.
        </p>
        <p>Explore my full experience and projects on Linkedin and Github:</p>
        <a
          className={styles.social}
          href="https://www.linkedin.com/in/kathrineichinger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className={styles.social}
          href="https://github.com/katheich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
