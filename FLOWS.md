# Main flows

The previous preview was opened before this edit. It had browser language
selection, an EN/SV switch, hash navigation, a project filter, profile links,
and one long page. The user explicitly replaces hash navigation and the filter.

## Home and navigation
- Open /en/: orange two-line hero only; no content sections or footer below it.
- Click CV, Projects, Contact: load just that page and mark it current.
- Click Håkan Arnoldson on every page: return to Home.
- Browser Back returns to the previous page.

## Languages
- Switch EN/SV on each page: preserve the page and translate its contents.
- Each route declares its language, canonical URL and equivalent hreflang URLs.
- Root detects supported browser language. No storage in the hosted preview.

## CV
- Neutral background, no dates. Experience: four primary roles (title, organisation,
  one-paragraph note) followed by a compact "Also" list of four further roles.
  Education: three studies side by side, then two further courses. Languages line.
- Selected from LinkedIn; omits Azure Data Factory, the nursing role, years,
  sidebars and skills grids.
- Full LinkedIn profile remains accessible.

## Projects
- Five text entries, each with a summary, live link and source link.
- No screenshots, hover previews, repo-only entries or placeholders.
- MoneyWorks and Vocabulary.Trainer are included on the user's assumption.
- Vocabulary.Trainer links to hkarn/vocabulary-training. The original tester
  remains a separate project with its own original source and live URLs.
- Rekå Resor is omitted: the owner no longer controls its domain.

## Existing GitHub Pages sites
- This preview does not deploy to GitHub.
- A future main-site deployment must leave other repository Pages deployments
  and their URL prefixes intact. No broad redirects or domain changes.
- Before and after deployment, check /currency-exchange-rates-front/,
  /vocabulary-tester-site/ and /social-app-yhjust16/ and retain a rollback.

## Contact
- LinkedIn and GitHub are real links, with accessible brand icons.
- No invented email address, contact form or Facebook.

## Responsive and keyboard checks
- All routes at 1440, 768 and 390px; no horizontal overflow.
- Navigation visible and usable on phone; no hamburger needed.
- Keyboard focus visible; native links work without JavaScript.
- No footer, harbour imagery, selected-work gallery or building-now section.
- Check the updated hosted preview in a fresh browser context.
