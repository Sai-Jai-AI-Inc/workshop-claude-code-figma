import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import Script from "next/script";
import copyTexts from "../../copy-texts.json";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const GA_ID = "G-YRK57PKPF3";

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = copyTexts.site

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sarabun.variable} antialiased`}>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script strategy="afterInteractive" src="/ga-init.js" />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
