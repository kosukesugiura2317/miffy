import { archiveRecords } from "@/data/archive";

export default function ArchivePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-14">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Archive
        </p>
        <h1 className="font-rounded text-3xl font-semibold md:text-4xl">
          公共アーカイブ
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          公共文化圏の記録や議論、技術資料を保存しています。研究者向けの閲覧履歴も含まれます。
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {archiveRecords.map((record) => (
          <div key={record.title} className="soft-card p-5">
            <h2 className="text-lg font-semibold">{record.title}</h2>
            <p className="mt-2 text-xs text-muted">{record.meta}</p>
            <button
              type="button"
              className="mt-4 rounded-full border-2 border-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              View PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
