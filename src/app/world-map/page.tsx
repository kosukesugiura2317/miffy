import WorldMapGlobe from "@/components/WorldMapGlobe";
import WorldSpacesSection from "@/components/WorldSpacesSection";
import EraSlider from "@/components/EraSlider";

export default function WorldMapPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-20 pt-14">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          World Map
        </p>
        <h1 className="font-rounded text-3xl font-semibold md:text-4xl">
          参加都市と公共空間
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          3Dで回転する世界地図と、各都市の公共空間を紹介します。スクロールに合わせて街の層が開いていく設計です。
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <WorldMapGlobe />
        <EraSlider />
      </div>

      <WorldSpacesSection />
    </div>
  );
}
