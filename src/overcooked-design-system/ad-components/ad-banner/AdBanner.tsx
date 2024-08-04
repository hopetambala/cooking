"use client"

import { randomUUID } from "crypto";
import { CSSProperties, FC, useState, useEffect } from "react";
import {AdLoadingSkeleton} from "@/overcooked-design-system/ad-components";

type CSSProps = Pick<CSSProperties, "height" | "width">;

interface AdBannerProps extends CSSProps {}

const AdBanner: FC<AdBannerProps> = (props) => {
  const id = `ad-banner-${randomUUID()}`;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      const { googletag } = window;

      googletag.cmd.push(() => {
        googletag.display(id);
      });

      setLoading(false);
    }, 3000);
  }, [id]);

  // It's a good idea to use an `id` that can't be easily detected as a banneable banner.
  // That way adblockers won't remove your fallback state too and you could show a custom
  // message in that case if the ad is blocked
  return (
    <div id={id} style={{ ...props }}>
      {loading ? <AdLoadingSkeleton /> : null}
    </div>
  );
};

export default AdBanner;
