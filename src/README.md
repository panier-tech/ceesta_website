# 記事の追加

記事ごとに slug と同じ名前のディレクトリを作り、その中に `index.md` と記事専用の画像を置きます。

```text
content/articles/
└── my-article/
    ├── index.md
    └── diagram.png
```

本文からは `![図の説明](./diagram.png)` のように同じディレクトリ内の画像を相対パスで参照します。記事 URL は `/articles/my-article/` です。Frontmatter の項目は既存記事を参考にしてください。
