"use client";

import { useEffect } from "react";

type AdUnitTypes = {
  type: "display" | "in-feed" | "in-article";
};

type AdBannerDataTypes = {
  dataAdSlotId: string;
};

const ResponsiveAdBanner = ({
  dataAdSlotId,
}: {
  dataAdSlotId: AdBannerDataTypes["dataAdSlotId"];
}) => (
  <ins
    className="adsbygoogle"
    style={{ display: "block" }}
    data-ad-client="ca-pub-2020500067387547"
    data-ad-slot={dataAdSlotId}
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
);

const InArticleAdBanner = ({
  dataAdSlotId,
}: {
  dataAdSlotId: AdBannerDataTypes["dataAdSlotId"];
}) => (
  <ins
    className="adsbygoogle"
    style={{ display: "block", textAlign: "center" }}
    data-ad-layout="in-article"
    data-ad-format="fluid"
    data-ad-client="ca-pub-2020500067387547"
    data-ad-slot={dataAdSlotId}
  ></ins>
);

interface AdBannerProps extends AdBannerDataTypes, AdUnitTypes {}

const adBannerType = {
  display: ResponsiveAdBanner,
  "in-feed": ResponsiveAdBanner, //For now, in-feed and display are the same
  "in-article": InArticleAdBanner,
};

const AdBanner = ({ dataAdSlotId, type }: AdBannerProps) => {
  const AdBannerVariant = adBannerType[type];

  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return <AdBannerVariant dataAdSlotId={dataAdSlotId} />;
};

export default AdBanner;
