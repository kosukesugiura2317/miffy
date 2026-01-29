import EthicsSection from "@/components/EthicsSection";

export default function EthicsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-14">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Ethics
        </p>
        <h1 className="font-rounded text-3xl font-semibold md:text-4xl">
          倫理と文化共有の指針
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Miffy Worldは、公共キャラクターの共有と責任の両立を目指しています。
        </p>
      </header>

      <EthicsSection />
    </div>
  );
}
