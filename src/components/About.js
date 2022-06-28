import sectionStyles from "./Sections.module.css";
import aboutStyles from "./About.module.css";

function About({ scroll }) {
  return (
    <div
      className={`${sectionStyles.sectionContainer} ${aboutStyles.aboutSection}`}
    >
      <div className={sectionStyles.sectionHeader}>About me</div>
      <div className={sectionStyles.sectionText}>
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
      <div className={aboutStyles.sectionFooter}>
        <i
          class={`fa-solid fa-angles-right ${aboutStyles.arrowRight} ${
            scroll < 100 ? "" : aboutStyles.arrowGone
          }`}
        ></i>
      </div>
    </div>
  );
}

export default About;
