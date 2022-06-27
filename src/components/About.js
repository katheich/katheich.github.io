import styles from "./Sections.module.css";

import { isHomePage } from "../helpers/isHomePage";

function About({ page }) {
  return (
    <div
      className={isHomePage(page) ? styles.homeSection : styles.fullSections}
    >
      <div className={styles.sectionHeader}>About me</div>
      <div className={styles.sectionText}>
        <p>
          I am a software developer based in London and working in FilmTech.
        </p>
        <p>
          My experience is mainly in web development and data-processing, coming
          from a background in economic consulting. Thriving in a collaborative
          environment and bringing with me an incessant need to understand
          “why”, I always look for opportunities to learn from and share my
          knowledge with others.
        </p>
        <p>
          I hold a Master's Degree in Economics from Bocconi University and
          completed General Assembly's Software Engineering Bootcamp.
        </p>
        <p>
          After being part of the winning team in Code First Girls'
          #HackFromHome Hackathon in 2020, I have volunteered with Code First
          Girls to teach the Introduction to Python course to female and
          non-binary student from different academic backgrounds.
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
