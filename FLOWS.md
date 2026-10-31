# Main flows

Checks to run in a browser after changes to layout, navigation or content.

## Home and navigation
- Open /en/: orange two-line hero only, with no content sections or footer below it.
- Click CV, Projects, Contact: load just that page and mark it current.
- Click Håkan Arnoldson on every page: return to Home.
- Browser Back returns to the previous page.

## Languages
- Switch EN/SV on each page: stay on the same page, translated.
- Each route declares its language, canonical URL and equivalent hreflang URLs.
- Open / in a fresh browser: it picks the saved language, then the browser's language, then English.

## CV
- Neutral background, no dates.
- Experience: four primary roles (title, organisation, one-paragraph note), then a
  compact "Also" list of further roles.
- Education: three studies side by side, then further courses. Languages line.
- The full LinkedIn profile is linked.

## Projects
- One text entry per project, each with a summary, live link and source link.
- Every live and source link opens.

## Contact
- LinkedIn and GitHub links work and have accessible brand icons.

## Other GitHub Pages sites
- Deploying this site must leave other repositories' Pages sites and their URL
  prefixes intact.
- After a deploy, check /currency-exchange-rates-front/, /vocabulary-tester-site/,
  /social-app-yhjust16/ and /requesty-tester/.

## Responsive and keyboard
- All routes at 1440, 768 and 390px, with no horizontal overflow.
- Navigation is visible and usable on a phone, without a hamburger menu.
- Keyboard focus is visible, and native links work without JavaScript.
