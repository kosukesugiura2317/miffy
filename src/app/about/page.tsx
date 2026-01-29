import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-14">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          About
        </p>
        <h1 className="font-rounded text-3xl font-semibold md:text-4xl">
          公共文化圏としてのMiffy World
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          2087年、ミッフィーの著作権が終了したことをきっかけに、世界中の人々が参加できる
          公共文化圏「Miffy World」が誕生しました。ここは企業広告ではなく、未来の公共アーカイブ兼カルチャーポータルです。
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "共有財産としての物語",
            body: "キャラクターは誰のものか、という問いを問い続けながら共有されます。",
          },
          {
            title: "子どもと大人の共存空間",
            body: "子どもの遊びと大人の研究が同じ空間で行われる設計。",
          },
          {
            title: "公共放送・図書館・博物館",
            body: "公共サービスが交差する場所としてのポータル。",
          },
        ].map((card) => (
          <div key={card.title} className="soft-card p-5">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-muted">{card.body}</p>
          </div>
        ))}
      </section>

      <section className="soft-card p-6">
        <h2 className="font-rounded text-2xl font-semibold">未来の公共アーカイブ</h2>
        <p className="mt-3 text-sm text-muted">
          Miffy Worldでは、制作物だけでなく制作過程や学びの記録も保存されます。
          文化はどこまで共有されるべきか、子ども向け表現は未来社会でどんな役割を持つのか。
          その問いを静かに引き受ける場所です。
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          <span className="rounded-full border-2 border-line bg-blue px-3 py-1">
            Archive-first
          </span>
          <span className="rounded-full border-2 border-line bg-yellow px-3 py-1">
            Child-friendly
          </span>
          <span className="rounded-full border-2 border-line bg-green px-3 py-1">
            Open Culture
          </span>
        </div>
      </section>

      <Link
        href="/history"
        className="inline-flex rounded-full border-2 border-ink bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
      >
        2087年までの年表を見る
      </Link>
    </div>
  );
}
