import { openPlatform } from "@/data/projects";

export default function OpenPlatformSection() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Create
        </p>
        <h2 className="font-rounded text-2xl font-semibold md:text-3xl">
          誰でも二次創作を投稿できるオープンプラットフォーム
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {openPlatform.map((item) => (
          <div key={item.title} className="soft-card p-5">
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
