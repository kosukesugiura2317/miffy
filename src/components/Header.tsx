"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-line bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-rounded text-lg font-semibold"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-white">
            MW
          </span>
          Miffy World
        </Link>
      </div>
    </header>
  );
}
