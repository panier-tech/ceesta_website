import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. GitHubの配信用URL（独自ドメイン）
  site: 'https://ceesta.net',

  // 3. ViteとTailwindの設定
  vite: {
    plugins: [tailwindcss()]
  }
});
