import { ButtonHTMLAttributes } from "react";

interface OCButtonProps {
  children: React.ReactNode;
  href?: string;
}
const OCButton = ({ children, ...props}: OCButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default OCButton;
