import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Kathrin Eichinger</div>
      <div className={styles.subtitle}>Software Developer</div>
    </header>
  );
}
