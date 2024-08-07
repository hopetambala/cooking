import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <section className={styles.header}>
      <div className={styles["title-wrapper"]}>
        <h1 className={styles["sweet-title"]}>
          <span data-text="Tropical">Tropical</span>
          <span data-text="Tastes">Tastes</span>
        </h1>
      </div>
    </section>
  );
};
