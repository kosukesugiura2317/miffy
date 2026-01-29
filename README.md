# Miffy World (Speculative Archive)

2087年、ミッフィーの著作権終了をきっかけに誕生した公共文化圏「Miffy World」を描く
スペキュラティブデザインのWebサイトです。企業広告ではなく、未来の公共アーカイブ兼カルチャーポータルを想定しています。

## 起動方法

```bash
npm i
npm run dev
```

`http://localhost:3000` を開いてください。

## ルーティング

- `/` トップ
- `/about` About
- `/history` History
- `/world-map` World Map
- `/projects` Projects
- `/create` Create
- `/archive` Archive
- `/research` Research
- `/ethics` Ethics
- `/join` Join

## 主な構成

- `src/app` ルーティングとページ
- `src/components` UIコンポーネント
- `src/data` 年表・都市・倫理などのデータ
- `public` 画像やアイコン（必要に応じて差し替え）

## カスタム方法

- データを差し替える  
  `src/data` 以下の配列を編集してください。
- 配色・タイポを変更する  
  `src/app/globals.css` のCSS変数と `src/app/layout.tsx` のフォント設定を調整。
- 3D演出を拡張する  
  `src/components/HeroScene.tsx` / `src/components/WorldMapGlobe.tsx` を編集。
