import { timeline } from "@/data/history";

export default function TimelineSection() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          History
        </p>
        <h2 className="font-rounded text-2xl font-semibold md:text-3xl">
          2087年までの年表と文化爆発
        </h2>
      </div>
      <div className="grid gap-4">
        {timeline.map((item) => (
          <div key={item.year} className="soft-card p-5">
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full border-2 border-line bg-blue px-3 py-1 text-xs font-semibold">
                {item.year}
              </span>
              <h3 className="font-medium">{item.title}</h3>
            </div>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
