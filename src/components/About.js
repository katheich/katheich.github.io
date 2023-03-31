import sectionStyles from "./Sections.module.css";
import aboutStyles from "./About.module.css";

export function About() {
  return (
    <div
      className={`${sectionStyles.sectionContainer} ${aboutStyles.aboutSection}`}
    >
      <div className={sectionStyles.sectionHeader}>About me</div>
      <div className={sectionStyles.sectionText}>
        <p>I am a software developer based in London.</p>
        <p>
          My experience is mainly in web development and data analysis, coming
          from a background in economic consulting. Thriving in a collaborative
          environment and bringing with me an incessant need to understand
          “why”, I always look for opportunities to learn from and share my
          knowledge with others.
        </p>
        <p>
          My qualifications include a Master's degree in economics from Bocconi
          University and completing General Assembly's Software Engineering
          Immersive bootcamp.
        </p>
        <p>
          I have volunteered with Code First Girls to teach the Introduction to
          Python course and have run the London Landmarks Half Marathon
          fundraising for WWF.
        </p>
        <p>Explore my full experience and projects on Linkedin and Github:</p>
        <a
          className={aboutStyles.social}
          href="https://www.linkedin.com/in/kathrineichinger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className={aboutStyles.social}
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
