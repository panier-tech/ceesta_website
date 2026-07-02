import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // 環境によってインポート文が異なる場合がありますが、既存のものに合わせてください

// https://astro.build/config
export default defineConfig({
  // 1. GitHubの配信用URL（独自ドメインの場合）
  site: 'https://ceesta.net',

  // 2. リポジトリ名（リポジトリ名が ceesta_website の場合）
  base: '/ceesta_website/',

  // 3. 元からあったViteとTailwindの設定（カンマで区切って並べます）
  vite: {
    plugins: [tailwindcss()]
  }
});