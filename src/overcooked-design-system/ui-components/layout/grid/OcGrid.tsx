import React from "react";
import styles from "./OcGrid.module.css";

interface OcGridProps {
  children?: React.ReactNode;
  columnGapSpacing?: "none" | "s" | "m" | "l";
  className?: string;
}
const OcGrid = ({ children, columnGapSpacing, className }: OcGridProps) => {
  const classNames = [`grid ${styles.grid}`];

  if (columnGapSpacing)
    classNames.push(
      `column_gap_spacing--${columnGapSpacing} ${styles[`grid-column-gap-${columnGapSpacing}`]}`
    );
  if (className) classNames.push(className);
  return <div className={classNames.join(" ")}>{children}</div>;
};

export default OcGrid;
