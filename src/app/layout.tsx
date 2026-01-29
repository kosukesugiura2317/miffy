import type { Metadata } from "next";
import { Kiwi_Maru, M_PLUS_Rounded_1c, Press_Start_2P } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const bodyFont = Kiwi_Maru({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const roundedFont = M_PLUS_Rounded_1c({
  variable: "--font-rounded",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const techFont = Press_Start_2P({
  variable: "--font-tech",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Miffy World | 公共アーカイブ & カルチャーポータル",
  description:
    "2087年、共有財産となったミッフィーを起点に生まれた世界規模の公共文化圏。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${bodyFont.variable} ${roundedFont.variable} ${techFont.variable} antialiased`}
      >
        <a className="skip-link" href="#main">
          本文へスキップ
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
