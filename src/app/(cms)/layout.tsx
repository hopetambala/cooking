import "../../overcooked-design-system/_css/_main.css";
export const metadata = {
  metadataBase: new URL("https://cooking-puce.vercel.app/studio"),
  title: "Sanity CMS",
  description: "Content management system for cooking.puente-dr.org",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
