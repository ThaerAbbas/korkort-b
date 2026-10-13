import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Körkort B | تيوري رخصة القيادة في السويد",
  description:
    "Bilingual Swedish-Arabic practice for the Swedish B driving theory test. Original practice questions, illustrations, explanations and mock exams.",
  applicationName: "Körkort B",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#246b4b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
