import styles from "./OCCard.module.css";

interface OCCardProps {
  headerText: string;
  headerInverted?: boolean;
  href?: string;
  children?: React.ReactNode;
}
const OCCard = ({
  headerText,
  headerInverted,
  href,
  children,
}: OCCardProps) => (
  <a
    href={href}
    className={styles["oc-card"]}
    target="_blank"
    rel="noopener noreferrer"
  >
    {!headerInverted && (
      <h3>
        {headerText} <span>-&gt;</span>
      </h3>
    )}
    {children}
    {headerInverted && (
      <h3>
        {headerText} <span>-&gt;</span>
      </h3>
    )}
  </a>
);

export default OCCard;
