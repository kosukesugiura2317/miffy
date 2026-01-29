"use client";

import { useState } from "react";

const ERA_LABELS = [
  { value: 2087, label: "2087" },
  { value: 2090, label: "2090" },
  { value: 2094, label: "2094" },
  { value: 2098, label: "2098" },
];

export default function EraSlider() {
  const [era, setEra] = useState(2087);

  const background = {
    2087: "linear-gradient(135deg,#ffffff 0%,#e7f6ff 60%)",
    2090: "linear-gradient(135deg,#fff2a6 0%,#ffffff 60%)",
    2094: "linear-gradient(135deg,#ffd1ad 0%,#ffffff 60%)",
    2098: "linear-gradient(135deg,#cfead2 0%,#ffffff 60%)",
  } as const;

  return (
    <div className="soft-card space-y-4 p-5" style={{ background: background[era as keyof typeof background] }}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          時代スライダー
        </p>
        <span className="rounded-full border-2 border-line bg-white px-3 py-1 text-xs font-semibold">
          {era}s
        </span>
      </div>
      <input
        type="range"
        min={2087}
        max={2098}
        step={1}
        value={era}
        onChange={(event) => setEra(Number(event.target.value))}
        className="w-full"
        aria-label="年代を切り替えるスライダー"
      />
      <div className="flex flex-wrap gap-2 text-xs text-muted">
        {ERA_LABELS.map((item) => (
          <span key={item.value} className={era >= item.value ? "text-ink" : ""}>
            {item.label}
          </span>
        ))}
      </div>
      <p className="text-sm text-muted">
        時代が進むほど、街の配色が明るく共有文化の層が広がります。
      </p>
    </div>
  );
}
