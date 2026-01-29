export default function JoinPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 pb-20 pt-14">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Join
        </p>
        <h1 className="font-rounded text-3xl font-semibold md:text-4xl">
          参加登録
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          世界中の自治体・教育機関・アーティスト・市民が参加できます。公共文化圏への
          参加は、共有と対話の約束から始まります。
        </p>
      </header>

      <section className="soft-card space-y-4 p-6">
        <h2 className="font-rounded text-2xl font-semibold">参加の流れ</h2>
        <ol className="space-y-2 text-sm text-muted">
          <li>1. 参加目的と活動内容を登録</li>
          <li>2. 倫理ガイドラインへの同意</li>
          <li>3. 公共アーカイブへの初回報告</li>
        </ol>
      </section>

      <section className="soft-card space-y-3 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Contact
        </p>
        <p className="text-sm text-muted">participation@miffyworld.public</p>
      </section>
    </div>
  );
}
