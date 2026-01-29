import { culturePolicy, ethicsGuidelines } from "@/data/ethics";

export default function EthicsSection() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Ethics
        </p>
        <h2 className="font-rounded text-2xl font-semibold md:text-3xl">
          倫理ガイドラインと文化共有ポリシー
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {ethicsGuidelines.map((guideline) => (
          <div key={guideline.title} className="soft-card p-5">
            <h3 className="text-lg font-semibold">{guideline.title}</h3>
            <p className="mt-2 text-sm text-muted">{guideline.detail}</p>
          </div>
        ))}
      </div>
      <div className="soft-card p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Culture Sharing Policy
        </p>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {culturePolicy.map((policy) => (
            <li key={policy} className="flex gap-2">
              <span aria-hidden>•</span>
              <span>{policy}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
