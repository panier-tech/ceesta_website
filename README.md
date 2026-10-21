# ceesta.net

Astro で生成する ceesta の個人サイトです。記事は Markdown で管理し、GitHub Pages での公開を想定しています。

## 必要な環境

- Node.js 22.22 以降
- npm

## セットアップと確認

```sh
npm ci
npm run dev
```

`http://localhost:4321/` を開きます。`npm run check` は Astro の型生成と Content Collections の同期・検証を行います。本番ビルドは次のコマンドで行います。

```sh
npm run check
npm run build
npm run preview
```

## 記事の追加

`src/content/articles/` に `<slug>.md` を作ります。ファイル名が `/articles/<slug>/` の URL になります。

```yaml
---
title: "記事タイトル"
description: "一覧に表示する短い紹介文。"
pubDate: 2026-10-20
updatedDate: 2026-10-20 # 任意
order: 30
tags:
  - Linux
series: "シリーズ名" # 任意
seriesOrder: 1 # series がある場合のみ
draft: false
---

## はじめに

本文を書きます。見出しは H2 から始めてください。
```

必須項目は `title`、`description`、`pubDate`、`order` です。`tags` は省略でき、既定値は空配列です。`order` の小さい記事が先に表示されます。同じ値の場合は公開日の新しい順、slug の昇順で並びます。下書きは `draft: true` にすると一覧と本番生成から除外されます。

記事画像は `public/images/articles/<slug>/` に置き、本文では `/images/articles/<slug>/<ファイル名>` と参照します。意味のある代替テキストを付けてください。

## GitHub Pages

`.github/workflows/deploy.yml` は `main` への push でビルドと Pages デプロイを行います。GitHub リポジトリの Settings → Pages で Build and deployment の Source を GitHub Actions にしてください。Actions 実行に Pages write と `id-token` 発行が許可されていることも確認します。

サイトは `https://ceesta.net` を設定済みです。独自ドメインを使う場合は GitHub Pages の Custom domain に `ceesta.net` を設定し、DNS を GitHub Pages に向けてください。プロジェクトサイトのサブパスで公開する場合は `astro.config.mjs` の `base` をリポジトリ名に合わせて設定してください。

## 公開前に確認すること

- About ページの仮文面を本人の紹介に差し替える
- サンプル記事 2 件を実際の記事に差し替えるか削除する
- 公開リポジトリ、GitHub Pages、独自ドメイン、DNS の設定を確認する
