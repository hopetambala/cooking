import React from "react";
import styles from "./OcGrid.module.css";

interface OcGridProps {
  children?: React.ReactNode;
  position?: "left" | "center" | "right";
  spacing?: "extrasmall" |"small" | "medium" | "large" | "extralarge";
  className?: string;
}
const OcGrid = ({ children, position, spacing, className }: OcGridProps) => {
  const classNames = [`group ${styles.group}`];
  if (position) classNames.push(`${position} ${styles[position]}`);
  if (spacing)
    classNames.push(`spacing${spacing} ${styles[`spacing${spacing}`]}`);
  if (className) classNames.push(className);
  return <div className={classNames.join(" ")}>{children}</div>;
};

export default OcGrid;
