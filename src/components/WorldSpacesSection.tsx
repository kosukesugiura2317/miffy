import { worldSpaces } from "@/data/world";

export default function WorldSpacesSection() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Public Spaces
        </p>
        <h2 className="font-rounded text-2xl font-semibold md:text-3xl">
          世界各都市に生まれたミッフィー公共空間
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {worldSpaces.map((space) => (
          <div key={space.name} className="soft-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {space.city}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{space.name}</h3>
            <p className="mt-2 text-sm text-muted">{space.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
