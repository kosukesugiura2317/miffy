import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Projects
          </p>
          <h2 className="font-rounded text-2xl font-semibold md:text-3xl">
            世界各地のミッフィー公共空間
          </h2>
        </div>
        <span className="rounded-full border-2 border-line bg-green px-4 py-2 text-xs font-semibold">
          Public Spaces
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="soft-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {project.theme}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-muted">{project.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
