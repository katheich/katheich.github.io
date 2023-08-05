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
          My experience is mainly in full-stack web development, currently working as a 
          Site Reliability Engineer (SRE) 
          at <a href="https://careers.deliveroo.co.uk/" target="_blank">Deliveroo</a>. 
          I also have a background in data analysis, with an education in economics and 
          experience in a more client-facing role 
          in <a href="https://www.rbbecon.com/" target="_blank">economic consulting</a>. 
        </p>
        <p>
          My qualifications include a Master's degree in economics 
          from <a href="https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/home/programs/master+of+science/economic+and+social+sciences/" target="_blank">Bocconi University</a> and 
          completing <a href="https://generalassemb.ly/education/software-engineering-immersive/london" target="_blank">General Assembly</a>'s 
          Software Engineering Immersive bootcamp.
        </p>
        <p>
          Thriving in a collaborative
          environment and bringing with me an incessant need to understand
          “why”, I always look for opportunities to learn from and share my
          knowledge with others.
        </p>
        <p>
          Outside of work, I have volunteered 
          with <a href="https://codefirstgirls.com/" target="_blank">Code First Girls</a> to 
          teach the Introduction to
          Python course and have run the London Landmarks Half Marathon
          fundraising 
          for <a href="https://www.wwf.org.uk/events/running" target="_blank">WWF</a>. I 
          am also a cat foster carer 
          at <a href="https://www.battersea.org.uk/support-us/fostering" target="_blank">Battersea Dogs & Cats Home</a>.
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
