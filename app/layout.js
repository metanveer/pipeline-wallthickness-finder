import "./globals.css";

export const metadata = {
  title: "Pipeline OD and Wall Thickness Finder",
  description:
    "Find pipeline outer diameter and wall thickness in mm based on the nominal pipe size input according to ASME B36.10 / B36.19",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
