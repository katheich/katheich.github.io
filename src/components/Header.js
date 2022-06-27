import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      Kathrin Eichinger
      <div className={styles.subtitle}>Software Developer</div>
    </header>
  );
}

export default Header;
