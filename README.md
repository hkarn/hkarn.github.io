# hkarn.github.io

Personal site for Håkan Kindström Arnoldson, in English and Swedish. It is built with [Astro](https://astro.build) as plain static files for GitHub Pages.

## Pages

Home, CV, Projects and Contact are independent static routes in each language. Navigation works without client-side JavaScript. See `FLOWS.md` for the expected user journeys.

## Languages

- The i18n setup lives in `astro.config.mjs` (`locales: ['en','sv']`, `prefixDefaultLocale: true`). Each language gets its own URL: `/en/` and `/sv/`.
- `src/i18n/ui.ts` holds the typed interface strings. The Swedish dictionary must have every English key, or the build fails.
- Content that varies by language (projects, CV) is stored as `{ en, sv }` values in `src/data/`.
- Every page has `<html lang>`, a canonical URL, `hreflang` alternates for en, sv and x-default, and `og:locale`.
- The language switch links to the same page in the other language and saves the choice in `localStorage`.
- `/` is a small static picker page. It redirects in the browser to the saved choice; if there is none, it uses the browser's languages (Norwegian and Danish go to Swedish). Otherwise it falls back to English. Without JS it redirects to English.
- `404.html` shows the message in the language matching the URL prefix.

## Develop (Docker, no local Node)

```sh
docker compose up                          # http://localhost:4321
docker compose run --rm site npm run build # type-check + build to dist/
```

Without Docker, use Node 24 (Astro needs 22.23 or newer) and run `npm ci && npm run dev`.

## Edit content

- Projects: `src/data/projects.ts`, with names, summaries and live/source URLs.
- CV: `src/data/cv.ts`, a selective, undated profile: `experience` and `education` are the featured entries, `moreExperience` and `moreEducation` the compact "Also" lists, plus `languages`.
- Profile links and the "Say hej" target: `src/data/links.ts`.
- Styles: `src/styles/site.css`.
- Share images and the touch icon: run `docker compose run --rm site node scripts/make-images.mjs` after changing the hero text, title or colours. It writes `public/og-en.png`, `public/og-sv.png` and `public/apple-touch-icon.png`.

## Search and sharing

Every page has a title and description per language, Open Graph and Twitter card tags with a 1200×630 share image, and hreflang alternates. The start page adds `Person` structured data (JSON-LD). `@astrojs/sitemap` writes `sitemap-index.xml` with language alternates, and `robots.txt` points to it. The root picker carries its own English share tags, since link previews don't run JavaScript.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to Pages on every push to `source`, or through a manual workflow dispatch. The repository's Pages publishing source must be "GitHub Actions". Only the generated `dist/` directory is uploaded.

Several projects have their own Pages sites under this domain, such as `/currency-exchange-rates-front/`, `/vocabulary-tester-site/`, `/social-app-yhjust16/` and `/requesty-tester/`. Don't add catch-all redirects, custom-domain changes or generated directories that would shadow those paths.

## Preview build

`PUBLIC_PREVIEW=1 npm run build` followed by `node scripts/prepare-preview.mjs` produces a build for hosting under a path prefix: URLs are made portable under that prefix and storage APIs are excluded. The ordinary production build uses root-relative URLs.
