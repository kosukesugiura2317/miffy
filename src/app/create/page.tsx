import OpenPlatformSection from "@/components/OpenPlatformSection";

export default function CreatePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-14">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Create
        </p>
        <h1 className="font-rounded text-3xl font-semibold md:text-4xl">
          オープンプラットフォーム
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          世界中の人々が二次創作を投稿できる公共プラットフォーム。子どもと研究者が一緒にレビューを行います。
        </p>
      </header>

      <OpenPlatformSection />

      <section className="soft-card p-6">
        <h2 className="font-rounded text-2xl font-semibold">投稿の流れ</h2>
        <ol className="mt-3 space-y-2 text-sm text-muted">
          <li>1. 作品の背景と目的を登録</li>
          <li>2. 子ども・研究者の対話レビュー</li>
          <li>3. 公共アーカイブへ保存</li>
        </ol>
      </section>
    </div>
  );
}
