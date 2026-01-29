"use client";

import { useEffect, useState } from "react";
import { useStart } from "@/components/StartGate";

type TypingHeadlineProps = {
  text?: string;
};

export default function TypingHeadline({
  text = "HELLO MIFFY WORLD",
}: TypingHeadlineProps) {
  const [visible, setVisible] = useState("");
  const { started } = useStart();

  useEffect(() => {
    if (!started) return;
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisible(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, 120);
    return () => window.clearInterval(interval);
  }, [text, started]);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-10 z-10 flex justify-center px-4 text-center">
      <h1 className="font-tech text-4xl uppercase tracking-[0.2em] md:text-6xl">
        {visible}
        <span className="animate-pulse">▍</span>
      </h1>
    </div>
  );
}
