import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import copyTexts from "../../copy-texts.json"
import "./globals.css";

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = copyTexts

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sarabun.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
