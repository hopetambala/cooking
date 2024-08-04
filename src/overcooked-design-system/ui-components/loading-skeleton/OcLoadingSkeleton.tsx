import { FC } from "react";
import styles from "./OcLoadingSkeleton.module.css";

const LoadingSkeleton: FC<{}> = (props) => {
  return (
    <div {...props} className={styles.container}>
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

export default LoadingSkeleton;
