import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Kathrin Eichinger</div>
      <div className={styles.subtitle}>Software Developer</div>
    </header>
  );
}

export default Header;
