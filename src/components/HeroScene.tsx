"use client";

import MiffyScene from "@/components/MiffyScene";
import TypingHeadline from "@/components/TypingHeadline";

export default function HeroScene() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <div className="relative">
      <TypingHeadline text="HELLO MIFFY WORLD" />
      <MiffyScene modelPath={`${basePath}/models/miffy.glb`} />
    </div>
  );
}
