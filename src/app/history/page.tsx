import TimelineSection from "@/components/TimelineSection";

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-14">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          History
        </p>
        <h1 className="font-rounded text-3xl font-semibold md:text-4xl">
          2087年までの年表
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          著作権終了後に起きた文化爆発は、公共空間・教育・放送・研究のあらゆる領域に波及しました。
          年表では、その転換点を整理しています。
        </p>
      </header>

      <TimelineSection />
    </div>
  );
}
