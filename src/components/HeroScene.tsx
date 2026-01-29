"use client";

import MiffyScene from "@/components/MiffyScene";
import TypingHeadline from "@/components/TypingHeadline";

export default function HeroScene() {
  return (
    <div className="relative">
      <TypingHeadline text="HELLO MIFFY WORLD" />
      <MiffyScene modelPath="/models/miffy.glb" />
    </div>
  );
}
