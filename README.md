# ポートフォリオサイト

フリーランスエンジニア・優斗のポートフォリオサイトです。

## デモ

[https://portfolio-five-beta-23.vercel.app/](https://portfolio-five-beta-23.vercel.app/)

## スクリーンショット

<!-- スクリーンショットを追加する場合は下記の手順で -->
<!--
1. `public/screenshots/` ディレクトリを作成する
2. 画像ファイル（例: top.png）を配置する
3. 以下のように記述する

![トップページ](public/screenshots/top.png)
-->

## 使用技術

| カテゴリ | 技術 |
|---|---|
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| デプロイ | Vercel |

## プロジェクト構成

```
src/
└── app/
│   ├── layout.tsx       # フォント・ナビゲーション・フッター
│   └── page.tsx         # 各セクションのアセンブル
└── components/
    ├── Navigation.tsx   # ヘッダー（スクロール対応・ハンバーガーメニュー）
    ├── Hero.tsx         # ファーストビュー
    ├── About.tsx        # プロフィール
    ├── Skills.tsx       # スキル一覧
    ├── Works.tsx        # 制作実績
    ├── Contact.tsx      # お問い合わせフォーム
    └── Footer.tsx       # フッター
```

## ローカル起動

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。
