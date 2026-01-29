import HeroScene from "@/components/HeroScene";
import StartGate from "@/components/StartGate";
import TypingOverlay from "@/components/TypingOverlay";
import WorldSpacesSection from "@/components/WorldSpacesSection";
import WorldMapGlobe from "@/components/WorldMapGlobe";
import ProjectsSection from "@/components/ProjectsSection";
import OpenPlatformSection from "@/components/OpenPlatformSection";
import ColumnSection from "@/components/ColumnSection";
import EthicsSection from "@/components/EthicsSection";
import EraSlider from "@/components/EraSlider";
import ModePanel from "@/components/ModePanel";

export default function Home() {
  return (
    <div className="min-h-[100svh]">
      <StartGate>
        <HeroScene />
        <div className="relative">
          <div className="noise-layer" aria-hidden />
        <TypingOverlay
          line1="miffyって可愛いよね、2087年に著作権切れるんだってー"
          line2="だったらmiffy world作れるじゃん〜"
        />
      </div>
      </StartGate>

      <section className="mx-auto max-w-4xl px-4 pb-20 text-center">
        <p className="text-sm text-muted">
          ここから下は、ゆるくて楽しいMiffy Worldの説明ゾーンです。
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <WorldMapGlobe />
          <EraSlider />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <WorldSpacesSection />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <WorldMapGlobe />
          <div className="space-y-4">
            <div className="soft-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                3D World
              </p>
              <h2 className="mt-2 font-rounded text-2xl font-semibold">
                3Dで回転する世界地図と参加都市
              </h2>
              <p className="mt-2 text-sm text-muted">
                マウス操作でミッフィーが反応し、都市ごとの公共空間へ案内します。
                スクロールに合わせて街のレイヤーが広がります。
              </p>
            </div>
            <ModePanel />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <ProjectsSection />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <OpenPlatformSection />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <ColumnSection />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <EthicsSection />
      </section>
    </div>
  );
}
