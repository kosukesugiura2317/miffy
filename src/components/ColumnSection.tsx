import { columns } from "@/data/columns";

export default function ColumnSection() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Column
        </p>
        <h2 className="font-rounded text-2xl font-semibold md:text-3xl">
          公共キャラクターとは何か？
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {columns.map((column) => (
          <article key={column.title} className="soft-card p-5">
            <h3 className="text-lg font-semibold">{column.title}</h3>
            <p className="mt-2 text-sm text-muted">{column.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
