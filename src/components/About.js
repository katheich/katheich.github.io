import { useState, useEffect } from "react";

import styles from "./Sections.module.css";

function About() {
  const [scroll, setScroll] = useState(0);

  function handleScroll() {
    setScroll(window.scrollX);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.sectionContainer} ${styles.aboutSection}`}>
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
          My qualifications include a Master's Degree in Economics from Bocconi
          University and completing General Assembly's Software Engineering
          Bootcamp.
        </p>
        <p>
          I have volunteered with Code First Girls to teach the Introduction to
          Python course to female and non-binary student from different academic
          backgrounds and have run the London Landmarks Half Marathon
          fundraising for WWF.
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
      <div className={styles.sectionFooter}>
        <i
          class={`fa-solid fa-angles-right ${styles.arrowRight} ${
            scroll < 100 ? "" : styles.arrowGone
          }`}
        ></i>
      </div>
    </div>
  );
}

export default About;
