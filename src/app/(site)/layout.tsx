import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/overcooked-design-system/_css/_main.css";
import {OCHeader} from "@/overcooked-design-system/ui-components";
import {OCFooter} from "@/overcooked-design-system/ui-components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Puente's Cookbook",
  description: "A cooking site for Dominican, Haitian, and Caribbean recipes",
  openGraph: {
    images: "/fallback/fallback1.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OCHeader />
        {children}
        <OCFooter />
      </body>
    </html>
  );
}

// import Script from "next/script";
// Loading ads with Script component (https://solutions-script-component-ad.vercel.app/)
/* <Script
    strategy="lazyOnload"
    id="script-component-ad"
    src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
  />
  <Script id="define-slot" strategy="lazyOnload">{`
      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag
            .defineSlot(
                '/6355419/Travel/Europe/France/Paris', [300, 250], 'my-banner')
            .addService(googletag.pubads());
        googletag.enableServices();
      });
  `}</Script> */
