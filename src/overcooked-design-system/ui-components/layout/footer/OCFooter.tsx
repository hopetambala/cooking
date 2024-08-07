import styles from './OcFooter.module.css';

export default function OcFooter() {
  return (
    <footer className={styles["oc-footer__container"]}>
      <div>
        <small>{new Date().getFullYear()} Puente Cooking. All rights reserved &copy; </small>
      </div>
    </footer>
  );
}
