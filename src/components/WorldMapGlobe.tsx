"use client";

import { useMemo } from "react";
import { participatingCities } from "@/data/world";

const WIDTH = 420;
const HEIGHT = 420;

function project(lat: number, lon: number) {
  const x = ((lon + 180) / 360) * WIDTH;
  const y = ((90 - lat) / 180) * HEIGHT;
  return { x, y };
}

export default function WorldMapGlobe() {
  const points = useMemo(
    () => participatingCities.map((city) => ({ ...city, ...project(city.latitude, city.longitude) })),
    []
  );

  return (
    <div className="soft-card relative flex flex-col items-center gap-4 overflow-hidden p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        World Map
      </p>
      <div className="relative h-[360px] w-[360px]">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="h-full w-full animate-spin-slow"
          role="img"
          aria-label="回転する世界地図"
        >
          <defs>
            <linearGradient id="globe" x1="0" x2="1">
              <stop offset="0%" stopColor="#bfe7ff" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#cfead2" />
            </linearGradient>
          </defs>
          <circle cx="210" cy="210" r="180" fill="url(#globe)" stroke="#1b1b1b" strokeWidth="4" />
          <path
            d="M60 210C120 140 210 120 300 140C360 160 380 220 360 280C320 320 240 320 170 300C120 280 80 240 60 210Z"
            fill="#fff2a6"
            stroke="#1b1b1b"
            strokeWidth="3"
          />
          {points.map((point) => (
            <circle key={point.name} cx={point.x} cy={point.y} r="6" fill="#ffb86b" stroke="#1b1b1b" strokeWidth="2" />
          ))}
        </svg>
      </div>
      <div className="flex flex-wrap justify-center gap-2 text-xs">
        {participatingCities.map((city) => (
          <span
            key={city.name}
            className="rounded-full border-2 border-line bg-white px-3 py-1"
          >
            {city.name}
          </span>
        ))}
      </div>
    </div>
  );
}
