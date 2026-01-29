import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-14">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Projects
        </p>
        <h1 className="font-rounded text-3xl font-semibold md:text-4xl">
          公共空間・教育・放送の取り組み
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          博物館・公共放送・子ども図書館が融合したプロジェクトを集約しています。
        </p>
      </header>

      <ProjectsSection />
    </div>
  );
}
