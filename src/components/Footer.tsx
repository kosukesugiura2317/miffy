import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.1fr_1.5fr]">
        <div className="space-y-4">
          <p className="font-rounded text-xl font-semibold">Miffy World</p>
          <p className="text-sm text-muted">
            2087年に公共文化圏として誕生した、共有のキャラクターアーカイブ兼カルチャーポータル。
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border-2 border-line bg-yellow px-3 py-1">
              Public Culture
            </span>
            <span className="rounded-full border-2 border-line bg-blue px-3 py-1">
              Archive
            </span>
            <span className="rounded-full border-2 border-line bg-green px-3 py-1">
              Open Creation
            </span>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Explore
            </p>
            <Link className="block hover:text-muted" href="/about">
              About
            </Link>
            <Link className="block hover:text-muted" href="/history">
              History
            </Link>
            <Link className="block hover:text-muted" href="/world-map">
              World Map
            </Link>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Participate
            </p>
            <Link className="block hover:text-muted" href="/projects">
              Projects
            </Link>
            <Link className="block hover:text-muted" href="/create">
              Create
            </Link>
            <Link className="block hover:text-muted" href="/join">
              Join
            </Link>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Research
            </p>
            <Link className="block hover:text-muted" href="/archive">
              Archive
            </Link>
            <Link className="block hover:text-muted" href="/research">
              Research
            </Link>
            <Link className="block hover:text-muted" href="/ethics">
              Ethics
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-line px-4 py-6 text-center text-xs text-muted">
        © 2087 Miffy World Public Archive. Crafted for shared culture.
      </div>
    </footer>
  );
}
