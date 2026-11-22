// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages user site at arnoldson.dev (custom domain): served from the root, plain static files only.
export default defineConfig({
  site: 'https://arnoldson.dev',
  output: 'static',
  integrations: [
    sitemap({
      // The root only redirects to a language, so it is left out.
      filter: (page) => page !== 'https://arnoldson.dev/',
      i18n: { defaultLocale: 'en', locales: { en: 'en', sv: 'sv' } },
    }),
  ],
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'sv'],
    defaultLocale: 'en',
    routing: {
      // Every language lives under its own prefix: /en/ and /sv/.
      // The root page (src/pages/index.astro) picks one for the visitor.
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
