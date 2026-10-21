## Development

- `../ceesta-net-implementation-design.md` とサイト全体仕様書を優先する。
- 既存構成を確認してから編集し、不要な依存や機能を追加しない。
- 色や余白は `src/styles/tokens.css` の CSS 変数で管理する。
- 記事本文は `src/content/articles/` の Markdown に置き、レイアウトへ埋め込まない。
- 変更後は `npm run check` と `npm run build` を実行する。実行できない場合は理由を報告する。
- 大きな仕様変更や保留事項の確定を独断で行わない。

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
