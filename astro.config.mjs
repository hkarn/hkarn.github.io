// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages user site: served from the domain root, plain static files only.
export default defineConfig({
  site: 'https://hkarn.github.io',
  output: 'static',
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
