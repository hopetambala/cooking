import { CSSProperties } from "react";
import { randomUUID } from "crypto";
import styles from "./Adslot.module.css";

type CSSProps = Pick<CSSProperties, "height" | "width">;

interface AdSlotProps extends CSSProps {
  name: string;
  type: "in-content" | "sidebar" | "in-recipe" |"sidebar--sticky";
  children?: React.ReactNode;
  classNames?: string;
}

const AdSlot = ({
  name,
  classNames,
  children,
  type,
  ...props
}: AdSlotProps) => {
  const id = `ad-slot-${randomUUID()}`;
  const classes = [styles[`ad-slot--${type}`], styles["ad-slot"]];
  const clxName = classes.join(" ");
  console.info("AdSlot", { name, id, clxName, type });
  return (
    <div id={id} className={clxName} style={{ ...props }}>
      {children}
    </div>
  );
};

export default AdSlot;
