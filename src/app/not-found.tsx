import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center gap-6 px-4 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        404
      </p>
      <h1 className="font-rounded text-3xl font-semibold md:text-4xl">
        このページはまだ準備中です
      </h1>
      <p className="text-sm text-muted">
        公共文化圏の更新は続いています。別の記録を覗いてみてください。
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full border-2 border-ink bg-yellow px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
        >
          トップへ
        </Link>
        <Link
          href="/archive"
          className="rounded-full border-2 border-line bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
        >
          アーカイブを見る
        </Link>
      </div>
    </div>
  );
}
