import styles from "./Header.module.css";

import { isHomePage } from "../helpers/isHomePage";

function Header({ page }) {
  return (
    <header className={isHomePage(page) ? styles.header : styles.footer}>
      Kathrin Eichinger
      <div className={styles.subtitle}>Software Developer</div>
    </header>
  );
}

export default Header;
