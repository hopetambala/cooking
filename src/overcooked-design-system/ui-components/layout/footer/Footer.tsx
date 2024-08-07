import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles["oc-footer__container"]}>
      <div>
        <small>{new Date().getFullYear()} Puente Cooking. All rights reserved &copy; </small>
      </div>
    </footer>
  );
}
