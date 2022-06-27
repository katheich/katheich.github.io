import styles from "./Sections.module.css";

import { isHomePage } from "../helpers/isHomePage";

import About from "./About";
import Skills from "./Skills";

function Sections({ page, onPageLeft, onPageRight }) {
  return (
    <div className={styles.sectionContainer}>
      {isHomePage(page) ? (
        <></>
      ) : (
        <i
          className={`fa-solid fa-angle-left ${styles.arrow}`}
          onClick={onPageLeft}
        ></i>
      )}
      <About page={page} />
      <Skills page={page} />
      <i
        className={`fa-solid fa-angle-right ${styles.arrow}`}
        onClick={onPageRight}
      ></i>
    </div>
  );
}

export default Sections;
