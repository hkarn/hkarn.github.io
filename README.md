# hkarn.github.io

Personal site for Håkan Kindström Arnoldson, in English and Swedish. It is built with [Astro](https://astro.build) as plain static files for GitHub Pages.

## Languages

- The i18n setup lives in `astro.config.mjs` (`locales: ['en','sv']`, `prefixDefaultLocale: true`). Each language gets its own URL: `/en/` and `/sv/`.
- `src/i18n/ui.ts` holds the typed interface strings. The Swedish dictionary must have every English key, or the build fails.
- Content that varies by language (projects, CV) is stored as `{ en, sv }` values in `src/data/`.
- Every page has `<html lang>`, a canonical URL, `hreflang` alternates for en, sv and x-default, and `og:locale`.
- The language switch links to the same page in the other language and saves the choice in `localStorage`.
- `/` is a small static picker page. It redirects in the browser to the saved choice; if there is none, it uses the browser's languages (Norwegian and Danish go to Swedish). Otherwise it falls back to English. Without JS it shows plain links.
- `404.html` shows the message in the language matching the URL prefix.

## Develop (Docker, no local Node)

```sh
docker compose up                          # http://localhost:4321
docker compose run --rm site npm run build # type-check + build to dist/
```

Without Docker, use Node 24 (Astro needs 22.23 or newer) and run `npm ci && npm run dev`.

## Edit content

- Projects: `src/data/projects.ts`, with names, summaries and live/source URLs. The two new products are included on the owner's assumption; the legacy destinations were checked in Comet.
- CV: `src/data/cv.ts`, a selective, undated profile summarised from LinkedIn: `experience` and `education` are the eye-catching entries, `moreExperience` and `moreEducation` the compact "Also" lists, plus `languages`.
- Profile links and the "Say hej" target: `src/data/links.ts`.
- Styles: `src/styles/site.css`.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to Pages on every push to `source`, or through a manual workflow dispatch. The repository's Pages publishing source must be "GitHub Actions". The `master` branch is not used by this workflow.

The root Astro application is the maintained site. The existing `react/` and
`api/` directories are retained as legacy source, but are not built or deployed.
Only the generated `dist/` directory is uploaded as the Pages artifact.

This deployment does not change the demo repositories or their Pages settings.
Do not add catch-all redirects, custom-domain changes or generated directories
that shadow `/currency-exchange-rates-front/`, `/vocabulary-tester-site/` or
`/social-app-yhjust16/`.

The maintained branch is `source`. Repository history starts from the current
snapshot; the obsolete `master` branch is not retained. Future changes should
use ordinary commits, not repeat the history reset.

## Pages and preview

Home, CV, Projects and Contact are independent static routes in each language.
The navigation works without client-side JavaScript. There is no footer, gallery
or project preview. See `FLOWS.md` for the expected user journeys.

The restricted private preview uses `PUBLIC_PREVIEW=1 npm run build` and
`node scripts/prepare-preview.mjs`. This copies build output into the existing
preview folder, makes URLs portable under its host prefix, and excludes storage
APIs. The ordinary production build keeps root-relative GitHub Pages URLs.

Vocabulary.Trainer links to https://github.com/hkarn/vocabulary-training.
The original tester is listed separately. Rekå Resor is intentionally omitted
because the owner no longer controls the domain.

Changes here do not authorize a GitHub deployment. Existing project Pages sites
must retain their deployments and URL prefixes; see the checks in `FLOWS.md`.
