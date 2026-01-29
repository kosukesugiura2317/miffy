export default function ModePanel() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <div className="soft-card border-4 border-blue p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          こどもモード
        </p>
        <h3 className="mt-2 font-rounded text-xl font-semibold">
          まるい線とやさしい言葉
        </h3>
        <p className="mt-2 text-sm text-muted">
          絵本のような導線で、ミッフィーが案内役になります。音量や色は穏やかに調整されます。
        </p>
      </div>
      <div className="soft-card border-4 border-yellow p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          研究者モード
        </p>
        <h3 className="mt-2 font-rounded text-xl font-semibold">
          公共文化の実装記録へ
        </h3>
        <p className="mt-2 text-sm text-muted">
          法制度・倫理・都市実装の記録が優先表示されます。引用・再利用の履歴も閲覧可能です。
        </p>
      </div>
    </section>
  );
}
