import styles from "./Header.module.css";

function Header({ scroll }) {
  return (
    <header className={styles.header}>
      <div className={styles.filler}></div>
      <div className={styles.title}>Kathrin Eichinger</div>
      <div className={styles.subtitle}>Software Developer</div>
      <div className={styles.filler}>
        <div className={styles.headerFooter}>
          <i class={`fa-solid fa-angles-right ${styles.arrowRight}`}></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
