import ColumnSection from "@/components/ColumnSection";

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-14">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Research
        </p>
        <h1 className="font-rounded text-3xl font-semibold md:text-4xl">
          研究者向けアーカイブ
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          公共キャラクターに関する社会実装と文化共有の研究記録を収集しています。
        </p>
      </header>

      <ColumnSection />

      <section className="soft-card p-6">
        <h2 className="font-rounded text-2xl font-semibold">研究テーマ</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>・公共空間におけるキャラクターの役割</li>
          <li>・子ども向け表現と社会的合意形成</li>
          <li>・文化共有による地域間格差の調整</li>
        </ul>
      </section>
    </div>
  );
}
