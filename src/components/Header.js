import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      Kathrin Eichinger
      <hr noshade className={styles.line}></hr>
      <div className={styles.subtitle}>Software Developer</div>
    </header>
  );
}

export default Header;
