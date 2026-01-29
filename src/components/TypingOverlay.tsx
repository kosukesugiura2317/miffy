"use client";

import { useEffect, useRef, useState } from "react";
import { useStart } from "@/components/StartGate";

type TypingOverlayProps = {
  line1: string;
  line2: string;
};

export default function TypingOverlay({ line1, line2 }: TypingOverlayProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [typed1, setTyped1] = useState("");
  const [typed2, setTyped2] = useState("");
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const { started } = useStart();

  useEffect(() => {
    if (!started || !inView) return;
    let index1 = 0;
    let index2 = 0;
    const interval = window.setInterval(() => {
      if (index1 < line1.length) {
        index1 += 1;
        setTyped1(line1.slice(0, index1));
        return;
      }
      if (index2 < line2.length) {
        index2 += 1;
        setTyped2(line2.slice(0, index2));
        return;
      }
      window.clearInterval(interval);
    }, 80);
    return () => window.clearInterval(interval);
  }, [line1, line2, inView, started]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const total = rect.height - viewH;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const next = total > 0 ? scrolled / total : 0;
      setProgress(next);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const opacity = Math.max(0, 1 - progress * 1.1);
  const translate = progress * -40;

  return (
    <section ref={sectionRef} className="relative h-[200svh]">
      <div className="sticky top-0 flex min-h-[100svh] items-center justify-center px-6">
        <div
          className="relative z-10 text-center"
          style={{ opacity, transform: `translateY(${translate}px)` }}
        >
          <h2 className="font-tech text-4xl uppercase tracking-[0.2em] md:text-6xl lg:text-7xl">
            {typed1}
            <span className="animate-pulse">▍</span>
          </h2>
          <p className="mt-6 font-rounded text-2xl md:text-3xl">
            {typed2}
          </p>
        </div>
      </div>
    </section>
  );
}
