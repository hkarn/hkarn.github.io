// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages user site: served from the domain root, plain static files only.
export default defineConfig({
  site: 'https://hkarn.github.io',
  output: 'static',
  integrations: [
    sitemap({
      // The root only redirects to a language, so it is left out.
      filter: (page) => page !== 'https://hkarn.github.io/',
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
