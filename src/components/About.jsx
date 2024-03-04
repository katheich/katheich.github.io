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
        <p className={aboutStyles.aboutParagraph}>
          My experience is mainly in full-stack web development, coming from a
          background in economics.
        </p>
        <ul>
          <li>
            <div className={`${aboutStyles.bulletIcon}`}>🦘</div>
            <div>
              Site Reliability Engineer (SRE) at{" "}
              <a
                href="https://careers.deliveroo.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deliveroo
              </a>{" "}
              (current)
            </div>
          </li>
          <li>
            <div className={`${aboutStyles.bulletIcon}`}>🎬</div>
            <div>
              Full-Stack Developer at{" "}
              <a
                href="https://www.ep.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entertainment Partners
              </a>
            </div>
          </li>
          <li>
            <div className={`${aboutStyles.bulletIcon}`}>📊</div>
            <div>
              Economic Consultant at{" "}
              <a
                href="https://www.rbbecon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RBB Economics
              </a>
            </div>
          </li>
        </ul>
        <p className={aboutStyles.aboutParagraph}>
          My qualifications include education in computer science and economics.
        </p>
        <ul>
          <li>
            <div className={`${aboutStyles.bulletIcon}`}>🖥️</div>
            <div>
              Master of Science in Computer Science from{" "}
              <a
                href="https://online.york.ac.uk/study-online/msc-computer-science-online/"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of York
              </a>{" "}
              (in progress)
            </div>
          </li>
          <li>
            <div className={`${aboutStyles.bulletIcon}`}>👩‍💻</div>
            <div>
              Software Engineering Immersive bootcamp at{" "}
              <a
                href="https://generalassemb.ly/education/software-engineering-immersive/london"
                target="_blank"
                rel="noopener noreferrer"
              >
                General Assembly
              </a>
            </div>
          </li>
          <li>
            <div className={`${aboutStyles.bulletIcon}`}>🎓</div>
            <div>
              Master of Science in Economics from{" "}
              <a
                href="https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/home/programs/master+of+science/economic+and+social+sciences/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bocconi University
              </a>
            </div>
          </li>
        </ul>

        <p className={aboutStyles.aboutParagraph}>
          Outside of work, some of the causes I support are animal welfare,
          environmental protection and female representation in tech.
        </p>
        <ul>
          <li>
            <div className={`${aboutStyles.bulletIcon}`}>🐱</div>
            <div>
              Cat Foster Carer at{" "}
              <a
                href="https://www.battersea.org.uk/support-us/fostering"
                target="_blank"
                rel="noopener noreferrer"
              >
                Battersea Dogs & Cats Home
              </a>
            </div>
          </li>
          <li>
            <div className={`${aboutStyles.bulletIcon}`}>🐼</div>
            <div>
              Team Panda Runner at London Landmarks Half Marathon for{" "}
              <a
                href="https://www.wwf.org.uk/events/running"
                target="_blank"
                rel="noopener noreferrer"
              >
                WWF
              </a>
            </div>
          </li>

          <li>
            <div className={`${aboutStyles.bulletIcon}`}>🐍</div>
            <div>
              Volunteer Python Instructor at{" "}
              <a
                href="https://codefirstgirls.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code First Girls
              </a>
            </div>
          </li>
        </ul>

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
          <i className="fa-brands fa-square-xing"></i>
        </a>
      </div>
    </div>
  );
}
