"use client";

import { CSSProperties, FC, useState, useEffect } from "react";
import { randomUUID } from "crypto";
import { AdLoadingSkeleton } from "../";
import styles from "./AdSticky.module.css";

type CSSProps = Pick<CSSProperties, "height" | "width">;

interface AdStickyProps {
  position: "top" | "bottom" | "side";
}

const AdSticky: FC<CSSProps & AdStickyProps> = ({
  position,
  height = "90px",
  ...props
}) => {
  const id = `ad-sticky-${randomUUID()}`;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore This is a hack to avoid TypeScript errors, but isn't doing anything yet
      const { googletag } = window;

      googletag.cmd.push(() => {
        googletag.display(id);
      });

      setLoading(false);
    }, 3000);
  }, [id]);

  return (
    <div id={id} style={{ ...props }} className={styles["ad-sticky"]}>
      {loading ? <AdLoadingSkeleton /> : null}
    </div>
  );
};

export default AdSticky;
