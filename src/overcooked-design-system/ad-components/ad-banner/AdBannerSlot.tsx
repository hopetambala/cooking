"use client";

import { randomUUID } from "crypto";
import { CSSProperties, FC, useState, useEffect } from "react";
import { AdLoadingSkeleton } from "@/overcooked-design-system/ad-components";

// type CSSProps = Pick<CSSProperties, "height" | "width">;

// interface AdBannerProps extends CSSProps {}

// const AdBanner: FC<AdBannerProps> = (props) => {

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerTypes) => {
  const id = `ad-banner-${randomUUID()}`;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     // @ts-ignore
  //     const { googletag } = window;

  //     googletag.cmd.push(() => {
  //       googletag.display(id);
  //     });

  //     setLoading(false);
  //   }, 3000);
  // }, [id]);
  if (loading) return <AdLoadingSkeleton />;

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-123456789"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  );
};

export default AdBanner;
