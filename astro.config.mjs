import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dollarsanddeductions.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // /go/ links are partner redirects — never indexed
      filter: (page) => !page.includes('/go/'),
      changefreq: 'weekly',
      lastmod: new Date('2026-10-03'),
    }),
  ],
});
