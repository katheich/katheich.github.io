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
          My experience is mainly in full-stack web development, coming from a
          background in economics.
          <ul>
            <li>
              🦘 Site Reliability Engineer (SRE) at{" "}
              <a
                href="https://careers.deliveroo.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deliveroo
              </a>{" "}
              (current)
            </li>
            <li>
              🎬 Full-Stack Developer at{" "}
              <a
                href="https://www.ep.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entertainment Partners
              </a>
            </li>
            <li>
              📊 Economic Consultant at{" "}
              <a
                href="https://www.rbbecon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RBB Economics
              </a>
            </li>
          </ul>
        </p>
        <p>
          My qualifications include education in computer science and economics.
          <ul>
            <li>
              🖥️ Master's degree in Computer Science from{" "}
              <a
                href="https://online.york.ac.uk/study-online/msc-computer-science-online/"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of York
              </a>{" "}
              (incoming March '24)
            </li>
            <li>
              🎓 Master's degree in Economics from{" "}
              <a
                href="https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/home/programs/master+of+science/economic+and+social+sciences/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bocconi University
              </a>
            </li>
            <li>
              👩‍💻 Software Engineering Immersive bootcamp at{" "}
              <a
                href="https://generalassemb.ly/education/software-engineering-immersive/london"
                target="_blank"
                rel="noopener noreferrer"
              >
                General Assembly
              </a>{" "}
            </li>
          </ul>
        </p>
        <p>
          Outside of work, some of the causes I support are animal welfare,
          environmental protection and female representation in tech.
          <ul>
            <li>
              🐱 Cat Foster Carer at{" "}
              <a
                href="https://www.battersea.org.uk/support-us/fostering"
                target="_blank"
                rel="noopener noreferrer"
              >
                Battersea Dogs & Cats Home
              </a>
            </li>
            <li>
              🐼 Team Panda Runner at London Landmarks Half Marathon for{" "}
              <a
                href="https://www.wwf.org.uk/events/running"
                target="_blank"
                rel="noopener noreferrer"
              >
                WWF
              </a>
            </li>

            <li>
              🐍 Volunteer Python Instructor at{" "}
              <a
                href="https://codefirstgirls.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code First Girls
              </a>
            </li>
          </ul>
        </p>
        <p>
          Explore my full experience and projects on Linkedin, Github or XING
          (German):
        </p>
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
        <a
          className={aboutStyles.social}
          href="https://www.xing.com/profile/Kathrin_Eichinger3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-square-xing"></i>
        </a>
      </div>
    </div>
  );
}
