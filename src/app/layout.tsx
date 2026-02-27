import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SecureShield — 守護你的數位世界",
  description:
    "以 AI 驅動的新世代資安防護，為您的企業提供全方位的威脅偵測、端點保護與合規管理。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
