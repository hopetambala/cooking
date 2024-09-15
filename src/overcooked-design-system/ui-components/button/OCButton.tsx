import styles from "./OCButton.module.css";

interface OCButtonProps {
  children: React.ReactNode;
  href?: string;
}
const OCButton = ({ children, ...props }: OCButtonProps) => {
  return <button {...props} className={styles['oc-button']}>{children}</button>;
};

export default OCButton;
