import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img
          src="/logo-1.png"
          alt="Julia Kombucha Logo"
          className={styles.logo}
        />
        Julia Kombucha 2023
      </footer>
    </>
  );
}
