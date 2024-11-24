import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    remarkPlugins: [],
  },
  vite: {
    ssr: {
      external: ['@astrojs/markdown-remark']
    }
  }
});
