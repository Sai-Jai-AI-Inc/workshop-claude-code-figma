"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
    else if (consent === "accepted" && typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "granted" });
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "granted" });
    }
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-gray-900 border-t border-gray-700 p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center sm:text-left">
          เว็บไซต์นี้ใช้คุกกี้เพื่อวิเคราะห์การใช้งานผ่าน Google Analytics{" "}
          <Link href="/privacy-policy" className="underline hover:text-white transition-colors">
            นโยบายความเป็นส่วนตัว
          </Link>{" "}และ{" "}
          <Link href="/terms" className="underline hover:text-white transition-colors">
            เงื่อนไขการใช้งาน
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm px-4 py-2 rounded-full border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            ปฏิเสธ
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors font-medium cursor-pointer"
          >
            ยอมรับทั้งหมด
          </button>
        </div>
      </div>
    </div>
  );
}
