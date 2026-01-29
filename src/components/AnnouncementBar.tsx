export default function AnnouncementBar() {
  return (
    <div className="w-full border-b-2 border-line bg-blue/60 text-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <p className="font-medium">
          2087年の著作権終了に伴い、Miffy Worldは公共文化圏として運用されています。
        </p>
        <span className="rounded-full border-2 border-line bg-white px-3 py-1 text-xs uppercase tracking-[0.2em]">
          Public Archive
        </span>
      </div>
    </div>
  );
}
