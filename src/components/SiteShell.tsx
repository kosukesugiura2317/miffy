"use client";

import { usePathname } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pathname === "/";

  return (
    <>
      {hideChrome ? null : <AnnouncementBar />}
      {hideChrome ? null : <Header />}
      <main id="main" className="min-h-screen">
        {children}
      </main>
      {hideChrome ? null : <Footer />}
    </>
  );
}
