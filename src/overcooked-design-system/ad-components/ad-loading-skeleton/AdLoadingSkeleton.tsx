import { FC } from "react";
import styles from "./AdLoadingSkeleton.module.css";
import { randomUUID } from "crypto";

const AdLoadingSkeleton: FC<{}> = (props) => {
  const id = `ad-loading-skeleton-${randomUUID()}`;

  return (
    <div id={id} {...props} className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.circle}></div>
        <div className={styles.textContainer}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
        </div>
      </div>
    </div>
  );
};

export default AdLoadingSkeleton;
